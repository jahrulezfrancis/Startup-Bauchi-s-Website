import { Stack, Image, Text, Card, Badge, Group } from "@mantine/core"
import { Link } from "react-router-dom";
import CustomSolidButton from "../../Reuseables/SolidButton";
import { secondaryColor } from "../../Reuseables/Color";

interface CardProps {
    eventTitle: string;
    eventDescription: string;
    eventImage: string;
    eventDone: boolean;
}


export default function EventCard(props: CardProps) {

    const date = new Date().toDateString()

    return (
        <Stack w={370} align="center" justify="start" mih={400} h={"auto"} pos={"relative"}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                    <Image
                        src={props.eventImage}
                        height={160}
                        alt="Norway"
                    />
                </Card.Section>

                <Group gap={9} justify="start" mt="md" mb="xs">
                    <Text fw={500}>{props.eventTitle}</Text>
                    {/* <Badge color={props.eventDone ? "red": "green"}>{props.eventDone ? "done" : "new"}</Badge> */}
                </Group>

                <Text size="sm" c="dimmed">
                    {props.eventDescription}
                </Text>

                <Group gap={9} justify="start" mt="md" mb="xs">
                    <Text fw={500}>Date</Text>
                    <Badge color={props.eventDone ? "red" : "green"}>{date}</Badge>
                </Group>

                {props.eventDone ?
                    <Link style={{ textDecoration: "none" }} to={"#"}>
                        <CustomSolidButton buttonText="Explore highlights from event" fullWidth color="green" bg={secondaryColor} radius={"md"} />
                    </Link>
                    :
                    <Link style={{ textDecoration: "none" }} to={"#"}>
                        <CustomSolidButton buttonText="Sign up for event" fullWidth color="green" bg={secondaryColor} radius={"md"} />
                    </Link>
                }
            </Card>
        </Stack>
    )
}