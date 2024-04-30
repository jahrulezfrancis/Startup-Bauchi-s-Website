import { Box, Button, Flex, Grid, GridCol, Image, Space, Stack, Text, Title } from "@mantine/core";
import AboutImg from "../../../assets/Images/sb-2.jpeg"
import CarouselComponent from "./Carousel";
import { Link } from "react-router-dom";
import ProgramsCard from "./ProgramsCard";

export default function Homepage() {
    return (
        <Box style={{ boxSizing: "border-box", overflow: "hidden" }} >
            <CarouselComponent />
            <Grid align="center">
                <GridCol p={20} span={{ base: 11, md: 11, lg: 6 }}>
                    <Image radius={10} fit="cover" h={"500px"} w={"98%"} src={AboutImg} />
                </GridCol>
                <GridCol span={{ base: 12, md: 12, lg: 6 }}>
                    <Stack w={{ base: "100%", md: "100%", lg: "50%" }}>
                        <Title>About us</Title>
                        <Text>Startup Bauchi is a dynamic organization committed to empowering aspiring entrepreneurs and early-stage startups in Bauchi State. We provide a comprehensive suite of programs and services designed to bridge the gap between your vision and achieving remarkable success.</Text>
                        <Link to={"/about"} >
                            <Button>More about us</Button>
                        </Link>
                    </Stack>
                </GridCol>
            </Grid>
            <Space h={100} />
            <Stack>
                <Title ta="center">Programs and Initiatives</Title>
                <Text ta="center">We offer a range of programs and initiatives to support entrepreneurs and startups at various stages of development, they include:</Text>

                <Flex justify={"center"} gap={20} wrap={"wrap"}>

                    <ProgramsCard title="Accelerator Programs" description="Intensive programs designed to accelerate the growth of early-stage startups through mentorship, training, and access to resources." />

                    <ProgramsCard title="Incubation" description="Support for startups in their early stages, including workspace, mentorship, and access to funding opportunities." />

                    <ProgramsCard title="Workshops and Training" description="Educational programs covering various aspects of entrepreneurship, business development, technology, and innovation." />
                </Flex>

                <Flex justify={"center"} gap={30} wrap={"wrap"}>

                    <ProgramsCard title="Networking Events" description="Regular meetups, pitch nights, and networking sessions to connect entrepreneurs, investors, and industry professionals." />

                    <ProgramsCard title="Startup Showcases" description="Opportunities for startups to showcase their products, services, and innovations to potential investors, customers, and partners." />

                </Flex>
            </Stack>
            <Space h={100} />
        </Box>
    )
}