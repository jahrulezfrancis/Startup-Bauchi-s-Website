import { Flex, Stack, Title } from "@mantine/core"
import { motion } from "framer-motion"
import { CgOrganisation } from "react-icons/cg"
import { secondaryColor } from "../Reuseables/Color"


export default function ContinousSlider() {
    const startupsData = [{ icon: <CgOrganisation color={secondaryColor} fontSize={80} />, name: "Company one" }, { icon: <CgOrganisation color={secondaryColor} fontSize={80} />, name: "Company one" }, { icon: <CgOrganisation color={secondaryColor} fontSize={80} />, name: "Company one" }, { icon: <CgOrganisation color={secondaryColor} fontSize={80} />, name: "Company one" }]

    return (
        <motion.div
            animate={{
                x: ['100%', '-100%'],
                transition: {
                    ease: 'linear',
                    duration: 10,
                    repeat: Infinity,
                }
            }}>
            <Flex style={{flexShrink: 0}} justify={"stretch"} gap={20} w={"700px"}>
                {
                    startupsData.map((item, index) => {
                        return (
                            <Stack key={index} w={{ base: "200px", md: "200px", lg: "200px" }}>
                                {item.icon}
                                <Title size={"sm"}>{item.name}</Title>
                            </Stack >
                        )
                    })
                }
            </Flex>

        </motion.div>
    )

}