import {Container, Text} from '@nextui-org/react';
import {useTypeAnimation} from '../../effects';

const Introduction = () => {
    const name = useTypeAnimation("Kevin Messiaen");

    return (
        <Container css={{height: 'calc(100vh - var(--nextui--navbarHeight))'}}>
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
