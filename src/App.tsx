import { AppShell, Burger, Flex, Group, Image, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, NavLink, Outlet, useLocation } from "react-router-dom"
import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/Pages/HomePage/Homepage";
import AboutPage from "./Components/Pages/About/About";
import ProgramsPage from "./Components/Pages/Programs/Programs";
import ResourcesPage from "./Components/Pages/GetInvolved/GetInvolved";
import PageNotFound from './Components/Pages/HomePage/404/PageNotFound';
// import BlogPage from './Components/Pages/Blog/Blog';
import GetInvolvedPage from './Components/Pages/GetInvolved/GetInvolved';
import StartupPage from './Components/Pages/Startups/Startups';
import "./index.css"
import { ashBg, secondaryColor } from './Components/Reuseables/Color';
import logo from "./assets/logo.jpg"
import { navlinks } from './Components/Utils/navlinks';
import FooterSection from './Components/Reuseables/Footer';
import ProgramsSignupPage from './Components/Pages/Programs/SignupPage';
import AdminPage from './Components/Pages/Admin/Admin';
import RequireAuth from './Components/Pages/Auth/RequireAuth';
import LoginPage from './Components/Pages/Auth/Login';


export default function App() {

  const [opened, { close, toggle }] = useDisclosure();

  const location = useLocation()

  return (
    <AppShell
      className='app-shell'
      header={{ height: 80 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header bg={"rgba(255, 255, 255, .9)"} style={{backdropFilter: "blur(80px)"}} maw={"100vw"}>
        <Group h="100%" px="md">
          <Burger right={20} pos={'absolute'} opened={opened} onClick={toggle} hiddenFrom="sm" size="md" />
          <Group style={{ flex: 1 }} justify="space-between">
            <Flex td={"none"} to={"/"} component={Link} gap={5} align={"center"}>
              <Image radius={50} w={50} src={logo} />
              <Title c={location.pathname === "/" ? "#046d63" : secondaryColor} ta={"start"} size={"md"}>Startup Bauchi</Title>
            </Flex>
            <Group ml="xl" visibleFrom="sm">
              <Flex gap={20}>
                {navlinks.map((item) => {
                  const activeLink = item.path === location.pathname;
                  return (
                    <NavLink className={activeLink ? "active" : ""} key={item.id} to={item.path}>
                      <Text fw={activeLink ? 900 : 700} c={activeLink ? "#046d63" : secondaryColor} style={{ zIndex: 10, textDecoration: "none" }} size='18px' >{item.name}</Text>
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
            const isActive = item.path === location.pathname;
            return (
              <NavLink className={isActive ? "active" : ""} onClick={close} style={{ textDecoration: "none" }} key={item.id} to={item.path}>
                <Text c={isActive ? "#046d63" : secondaryColor} p={10} fw={700} size='20px'>{item.name}</Text>
              </NavLink>
            )
          })}
        </Flex>
      </AppShell.Navbar>

      <AppShell.Main maw={"100vw"} mt={80} m={0} p={0}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* auth routes  */}
          <Route path="/admin" element={<RequireAuth children={<AdminPage />} />} />
          <Route path="/admin-login" element={<LoginPage />} />

          {/* resources route */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          {/* <Route path="/blog" element={<BlogPage />} /> */}
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path='/get-involved' element={<GetInvolvedPage />} />
          <Route path='/join-startup' element={<StartupPage />} />
          <Route path='/program-signup' element={<ProgramsSignupPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Outlet />
      </AppShell.Main>
      <AppShell.Footer mt={100} withBorder={false} bg={ashBg} h={"auto"} mih={100} pos={"relative"}>
        <FooterSection />
      </AppShell.Footer>
    </AppShell >

  );
}