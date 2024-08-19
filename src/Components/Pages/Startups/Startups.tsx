import { Box, Stack, Title } from "@mantine/core";
import StartupSignUpForm from "../GetInvolved/Forms/Startup.form";


export default function StartupPage() {

    return (
        <Box pt={20}>
            <Stack>
                <Title ta={"center"}>Join our Community</Title>
                <StartupSignUpForm buttonText={"Join now"} showIcon={false} formPosition="center" />
            </Stack>
        </Box>
    );
}
