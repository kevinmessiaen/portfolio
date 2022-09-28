import Introduction from '../../layouts/Introduction';
import {AboutMe} from '../../layouts';
import {useRef} from 'react';

const Home = () => {
    const aboutMeRef = useRef(null);

    return (
        <main>
            <Introduction aboutMeRef={aboutMeRef}/>
            <AboutMe aboutMeRef={aboutMeRef}/>
        </main>
    );
};

export default Home
