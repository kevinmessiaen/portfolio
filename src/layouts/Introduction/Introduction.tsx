import {Button, Container, Spacer, Text} from '@nextui-org/react';
import {useTypeAnimation} from '../../effects';
import {MdMail} from 'react-icons/md';
import {BsLinkedin, BsSignal} from 'react-icons/bs';
import {RefObject} from 'react';

export interface IntroductionProps {
    aboutMeRef: RefObject<HTMLElement>
}

const Introduction = (props: IntroductionProps) => {
    const name = useTypeAnimation("Kevin Messiaen");

    const executeScroll = () => props.aboutMeRef.current?.scrollIntoView()


    return (
        <Container css={{
            height: 'calc(100vh - var(--nextui--navbarHeight))',
            backgroundImage: 'url("introduction-background.png")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        }}
                   display='flex' direction='column' justify='center' alignItems='flex-start'>
            <Container display='flex' wrap='nowrap'>
                <Button aria-label='LinkedIn' href='https://www.linkedin.com/in/kevin-messiaen/' target="_blank"
                        css={{background: '#0A66C2'}} auto icon={<BsLinkedin/>}>
                </Button>
                <Spacer x={2}/>
                <Button aria-label='Send me an email' href='mailto:contact@kevin-messiaen.fr' target="_blank"
                        css={{background: '#EA4335'}} auto icon={<MdMail/>}>
                </Button>
                <Spacer x={2}/>
                <Button aria-label='Call me on Signal' href='https://signal.me/#p/+33669177855' target="_blank"
                        css={{background: '#3A76F0'}} auto icon={<BsSignal/>}>
                </Button>
            </Container>
            <Spacer y={2}/>
            <Text h2>
                Hello! My name is
            </Text>
            <Text h1 b>
                {name}
            </Text>
            <Text h4>
                I am a Fullstack developer and Java expert!
            </Text>
            <Spacer y={2}/>
            <Button onClick={executeScroll} auto ghost>
                Hire me!
            </Button>
        </Container>
    )
}

export default Introduction
