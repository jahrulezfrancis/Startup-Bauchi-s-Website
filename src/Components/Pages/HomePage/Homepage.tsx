import { Box, Modal, Container, Flex, Space, Stack, Text, Title, ModalBody, Group, Tooltip } from "@mantine/core";
import CarouselComponent from "./Carousel";
import { Link } from "react-router-dom";
import { GrGrow } from "react-icons/gr"
import { GiTeacher } from "react-icons/gi"
import { LiaRocketSolid } from "react-icons/lia"
import { CgCommunity } from "react-icons/cg";
import { MdEventAvailable } from "react-icons/md";
import { FaConnectdevelop, FaTelegram, FaTwitter, FaWhatsapp } from "react-icons/fa"
import { FaArrowsDownToPeople } from "react-icons/fa6"
import { IoPeople } from "react-icons/io5"
import { PiPresentationLight } from "react-icons/pi"
import ProgramsCard from "./ProgramsCard";
import { useDisclosure } from '@mantine/hooks';
import TimelineComponent from "../../Reuseables/TimelineComponent";
import StatisticsCard from "./StatsCard";
import { primaryColor, secondaryColor } from "../../Reuseables/Color";
import CustomSolidButton from "../../Reuseables/SolidButton";



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
                                    <FaTelegram color="#1C7ED6" fontSize={50} />
                                </Link>
                            </Tooltip>

                            <Tooltip position="bottom" label="Join Whatsapp community">
                                <Link to={""}>
                                    <FaWhatsapp color="#1C7ED6" fontSize={50} />
                                </Link>
                            </Tooltip>

                            <Tooltip position="bottom" label="Join Twitter community">
                                <Link to={""}>
                                    <FaTwitter color="#1C7ED6" fontSize={50} />
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

                <Flex justify={"center"} gap={20} wrap={"wrap"}>
                    <ProgramsCard index={2} icon={<LiaRocketSolid fontSize={50} />} title="Accelerator Programs" description="Intensive programs designed to accelerate the growth of early-stage startups through mentorship, training, and access to resources." />

                    <ProgramsCard icon={<GrGrow fontSize={50} />} title="Incubation" description="Support for startups in their early stages, including workspace, mentorship, and access to funding opportunities." />

                    <ProgramsCard icon={<GiTeacher fontSize={50} />} title="Workshops and Training" description="Educational programs covering various aspects of entrepreneurship, business development, technology, and innovation." />
                </Flex>

                <Flex justify={"center"} gap={30} wrap={"wrap"}>
                    <ProgramsCard icon={<FaConnectdevelop fontSize={50} />} title="Networking Events" description="Regular meetups, pitch nights, and networking sessions to connect entrepreneurs, investors, and industry professionals." />

                    <ProgramsCard icon={<PiPresentationLight fontSize={50} />} title="Startup Showcases" description="Opportunities for startups to showcase their products, services, and innovations to potential investors, customers, and partners." />
                </Flex>
            </Stack>

            <Space h={100} />

            <Flex justify="center" py={20} align="center" w={"100%"} mih={200} h={"auto"} bg={"#F5F7FA"}>
                <Flex p={20} direction={{ base: "column" }} h={"auto"} justify="center" w={"100%"} >
                    <Stack ta={{ base: "start", md: "start", lg: "center" }} lh={0} gap={0}>
                        <Title mb={20}>Empowering <span style={{ color: primaryColor }}>Startups</span></Title> <br />
                    </Stack>
                    <Space w={{ md: 0, lg: "50px" }} />
                    <Stack gap={0} align="center">
                        <Flex wrap={"wrap"} gap={0}>
                            <StatisticsCard Icon={<IoPeople color={primaryColor} />} beneficiaries="Members" statsNumber={1000} />
                            <StatisticsCard Icon={<CgCommunity color={primaryColor} />} beneficiaries="Startups Supporting" statsNumber={100} />
                        </Flex>
                        <Flex wrap={"wrap"} gap={0}>
                            <StatisticsCard Icon={<MdEventAvailable color={primaryColor} />} beneficiaries="Event" statsNumber={10} />
                            <StatisticsCard Icon={< FaArrowsDownToPeople color={primaryColor} />} beneficiaries="Volunteers" statsNumber={20} />
                        </Flex>
                    </Stack>
                </Flex>
            </Flex>


            <Space h={100} />

            <Stack py={10} bg={"#F5F7FA"} mx={20} style={{ borderRadius: 10, }} >
                <Title py={10} ta={"center"}>Past and upcoming event highlights</Title>
                <TimelineComponent />
            </Stack>

            <Space h={100} />
            {/* Call to action section for community engagement */}
            <Stack mih={300} bg={"#eff2f4"}>
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