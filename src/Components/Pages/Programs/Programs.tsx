import { Box, Space, Stack, Title, Text, Flex, Tooltip, Image, } from "@mantine/core";
import { eventData } from "./programs.data";
import EventCard from "./EventsCard";
import ProgramsRenderer from "../../Renderers/ProgramRenderers";
import FadeInOnScrollAnimationContainer from "../../AnimationContainers/SlideinUp";



export default function ProgramsPage() {

    const eventMediaData = [
        { id: 1, title: "Startup Bauchi Bootcamp 2023", url: "https://i.postimg.cc/8zngnnkk/DSC-0170.jpg" },
        { id: 2, title: "Startup Bauchi Bootcamp 2023", url: "https://i.postimg.cc/d3D8n15V/DSC-0168.jpg" },
        { id: 3, title: "Startup Bauchi Bootcamp 2023", url: "https://i.postimg.cc/PrYM7LtC/DSC-0171.jpg" },
        { id: 4, title: "Startup Bauchi Bootcamp 2023", url: "https://i.postimg.cc/hGkWKz7H/DSC-0174.jpg" },
        { id: 5, title: "Startup Bauchi Bootcamp 2023", url: "https://i.postimg.cc/rmD1NsnF/DSC-0175.jpg" },
        { id: 8, title: "Gitex africa ecosystem engagement", url: "https://i.postimg.cc/nLkBJ75L/IMG-20240302-WA0004.jpg" },
        { id: 9, title: "Gitex africa ecosystem engagement", url: "https://i.postimg.cc/RC8f4vPw/IMG-20240302-WA0006.jpg" },
        { id: 6, title: "NNIA Ecosystem Development", url: "https://i.postimg.cc/6TJyR5SS/IMG-20231209-WA0053.jpg" },
        { id: 7, title: "NNIA Ecosystem Development", url: "https://i.postimg.cc/nVs2vRgY/IMG-20231209-WA0054-1.jpg" },
    ]
    return (
        <Box maw={"100vw"} pt={20}>
            <FadeInOnScrollAnimationContainer children={
                <Stack style={{ animation: "" }}>
                    <Title ta={"center"}>Program highlight</Title>
                    <Text mb={50} style={{ alignSelf: "center" }} ta="center" w={{ base: "80%", md: "70%", lg: "70%" }}>Through our array of programs, we invite you to explore a landscape of opportunities designed to nurture creativity, ignite ambition, and drive sustainable growth. Whether you're an aspiring entrepreneur seeking guidance on launching your first venture, a startup poised for exponential growth, or an established organization aiming to cultivate innovation within your ranks, our programs are tailored to meet your unique needs and aspirations.</Text>
                    <Stack style={{ borderRadius: 10 }} mx={{ base: 0, md: 10, lg: 50 }} p={{ base: 10, md: 20, lg: 30 }}>
                        <Title ta="center">What we do at Startup Bauchi</Title>
                        <Text ta="center">We offer a range of programs and initiatives to support entrepreneurs and startups at various stages of development, they include:</Text>
                    </Stack>
                </Stack>
            } />
            <ProgramsRenderer showHoverContent showAll />

            <Space h={100} />

            <Stack align="center">
                <Title px={5} ta={"center"}>Photo highlights from previous events</Title>
                <Flex w={"90%"} mt={30} gap={20} align={"start"} justify={"center"} wrap={"wrap"}>
                    {
                        eventMediaData.map((item) => {
                            return (
                                <Tooltip key={item.id} label={item.title}>
                                    <Image fit="cover" miw={300} w={300} mah={200} src={item.url} />
                                </Tooltip>
                            )
                        })
                    }
                </Flex>
            </Stack>

            <Space h={100} />
            <Stack>
                <Title mx={{ base: "10px", md: "10px" }} ta={"center"}>Explore our past and upcoming events</Title>
                <FadeInOnScrollAnimationContainer children={
                    <Flex justify={"center"} gap={10} wrap={"wrap"} p={30}>
                        {eventData.map((item) => {
                            return <EventCard key={item.id} eventTitle={item.title} eventDescription={item.description} eventImage={item.image} eventDone={item.isDone} />
                        })}
                    </Flex>
                } />
            </Stack>
            <Space h={100} />
        </Box>
    )
}