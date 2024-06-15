import { useDisclosure, useSetState } from '@mantine/hooks';
import { FileInput, Modal, Stack, TextInput, Textarea } from '@mantine/core';
import CustomSolidButton from '../Reuseables/SolidButton';
import { Text, Group, rem } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE, } from '@mantine/dropzone';
import { IoCreate } from "react-icons/io5";



export default function CreateNewPost() {
    const [opened, { open, close }] = useDisclosure(false);


    const [postDetails, setPostDetails] = useSetState({
        title: "",
        content: "",
        featuredImage: undefined,
        images: [],
        author: "",
        createdAt: new Date().toUTCString()
    })


    function DropzoneButton(props: Partial<DropzoneProps>) {

        return (
            <Dropzone
                onDrop={(files) => console.log('accepted files', files)}
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
                <Stack>
                    <TextInput onChange={(e) => setPostDetails((prevValue) => ({ ...prevValue, title: e.target.value }))} name='title' value={postDetails.title} label="Post Title" placeholder='Post title' />
                    <Textarea onChange={(e) => setPostDetails((prevValue) => ({ ...prevValue, content: e.target.value }))} name='content' value={postDetails.content} resize="vertical" label="Post content" placeholder='post content ' />
                    <FileInput name={"featuredImage"} value={postDetails.featuredImage} multiple={false} label="Featured Image" placeholder="Select featured image" accept={IMAGE_MIME_TYPE.toString()} />
                    <DropzoneButton />
                </Stack>

            </Modal>
            <Stack p={20}>
                <CustomSolidButton w={"max-content"} h={"40px"} fullWidth={false} leftSection={<IoCreate fontSize={20} style={{ alignSelf: "center" }} />} buttonText='Create post' onClick={open} />
            </Stack>
        </>
    );
}