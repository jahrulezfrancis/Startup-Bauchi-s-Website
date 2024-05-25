import { Box, Card, Stack, Title, Text } from "@mantine/core"
import { ReactElement } from "react";

interface cardProps {
    title: string;
    description: string;
    icon: ReactElement;
}

export default function ProgramsCard(props: cardProps) {
    return (
        <Box>
            <Card h={250} w={{ base: "90vw", md: "400px", lg: "400px" }} p={"xl"} shadow="sm" radius="md" withBorder>
                <Card.Section>
                    <Stack align="center">
                        {props.icon}
                        <Title size={"lg"}>{props.title}</Title>
                        <Text ta="center" size="md">{props.description}</Text>
                    </Stack>
                </Card.Section>
            </Card>
        </Box>
    )
}