
import { Box, Stack, Title, Text, Flex, Button, Space, TextInput, Select, FileButton, Group } from "@mantine/core";
import { FaHandsHelping } from "react-icons/fa";
import { ChangeEvent, FormEvent, useRef, useState } from "react";



export default function GetInvolvedPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        role: "",
        cv: null
    });
    const [file, setFile] = useState<File | null>(null);
    const resetRef = useRef<() => void>(null);

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

    const clearFile = () => {
        setFile(null);
        resetRef.current?.();
    };

    return (
        <Box pt={20}>
            <Stack  align="center">
                <Title ta="center">Get Involved</Title>
                <Text mb={50} ta="center" w={{ base: "80%", md: "70%", lg: "500px" }}>
                    Join us in making a difference. Whether you're looking to volunteer your time, share your expertise, or support our initiatives, there are many ways to get involved with Startup Bauchi.
                </Text>
                <Flex justify="center" gap={20} wrap="wrap">
                    <FaHandsHelping fontSize={100} />
                </Flex>
                <Space h={30} />
                <form onSubmit={handleFormSubmit}>
                    <Stack align="center" w={{ base: "100%", md: "100%", lg: "500px" }}>
                        <TextInput
                            w={"100%"}
                            radius={10}
                            label="Full name"
                            size="lg"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your Name"
                            required
                        />
                        <TextInput
                            label="Email address"
                            w={"100%"}
                            radius={10}
                            size="lg"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            type="email"
                            placeholder="Your Email"
                            required
                        />
                        <TextInput
                            label="Phone number"
                            w={"100%"}
                            radius={10}
                            size="lg"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Your Phone Number"
                            required
                        />
                        <Select
                            label="Role you are volunteering for"
                            w={"100%"}
                            radius={10}
                            size="lg"
                            name="role"
                            placeholder="Select Role"
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
                        <Group w={"100%"} justify="space-between">
                            <FileButton resetRef={resetRef} onChange={setFile} accept="text/plain, .pdf, .doc, .docx,">
                                {(props) => <Button {...props}>Upload CV</Button>}
                            </FileButton>
                            <Button disabled={!file} color="red" onClick={clearFile}>
                                Reset
                            </Button>
                        </Group>

                        {file && (
                            <Text size="sm" ta="center" mt="sm">
                                Picked file: {file.name}
                            </Text>
                        )}
                        <Button radius={10} size="lg" type="submit">Submit Application</Button>
                    </Stack>
                </form>
            </Stack>
            <Space h={100} />
        </Box>
    );
}
