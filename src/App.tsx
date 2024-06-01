import { AppShell, Burger, Flex, Group, Stack, Text, Title, Tooltip } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, NavLink, Outlet, useLocation } from "react-router-dom"
import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/Pages/HomePage/Homepage";
import AboutPage from "./Components/Pages/About/About";
import ProgramsPage from "./Components/Pages/Programs/Programs";
import ResourcesPage from "./Components/Pages/GetInvolved/GetInvolved";
import TestimonialsPage from "./Components/Pages/Testimonials/TestimonialsPage";
import PageNotFound from './Components/Pages/HomePage/404/PageNotFound';
import { FaTelegram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import BlogPage from './Components/Pages/News/Blog';
import GetInvolvedPage from './Components/Pages/GetInvolved/GetInvolved';
import StartupPage from './Components/Pages/Startups/Startups';
import "./index.css"
import { secondaryColor } from './Components/Reuseables/Color';


export default function App() {

  const [opened, { close, toggle }] = useDisclosure();

  const location = useLocation()

  const navlinks = [
    // { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About us" },
    { id: 3, path: "/programs", name: "Programs" },
    { id: 4, path: "/blog", name: "Blog" },
    { id: 5, path: "/success-stories", name: "Success Stories" },
    { id: 6, path: "/get-involved", name: "Get Involved" },
    { id: 7, path: "/startups", name: "Startups" },

  ]

  return (
    <AppShell
      className='app-shell'
      header={{ height: 80 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header bg={secondaryColor}>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group style={{ flex: 1 }} justify="space-between">
            <Link style={{ textDecoration: "none" }} to={"/"}>
              <Title ta={"start"} size={"md"}>Startup Bauchi</Title>
            </Link>
            <Group ml="xl" visibleFrom="sm">
              <Flex gap={20}>
                {navlinks.map((item) => {
                  return (
                    <NavLink className={item.path === location.pathname ? "active" : ""} style={{ textDecoration: "none" }} key={item.id} to={item.path}>
                      <Text fw={800} c={"white"} style={{ textDecoration: "none" }} size='18px' >{item.name}</Text>
                    </NavLink>
                  )
                })}
              </Flex>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <Flex px={10} gap={10} direction="column">
          {navlinks.map((item) => {
            return (
              <NavLink onClick={close} style={{ textDecoration: "none" }} key={item.id} to={item.path}>
                <Text p={10} fw={500} size='20px'>{item.name}</Text>
              </NavLink>
            )
          })}
        </Flex>
      </AppShell.Navbar>
      <AppShell.Main mt={80} m={0} p={0}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/success-stories" element={<TestimonialsPage />} />
          <Route path='get-involved' element={<GetInvolvedPage />} />
          <Route path='startups' element={<StartupPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Outlet />
      </AppShell.Main>
      <AppShell.Footer h={"auto"} mih={100} pos={"relative"}>
        <Stack py={"10px"} h={"100%"} align='center' justify="center" >
          <Title mt={20} size={"md"} c={"black"} ta={"center"}>Connect with us on social media</Title>
          <Group gap={25} justify="center">
            <Tooltip position="bottom" label="Join Telegram commnity">
              <Link to={""}>
                <FaTelegram color="#1C7ED6" fontSize={25} />
              </Link>
            </Tooltip>

            <Tooltip position="bottom" label="Join Whatsapp community">
              <Link to={""}>
                <FaWhatsapp color="#1C7ED6" fontSize={25} />
              </Link>
            </Tooltip>
            <Tooltip position="bottom" label="Join Twitter community">
              <Link to={""}>
                <FaTwitter color="#1C7ED6" fontSize={25} />
              </Link>
            </Tooltip>
          </Group>
          <Text size={"md"}>© 2024 Startup Bauchi</Text>
        </Stack>
      </AppShell.Footer>
    </AppShell>

  );
}