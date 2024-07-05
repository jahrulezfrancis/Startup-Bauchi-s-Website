import { useDisclosure } from '@mantine/hooks';
import { FileInput, Loader, Modal, Stack, TextInput, Textarea } from '@mantine/core';
import CustomSolidButton from '../Reuseables/SolidButton';
import { Text, Group, rem } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE, } from '@mantine/dropzone';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { IoCreate } from "react-icons/io5";
import { FormEvent, useState } from 'react';
import { addDoc } from 'firebase/firestore';
import { postRef, storage } from '../Utils/firebase.config';
import { notifications } from '@mantine/notifications';



interface UploadedFile extends File {
    preview: string;
}

export default function CreateNewPost() {
    const [opened, { open, close }] = useDisclosure(false);

    const [postDetails, setPostDetails] = useState({
        title: "",
        content: "",
        featuredImage: undefined,
        author: "",
        createdAt: new Date().toUTCString()
    })

console.log(postDetails.author)

    // State to hold the uploaded files
    const [files, setFiles] = useState<UploadedFile[]>([]);
    const [uploading, setUploading] = useState(false);

    // Handle files drop
    const handleDrop = (droppedFiles: File[]) => {
        const filesWithPreview = droppedFiles.map(file => ({
            ...file,
            preview: URL.createObjectURL(file),
        })) as UploadedFile[];
        setFiles((currentFiles) => [...currentFiles, ...filesWithPreview]);
    };

    const documentData = {
        title: postDetails.title,
        content: postDetails.content,
        featuredImage: postDetails.featuredImage,
        createdAt: postDetails.createdAt,
        author: "admin",
        // images: images

    }
   

    // Function to upload files to Firebase
    const uploadFiles = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setUploading(true);
        try {
            const uploadPromises = files.map(async (file) => {
                const storageRef = ref(storage, `uploads/${file.name}`);
                const uploadTask = uploadBytesResumable(storageRef, file);

                await uploadTask;
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                return downloadURL;
            });

            const downloadURLs = await Promise.all(uploadPromises);
            console.log('Uploaded files:', downloadURLs);

            addDoc(postRef, { ...documentData, images: downloadURLs },)
                .then(() => {
                    notifications.show({ title: "Post added successfully", message: "Your post was successfully updated" })
                }).catch((err) => {
                    notifications.show({ title: "Failed to add post", message: "An error occured: " + err + " and post upload could not be completed" })
                })
            // Here you can handle the downloadURLs, e.g., save them to your database along with the post

            // Reset files after upload
            setFiles([]);
        } catch (err) {
            console.error(err);
        } finally {
            setUploading(false);
        }
    };


    function DropzoneButton(props: Partial<DropzoneProps>) {

        return (
            <Dropzone
                onDrop={handleDrop}
                onReject={(files) => console.log('rejected files', files)}
                maxSize={5 * 1024 ** 2}
                accept={IMAGE_MIME_TYPE}
                {...props}
            >
                <Group justify="center" gap="xl" mih={220} style={{ cursor: "pointer" }}>
                    <Dropzone.Accept>
                        <IconUpload
                            style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
                            stroke={1.5}
                        />
                    </Dropzone.Accept>
                    <Dropzone.Reject>
                        <IconX
                            style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
                            stroke={1.5}
                        />
                    </Dropzone.Reject>
                    <Dropzone.Idle>
                        <IconPhoto
                            style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}
                            stroke={1.5}
                        />
                    </Dropzone.Idle>

                    <Stack style={{ cursor: "pointer" }}>
                        <Text ta={'center'} size="xl" inline>
                            Drag and drop images here or click to select
                        </Text>
                        <Text ta={"center"} size="sm" c="dimmed" inline mt={7}>
                            (Attach as many files as you like, each file should not exceed 5mb)
                        </Text>
                    </Stack>
                </Group>
            </Dropzone>
        );
    }

    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                closeOnClickOutside={false}
                title="Create new post"
                overlayProps={{
                    backgroundOpacity: 0.55,
                    blur: 3,
                }}>
                <form onSubmit={uploadFiles}>
                    <Stack>
                        <TextInput onChange={(e) => setPostDetails((prevValue) => ({ ...prevValue, title: e.target.value }))} name='title' value={postDetails.title} label="Post Title" placeholder='Post title' />
                        <Textarea onChange={(e) => setPostDetails((prevValue) => ({ ...prevValue, content: e.target.value }))} name='content' value={postDetails.content} resize="vertical" label="Post content" placeholder='post content ' />
                        <FileInput name={"featuredImage"} value={postDetails.featuredImage} multiple={false} label="Featured Image" placeholder="Select featured image" accept={IMAGE_MIME_TYPE.toString()} />
                        <DropzoneButton />
                        <Group justify='space-between'>
                            <CustomSolidButton color='red' variant='outline' buttonText='Cancel' />
                            {uploading ?
                                <Loader size={"sm"} />
                                :
                                <CustomSolidButton type="submit" buttonText='Publish post' />
                            }
                        </Group>
                    </Stack>
                </form>

            </Modal >
            <Stack p={20}>

                <CustomSolidButton w={"max-content"} h={"40px"} fullWidth={false} leftSection={<IoCreate fontSize={20} style={{ alignSelf: "center" }} />} buttonText='Create post' onClick={open} />
            </Stack>
        </>
    );
}