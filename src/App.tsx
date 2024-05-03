import { AppShell, Burger, Flex, Group, Stack, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, NavLink, Outlet } from "react-router-dom"
import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/Pages/HomePage/Homepage";
import AboutPage from "./Components/Pages/About/About";
import ProgramsPage from "./Components/Pages/Programs/Programs";
import ResourcesPage from "./Components/Pages/Resources/ResourcePage";
import NewsPage from "./Components/Pages/News/NewsAndEvents";
import TestimonialsPage from "./Components/Pages/Testimonials/TestimonialsPage";
import PageNotFound from './Components/Pages/HomePage/404/PageNotFound';

export default function App() {

  const [opened, { toggle }] = useDisclosure();


  const navlinks = [
    // { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About us" },
    { id: 3, path: "/programs", name: "Programs" },
    { id: 4, path: "/resources", name: "Resources" },
    { id: 5, path: "/news-and-events", name: "News & Events" },
    { id: 6, path: "/success-stories", name: "Success Stories" }
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
            <Link style={{ textDecoration: "none" }} to={"/"}>
              <Title size={"md"}>Startup Bauchi</Title>
            </Link>
            <Group ml="xl" gap={0} visibleFrom="sm">
              <Flex style={{ gap: 15 }}>
                {navlinks.map((item) => {
                  return (
                    <NavLink style={{ textDecoration: "none" }} key={item.id} to={item.path}>
                      <Text style={{ textDecoration: "none" }} size='md' >{item.name}</Text>
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
                <Text size='lg' >{item.name}</Text>
              </NavLink>
            )
          })}
        </Flex>
      </AppShell.Navbar>
      <AppShell.Main m={0} p={0}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/news-and-events" element={<NewsPage />} />
          <Route path="/success-stories" element={<TestimonialsPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Outlet />
      </AppShell.Main>
      <AppShell.Footer pos={"relative"}>
        <Stack p={10}>
          <Text>This is the footer section</Text>
        </Stack>
      </AppShell.Footer>
    </AppShell>

  );
}