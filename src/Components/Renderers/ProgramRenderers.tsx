import { Flex, Group } from "@mantine/core";
import ProgramsCard from "../Pages/HomePage/ProgramsCard";
import { PiPresentationLight } from "react-icons/pi";
import { GrGrow } from "react-icons/gr";
import { GiTeacher } from "react-icons/gi";
import { FaConnectdevelop } from "react-icons/fa";
import { secondaryColor } from "../Reuseables/Color";

type elementProps = {
    showAll: boolean
    showHoverContent: boolean;
}

export default function ProgramsRenderer(props: elementProps) {
    return (
        <Group justify="center">
            <Flex justify={"center"} gap={50} wrap={"wrap"}>
                <ProgramsCard showHoverContent={props.showHoverContent} index={2} icon={<PiPresentationLight color={secondaryColor} fontSize={50} />} title="Startup Bootcamp" description="Intensive bootcamps that will quickly develop practical skills for the startup world, providing immersive, and hands-on experience" />

                <ProgramsCard showHoverContent={props.showHoverContent} index={2} icon={<GiTeacher color={secondaryColor} fontSize={50} />} title="Workshops and Training" description="Educational programs covering various aspects of entrepreneurship, business development, technology, and innovation." />

                <ProgramsCard showHoverContent={props.showHoverContent} icon={<FaConnectdevelop color={secondaryColor} fontSize={50} />} title="Networking Events" description="Regular meetups, pitch nights, and networking sessions to connect entrepreneurs, investors, and industry professionals." />

                {props.showAll && <ProgramsCard showHoverContent={props.showHoverContent} icon={<GrGrow color={secondaryColor} fontSize={50} />} title="Incubation" description="Support for startups in their early stages, including workspace, mentorship, and access to funding opportunities." />}
            </Flex>
        </Group>
    )
}