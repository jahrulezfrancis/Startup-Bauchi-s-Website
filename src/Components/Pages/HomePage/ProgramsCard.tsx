import { Box, Card, Stack, Title, Text } from "@mantine/core"
import { motion } from "framer-motion";
import { ReactElement, useState } from "react";
import CustomSolidButton from "../../Reuseables/SolidButton";
import { secondaryColor } from "../../Reuseables/Color";
import { Link } from "react-router-dom";

interface cardProps {
    title: string;
    description: string;
    index?: number;
    icon: ReactElement;
}

export default function ProgramsCard(props: cardProps) {
    const [IsHover, setIsHover] = useState(false)
    const incubation = props.title.toLowerCase() !== "incubation"

    function HoverContent() {
        return (
            <Stack style={{ cursor: "pointer" }} justify="center" align="center">
                <Title ta={"center"} size={"18px"}>Be a part of our {props.title}</Title>
                <Text ta={"center"}>{props.description}</Text>
                <Link to={"/program-signup"}>
                    <CustomSolidButton onClick={() => localStorage.setItem("program", props.title)} c={incubation ? "" : "#ececec"} disabled={!incubation} bg={secondaryColor} w={"100%"} buttonText={incubation ? `Sign up for ${props.title}` : "Coming Soon"} />
                </Link>
            </Stack>
        )
    }


    return (
        <Box>
            <motion.div
                className="card"
                initial={{
                    opacity: 0,
                    x: props.index && props.index % 2 === 0 ? 50 : -50
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 1
                    }
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                viewport={{ once: false }}
            >
                <Card onMouseLeave={() => setIsHover(false)} onMouseEnter={() => setIsHover(true)} mih={250} h={"auto"} w={{ base: "90vw", md: "400px", lg: "400px" }} p={"xl"} shadow=" 0px 0px 5px 1px #deddda" radius="md">
                    {!IsHover &&
                        <Stack align="center">
                            {props.icon}
                            <Title size={"lg"}>{props.title}</Title>
                            <Text ta="center" size="md">{props.description}</Text>
                        </Stack>
                    }
                    {IsHover && <HoverContent />}
                </Card>
            </motion.div>
        </Box>
    )
}