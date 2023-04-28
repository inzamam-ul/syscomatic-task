import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";

export const routes = [
  { route: "/", component: Home },
  { route: "/Home", component: Home },
  { route: "/About", component: About },
  { route: "/Services", component: Services },
  { route: "/Portfolio", component: Portfolio },
  { route: "/Contact", component: Contact },
];
