import { Box, Stack, Title, Grid, Text, Flex, Space, Accordion, Image, GridCol } from "@mantine/core";
import "../../../index.css"
import { ashBg } from "../../Reuseables/Color";
import AboutImage from "../../../assets/Images/gifting.jpg";
import "../../AnimationContainers/animations.css"
import FadeInOnScrollAnimationContainer from "../../AnimationContainers/SlideinUp";
import MissionAndVissionCard from "../../Reuseables/Cards/MissionAndVission";
import ProgramsRenderer from "../../Renderers/ProgramRenderers";
import { useMediaQuery } from "@mantine/hooks";


export default function AboutPage() {

    const mobileDevice = useMediaQuery('(max-width: 40em)');

    const faqList = [
        { id: "q1", question: "What is startup bacuhi all about?", answer: "Startup Bauchi is a non-profit that empowers entrepreneurs and startups in Bauchi State by providing resources, mentorship, and support to help turn ideas into successful businesses." },
        { id: "q2", question: "Who is eligle to join startup Bauchi?", answer: "Aspiring entrepreneurs, early-stage startups, and anyone with innovative ideas looking to grow their business in Bauchi State are eligible to join Startup Bauchi. We welcome individuals and teams passionate about entrepreneurship and innovation." },
        { id: "q3", question: "Is startup Bauchi a non-profit organization?", answer: "Yes, Startup Bauchi is a non-profit organization dedicated to supporting entrepreneurs and startups in Bauchi State." },
        { id: "q4", question: "What are the requirements for becoming a partner", answer: "To become a partner, you should share our mission of supporting entrepreneurship and innovation in Bauchi State. We look for organizations or individuals ready to contribute resources, expertise, or mentorship to help startups grow." }
    ]


    const items = faqList.map((item) => (
        <Accordion.Item key={item.id} value={item.id}>
            <Accordion.Control>{item.question}</Accordion.Control>
            <Accordion.Panel>{item.answer}</Accordion.Panel>
        </Accordion.Item>
    ));

    return (
        <Box pt={20} style={{ overflow: "hidden" }}>

            <Flex justify={"center"}>
                <Grid>
                    <Flex wrap={"wrap"} justify={"center"}>

                        <GridCol mx={"auto"} span={{ base: 12, sm: 12, md: 6, lg: 6 }}>
                            <Stack p={50} align={mobileDevice ? "center" : "flex-end"}>
                                <Image w={{ base: "90%", sm: "90%", md: "90%", lg: "100%" }} radius={20} h={"200px"} src={AboutImage} />
                            </Stack>
                        </GridCol>

                        {/* <Space w={20} /> */}

                        <GridCol span={{ base: 12, sm: 12, md: 6, lg: 6 }}>
                            <Flex p={10} direction={"column"} style={{ animation: "bounceIn 2s ease 0s 1 normal forwards", }} h={"100%"} w={"100%"} justify="center" align={""}>
                                <Title p={10} ta={{ base: "center", sm: "center", md: "center", lg: "left" }} order={2}>About Startup Bauchi</Title>
                                <Text ta={{ base: "center", sm: "center", md: "center", lg: "left" }} lh={2.5}>
                                    Startup Bauchi is a dynamic non-profit organization dedicated to empowering aspiring entrepreneurs and early-stage startups in Bauchi State. Our mission is to transform innovative ideas into successful ventures by providing comprehensive support, resources, and guidance.
                                    Entrepreneurs in Bauchi often face significant challenges, including limited access to funding, a scarcity of experienced mentors, and a fragmented ecosystem. Startup Bauchi addresses these issues through a suite of tailored programs and services designed to bridge the gap between vision and success.
                                </Text>
                            </Flex>
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