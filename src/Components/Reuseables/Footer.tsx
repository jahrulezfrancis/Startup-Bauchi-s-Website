import { Flex, Grid, Stack, Text, Title, Tooltip } from "@mantine/core"
import { navlinks } from "../Utils/navlinks"
import NewsLetterSection from "./NewsLetterSection"
import { Link, NavLink } from "react-router-dom"
import { FaTelegram, FaWhatsapp } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { secondaryColor } from "./Color"

export default function FooterSection() {
    // function FooterIconComponent() {
    //     return (
    //         <Tooltip position="bottom" label="Join Telegram commnity">
    //             <Flex align={"center"} gap={5}>
    //                 <Link to={""}>
    //                    <FaTelegram color={secondaryColor} fontSize={30} />
    //                 </Link>
    //                 <Text>{siteName}</Text>
    //             </Flex>
    //         </Tooltip>
    //     )
    // }
    return (
        <>
            <Grid px={20} py={"10px"}>
                <Grid.Col ml={"auto"} span={{ base: 12, md: 6, lg: 3 }}>
                    <Text mt={10} fs={"italic"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolorum velit expedita ratione perferendis quia itaque nulla! Doloremque magni ullam quam qui consequuntur saepe neque inventore, quo, labore molestias nemo.</Text>
                </Grid.Col>
                <Grid.Col mr={"auto"} span={{ base: 12, md: 6, lg: 3 }}>
                    <Stack justify='start' align='start'>
                        <Title c={"black"} ta={"start"}>Engage & Interact</Title>
                        <Stack gap={10} justify="center">
                            <Tooltip position="bottom" label="Join Telegram commnity">
                                <Flex align={"center"} gap={5}>
                                    <Link to={""}>
                                        <FaTelegram color={secondaryColor} fontSize={30} />
                                    </Link>
                                    <Text>Telegram</Text>
                                </Flex>
                            </Tooltip>

                            <Tooltip position="bottom" label="Join Whatsapp community">
                                <Flex align={"center"} gap={5}>
                                    <Link to={""}>
                                        <FaWhatsapp color={secondaryColor} fontSize={30} />
                                    </Link>
                                    <Text>Whatsapp</Text>
                                </Flex>
                            </Tooltip>
                            <Tooltip position="bottom" label="Join X community">
                                <Flex align={"center"} gap={5}>
                                    <Link to={""}>
                                        <FaXTwitter color={secondaryColor} fontSize={30} />
                                    </Link>
                                    <Text>X </Text>
                                </Flex>
                            </Tooltip>
                        </Stack>
                    </Stack>
                </Grid.Col>

                <Grid.Col mx={"auto"} span={{ base: 12, md: 6, lg: 3 }}>
                    <Title mb={10} ta={"start"}>Quick links</Title>
                    <Flex align={"start"} justify={"start"} direction={"column"} gap={10}>
                        {navlinks.map((item) => {
                            return (
                                <NavLink className={item.path === location.pathname ? "active" : ""} style={{ textDecoration: "none" }} key={item.id} to={item.path}>
                                    <Text ta={"start"} fw={700} c={secondaryColor} style={{ textDecoration: "none" }} size='18px' >{item.name}</Text>
                                </NavLink>
                            )
                        })}
                    </Flex>
                </Grid.Col>

                <Grid.Col ml={"auto"} span={{ base: 12, md: 6, lg: 3 }}>
                    <NewsLetterSection />
                </Grid.Col>
            </Grid>
            <Text ta={"center"} py={"20px"} size={"md"}>© 2024 Startup Bauchi</Text>
        </>
    )
}