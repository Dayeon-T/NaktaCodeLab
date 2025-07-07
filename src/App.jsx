import './App.css';
import CategoryCard from './components/common/categorycard/CategoryCard';
import Gnb from './components/common/gnb/Gnb';
import Hero from './components/common/Hero/Hero';
import PopularClass from './components/common/PopularClass/PopularClass';
import Ads from './components/common/Ads/Ads';
import NewClass from './components/common/newclasses/NewClass';

export default function App() {
    return(
        <>
            <Gnb/>
            <Hero/>
            <CategoryCard/>
            <PopularClass/>
            <Ads/>
            <NewClass/>
        </>
    )
}