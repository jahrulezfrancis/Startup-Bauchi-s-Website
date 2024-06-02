import { Box, Modal, Container, Flex, Space, Stack, Text, Title, ModalBody, Group, Tooltip, Grid } from "@mantine/core";
import CarouselComponent from "./Carousel";
import { Link } from "react-router-dom";
import { CgCommunity } from "react-icons/cg";
import { MdEventAvailable } from "react-icons/md";
import { FaTelegram, FaTwitter, FaWhatsapp } from "react-icons/fa"
import { FaArrowsDownToPeople } from "react-icons/fa6"
import { IoPeople } from "react-icons/io5"

import { useDisclosure } from '@mantine/hooks';
import TimelineComponent from "../../Reuseables/TimelineComponent";
import StatisticsCard from "./StatsCard";
import { secondaryColor } from "../../Reuseables/Color";
import CustomSolidButton from "../../Reuseables/SolidButton";
import ProgramsRenderer from "../../Renderers/ProgramRenderers";
import FadeInOnScrollAnimationContainer from "../../AnimationContainers/SlideinUp";
import ContinousSlider from "../../AnimationContainers/ContinousSlide";
import StartupSignUpForm from "../GetInvolved/Forms/Startup.form";



export default function Homepage() {
    const [opened, { open, close }] = useDisclosure(false);

    function ModalComponent() {
        return (
            <>
                <Modal
                    opened={opened}
                    onClose={close}
                    title="Startup Bauchi Communities"
                    centered
                    overlayProps={{
                        backgroundOpacity: 0.55,
                        blur: 3,
                    }}
                >
                    <ModalBody color="blue">
                        <Group gap={25} justify="center">
                            <Tooltip position="bottom" label="Join Telegram commnity">
                                <Link to={""}>
                                    <FaTelegram color={secondaryColor} fontSize={50} />
                                </Link>
                            </Tooltip>

                            <Tooltip position="bottom" label="Join Whatsapp community">
                                <Link to={""}>
                                    <FaWhatsapp color={secondaryColor} fontSize={50} />
                                </Link>
                            </Tooltip>

                            <Tooltip position="bottom" label="Join Twitter community">
                                <Link to={""}>
                                    <FaTwitter color={secondaryColor} fontSize={50} />
                                </Link>
                            </Tooltip>
                        </Group>
                    </ModalBody>

                </Modal>
                <CustomSolidButton bg={secondaryColor} onClick={open} radius={10} size="lg" buttonText="Explore All Communities" style={{ marginTop: '50px' }} />
            </>
        );
    }

    return (
        <Box style={{ boxSizing: "border-box", overflow: "hidden" }} >
            <CarouselComponent />
            <Space h={100} />

            <Stack>
                <Title ta="center">Programs and Initiatives</Title>
                <Text ta="center">We offer a range of programs and initiatives to support entrepreneurs and startups at various stages of development, they include:</Text>

                <ProgramsRenderer showAll={false} />
                {/* //replace first item with bootcap */}

                <Flex justify={"center"}>
                    <Link to={"/programs"}>
                        <CustomSolidButton color={secondaryColor} style={{ alignSelf: "center" }} mt={20} w={300} mx={200} variant="outline" buttonText="Explore all programs" />
                    </Link>
                </Flex>

            </Stack>

            <Space h={100} />

            <Flex justify="center" py={20} align="center" w={"100%"} mih={200} h={"auto"} bg={"#f9fafc"}>
                <Flex p={20} direction={{ base: "column" }} h={"auto"} justify="center" w={"100%"} >
                    <Stack ta={{ base: "start", md: "start", lg: "center" }} lh={0} gap={0}>
                        <Title mb={20}>Empowering <span style={{ color: secondaryColor }}>Startups</span></Title> <br />
                    </Stack>
                    <Space w={{ md: 0, lg: "50px" }} />
                    <Stack gap={0} align="center">
                        <FadeInOnScrollAnimationContainer
                            children={
                                <Flex wrap={"wrap"} gap={0}>
                                    <StatisticsCard Icon={<IoPeople color={secondaryColor} />} beneficiaries="Members" statsNumber={1000} />
                                    <StatisticsCard Icon={<CgCommunity color={secondaryColor} />} beneficiaries="Startups Supporting" statsNumber={100} />
                                </Flex>
                            }
                        />
                        <FadeInOnScrollAnimationContainer children={
                            <Flex wrap={"wrap"} gap={0}>
                                <StatisticsCard Icon={<MdEventAvailable color={secondaryColor} />} beneficiaries="Event" statsNumber={10} />
                                <StatisticsCard Icon={< FaArrowsDownToPeople color={secondaryColor} />} beneficiaries="Volunteers" statsNumber={20} />
                            </Flex>
                        } />
                    </Stack>
                </Flex>
            </Flex>

            <Space h={100} />

            <Stack py={10} bg={""} mx={20} style={{ borderRadius: 10, }} >
                <Title py={10} ta={"center"}>Past and upcoming event highlights</Title>
                <TimelineComponent />
            </Stack>

            <Space h={20} />

            <Grid mx={"auto"}>
                <Grid.Col span={{ base: 12, md: 12, lg: 6 }}>
                    <Title>Left Section</Title>
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 12, lg: 6 }}>
                    <StartupSignUpForm showIcon={false} />
                </Grid.Col>
            </Grid>

            <Space h={20} />


            <Flex direction={"column"} w={"100%"} align={"center"} justify={"center"}>
                <Title mb={50}>Our partners</Title>
                <Stack w={{ base: "100%", md: "100%", lg: "100%" }}>
                    <ContinousSlider />
                </Stack>
            </Flex>

            <Space h={100} />
            {/* Call to action section for community engagement */}
            <Stack mih={300} bg={"#f9fafc"}>
                <Container size="lg" style={{ textAlign: 'center', marginTop: '50px', marginBottom: '50px' }}>
                    <Title ta="center" size="xl" fw={700} style={{ marginBottom: '30px' }}>
                        Explore Our Communities
                    </Title>
                    <Text>Explore diverse communities supporting entrepreneurship, innovation, and technology. Whether you're an aspiring entrepreneur, seasoned innovator, or simply curious, there's a community for you.</Text>

                    <Text>Join us to turn ideas into action, forge meaningful connections, and shape a brighter future together.</Text>
                    <ModalComponent />
                </Container>
            </Stack>

            {/* <Space h={100} /> */}
        </Box>
    )
}