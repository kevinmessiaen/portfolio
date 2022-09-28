import {Card, Container, Grid, Text} from '@nextui-org/react';

const Contact = () => {
    const openUrl = (url: string) => window.open(url, '_blank')?.focus();

    return (
        <Container display='flex' alignItems='center' direction='column'>
            <Text h2>
                Contact me
            </Text>
            <Grid.Container gap={2} justify="center">
                <Grid xs={12} sm={6} md={4}>
                    <Card isPressable onClick={() => openUrl('mailto:contact@kevin-messiaen.fr')}>
                        <Card.Body css={{p: 0}}>
                            <Card.Image
                                src='mailbox.jpg'
                                objectFit='cover'
                                width='100%'
                                height={140}
                                alt='Mailbox'
                            />
                        </Card.Body>
                        <Card.Footer>
                            <Text b>Send me an email</Text>
                        </Card.Footer>
                    </Card>
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                    <Card isPressable onClick={() => openUrl('https://signal.me/#p/+33669177855')}>
                        <Card.Body css={{p: 0}}>
                            <Card.Image
                                src='phone-call.jpg'
                                objectFit='cover'
                                width='100%'
                                height={140}
                                alt='Mailbox'
                            />
                        </Card.Body>
                        <Card.Footer>
                            <Text b>Reach me on Signal</Text>
                        </Card.Footer>
                    </Card>
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                    <Card isPressable onClick={() => openUrl('https://www.linkedin.com/in/kevin-messiaen/')}>
                        <Card.Body css={{p: 0}}>
                            <Card.Image
                                src='linkedin.jpg'
                                objectFit='cover'
                                width='100%'
                                height={140}
                                alt='Mailbox'
                            />
                        </Card.Body>
                        <Card.Footer>
                            <Text b>Keep in touch on LinkedIn</Text>
                        </Card.Footer>
                    </Card>
                </Grid>
            </Grid.Container>
        </Container>
    )
}

export default Contact
