import { Title, Container, Text, Group, Stack } from "@mantine/core";
import { Link } from "react-router-dom";
import { Illustration } from "./Illustration";
import classes from './NotFoundTitle.module.css';
import { secondaryColor } from "../../../Reuseables/Color";
import CustomSolidButton from "../../../Reuseables/SolidButton";

export default function PageNotFound() {
    return (
        <Container className={classes.root}>
            <div className={classes.inner}>
                <Illustration className={classes.image} />
                <Stack className={classes.content}>
                    <Title className={classes.title}>Nothing to see here</Title>
                    <Text c="dimmed" size="lg" ta="center" className={classes.description}>
                        The Page you are trying to open does not exist. You may have mistyped the address, or the
                        page has been moved to another URL. If you think this is an error contact support.
                    </Text>

                    <Group justify="center">
                        <Link to={"/"}>
                            <CustomSolidButton bg={secondaryColor} size="md" buttonText="Go back to home page" />
                        </Link>
                    </Group>
                </Stack>
            </div>
        </Container>
    )
}