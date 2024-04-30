import { AppShell, Burger, Flex, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './MobileNavbar.module.css';
import { NavLink } from "react-router-dom"

export default function NavBar() {
    const [opened, { toggle }] = useDisclosure();

    const navlinks = [
        // { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About us" },
        { id: 3, path: "/our-programs", name: "Programs" },
        { id: 4, path: "/resources", name: "Resources" },
        { id: 5, path: "new-and-events", name: "News & Events" },
        { id: 6, path: "/stories-and-testimonials", name: "Success Stories" }
    ]

    return (
        <AppShell
            header={{ height: 80 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <Group justify="space-between" style={{ flex: 1 }}>
                        <Text>Startup Bauchi</Text>
                        <Group ml="xl" gap={0} visibleFrom="sm">
                            <Flex style={{ gap: 15 }}>
                                {navlinks.map((item) => {
                                    return (
                                        <NavLink style={{ textDecoration: "none" }} key={item.id} to={item.path}>
                                            <Text style={{ textDecoration: "none" }} size='md' className={classes.control}>{item.name}</Text>
                                        </NavLink>
                                    )
                                })}
                            </Flex>
                        </Group>
                    </Group>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar py="md" px={4}>
                <Flex direction="column">
                    {navlinks.map((item) => {
                        return (
                            <NavLink style={{ textDecoration: "none" }} key={item.id} to={item.path}>
                                <Text size='lg' className={classes.control}>{item.name}</Text>
                            </NavLink>
                        )
                    })}
                </Flex>
            </AppShell.Navbar>

            <AppShell.Main>
                Navbar is only visible on mobile, links that are rendered in the header on desktop are
                hidden on mobile in header and rendered in navbar instead.
            </AppShell.Main>
        </AppShell>
    );
}