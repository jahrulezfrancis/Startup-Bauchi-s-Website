import { Stack, Button, Title } from "@mantine/core";
import { Link } from "react-router-dom";

export default function PageNotFound() {
    return (
        <Stack mih={"80vh"} justify="center" align="center" mt={80}>
            <Title size={"lg"}>404 ERROR!</Title>
            <Title size={"2xl"}>The page you are looking for cannot be found</Title>
            <Link to={"/"}>
                <Button>Go back home</Button>
            </Link>
        </Stack>
    )
}