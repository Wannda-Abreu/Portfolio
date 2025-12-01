import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Root from "./root";

const Home = lazy(() => import("../pages/Home/home"));
const Projects = lazy(() => import("../pages/Projects/projects"));
const MarketingProjects = lazy(() => import("../pages/MarketingProjects/marketingProjects.jsx"));
const CertificationsPage = lazy(() => import("../pages/Certifications/certifications.jsx"));
const RoperoSolidarioDemo = lazy(() => import("../pages/Demos/roperoSolidario.jsx"));
const DashboardDemo = lazy(() => import("../pages/Demos/dashboardDemo.jsx"));
const MadxtremeDemo = lazy(() => import("../pages/Demos/madxtremeVideo.jsx"));
const CatchACoderDemo = lazy(() => import("../pages/Demos/catchACoderDemo.jsx"));
const SanitalDemo = lazy(() => import("../pages/Demos/sanitalDemo.jsx"));
const AboutMe = lazy(() => import("../pages/AboutMe/aboutMe.jsx"));
const MyCv = lazy(() => import("../pages/Cv/cv.jsx"));
const ContactForm = lazy(() => import("../pages/Contact/contactForm.jsx"));
const MacrameLanding = lazy(() => import("../pages/Macrame/MacrameLanding.jsx"));


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
