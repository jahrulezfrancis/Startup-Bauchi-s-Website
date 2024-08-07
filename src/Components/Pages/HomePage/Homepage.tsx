import { Box, Flex, Space, Stack, Text, Title, Grid, Image } from "@mantine/core";
import CarouselComponent from "./Carousel";
import AboutImage from "../../../assets/Images/sign-up.jpg";
import TimelineComponent from "../../Reuseables/TimelineComponent";
import { ashBg } from "../../Reuseables/Color";
import ProgramsRenderer from "../../Renderers/ProgramRenderers";
import FadeInOnScrollAnimationContainer from "../../AnimationContainers/SlideinUp";
import StartupSignUpForm from "../GetInvolved/Forms/Startup.form";



export default function Homepage() {
    return (
        <Box style={{ boxSizing: "border-box", overflow: "hidden" }} >
            <CarouselComponent />

            <Space h={100} />

            <Stack>
                <Title ta="center">Programs and Initiatives</Title>
                <Text ta="center">We provide a variety of programs and initiatives designed to support entrepreneurs and startups at every stage of their development. These include:</Text>

                <ProgramsRenderer showHoverContent={false} showAll={false} />

            </Stack>

            <Space h={100} />

            <Stack py={10} bg={""} mx={20} style={{ borderRadius: 10, }} >
                <Title py={10} ta={"center"}>Past and upcoming event highlights</Title>
                <TimelineComponent />
            </Stack>

            <Space h={20} />

            <Flex direction={"column"} py={20} bg={ashBg} mx={"auto"}>
                <Title my={20} ta={"center"}>Join Community</Title>
                <Grid >

                    <Grid.Col span={{ base: 12, md: 12, lg: 6 }}>
                        <FadeInOnScrollAnimationContainer children={
                            <Flex w={"100%"} justify={"center"}>
                                <Image w={"80%"} ml={{ base: "0px", lg: "auto" }} src={AboutImage} />
                            </Flex>
                        } />
                    </Grid.Col>

                    <Grid.Col mr={"auto"} span={{ base: 12, md: 12, lg: 6 }}>
                        <FadeInOnScrollAnimationContainer children={
                            <StartupSignUpForm formPosition="start" showIcon={false} />
                        } />
                    </Grid.Col>
                </Grid>
            </Flex>
            <Space h={100} />
        </Box>
    )
}