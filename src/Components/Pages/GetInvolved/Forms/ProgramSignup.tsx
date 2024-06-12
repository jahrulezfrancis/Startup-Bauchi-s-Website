import { Box, Stack, Flex, Space, TextInput, Select, ComboboxItem, Switch, Title } from "@mantine/core";
import { ChangeEvent, FormEvent, useState } from "react";
import emailjs from '@emailjs/browser';
import { notifications } from "@mantine/notifications";
import { secondaryColor } from "../../../Reuseables/Color";
import CustomSolidButton from "../../../Reuseables/SolidButton";
import { emailReceiver, emailjs_pubkey, serviceKey, templateId } from "../../../Utils/envExports";
import { doc, setDoc } from "firebase/firestore";
import { programsRef } from "../../../Utils/firebase.config";


export default function ProgramSignUpForm() {
    const [loading, setLoading] = useState(false)
    const [value, setValue] = useState<ComboboxItem | null>(null);

    const selectedProgram = localStorage.getItem('program')

    const [isCompany, setIsCompany] = useState(false)
    const [formData, setFormData] = useState({
        participantName: "",
        emailAddress: "",
        selectedProgram: value ? value : selectedProgram,
        isCompany: isCompany
    });



    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const templateSheme = {
        from_name: formData.participantName,
        from_email: formData.emailAddress,
        to_email: emailReceiver,
        to_name: "Startup Bauchi Admin",
    }

    function clearForm() {
        setFormData({ participantName: "", emailAddress: "", isCompany: false, selectedProgram: "" })
    }

    const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        const { participantName, emailAddress } = formData;

        if (participantName && emailAddress) {
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
                    participantName: participantName,
                    emailAddress: emailAddress,
                    isCompany: isCompany,
                    selectedProgram: selectedProgram
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
            <Flex maw={"100vw"} direction={"column"} justify="center" align={"center"}>
                <form onSubmit={handleFormSubmit}>

                    <Stack p={{ base: 20, md: 30, lg: 30 }} style={{ boxShadow: "0px 0px 10px 1px #deddda", borderRadius: 10 }} align="center" w={{ base: "90vw", md: "80vw", lg: "500px" }}>

                        <Title size={"18px"} ta={"center"}>Program Registration Form</Title>

                        <Switch size="md" style={{ alignSelf: "start" }} label={"Sign up as a company"}
                            checked={isCompany} onChange={(event) => setIsCompany(event.currentTarget.checked)}
                        />

                        <TextInput w={"100%"} label={isCompany ? "Company Name" : "Participant Name"} radius={8} size="md" name="participantName" value={formData.participantName} onChange={handleChange} placeholder="Company or startup name" required />

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

                        <CustomSolidButton bg={secondaryColor} loading={loading} mt={30} w={"100%"} radius={10} size="md" type="submit" buttonText="Register" />
                    </Stack>
                </form>
            </Flex>
            <Space h={100} />
        </Box >
    )
}