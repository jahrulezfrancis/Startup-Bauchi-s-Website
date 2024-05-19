import { Box, Flex, Stack, Title, Text } from "@mantine/core";
import { ReactNode } from "react";


interface CardProps {
    statsNumber: number;
    beneficiaries: string;
    Icon: ReactNode;
}

export default function StatisticsCard(props: CardProps) {
    return (
        <Box>
            <Flex gap={2} w={"200px"} h={"60px"} align="space-around">
                <Stack fz={40}>
                    {props.Icon}
                </Stack>
                <Stack gap={"0px"}>
                    <Title order={4}>{props.statsNumber}</Title>
                    <Text mt={-8}>{props.beneficiaries}</Text>
                </Stack>
            </Flex>
        </Box>
    )
}