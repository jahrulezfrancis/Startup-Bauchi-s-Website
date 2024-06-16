import { PasswordInput, Group, Stack, TextInput, Card, Title } from '@mantine/core';
import { ChangeEvent, FormEvent, useState } from 'react';
import CustomSolidButton from '../../Reuseables/SolidButton';
import { secondaryColor } from '../../Reuseables/Color';
import { auth } from '../../Utils/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { showNotification } from '@mantine/notifications';
import { Navigate, useNavigate } from 'react-router-dom';

export default function LoginPage() {

    const [isLoading, setIsLoading] = useState(false)

    const [authDetails, setAuthDetails] = useState({
        email: "",
        password: ""
    })

    const token = localStorage.getItem("auth-token")

    const navigate = useNavigate()

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true)
        signInWithEmailAndPassword(auth, authDetails.email, authDetails.password)
            .then((userCredential) => {
                // Signed in 
                setIsLoading(false)
                console.log("Successfully login")
                navigate("/admin")
                const user = userCredential.user;
                showNotification({ color: "teal", title: "login successful", message: "Redirecting...", autoClose: 1000 })
                const token = user.getIdToken()
                localStorage.setItem("auth-token", token.toString())
                // ...
            })
            .catch((error) => {
                setIsLoading(false)
                const errorMessage = error.message === "Firebase: Error (auth/invalid-credential)." ? "Invalid account details, please check your email/password and try again, " : error.message;
                showNotification({ color: "red", title: "login failed", message: errorMessage })
            });
    }


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        console.log(name + ":" + value)
        setAuthDetails((prevValue) => ({ ...prevValue, [name]: value }))

    }


    if (token) {
        return <Navigate to={"/admin"} />
    }

    return (
        <Stack align='center' mt={150}>
            <form onSubmit={handleSubmit}>
                <Card radius={10} shadow={`5px 5px 10px 10px #e4e4f2 `}>
                    <Stack w={{ base: "85vw", md: "80%", lg: "500px" }}>
                        <Title mt={10} ta={"center"} order={2}>Admin login</Title>
                        <TextInput
                            mt={20}
                            type='email'
                            size='md'
                            label="Email Address"
                            placeholder="Email Address"
                            name='email'
                            required
                            onChange={handleChange}
                        />

                        <PasswordInput
                            mt="sm"
                            size='md'
                            label="Password"
                            placeholder="Enter password"
                            name='password'
                            required
                            onChange={handleChange}
                        />
                        <Group mb={20} justify="center" mt="md">
                            <CustomSolidButton loading={isLoading} h={"40px"} fullWidth type='submit' color={secondaryColor} buttonText='Sign in' />
                        </Group>
                    </Stack>
                </Card>
            </form>
        </Stack>
    )
}