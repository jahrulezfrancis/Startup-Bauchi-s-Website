import { Group, Stack, Text, TextInput, Title } from "@mantine/core";
import CustomSolidButton from "./SolidButton";
import { BsSendFill } from "react-icons/bs";
import { secondaryColor } from "./Color";
import toast from "react-hot-toast";
import { FormEvent, useState } from "react";



export default function NewsLetterSection(){

    const [email, setEmail] = useState<string>("")

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function handleEmailSub(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (emailRegex.test(email)) {
            toast.error("The email you provided is not valid")
        } else if (email.length === 0) {
            toast.error("The email you provided is not valid")
        }
    }
    return(
        <form onSubmit={handleEmailSub}>
        <Stack align="start">
            <Title c={"black"}>Sign up for news letters</Title>
            <Text c="black">Sign up  for Startup Bauchi's news letter and be among the first people to know about upcoming events</Text>
            <Group gap={10}>
                <Group align="flex-end">
                    <TextInput radius={10} size="lg" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="hello@startupbauchi.com" style={{ flex: 1 }} />
                    <CustomSolidButton size="lg" leftSection={<BsSendFill />} buttonText="Send email" type="submit" bg={secondaryColor} radius={10} />
                </Group>
            </Group>
        </Stack>
    </form>
    )
}