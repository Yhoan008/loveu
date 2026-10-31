import Nav from './components/Nav';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import DayPanel from './components/DayPanel';
import PrivateRoom from './components/PrivateRoom';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Timeline />
        <Gallery />
        <DayPanel />
        <PrivateRoom />
      </main>
      <Footer />
    </>
  );
}
