import { Box, Stack, Flex, Button, Space, TextInput, Textarea } from "@mantine/core";
import { ChangeEvent, FormEvent, useState } from "react";
import emailjs from '@emailjs/browser';
import { GoOrganization } from "react-icons/go";
import { notifications } from "@mantine/notifications";

export default function StartupSignUpForm() {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        companyName: "",
        companyEmail: "",
        message: "",
    });

    const emailjs_pubkey = import.meta.env.VITE_EMAILJS_PUBKEY;
    const serviceKey = import.meta.env.VITE_EMAIL_JS_SERVICE;
    const templateId = import.meta.env.VITE_EMAILJS_STARTUP_TEMP;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const templateSheme = {
        from_name: formData.companyName,
        from_email: formData.companyEmail,
        to_name: "Startup Bauchi Admin",
        message: formData.message
    }

    function clearForm() {
        setFormData({ companyName: "", companyEmail: "", message: "" })
    }

    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true)

        const { companyName, companyEmail, message } = formData;
        if (companyName && companyEmail && message) {
            // handle form submission
            emailjs.send(serviceKey, templateId, templateSheme, emailjs_pubkey)
                .then(
                    () => {
                        setLoading(false)
                        clearForm()
                        return notifications.show({ title: "Application sent successfully", message: "Your Application has been received successfully. Our team will get back to you within 48 hours. Regards", color: "teal", })
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                        setLoading(false)
                        return notifications.show({ title: "Registration Failed", message: "Your Application was not sent successfully. Please try again", color: "red" })
                    },
                );
        } else {
            alert("Please fill out all fields.");
            setLoading(false)
        }
    };


    return (
        <Box px={10} pt={20}>
            <Flex maw={"100vw"} direction={"column"} justify="center" align={{ base: "center", md: "center" }}>
                <Flex justify="center" gap={20} wrap="wrap">
                    <GoOrganization fontSize={80} />
                </Flex>
                <form onSubmit={handleFormSubmit}>
                    <Stack align="center" w={{ base: "90vw", md: "80vw", lg: "500px" }}>

                        <TextInput w={"100%"} label="Company Name" radius={8} size="md" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company or startup name" required />

                        <TextInput w={"100%"} label="Company email address" radius={8} size="md" name="companyEmail" value={formData.companyEmail} onChange={handleChange} type="email" placeholder="Your Email" required />

                        <Textarea w={"100%"} label="Message" radius={8} size="md" value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.currentTarget.value })} required resize="vertical" />

                        <Button loading={loading} mt={30} w={"100%"} radius={10} size="md" type="submit">Submit Application</Button>
                    </Stack>
                </form>
            </Flex>
            <Space h={100} />
        </Box>
    )
}