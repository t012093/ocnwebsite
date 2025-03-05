import { 
  createBrowserRouter,
  Outlet,
  RouterProvider
} from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Features from './components/Features';
import News from './components/News';
import Community from './components/Community';
import Vision from './components/Vision';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProSocialMedia from './components/ProSocialMedia';
import GlobalExchange from './components/GlobalExchange';
import CoralPro from './components/CoralPro';
import Document from './components/Document';
import AboutDoc from './components/docs/About';
import DXProject from './components/docs/DXProject';
import TetottoApp from './components/docs/TetottoApp';
import AR from './components/AR';
import Donation from './components/Donation';

const MainPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Features />
      <News />
      <Community />
      <Vision />
      <Contact />
    </>
  );
};

const Layout = () => (
  <div className="min-h-screen bg-bg-dark text-text-light font-mulish">
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "dx",
        element: <DXProject />,
      },
      {
        path: "tetotto",
        element: <TetottoApp />,
      },
      {
        path: "ar",
        element: <AR />,
      },
      {
        path: "global-exchange",
        element: <GlobalExchange />,
      },
      {
        path: "coral-pro",
        element: <CoralPro />,
      },
      {
        path: "business",
        element: <div>Business Page</div>,
      },
      {
        path: "community",
        element: <div>Community Page</div>,
      },
      {
        path: "developer",
        element: <div>Developer Page</div>,
      },
      {
        path: "document",
        element: <Document />,
      },
      {
        path: "about",
        element: <AboutDoc />,
      },
      {
        path: "privacy-policy",
        element: <div>Privacy Policy Page</div>,
      },
      {
        path: "terms",
        element: <div>Terms of Use Page</div>,
      },
      {
        path: "donation",
        element: <Donation />,
      },
    ],
  },
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
});

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
