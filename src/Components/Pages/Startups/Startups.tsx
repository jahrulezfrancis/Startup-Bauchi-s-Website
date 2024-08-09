import { Box, Stack, Title } from "@mantine/core";
import StartupSignUpForm from "../GetInvolved/Forms/Startup.form";


export default function StartupPage() {

    return (
        <Box pt={20}>
            <Stack>
                <Title fw={500} ta={"center"}>Join Startup Bauchi Community</Title>
                <StartupSignUpForm buttonText={"Join now"} showIcon={false} formPosition="center" />
            </Stack>
        </Box>
    );
}
