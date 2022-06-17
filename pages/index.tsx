import { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import AOS from 'aos';
import Navbar from '../components/organisms/navbar';
import MainBanner from '../components/organisms/MainBanner';
import TransactionStep from '../components/organisms/TransactionStep';
import FeaturedGame from '../components/organisms/FeaturedGame';
import Reached from '../components/organisms/Reached';
import StoryItem from '../components/organisms/StoryItem';
import Footer from '../components/organisms/Footer';


const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    <Navbar />
    <MainBanner />
    <TransactionStep />
    <FeaturedGame />
    <Reached />
    <StoryItem />
    <Footer />
    </>
  )
}
export default Home
