import { Box, Stack, Title, Grid, Text, Flex, Space, Accordion, Image, GridCol } from "@mantine/core";
import "../../../index.css"
import { ashBg } from "../../Reuseables/Color";
import AboutImage from "../../../assets/Images/gifting.jpg";
import "../../AnimationContainers/animations.css"
import FadeInOnScrollAnimationContainer from "../../AnimationContainers/SlideinUp";
import MissionAndVissionCard from "../../Reuseables/Cards/MissionAndVission";
import ProgramsRenderer from "../../Renderers/ProgramRenderers";


export default function AboutPage() {
    const faqList = [
        { id: "q1", question: "What is startup bacuhi all about?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis temporibus possimus non sint dolorem tenetur blanditiis ducimus quos hic iusto. Fugit ab iure velit magnam labore alias vero saepe eligendi?" },
        { id: "q2", question: "What is eligle to join startup Bauchi?", answer: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis temporibus possimus non sint dolorem tenetur blanditiis ducimus quos hic iusto. Fugit ab iure velit magnam labore alias vero saepe eligendi?" },
        { id: "q3", question: "Is startup Bauchi a non-profit organization?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis temporibus possimus non sint dolorem tenetur blanditiis ducimus quos hic iusto. Fugit ab iure velit magnam labore alias vero saepe eligendi?" },
        { id: "q4", question: "What are the requirements for becoming a partner", answer: "To become a startup bauchi partner you neeed..." }
    ]

    const items = faqList.map((item) => (
        <Accordion.Item key={item.id} value={item.id}>
            <Accordion.Control>{item.question}</Accordion.Control>
            <Accordion.Panel>{item.answer}</Accordion.Panel>
        </Accordion.Item>
    ));

    return (
        <Box pt={20} style={{ overflow: "hidden" }}>

            <Title mb={50} ta={"center"}>Get to know about startup Bauchi</Title>

            <Flex justify={"center"}>
                <Grid>
                    <Flex wrap={"wrap"} justify={"center"}>

                        <GridCol span={{ base: 12, sm: 12, md: 5, lg: 5 }}>
                            <Image radius={20} h={400} w={"100%"} src={AboutImage} />
                        </GridCol>

                        <Space w={20} />

                        <GridCol span={{ base: 12, sm: 12, md: 5, lg: 5 }}>
                            <Stack style={{ animation: "bounceIn 2s ease 0s 1 normal forwards", }} h={"100%"} justify="space-around" align="start" >
                                <Title order={2}>About us</Title>
                                <Text lh={2}>
                                    Startup Bauchi is a dynamic non-profit organization dedicated to empowering aspiring entrepreneurs and early-stage startups in Bauchi State. Our mission is to transform innovative ideas into successful ventures by providing comprehensive support, resources, and guidance.
                                    Entrepreneurs in Bauchi often face significant challenges, including limited access to funding, a scarcity of experienced mentors, and a fragmented ecosystem. Startup Bauchi addresses these issues through a suite of tailored programs and services designed to bridge the gap between vision and success.
                                </Text>
                            </Stack>
                        </GridCol>
                    </Flex>
                </Grid>
            </Flex>

            <Space h={100} />

            <Stack>
                <Grid p={20} gutter="35px">
                    <Grid.Col ml={"auto"} span={{ base: 12, md: 6, lg: 5 }}>
                        <FadeInOnScrollAnimationContainer children={
                            <MissionAndVissionCard title="Mission" description=" To empower individuals, startups, and organizations to thrive through entrepreneurship, innovation, and collaboration." />
                        } />
                    </Grid.Col>

                    <Grid.Col mr={"auto"} span={{ base: 12, md: 6, lg: 5 }}>
                        <FadeInOnScrollAnimationContainer children={
                            <MissionAndVissionCard title="Vision" description="To create a vibrant and sustainable startup ecosystem in Bauchi State, where ideas flourish, businesses thrive, and communities prosper." />
                        } />

                    </Grid.Col>
                </Grid>
            </Stack>

            <Space h={100} />

            <Stack p={30} bg={ashBg}>
                <Title ta="center">What we do</Title>
                <Text ta="center">We offer a range of programs and initiatives to support entrepreneurs and startups at various stages of development, they include:</Text>
                <ProgramsRenderer showHoverContent={false} showAll={true} />
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
        </Box>
    )
}