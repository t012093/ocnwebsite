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
        element: <div>DX Page</div>,
      },
      {
        path: "ar",
        element: <div>AR Page</div>,
      },
      {
        path: "global-exchange",
        element: <div>Global Exchange Page</div>,
      },
      {
        path: "coral-pro",
        element: <div>Pro Social Media Page</div>,
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
        element: <div>Document Page</div>,
      },
      {
        path: "privacy-policy",
        element: <div>Privacy Policy Page</div>,
      },
      {
        path: "terms",
        element: <div>Terms of Use Page</div>,
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
