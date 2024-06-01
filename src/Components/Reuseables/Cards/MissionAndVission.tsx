import { Card, Flex, Text } from "@mantine/core";
import { FaRegEye } from "react-icons/fa";
import { GiBullseye } from "react-icons/gi";


interface cardProps {
    title: string;
    description: string

}

export default function MissionAndVissionCard(props: cardProps) {
    return (
        <Card mih={230} shadow=" 0px 0px 10px 1px #deddda" padding="lg" radius="lg" >
            <Flex gap={5} direction={"column"} align={"center"}>
                {props.title.toLowerCase().includes("mission") ? <GiBullseye style={{ alignSelf: "center" }} fontSize={50} /> : <FaRegEye style={{ alignSelf: "center" }} fontSize={50} />}
                <Text ta="center" size="xl" fw={700}>
                    {props.title}
                </Text>
                <Text ta="center">
                    {props.description}
                </Text>
            </Flex>
        </Card>
    )
}