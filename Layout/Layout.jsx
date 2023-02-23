import { AnalyticsWrapper } from './components/analytics';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Gabriel's Portfolio</title>
      </Head>
      <Navbar />
      <main>
        {children}
        <AnalyticsWrapper/>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
