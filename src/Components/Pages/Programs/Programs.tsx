import { Box, Space, Stack, Title, Text, Flex, Accordion, TextInput, Group, Button, } from "@mantine/core";
import { GiTeacher, } from "react-icons/gi";
import { FaConnectdevelop, } from "react-icons/fa";
import { LiaRocketSolid } from "react-icons/lia";
import { BsSendFill } from "react-icons/bs"
import { GrGrow } from "react-icons/gr";
import { PiPresentationLight } from "react-icons/pi";
import ProgramsCard from "../HomePage/ProgramsCard";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";



export default function ProgramsPage() {

    const [email, setEmail] = useState<string>("")

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



    const faqList = [
        { id: "q1", question: "What is startup bacuhi all about?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis temporibus possimus non sint dolorem tenetur blanditiis ducimus quos hic iusto. Fugit ab iure velit magnam labore alias vero saepe eligendi?" },
        { id: "q2", question: "What is startup bacuhi all about?", answer: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis temporibus possimus non sint dolorem tenetur blanditiis ducimus quos hic iusto. Fugit ab iure velit magnam labore alias vero saepe eligendi?" },
        { id: "q3", question: "What is startup bacuhi all about?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis temporibus possimus non sint dolorem tenetur blanditiis ducimus quos hic iusto. Fugit ab iure velit magnam labore alias vero saepe eligendi?" },
        { id: "q4", question: "What is startup bacuhi all about?", answer: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis temporibus possimus non sint dolorem tenetur blanditiis ducimus quos hic iusto. Fugit ab iure velit magnam labore alias vero saepe eligendi?" }
    ]

    function handleEmailSub(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (emailRegex.test(email)) {
            console.log("we are getting there")
        } else {
            toast.error("The email you provided is not valid")
        }
    }

    const items = faqList.map((item) => (
        <Accordion.Item key={item.id} value={item.id}>
            <Accordion.Control>{item.question}</Accordion.Control>
            <Accordion.Panel>{item.answer}</Accordion.Panel>
        </Accordion.Item>
    ));

    return (
        <Box mt={80}>
            <Stack>
                <Title mt={50} ta={"center"}>Program highlight</Title>
                <Text mb={50} style={{ alignSelf: "center" }} ta="center" w={{ base: "80%", md: "70%", lg: "70%" }}>Through our array of programs, we invite you to explore a landscape of opportunities designed to nurture creativity, ignite ambition, and drive sustainable growth. Whether you're an aspiring entrepreneur seeking guidance on launching your first venture, a startup poised for exponential growth, or an established organization aiming to cultivate innovation within your ranks, our programs are tailored to meet your unique needs and aspirations.</Text>
                <Stack p={30} bg={"#F0FBFD"}>
                    <Title ta="center">What we do at Startup Bauchi</Title>
                    <Text ta="center">We offer a range of programs and initiatives to support entrepreneurs and startups at various stages of development, they include:</Text>

                    <Flex justify={"center"} gap={20} wrap={"wrap"}>
                        <ProgramsCard icon={<LiaRocketSolid fontSize={50} />} title="Accelerator Programs" description="Intensive programs designed to accelerate the growth of early-stage startups through mentorship, training, and access to resources." />

                        <ProgramsCard icon={<GrGrow fontSize={50} />} title="Incubation" description="Support for startups in their early stages, including workspace, mentorship, and access to funding opportunities." />

                        <ProgramsCard icon={<GiTeacher fontSize={50} />} title="Workshops and Training" description="Educational programs covering various aspects of entrepreneurship, business development, technology, and innovation." />
                    </Flex>

                    <Flex justify={"center"} gap={30} wrap={"wrap"}>
                        <ProgramsCard icon={<FaConnectdevelop fontSize={50} />} title="Networking Events" description="Regular meetups, pitch nights, and networking sessions to connect entrepreneurs, investors, and industry professionals." />

                        <ProgramsCard icon={<PiPresentationLight fontSize={50} />} title="Startup Showcases" description="Opportunities for startups to showcase their products, services, and innovations to potential investors, customers, and partners." />
                    </Flex>
                </Stack>
            </Stack>

            <Space h={100} />
            <Stack w={"100%"} align="center">
                <Title ta={"left"}>Frequently asked questions</Title>
                <Accordion w={"90%"} variant="separated" radius="lg" defaultValue="Apples">
                    {items}
                </Accordion>
            </Stack>
            <Space h={100} />
            <Stack>
                <form onSubmit={handleEmailSub}>
                    <Title>Sign up for news letters</Title>
                    <Text>Sign up  for Startup Bauchi's news letter and be among the first people to know about upcoming events</Text>
                    <Group gap={10}>
                        <Group align="flex-end">
                            <TextInput onChange={(e) => setEmail(e.target.value)} type="email" placeholder="hello@gluesticker.com" style={{ flex: 1 }} />
                            <Button type="submit" leftSection={<BsSendFill />} onClick={close}>Subscribe</Button>
                        </Group>
                    </Group>
                </form>
            </Stack>

            <Space h={100} />
        </Box>
    )
}