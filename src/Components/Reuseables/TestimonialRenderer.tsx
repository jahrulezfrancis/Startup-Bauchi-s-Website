import { Carousel } from "@mantine/carousel";
import { Avatar, Flex, Stack, Text, Title } from "@mantine/core";
import { ashBg } from "./Color";

export default function TestimonialsRenderer() {


    const TestimonialsData = [
        { id: 1, clientName: "John Doe", message: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi repudiandae dicta doloremque! Ea hic praesentium nesciunt alias delectus eligendi impedit iste fuga qui, aspernatur cum doloribus sunt ducimus suscipit." },
        { id: 2, clientName: "John Doe", message: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi repudiandae dicta doloremque! Ea hic praesentium nesciunt alias delectus eligendi impedit iste fuga qui, aspernatur cum doloribus sunt ducimus suscipit." },
        { id: 3, clientName: "John Doe", message: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi repudiandae dicta doloremque! Ea hic praesentium nesciunt alias delectus eligendi impedit iste fuga qui, aspernatur cum doloribus sunt ducimus suscipit." },
        { id: 4, clientName: "John Doe", message: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi repudiandae dicta doloremque! Ea hic praesentium nesciunt alias delectus eligendi impedit iste fuga qui, aspernatur cum doloribus sunt ducimus suscipit." }
    ]

    return (
        <Stack maw={"100vw"}>
            <Carousel includeGapInSize={false} align={"center"} slideSize={{ base: "80%", md: "70%", lg: "70%" }} height={400} slideGap={10} slidesToScroll={1.5} controlSize={27} loop>

                {TestimonialsData.map((item) => {
                    return (
                        <Carousel.Slide p={20} key={item.id} bg={ashBg}>
                            <Stack ml={item.id === 1 ? "20px" : "0px"} py={"20px"} my={{ base: "0px", md: "50px", lg: "100px" }} w={"100%"} mx={"auto"} align="center">
                                <Stack>
                                    <Text lh={2}>{item.message}</Text>
                                    <Flex gap={10}>
                                        <Avatar radius={"xl"}>{item.clientName}</Avatar>
                                        <Title>{item.clientName}</Title>
                                    </Flex>
                                </Stack>
                            </Stack>
                        </Carousel.Slide>
                    )
                })}
            </Carousel>
        </Stack>
    )
}