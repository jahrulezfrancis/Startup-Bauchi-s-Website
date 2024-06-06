
import { Box, Stack, Title, Text,  } from "@mantine/core";
import { useState } from "react";
import { Tabs } from '@mantine/core';
import StartupSignUpForm from "./Forms/Startup.form";
import VolunteerSignUpForm from "./Forms/Volunteer.form";




export default function GetInvolvedPage() {
    const [activeTab, setActiveTab] = useState<string | null>('first');


    return (
        <Box>
            <Stack align="center" p={10}>
                <Title ta="center">Get Involved</Title>
                <Text mb={20} ta="center" w={{ base: "100%", md: "70%", lg: "500px" }}>
                    Join us in making a difference. Whether you're looking to volunteer your time, share your expertise, or support our initiatives, there are many ways to get involved with Startup Bauchi.
                </Text>
            </Stack>
            <Stack mb={20} align="center" gap={20}>
                <Text>Signing up as {activeTab === "first" ? "a company" : "a volunteer"}</Text>
                {/* {activeTab === "first" ? <GoOrganization fontSize={100} /> : <FaHandsHelping fontSize={100} />} */}
            </Stack>
            <Tabs p={10} value={activeTab} onChange={setActiveTab}>
                <Tabs.List justify="center">
                    <Tabs.Tab value="first">Sign up as a partner</Tabs.Tab>
                    <Tabs.Tab value="second">Sign up as a volunteer</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="first">
                    <StartupSignUpForm formPosition="center" showIcon={true} />
                </Tabs.Panel>

                <Tabs.Panel value="second">
                    <VolunteerSignUpForm />
                </Tabs.Panel>
            </Tabs>
        </Box>
    );
}
