import { Button, ButtonProps } from "@mantine/core";
import { secondaryColor } from "./Color";

interface btnProps extends ButtonProps {
    buttonText: string;
    onClick?: () => void;
    type?: "submit" | "button"
    buttonCol?: string
}

export default function CustomSolidButton(props: btnProps) {

    return (
        <Button type={props.type} {...props} color={props.color ? props.buttonCol : secondaryColor} onClick={props.onClick} fullWidth={props.fullWidth} style={props.style}>{props.buttonText}</Button>
    )
}