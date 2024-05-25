import { Card, Stack, Title, Text, Image } from "@mantine/core";

interface StartupCardProps {
    name: string;
    description: string;
    imageUrl: string;
    website: string;
}

export default function StartupCard({ name, description, imageUrl, website }: StartupCardProps) {
    return (
        <Card w={{ base: "90vw", md: "400px", lg: "400px" }} shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <Image src={imageUrl} alt={name} height={160} />
            </Card.Section>
            <Stack align="center" mt="md">
                <Title size="lg" ta="center">{name}</Title>
                <Text ta="center" size="md">{description}</Text>
                <Text ta="center" size="sm" c="blue" component="a" href={website} target="_blank">Visit Website</Text>
            </Stack>
        </Card>
    );
}
