import { Button, ButtonProps } from "@mantine/core";

interface btnProps extends ButtonProps {
    buttonText: string;
    onClick?: () => void;
    type?: "submit" | "button"
}

export default function CustomSolidButton(props: btnProps) {

    return (
        <Button type={props.type} {...props} onClick={props.onClick} fullWidth={props.fullWidth} style={props.style}>{props.buttonText}</Button>
    )
}