import Hero from './Sections/hero';
import Feature from './Sections/Feature';
import About from './Sections/about';
import Cta from './Sections/cta';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - Green Genius</title>
            </Helmet>
            <Hero />
            <Feature />
            <About />
            <Cta />
        </div>
    );
}

export default Home;
