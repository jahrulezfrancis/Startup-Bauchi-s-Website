import { Box, Stack, Title, Text, Flex, Space } from "@mantine/core";
import TestimonialsRenderer from "../../Reuseables/TestimonialRenderer";

export default function TestimonialsPage() {
    return (
        <Box mt={80}>
            <Stack align="center">
                <Title mt={50} ta="center">What our clients say about us</Title>
                <Text mb={50} ta="center" w={{ base: "80%", md: "70%", lg: "60%" }}>
                    Hear from our satisfied clients and partners who have experienced our programs and services.
                </Text>
                <Flex justify="center" gap={20} wrap="wrap">
                    <TestimonialsRenderer />
                </Flex>
            </Stack>
            <Space h={100} />
        </Box>
    );
}
