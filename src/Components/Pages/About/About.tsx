import { Box, Stack, Title, Container, Grid, Card, Text, Flex, Space } from "@mantine/core";
import "../../../index.css"
import { GiBullseye, } from "react-icons/gi";
import { FaRegEye } from "react-icons/fa";

export default function AboutPage() {
    return (
        <Box mt={80}>
            <Flex w={"100%"} direction={"column"} wrap={"wrap"}>
                <Stack align="center">
                    <Stack ta={"center"} align="center" p={20} w={{ base: "full", md: "500px", lg: "700px" }}>
                        <Title tt={"uppercase"}>About Us</Title>
                        <Text lh={"30px"} fw={400} size="18px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus odio a dolore porro similique, perspiciatis fugit praesentium sequi possimus aspernatur expedita voluptas minima rem voluptate unde esse fugiat id accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis excepturi sapiente deserunt aliquam iure ab quae et placeat iusto voluptate beatae impedit, alias neque asperiores qui sunt dolores ex.</Text>
                    </Stack>
                </Stack>
                <Space h={100} />
                <Container size="lg">
                    <Grid gutter="35px">
                        <Grid.Col span={{ base: 12, md: 12, lg: 6 }}>
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
                        <Grid.Col  span={{ base: 12, md: 12, lg: 6 }}>
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
                </Container>
            </Flex>
        </Box>
    )
}