import { Group, Card, Image, Text } from "@mantine/core"
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { secondaryColor } from "../../Reuseables/Color";
import CustomSolidButton from "../../Reuseables/SolidButton";


interface cardProps {
    title: string;
    description: string;
    icon?: ReactElement;
    postLink: string;
}

export default function BlogPostCard(props: cardProps) {
    return (
        <Card w={"500px"} shadow="sm" padding="lg" radius="md" withBorder={false}>
            <Card.Section>
                <Image
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                    height={160}
                    alt="Norway"
                />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{props.title}</Text>
                {/* <Badge color="pink">On Sale</Badge> */}
            </Group>

            <Text size="sm" c="dimmed">
                {props.description}
            </Text>

            <Link to={props.postLink}>
                <CustomSolidButton bg={secondaryColor} color="blue" fullWidth mt="md" radius="md" buttonText="Learn More" />
            </Link>
        </Card>
    )
}