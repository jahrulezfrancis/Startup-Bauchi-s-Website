import { Box, Stack, Title, Text, Flex, Space } from "@mantine/core";
import StartupCard from "./StartupCard";

export default function StartupPage() {

    const startupData = [
        {
            id: 1,
            name: "Startup One",
            description: "An innovative solution to modern problems.",
            imageUrl: "https://placehold.co/300",
            website: "https://www.startupone.com"
        },
        {
            id: 2,
            name: "Startup Two",
            description: "Leading the way in tech innovation.",
            imageUrl: "https://placehold.co/300",
            website: "https://www.startuptwo.com"
        },
        // Add more startups as needed
    ];

    return (
        <Box mt={80}>
            <Stack>
                <Stack p={10}>
                    <Title ta="center">Startups Powered by Us</Title>
                    <Text ta="center">
                        Discover the innovative startups that are making waves with the support of Startup Bauchi.
                    </Text>
                </Stack>
                <Stack style={{ borderRadius: 10 }} mx={{ base: 0, md: 10, lg: 50 }} p={{ base: 10, md: 20, lg: 30 }} bg="#f9f9f9">
                    <Flex justify="center" gap={20} wrap="wrap">
                        {startupData.map((startup) => (
                            <StartupCard description={startup.description} imageUrl={startup.imageUrl} name={startup.name} website={startup.website} key={startup.id} />
                        ))}
                    </Flex>
                </Stack>
            </Stack>
            <Space h={100} />
        </Box>
    );
}
