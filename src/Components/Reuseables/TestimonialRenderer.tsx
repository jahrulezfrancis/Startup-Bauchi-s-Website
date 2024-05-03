import { Carousel } from "@mantine/carousel";
import { Avatar, Box, Center, Flex, Stack, Text, Title } from "@mantine/core";

export default function TestimonialsRenderer() {


    const TestimonialsData = [
        { id: 1, clientName: "John Doe", message: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi repudiandae dicta doloremque! Ea hic praesentium nesciunt alias delectus eligendi impedit iste fuga qui, aspernatur cum doloribus sunt ducimus suscipit." },
        { id: 2, clientName: "John Doe", message: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi repudiandae dicta doloremque! Ea hic praesentium nesciunt alias delectus eligendi impedit iste fuga qui, aspernatur cum doloribus sunt ducimus suscipit." },
        { id: 3, clientName: "John Doe", message: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi repudiandae dicta doloremque! Ea hic praesentium nesciunt alias delectus eligendi impedit iste fuga qui, aspernatur cum doloribus sunt ducimus suscipit." },
        { id: 4, clientName: "John Doe", message: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi repudiandae dicta doloremque! Ea hic praesentium nesciunt alias delectus eligendi impedit iste fuga qui, aspernatur cum doloribus sunt ducimus suscipit." }
    ]

    return (
        <Box>
                <Center>
            <Carousel align={"center"} slideSize="70%" height={400} slideGap={2} slidesToScroll={1} controlSize={27} loop>

                {TestimonialsData.map((item) => {
                    return (
                        <Carousel.Slide key={item.id} bg={"white"}>
                            <Stack mx={"auto"} w={"80%"} align="center">
                                <Stack>
                                    <Text lh={2}>{item.message}</Text>
                                    <Flex>
                                        <Avatar radius={"xl"}>{item.clientName}</Avatar>
                                        <Title>{item.clientName}</Title>
                                    </Flex>
                                </Stack>
                            </Stack>
                        </Carousel.Slide>
                    )
                })}
            </Carousel>
                </Center>
        </Box>
    )
}