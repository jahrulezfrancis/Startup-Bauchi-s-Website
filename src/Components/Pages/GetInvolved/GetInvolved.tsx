import { Box, Stack, Title, Text, } from "@mantine/core";
import { useState } from "react";
import { Tabs } from '@mantine/core';
import StartupSignUpForm from "./Forms/Startup.form";
import VolunteerSignUpForm from "./Forms/Volunteer.form";




export default function GetInvolvedPage() {
    const [activeTab, setActiveTab] = useState<string | null>('first');


    return (
        <Box>
            <Stack align="center" p={10}>
                <Title ta="center">Join us in making a difference</Title>
                <Text lh={2} mb={20} ta="center" w={{ base: "100%", md: "70%", lg: "800px" }}>
                    Whether you're looking to volunteer your time, share your expertise, or support our initiatives, there are many ways to get involved with Startup Bauchi.
                </Text>
            </Stack>
            <Tabs  p={10} value={activeTab} onChange={setActiveTab}>
                <Tabs.List justify="center">
                    <Tabs.Tab value="first">
                        <Text>Sign up as a partner</Text>
                    </Tabs.Tab>

                    <Tabs.Tab value="second">
                        <Text>Sign up as a volunteer</Text>
                    </Tabs.Tab>
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
