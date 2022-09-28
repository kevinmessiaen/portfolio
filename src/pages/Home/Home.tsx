import Introduction from '../../layouts/Introduction';
import {AboutMe, Contact} from '../../layouts';
import {useRef} from 'react';
import {Spacer} from '@nextui-org/react';

const Home = () => {
    const aboutMeRef = useRef(null);

    return (
        <main>
            <Introduction aboutMeRef={aboutMeRef}/>
            <AboutMe aboutMeRef={aboutMeRef}/>
            <Spacer y={4}/>
            <Contact/>
        </main>
    );
};

export default Home
