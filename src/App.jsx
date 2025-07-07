import './App.css';
import CategoryCard from './components/common/categorycard/CategoryCard';
import Gnb from './components/common/gnb/Gnb';
import Hero from './components/common/Hero/Hero';
import PopularClass from './components/common/PopularClass/PopularClass';
import Ads from './components/common/Ads/Ads';
import NewClass from './components/common/newclasses/NewClass';
import Howto from './components/common/howto/Howto';
import Ads2 from './components/common/ads2/Ads2';
import Footer from './components/common/footer/Footer'
export default function App() {
    return(
        <>
            <Gnb/>
            <Hero/>
            <CategoryCard/>
            <PopularClass/>
            <Ads/>
            <NewClass/>
            <Howto/>
            <Ads2/>
            <Footer/>
            

        </>
    )
}