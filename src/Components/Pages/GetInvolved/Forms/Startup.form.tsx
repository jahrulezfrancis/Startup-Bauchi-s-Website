import { Box, Stack, Flex, Space, TextInput, Textarea } from "@mantine/core";
import { doc, setDoc } from "firebase/firestore";
import { ChangeEvent, FormEvent, useState } from "react";
import emailjs from '@emailjs/browser';
import { GoOrganization } from "react-icons/go";
import { notifications } from "@mantine/notifications";
import { secondaryColor } from "../../../Reuseables/Color";
import CustomSolidButton from "../../../Reuseables/SolidButton";
import { programsRef } from "../../../Utils/firebase.config";
import { emailReceiver, emailjs_pubkey, serviceKey, templateId } from "../../../Utils/envExports";


interface formProps {
    showIcon: boolean;
    formPosition: "start" | "end" | "center";
}

export default function StartupSignUpFzorm(props: formProps) {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        companyName: "",
        companyEmail: "",
        message: "",
    });


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const templateSheme = {
        from_name: formData.companyName,
        from_email: formData.companyEmail,
        message: formData.message,
        to_email: emailReceiver,
        to_name: "Startup Bauchi Admin",
    }

    function clearForm() {
        setFormData({ companyName: "", companyEmail: "", message: "" })
    }


    const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        const { companyEmail, companyName, message } = formData;

        if (companyEmail && companyName && message) {
            try {
                // Send email
                await emailjs.send(serviceKey, templateId, templateSheme, emailjs_pubkey);
                notifications.show({
                    title: "Registration successful",
                    message: "Your Registration was successful. Our team will get back to you within 48 hours. Regards",
                    color: "teal",
                });

                // Update Firestore document
                await setDoc(doc(programsRef), {
                    companyName: companyName,
                    companyEmail: companyEmail,
                    message: message,
                });
                setLoading(false)
                clearForm();
            } catch (error) {
                console.error('Submission failed', error);
                notifications.show({
                    title: "Registration Failed",
                    message: "Your Registration was not successful. Please try again",
                    color: "red"
                });
            } finally {
                setLoading(false);
            }
        } else {
            alert("Please fill out all fields.");
            setLoading(false);
        }
    };



    return (
        <Box px={10} pt={20}>
            <Flex maw={"100vw"} direction={"column"} justify="center" align={{ base: "center", md: "center", lg: props.formPosition }}>
                {props.showIcon &&
                    <Flex justify="center" gap={20} wrap="wrap">
                        <GoOrganization fontSize={80} />
                    </Flex>
                }
                <form onSubmit={handleFormSubmit}>
                    <Stack align="center" w={{ base: "90vw", md: "80vw", lg: "500px" }}>

                        <TextInput w={"100%"} label="Company Name" radius={8} size="md" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company or startup name" required />

                        <TextInput w={"100%"} label="Company email address" radius={8} size="md" name="companyEmail" value={formData.companyEmail} onChange={handleChange} type="email" placeholder="Your Email" required />

                        <Textarea w={"100%"} label="Message" radius={8} size="md" value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.currentTarget.value })} required resize="vertical" />
                        <CustomSolidButton bg={secondaryColor} loading={loading} mt={30} w={"100%"} radius={10} size="md" type="submit" buttonText="Submit Application" />
                    </Stack>
                </form>
            </Flex>
            <Space h={100} />
        </Box >
    )
}