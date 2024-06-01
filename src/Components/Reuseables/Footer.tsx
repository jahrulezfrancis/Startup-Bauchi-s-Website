import { Flex, Grid, Group, Stack, Text, Title, Tooltip } from "@mantine/core"
import { navlinks } from "../Utils/navlinks"
import NewsLetterSection from "./NewsLetterSection"
import { Link, NavLink } from "react-router-dom"
import { FaTelegram, FaTwitter, FaWhatsapp } from "react-icons/fa"
import { secondaryColor } from "./Color"

export default function FooterSection() {
    return (
        <>
            <Grid px={20} py={"10px"}  >
                <Grid.Col ml={"auto"} span={{ base: 12, md: 6, lg: 4 }}>
                    <NewsLetterSection />
                </Grid.Col>

                <Grid.Col mx={"auto"} span={{ base: 12, md: 6, lg: 4 }}>
                    <Title ta={"center"}>Quick links</Title>
                    <Flex align={"center"} justify={"start"} direction={"column"} gap={20}>
                        {navlinks.map((item) => {
                            return (
                                <NavLink className={item.path === location.pathname ? "active" : ""} style={{ textDecoration: "none" }} key={item.id} to={item.path}>
                                    <Text ta={"start"} fw={700} c={secondaryColor} style={{ textDecoration: "none" }} size='18px' >{item.name}</Text>
                                </NavLink>
                            )
                        })}
                    </Flex>
                </Grid.Col>

                <Grid.Col mr={"auto"} span={{ base: 12, md: 6, lg: 4 }}>
                    <Stack mt={50} justify='start' align='center'>
                        {/* <Title c={"black"} ta={"center"}>Connect with us on social media</Title> */}
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

                    </Stack>
                </Grid.Col>
            </Grid>
            <Text ta={"center"} py={"20px"} size={"md"}>© 2024 Startup Bauchi</Text>
        </>
    )
}