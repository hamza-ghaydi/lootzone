import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './layouts/Navbar.jsx';
import Footer from './layouts/Footer.jsx';
import Home from './pages/Home.jsx';
import Browse from './pages/Browse.jsx';
import GameDetails from './pages/GameDetails.jsx';
import News from './pages/News.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import Checkout from './pages/Checkout.jsx';
import ThankYou from './pages/ThankYou.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

const PageWrapper = ({ children }) => {
  const location = useLocation();
  return (
    <div
      key={location.pathname}
      className="animate-fade-in  space-y-10 pt-20"
    >
      {children}
    </div>
  );
};

const App = () => (
  <div className=" bg-[#0b0c0d] text-white">
    <ScrollToTop />
    <Navbar />
    <main className="mx-auto min-h-[80vh] max-w-6xl px-4">
      <PageWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/game/:id" element={<GameDetails />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageWrapper>
    </main>
    <Footer />
  </div>
);

export default App;