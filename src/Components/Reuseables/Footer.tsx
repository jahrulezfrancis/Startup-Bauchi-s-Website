import { Divider, Flex, Grid, Stack, Text, Title, Tooltip } from "@mantine/core"
import { navlinks } from "../Utils/navlinks"
import NewsLetterSection from "./NewsLetterSection"
import { Link, NavLink } from "react-router-dom"
import { FaTelegram, FaWhatsapp } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { secondaryColor } from "./Color"

export default function FooterSection() {

    return (
        <>
            <Grid gutter={{ base: "xl" }} style={{ justifySelf: "center" }} mx={"lg"} px={20} py={"20px"}>

                <Grid.Col ml={"auto"} span={{ base: 12, md: 6, lg: 3 }}>
                    <Title>Startup Bauchi</Title>
                    <Text>Empowering individuals, startups, and organizations to thrive through entrepreneurship, innovation, and collaboration.</Text>
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                    <Stack justify='start'>
                        <Title fw={500} c={"black"} ta={"start"}>Engage & Interact</Title>
                        <Flex gap={15} justify="start">
                            <Tooltip mt={0} position="bottom" label="Join Telegram commnity">
                                <Flex align={"center"} gap={5}>
                                    <Link to={""}>
                                        <FaTelegram color={secondaryColor} fontSize={30} />
                                    </Link>
                                </Flex>
                            </Tooltip>

                            <Tooltip position="bottom" label="Join Whatsapp community">
                                <Flex align={"center"} gap={5}>
                                    <Link to={""}>
                                        <FaWhatsapp color={secondaryColor} fontSize={30} />
                                    </Link>
                                </Flex>
                            </Tooltip>
                            <Tooltip position="bottom" label="Join X community">
                                <Flex align={"center"} gap={5}>
                                    <Link to={""}>
                                        <FaXTwitter color={secondaryColor} fontSize={30} />
                                    </Link>
                                </Flex>
                            </Tooltip>
                        </Flex>
                    </Stack>
                </Grid.Col>

                <Grid.Col mx={"auto"} span={{ base: 12, md: 6, lg: 3 }}>
                    <Title fw={500} mb={5} ta={"start"}>Quick links</Title>
                    <Flex align={"start"} justify={"start"} direction={"column"} gap={10}>
                        {navlinks.map((item) => {
                            return (
                                <NavLink style={{ textDecoration: "none" }} key={item.id} to={item.path}>
                                    <Text ta={"start"} td={"underline"} c={"black"} size='18px' >{item.name}</Text>
                                </NavLink>
                            )
                        })}
                    </Flex>
                </Grid.Col>

                <Grid.Col ml={"auto"} span={{ base: 12, md: 6, lg: 3 }}>
                    <NewsLetterSection />
                </Grid.Col>
            </Grid>
            <Divider />
            <Text ta={"center"} py={"20px"} size={"md"}>© 2024 Startup Bauchi</Text>
        </>
    )
}