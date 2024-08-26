import { Box, Stack } from "@mantine/core";
import { ReactNode } from "react";
import whiteBackground from "../../assets/Images/white-background.jpg";


interface containerProps {
    content: ReactNode;
}

export default function FormOverlayContainer(props: containerProps) {

    return (
        <Box
            mih={"80vh"}
            pt={20}
            style={{
                position: "relative",
                backgroundImage: `url(${whiteBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <Box
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    zIndex: 1
                }}
            />
            <Stack style={{ position: "relative", zIndex: 2 }}>
                {props.content}
            </Stack>
        </Box>
    );
}