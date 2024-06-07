import { Box, Stack, Flex, Space, TextInput, Select, ComboboxItem, Switch, Title } from "@mantine/core";
import { ChangeEvent, FormEvent, useState } from "react";
import emailjs from '@emailjs/browser';
import { notifications } from "@mantine/notifications";
import { secondaryColor } from "../../../Reuseables/Color";
import CustomSolidButton from "../../../Reuseables/SolidButton";


export default function ProgramSignUpForm() {
    const [loading, setLoading] = useState(false)
    const [value, setValue] = useState<ComboboxItem | null>(null);
    const [isCompany, setIsCompany] = useState(false)
    const [formData, setFormData] = useState({
        fullName: "",
        emailAddress: "",
        isCompany: isCompany
    });

    const selectedProgram = localStorage.getItem('program')

    const emailjs_pubkey = import.meta.env.VITE_EMAILJS_PUBKEY;
    const serviceKey = import.meta.env.VITE_EMAIL_JS_SERVICE;
    const templateId = import.meta.env.VITE_EMAILJS_STARTUP_TEMP;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const templateSheme = {
        from_name: formData.fullName,
        from_email: formData.emailAddress,
        to_name: "Startup Bauchi Admin",
    }

    function clearForm() {
        setFormData({ fullName: "", emailAddress: "", isCompany: false })
    }

    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true)

        const { fullName, emailAddress } = formData;
        if (fullName && emailAddress) {
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
            <Flex maw={"100vw"} direction={"column"} justify="center" align={"center"}>
                <form onSubmit={handleFormSubmit}>

                    <Stack p={{ base: 20, md: 30, lg: 30 }} style={{ boxShadow: "0px 0px 10px 1px #deddda", borderRadius: 10 }} align="center" w={{ base: "90vw", md: "80vw", lg: "500px" }}>

                        <Title size={"18px"} ta={"center"}>Program Registration Form</Title>

                        <Switch size="md" style={{ alignSelf: "start" }} label={"Sign up as a company"}
                            checked={isCompany} onChange={(event) => setIsCompany(event.currentTarget.checked)}
                        />

                        <TextInput w={"100%"} label={isCompany ? "Company Name" : "Full Name"} radius={8} size="md" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Company or startup name" required />

                        <TextInput w={"100%"} label={isCompany ? "Company email address" : "Email Address"} radius={8} size="md" name="emailAddress" value={formData.emailAddress} onChange={handleChange} type="email" placeholder="Your Email" required />

                        <Select
                            label="Signing Up For"
                            w={"100%"} size="md"
                            data={[
                                { value: 'Startup Bootcamp', label: 'Startup Bootcamp' },
                                { value: 'Workshops and Training', label: 'Workshops and Training' },
                                { value: 'Networking Events', label: 'Networking Events' },
                            ]}
                            value={selectedProgram ? selectedProgram : value ? value.value : null}
                            onChange={(_value, option) => setValue(option)}
                        />


                        {/* <Textarea w={"100%"} label="Message" radius={8} size="md" value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.currentTarget.value })} required resize="vertical" /> */}
                        <CustomSolidButton bg={secondaryColor} loading={loading} mt={30} w={"100%"} radius={10} size="md" type="submit" buttonText="Register " />
                    </Stack>
                </form>
            </Flex>
            <Space h={100} />
        </Box >
    )
}