import {Container, Text} from "@nextui-org/react";

const AboutMe = () => {
    const year = new Date().getFullYear();

    return (
        <Container display='flex' alignItems='center' direction='column'>
            <Text>
                Copyright &copy; {year} Kevin Messiaen. All right reserved
            </Text>
        </Container>
    )
}

export default AboutMe;
