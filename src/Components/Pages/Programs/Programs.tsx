import { Box, Space, Stack, Title, Text, Flex, } from "@mantine/core";
import { eventData } from "./programs.data";
import EventCard from "./EventsCard";
import ProgramsRenderer from "../../Renderers/ProgramRenderers";
import FadeInOnScrollAnimationContainer from "../../AnimationContainers/SlideinUp";



export default function ProgramsPage() {

    return (
        <Box maw={"100vw"} pt={20}>
            <FadeInOnScrollAnimationContainer children={

                <Stack style={{ animation: "" }}>
                    <Title ta={"center"}>Program highlight</Title>
                    <Text mb={50} style={{ alignSelf: "center" }} ta="center" w={{ base: "80%", md: "70%", lg: "70%" }}>Through our array of programs, we invite you to explore a landscape of opportunities designed to nurture creativity, ignite ambition, and drive sustainable growth. Whether you're an aspiring entrepreneur seeking guidance on launching your first venture, a startup poised for exponential growth, or an established organization aiming to cultivate innovation within your ranks, our programs are tailored to meet your unique needs and aspirations.</Text>
                    <Stack style={{ borderRadius: 10 }} mx={{ base: 0, md: 10, lg: 50 }} p={{ base: 10, md: 20, lg: 30 }}>
                        <Title ta="center">What we do at Startup Bauchi</Title>
                        <Text ta="center">We offer a range of programs and initiatives to support entrepreneurs and startups at various stages of development, they include:</Text>

                        <ProgramsRenderer showAll />

                    </Stack>
                </Stack>
            } />

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