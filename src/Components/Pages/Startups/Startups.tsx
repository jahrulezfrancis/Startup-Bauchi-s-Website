import { Title } from "@mantine/core";
import StartupSignUpForm from "../GetInvolved/Forms/Startup.form";
import FormOverlayContainer from "../../Reuseables/FormOverlayContainer";

export default function StartupPage() {

    return (
        <FormOverlayContainer content={
            <>
                <Title ta={"center"}>Join our Community</Title>
                <StartupSignUpForm buttonText={"Join now"} showIcon={false} formPosition="center" />
            </>
        } />

    );
}
