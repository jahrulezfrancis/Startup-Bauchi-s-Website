import { Box, Card, Stack, Title, Text } from "@mantine/core"
import { MdSell } from "react-icons/md"

interface cardProps {
    title: string;
    description: string;
}

export default function ProgramsCard(props: cardProps) {
    return (
        <Box>
            <Card h={250} w={{ base: "400px" }} p={"xl"} shadow="sm" radius="md" withBorder>
                <Card.Section>
                    <Stack align="center">
                        <MdSell fontSize={50} />
                        <Title size={"lg"}>{props.title}</Title>
                        <Text ta="center" size="md">{props.description}</Text>
                    </Stack>
                </Card.Section>
            </Card>
        </Box>
    )
}