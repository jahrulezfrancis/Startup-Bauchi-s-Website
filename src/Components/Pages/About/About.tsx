import { Box, Stack, Title, Group, Grid, Card, Text, Flex, Space, Accordion, TextInput } from "@mantine/core";
import "../../../index.css"
import { GiBullseye, GiTeacher, } from "react-icons/gi";
import { FaConnectdevelop, FaRegEye } from "react-icons/fa";
import { LiaRocketSolid } from "react-icons/lia";
import { GrGrow } from "react-icons/gr";
import { PiPresentationLight } from "react-icons/pi";
import ProgramsCard from "../HomePage/ProgramsCard";
import TestimonialsRenderer from "../../Reuseables/TestimonialRenderer";
import { ashBg, secondaryColor } from "../../Reuseables/Color";
import { BsSendFill } from "react-icons/bs"
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import "../../AnimationContainers/animations.css"
import FadeInOnScrollAnimationContainer from "../../AnimationContainers/SlideinUp";
import CustomSolidButton from "../../Reuseables/SolidButton";


export default function AboutPage() {


    const [email, setEmail] = useState<string>("")

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function handleEmailSub(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (emailRegex.test(email)) {
            toast.error("The email you provided is not valid")
        } else if (email.length === 0) {
            toast.error("The email you provided is not valid")
        }
    }

    const faqList = [
        { id: "q1", question: "What is startup bacuhi all about?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis temporibus possimus non sint dolorem tenetur blanditiis ducimus quos hic iusto. Fugit ab iure velit magnam labore alias vero saepe eligendi?" },
        { id: "q2", question: "What is startup bacuhi all about?", answer: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis temporibus possimus non sint dolorem tenetur blanditiis ducimus quos hic iusto. Fugit ab iure velit magnam labore alias vero saepe eligendi?" },
        { id: "q3", question: "What is startup bacuhi all about?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis temporibus possimus non sint dolorem tenetur blanditiis ducimus quos hic iusto. Fugit ab iure velit magnam labore alias vero saepe eligendi?" },
        { id: "q4", question: "What is startup bacuhi all about?", answer: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis temporibus possimus non sint dolorem tenetur blanditiis ducimus quos hic iusto. Fugit ab iure velit magnam labore alias vero saepe eligendi?" }
    ]
    const items = faqList.map((item) => (
        <Accordion.Item key={item.id} value={item.id}>
            <Accordion.Control>{item.question}</Accordion.Control>
            <Accordion.Panel>{item.answer}</Accordion.Panel>
        </Accordion.Item>
    ));

    return (
        <Box pt={20} style={{ overflowX: "hidden" }}>

            <Flex direction={"column"}>
                <Stack style={{ animation: "bounceIn 2s ease 0s 1 normal forwards", alignSelf: "center" }} ta={"center"} align="center" w={{ base: "100vw", md: "500px", lg: "700px" }}>
                    <Title>About Startup Bauchi</Title>
                    <Text px={20} lh={"30px"} fw={400} size="18px">
                        Startup Bauchi is a dynamic non-profit organization dedicated to empowering aspiring entrepreneurs and early-stage startups in Bauchi State. Our mission is to transform innovative ideas into successful ventures by providing comprehensive support, resources, and guidance.
                        Entrepreneurs in Bauchi often face significant challenges, including limited access to funding, a scarcity of experienced mentors, and a fragmented ecosystem. Startup Bauchi addresses these issues through a suite of tailored programs and services designed to bridge the gap between vision and success.
                    </Text>
                </Stack>
                <Space h={80} />
                <Stack>
                    <Grid p={20} gutter="35px">
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <Card mih={230} shadow="xl" padding="lg" radius="lg" style={{ background: '#F9FAFB' }}>
                                <Flex gap={5} direction={"column"} align={"center"}>
                                    <GiBullseye style={{ alignSelf: "center" }} fontSize={50} />
                                    <Text ta="center" size="xl" fw={700}>
                                        Our Mission
                                    </Text>
                                    <Text ta="center" size="lg" style={{ lineHeight: '1.6' }}>
                                        To empower individuals, startups, and organizations to thrive through entrepreneurship,
                                        innovation, and collaboration.
                                    </Text>
                                </Flex>
                            </Card>
                        </Grid.Col>
                        {/* <Space h={100} hiddenFrom="lg" /> */}
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <Card mih={230} shadow="xl" padding="lg" radius="lg" style={{ background: '#F9FAFB' }}>
                                <Flex gap={5} direction={"column"} align={"center"}>
                                    <FaRegEye style={{ alignSelf: "center" }} fontSize={50} />
                                    <Text ta="center" size="xl" fw={700}>
                                        Our Mission
                                    </Text>
                                    <Text ta="center" size="lg" style={{ lineHeight: '1.6' }}>
                                        To create a vibrant and sustainable startup ecosystem in Bauchi State, where ideas
                                        flourish, businesses thrive, and communities prosper.
                                    </Text>
                                </Flex>
                            </Card>
                        </Grid.Col>
                    </Grid>
                </Stack>

                <Space h={100} />

                <Stack p={30} bg={ashBg}>
                    <Title ta="center">What we do at Startup Bauchi</Title>
                    <Text ta="center">We offer a range of programs and initiatives to support entrepreneurs and startups at various stages of development, they include:</Text>

                    <Flex justify={"center"} gap={20} wrap={"wrap"}>
                        <ProgramsCard index={2} icon={<LiaRocketSolid fontSize={50} />} title="Accelerator Programs" description="Intensive programs designed to accelerate the growth of early-stage startups through mentorship, training, and access to resources." />

                        <ProgramsCard icon={<GrGrow fontSize={50} />} title="Incubation" description="Support for startups in their early stages, including workspace, mentorship, and access to funding opportunities." />

                        <ProgramsCard index={4} icon={<GiTeacher fontSize={50} />} title="Workshops and Training" description="Educational programs covering various aspects of entrepreneurship, business development, technology, and innovation." />
                    </Flex>

                    <Flex justify={"center"} gap={30} wrap={"wrap"}>
                        <ProgramsCard icon={<FaConnectdevelop fontSize={50} />} title="Networking Events" description="Regular meetups, pitch nights, and networking sessions to connect entrepreneurs, investors, and industry professionals." />

                        <ProgramsCard index={4} icon={<PiPresentationLight fontSize={50} />} title="Startup Showcases" description="Opportunities for startups to showcase their products, services, and innovations to potential investors, customers, and partners." />
                    </Flex>
                </Stack>

                <Space h={100} />

                <Stack>
                    <Title ta={"center"}>What our clients say about us</Title>
                    <TestimonialsRenderer />
                </Stack>

                <Space h={100} />

                    <FadeInOnScrollAnimationContainer children={
                <Stack maw={"100vw"} align="center">
                    <Title ta={"center"}>Frequently asked questions</Title>
                        <Accordion style={{ alignSelf: "center" }} w={"95%"} variant="separated" radius="lg">
                            {items}
                        </Accordion>
                </Stack>
                    } />

                <Space h={100} />

                <Stack maw={"100vw"} align="center" justify="center" px={20} mih={400} h={"auto"} bg={ashBg}>
                    <form onSubmit={handleEmailSub}>
                        <Stack align="center">
                            <Title c={"black"}>Sign up for news letters</Title>
                            <Text c="black">Sign up  for Startup Bauchi's news letter and be among the first people to know about upcoming events</Text>
                            <Group gap={10}>
                                <Group align="flex-end">
                                    <TextInput radius={10} size="lg" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="hello@startupbauchi.com" style={{ flex: 1 }} />
                                    <CustomSolidButton size="lg" leftSection={<BsSendFill />} buttonText="Subscribe" type="submit" bg={secondaryColor} radius={10}  />
                                </Group>
                            </Group>
                        </Stack>
                    </form>
                </Stack>
            </Flex>
        </Box>
    )
}