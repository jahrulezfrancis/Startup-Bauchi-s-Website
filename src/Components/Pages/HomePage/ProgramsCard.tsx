import { Box, Card, Stack, Title, Text } from "@mantine/core"
import { motion } from "framer-motion";
import { ReactElement } from "react";

interface cardProps {
    title: string;
    description: string;
    index?: number;
    icon: ReactElement;
}

export default function ProgramsCard(props: cardProps) {
    return (
        <Box>
            <motion.div
                className="card"
                initial={{
                    opacity: 0,
                    // if odd index card,slide from right instead of left
                    x: props.index && props.index % 2 === 0 ? 50 : -50
                }}
                whileInView={{
                    opacity: 1,
                    x: 0, // Slide in to its original position
                    transition: {
                        duration: 1 // Animation duration
                    }
                }}
                whileHover={{ scale: 1.06 }}
                transition={{ type: 'spring', stiffness: 300 }}
                viewport={{ once: false }}>
                <Card h={250} w={{ base: "90vw", md: "400px", lg: "400px" }} p={"xl"} shadow="sm" radius="md" withBorder>
                    <Card.Section>
                        <Stack align="center">
                            {props.icon}
                            <Title size={"lg"}>{props.title}</Title>
                            <Text ta="center" size="md">{props.description}</Text>
                        </Stack>
                    </Card.Section>
                </Card>
            </motion.div>
        </Box>
    )
}