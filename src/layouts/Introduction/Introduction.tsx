import {Button, Container, CSS, Spacer, Text} from '@nextui-org/react';
import {useTypeAnimation} from '../../effects';
import {MdMail} from 'react-icons/md';
import {BsLinkedin, BsSignal} from 'react-icons/bs';

const Introduction = () => {
    const name = useTypeAnimation("Kevin Messiaen");

    let fullpageIntroduction: CSS = {
        height: 'calc(100vh - var(--nextui--navbarHeight))',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    };
    return (
        <Container css={fullpageIntroduction}>
            <Container css={{d: 'flex', flexWrap: 'nowrap'}}>
                <Button aria-label='LinkedIn' href='https://www.linkedin.com/in/kevin-messiaen/' target="_blank"
                        css={{background: '#0A66C2'}} auto icon={<BsLinkedin/>}>
                </Button>
                <Spacer x={2}/>
                <Button aria-label='Send me an email' href='mailto:kevind.messiaen@gmail.com' target="_blank"
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
        </Container>
    )
}

export default Introduction
