import { Box, Stack, Flex, Button, Space, TextInput, Textarea } from "@mantine/core";
import { ChangeEvent, FormEvent, useState } from "react";
import { GoOrganization } from "react-icons/go";

export default function StartupSignUpForm() {
    const [formData, setFormData] = useState({
        companyName: "",
        companyEmail: "",
        message: "",
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { companyName, companyEmail, message } = formData;
        if (companyName && companyEmail && message) {
            // handle form submission
            alert("Thank you for signing up to volunteer!");
        } else {
            alert("Please fill out all fields.");
        }
    };


    return (
        <Box px={10} pt={20}>
            <Flex w={"100%"} direction={"column"} justify="center" align={{ base: "", md: "center" }}>
                <Flex justify="center" gap={20} wrap="wrap">
                    <GoOrganization fontSize={80} />
                </Flex>
                <form onSubmit={handleFormSubmit}>
                    <Stack style={{ alignSelf: "center" }} align="center" w={{ base: "100%", md: "100%", lg: "500px" }}>

                        <TextInput w={"100%"} label="Company Name" radius={8} size="md" name="companyName" value={formData.companyName} onChange={handleChange}
                            placeholder="Company or startup name" required />

                        <TextInput w={"100%"} label="Company email address" radius={8} size="md" name="companyName" value={formData.companyEmail} onChange={handleChange} type="email" placeholder="Your Email" required />

                        <Textarea w={"100%"} label="Message" radius={8} size="md" value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.currentTarget.value })} required resize="vertical" />

                        <Button mt={30} w={"100%"} radius={10} size="md" type="submit">Submit Application</Button>
                    </Stack>
                </form>
            </Flex>
            <Space h={100} />
        </Box>
    )
}