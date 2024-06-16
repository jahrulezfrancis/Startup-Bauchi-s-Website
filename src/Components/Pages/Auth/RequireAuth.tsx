import { Stack } from "@mantine/core";
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

interface elementProps {
    children: ReactNode
}

export default function RequireAuth(props: elementProps) {
    const authToken = localStorage.getItem("auth-token")
    if (!authToken) {
        return <Navigate to={"/admin-login"} />
    } else {
        return <Stack>{props.children}</Stack>
    }
}