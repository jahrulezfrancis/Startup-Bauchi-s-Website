import { Box, Stack, Flex, Button, Space, TextInput, Select } from "@mantine/core";
import { ChangeEvent, FormEvent, useState } from "react";
import { FaHandsHelping } from "react-icons/fa";

export default function VolunteerSignUpForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        role: "",
    });



    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleFormSubmit = (event: FormEvent) => {
        event.preventDefault();
        const { name, email, phone, role } = formData;
        if (name && email && phone && role) {
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
                    <FaHandsHelping fontSize={80} />
                </Flex>
                {/* <Space h={30} /> */}
                <form onSubmit={handleFormSubmit}>
                    <Stack align="center" w={{ base: "100%", md: "100%", lg: "500px" }}>

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
                        <Button w={"100%"} radius={10} mt={30} size="md" type="submit">Submit Application</Button>
                    </Stack>
                </form>
            </Flex>
            <Space h={100} />
        </Box>
    )
} 