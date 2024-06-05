import { Box, Flex, Space, Stack, Text, Title, Grid, Image } from "@mantine/core";
import CarouselComponent from "./Carousel";
import { Link } from "react-router-dom";
import { CgCommunity } from "react-icons/cg";
import { MdEventAvailable } from "react-icons/md";
import { FaArrowsDownToPeople } from "react-icons/fa6"
import { IoPeople } from "react-icons/io5"
import AboutImage from "../../../assets/Images/workspace.jpg";
import TimelineComponent from "../../Reuseables/TimelineComponent";
import StatisticsCard from "./StatsCard";
import { ashBg, secondaryColor } from "../../Reuseables/Color";
import CustomSolidButton from "../../Reuseables/SolidButton";
import ProgramsRenderer from "../../Renderers/ProgramRenderers";
import FadeInOnScrollAnimationContainer from "../../AnimationContainers/SlideinUp";
import ContinousSlider from "../../AnimationContainers/ContinousSlide";
import StartupSignUpForm from "../GetInvolved/Forms/Startup.form";



export default function Homepage() {
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

            <Flex direction={"column"} py={20} bg={ashBg} mx={"auto"}>
                <Title my={20} ta={"center"}>Join Startups</Title>
                <Grid >
                    <Grid.Col span={{ base: 12, md: 12, lg: 6 }}>
                        <Image w={"80%"} ml={"auto"} src={AboutImage} />
                    </Grid.Col>

                    <Grid.Col mr={"auto"} span={{ base: 12, md: 12, lg: 6 }}>
                        <StartupSignUpForm formPosition="start" showIcon={false} />
                    </Grid.Col>
                </Grid>
            </Flex>

            <Space h={100} />


            <Flex direction={"column"} w={"100%"} align={"center"} justify={"center"}>
                <Title mb={50}>Our partners</Title>
                <Stack w={{ base: "100%", md: "100%", lg: "100%" }}>
                    <ContinousSlider />
                </Stack>
            </Flex>
            <Space h={100} />
        </Box>
    )
}