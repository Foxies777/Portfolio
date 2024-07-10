
import About from "../components/pages/About";
import Contact from "../components/pages/Contact";
import Home from "../components/pages/Home";


export const routes = [
    {
        path: '/',
        Component: Home,
    },
    {
        path: '/about',
        Component: About,
    },
    {
        path: '/contact',
        Component: Contact
    }
]