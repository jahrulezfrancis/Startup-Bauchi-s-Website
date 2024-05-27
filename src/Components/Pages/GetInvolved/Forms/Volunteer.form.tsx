import { Box, Stack, Flex, Button, Space, TextInput, Select } from "@mantine/core";
import { ChangeEvent, FormEvent, useState } from "react";
import { FaHandsHelping } from "react-icons/fa";
import emailjs from "@emailjs/browser"
import { notifications } from "@mantine/notifications";

export default function VolunteerSignUpForm() {

    const [loading, setIsloading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        role: "",
    });

    const emailjs_pubkey = import.meta.env.VITE_EMAILJS_PUBKEY
    const serviceKey = import.meta.env.VITE_EMAIL_JS_SERVICE
    const templateId = import.meta.env.VITE_EMAILJS_INDIVIDUAL_TEMP

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const templateSheme = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone_number: formData.phone,
        to_name: "Startup Bauchi Admin",
        person_role: formData.role
    }

    function clearForm() {
        setFormData({ name: "", email: "", phone: "", role: "" })
    }

    const handleFormSubmit = (event: FormEvent) => {
        event.preventDefault();
        setIsloading(true)
        const { name, email, phone, role } = formData;
        if (name && email && phone && role) {
            setIsloading(true)
            // handle form submission
            emailjs.send(serviceKey, templateId, templateSheme, emailjs_pubkey)
                .then(
                    () => {
                        setIsloading(false)
                        clearForm()
                        return notifications.show({ title: "Application sent successfully", message: "Your Application has been received successfully. Our team will get back to you within 48 hours. Regards", color: "teal", })
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                        setIsloading(false)
                        return notifications.show({ title: "Registration Failed", message: "Your Application was not sent successfully. Please try again", color: "red" })
                    },
                );
        } else {
            alert("Please fill out all fields.");
            setIsloading(false)
        }
    };

    return (
        <Box px={10} pt={20}>
            <Flex w={"100%"} direction={"column"} justify="center" align={{ base: "", md: "center" }}>
                <Flex justify="center" gap={20} wrap="wrap">
                    <FaHandsHelping fontSize={80} />
                </Flex>
                {/* <Space h={30} /> */}
                <form onSubmit={handleFormSubmit}>
                    <Stack align="center" w={{ base: "90vw", md: "80vw", lg: "500px" }}>

                        <TextInput w={"100%"} radius={10} label="Full name" size="md" name="name" value={formData.name} onChange={handleInputChange}
                            placeholder="Your Name" required />

                        <TextInput label="Email address" w={"100%"} radius={10} size="md" name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="Your Email" required />

                        <TextInput label="Phone number" w={"100%"} radius={10} size="md" name="phone" value={formData.phone} onChange={handleInputChange}
                            placeholder="Your Phone Number" required />

                        <Select label="Role you are volunteering for" w={"100%"} radius={10} size="md" name="role" placeholder="Select Role"
                            data={[
                                { value: "frontend development", label: "Frontend Development" },
                                { value: "backend developemt", label: "Backend Development" },
                                { value: "project management", label: "Project management" },
                                { value: "digital marketting", label: "Digital marketting" },
                                { value: "ui/ux design", label: "UI/UX Design" },
                                { value: "graphic design", label: "Graphic Design" },
                                { value: "", label: "Product management" },
                            ]}
                            value={formData.role}
                            onChange={(_value, option) => setFormData({ ...formData, role: option.value })}
                            required
                        />
                        <Button loading={loading} w={"100%"} radius={10} mt={30} size="md" type="submit">Submit Application</Button>
                    </Stack>
                </form>
            </Flex>
            <Space h={100} />
        </Box>
    )
} 