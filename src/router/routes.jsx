import { createBrowserRouter } from "react-router-dom";
import Root from "./root"
import Home from "../pages/Home/home";
import Projects from "../pages/Projects/projects";
import RoperoSolidarioDemo from "../pages/Demos/roperoSolidario";
import MadxtremeDemo from "../pages/Demos/madxtremeVideo";
import CatchACoderDemo from "../pages/Demos/catchACoderDemo";
import AboutMe from '../pages/AboutMe/aboutMe';
import MyCv from '../pages/Cv/cv';
import ContactForm from '../pages/Contact/contactForm';
import MarketingProjects from '../pages/MarketingProjects/marketingProjects.jsx';
import CertificationsPage from "../pages/Certifications/certifications.jsx";
import MacrameLanding from "../pages/Macrame/MacrameLanding.jsx";
import SanitalDemo from "../pages/Demos/sanitalDemo.jsx";
import DashboardDemo from "../pages/Demos/dashboardDemo.jsx";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/projects",
          element: <Projects />
        },
        {
          path: "/marketingprojects",
          element: <MarketingProjects/>
        },
        {
          path: "/certifications",
          element: <CertificationsPage/>
        },
        {
          path: "/roperodemo",
          element: <RoperoSolidarioDemo/>
        },
         {
          path: "/dashboarddemo",
          element: <DashboardDemo/>
        },
        {
          path: "/madxtremedemo",
          element: <MadxtremeDemo/>
        },
        {
          path: "/coderdemo",
          element: <CatchACoderDemo/>
        },
        {
          path: "/sanitaldemo",
          element: <SanitalDemo/>
        },
        {
          path: "/aboutme",
          element: <AboutMe/>
        },
        {
          path: "/cv",
          element: <MyCv/>
        },
        {
          path: "/contact",
          element: <ContactForm/>
        },
        {
          path: "/macrame",
          element: <MacrameLanding/>
        }
    ]
    },

]);


export default router;
