import {Badge, Card, Container, Grid, Link, Spacer, Text} from "@nextui-org/react";
import {RefObject} from 'react';
import {FaCertificate, FaGitlab} from 'react-icons/fa';
import {BsFillMicFill, BsStack} from 'react-icons/bs';
import {DiScrum} from 'react-icons/di';
import {MdArchitecture} from 'react-icons/md';

export interface AboutMeProps {
    aboutMeRef: RefObject<HTMLElement>
}

const AboutMe = (props: AboutMeProps) => {
    return <Container display='flex' alignItems='center' direction='column'>
        <Text ref={props.aboutMeRef} h2>
            My services
        </Text>
        <Text>
            Hi, I'm Kevin Messiaen - a remote freelancer currently in Vietnam with over three years of professional
            experience. I learned to program at the age of 14 as a hobby.
        </Text>
        <Text>
            I'm here to join your agile dev team or accompany you on your project to find the best solution and design
            outstanding applications. Whether it is a website, a mobile application or a fat client.
        </Text>
        <Text>
            I had the opportunity to work on different functional areas such as e-commerce, dematerialization, industry
            and payment.
        </Text>
        <Spacer y={3}/>
        <Grid.Container gap={2} justify="center">
            <Grid xs={12} sm={6} md={4}>
                <Card isHoverable>
                    <Card.Header>
                        <Text h3>
                            <FaCertificate/> Certified Java OCP 8
                        </Text>
                    </Card.Header>
                    <Card.Body css={{py: "$2"}}>
                        <Text>
                            Oracle Certified Professional, Java SE 8 Programmer.
                        </Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link
                            color="primary"
                            href='https://www.credly.com/badges/3549a9e4-bae4-4119-ba8c-29c30f1291bc?source=portfolio'
                            target='_blank'
                        >
                            Show credentials
                        </Link>
                    </Card.Footer>
                </Card>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
                <Card isHoverable>
                    <Card.Header>
                        <Text h3>
                            <BsStack/> Fullstack developer
                        </Text>
                    </Card.Header>
                    <Card.Body css={{py: "$2"}}>
                        <Text>
                            My experience in web development allows me to provide you a well crafted, responsive
                            and intuitive website.
                        </Text>
                    </Card.Body>
                    <Card.Footer>
                        <Badge color="success">Spring</Badge>
                        <Badge color="error">Angular</Badge>
                        <Badge color="primary">React</Badge>
                        <Badge color="success">Node.js</Badge>
                    </Card.Footer>
                </Card>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
                <Card isHoverable>
                    <Card.Header>
                        <Text h3>
                            <DiScrum/> Agile methodologies
                        </Text>
                    </Card.Header>
                    <Card.Body css={{py: "$2"}}>
                        <Text>
                            We will be working together in order for me to understand your needs and advise you
                            to build the solution that fit your needs.
                        </Text>
                    </Card.Body>
                    <Card.Footer>
                        <Badge>Scrum</Badge>
                    </Card.Footer>
                </Card>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
                <Card isHoverable>
                    <Card.Header>
                        <Text h3>
                            <MdArchitecture/> Software Architecture
                        </Text>
                    </Card.Header>
                    <Card.Body css={{py: "$2"}}>
                        <Text>
                            I will design a software architecture and perform some POC in order to evaluate its
                            feasabiity and scalability based and technical and functional needs.
                        </Text>
                    </Card.Body>
                </Card>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
                <Card isHoverable>
                    <Card.Header>
                        <Text h3>
                            <BsFillMicFill/> Technical interview
                        </Text>
                    </Card.Header>
                    <Card.Body css={{py: "$2"}}>
                        <Text>
                            I will be able to interview and perform technical tests to potential future developer and
                            give an ubiased feedback.
                        </Text>
                    </Card.Body>
                </Card>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
                <Card isHoverable>
                    <Card.Header>
                        <Text h3>
                            <FaGitlab/> CI/CD
                        </Text>
                    </Card.Header>
                    <Card.Body css={{py: "$2"}}>
                        <Text>
                            I will automatise integration and deployment process in order to improve the quality of the
                            code, reduce the risk of error and gain in time.
                        </Text>
                    </Card.Body>
                    <Card.Footer>
                        <Badge>Tests</Badge>
                        <Badge color="primary">SonarQubes</Badge>
                        <Badge color="primary">Docker</Badge>
                        <Badge color="primary">Kubernetes</Badge>
                    </Card.Footer>
                </Card>
            </Grid>
        </Grid.Container>
    </Container>
}

export default AboutMe;
