import { Box, Space, Stack, Title, Text, Flex, } from "@mantine/core";
import { GiTeacher, } from "react-icons/gi";
import { FaConnectdevelop, } from "react-icons/fa";
import { LiaRocketSolid } from "react-icons/lia";
import { GrGrow } from "react-icons/gr";
import { PiPresentationLight } from "react-icons/pi";
import ProgramsCard from "../HomePage/ProgramsCard";
import { ashBg } from "../../Reuseables/Color";
import { eventData } from "./programs.data";
import EventCard from "./EventsCard";



export default function ProgramsPage() {

    return (
        <Box pt={20}>
            <Stack>
                <Title ta={"center"}>Program highlight</Title>
                <Text mb={50} style={{ alignSelf: "center" }} ta="center" w={{ base: "80%", md: "70%", lg: "70%" }}>Through our array of programs, we invite you to explore a landscape of opportunities designed to nurture creativity, ignite ambition, and drive sustainable growth. Whether you're an aspiring entrepreneur seeking guidance on launching your first venture, a startup poised for exponential growth, or an established organization aiming to cultivate innovation within your ranks, our programs are tailored to meet your unique needs and aspirations.</Text>
                <Stack style={{ borderRadius: 10 }} mx={{ base: 0, md: 10, lg: 50 }} p={{ base: 10, md: 20, lg: 30 }} bg={ashBg}>
                    <Title ta="center">What we do at Startup Bauchi</Title>
                    <Text ta="center">We offer a range of programs and initiatives to support entrepreneurs and startups at various stages of development, they include:</Text>

                    <Flex justify={"center"} gap={20} wrap={"wrap"}>
                        <ProgramsCard index={2} icon={<LiaRocketSolid fontSize={50} />} title="Accelerator Programs" description="Intensive programs designed to accelerate the growth of early-stage startups through mentorship, training, and access to resources." />

                        <ProgramsCard icon={<GrGrow fontSize={50} />} title="Incubation" description="Support for startups in their early stages, including workspace, mentorship, and access to funding opportunities." />

                        <ProgramsCard index={2} icon={<GiTeacher fontSize={50} />} title="Workshops and Training" description="Educational programs covering various aspects of entrepreneurship, business development, technology, and innovation." />
                    </Flex>

                    <Flex justify={"center"} gap={30} wrap={"wrap"}>
                        <ProgramsCard icon={<FaConnectdevelop fontSize={50} />} title="Networking Events" description="Regular meetups, pitch nights, and networking sessions to connect entrepreneurs, investors, and industry professionals." />

                        <ProgramsCard index={2} icon={<PiPresentationLight fontSize={50} />} title="Startup Showcases" description="Opportunities for startups to showcase their products, services, and innovations to potential investors, customers, and partners." />
                    </Flex>
                </Stack>
            </Stack>

            <Space h={100} />
            <Stack>
                <Title ta={"center"}>Explore our past and upcoming events</Title>
                <Flex justify={"center"} gap={10} wrap={"wrap"} p={30}>
                    {eventData.map((item) => {
                        return <EventCard key={item.id} eventTitle={item.title} eventDescription={item.description} eventImage={item.image} eventDone={item.isDone} />
                    })}
                </Flex>
            </Stack>
            <Space h={100} />
        </Box>
    )
}