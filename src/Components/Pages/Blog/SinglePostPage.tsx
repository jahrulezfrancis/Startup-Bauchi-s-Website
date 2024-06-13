import { Avatar, Flex, Image, Stack, Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";

// interface postDetailsProps {
//     author: string;
//     date: string;
//     title: string;
//     content: string;
//     featuredImage: string;
//     otherPhotos?: string[];

// }

export default function SingleBlogPostPage() {

    const [postDetails, setPostDetails] = useState({
        author: "",
        date: "",
        title: "",
        content: "",
        featuredImage: "",
        otherPhotos: [],
    })

    useEffect(() => {
        const data = {
            author: "",
            date: "",
            title: "",
            content: "",
            featuredImage: "",
            otherPhotos: [],
        }
        setPostDetails(data)
    }, [])

    return (
        <Stack>
            <Title order={2} >{postDetails.title}</Title>
            <Flex wrap={"wrap"}>
                <Flex align={"center"}>
                    <Avatar src={""} />
                    <Text>{postDetails.author}</Text>
                </Flex>
                <Text>{postDetails.date}</Text>
            </Flex>
            <Image src={postDetails.featuredImage} />
            <Text>{postDetails.content}</Text>
            {
                postDetails.otherPhotos.length >= 2 &&
                postDetails.otherPhotos.map((photo, index) => {
                    return <Image src={photo} key={index} />
                })
            }
        </Stack>
    )
}