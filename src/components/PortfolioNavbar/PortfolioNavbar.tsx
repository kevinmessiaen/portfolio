import {Button, Link, Navbar, User} from '@nextui-org/react';
import {FaGithub} from 'react-icons/fa';

const PortfolioNavbar = () => {
    return (
        <Navbar>
            <Navbar.Brand>
                <User
                    src="avatar.jpeg"
                    name="Kevin Messiaen"
                />
            </Navbar.Brand>
            <Navbar.Content>
                <Navbar.Item>
                    <Button auto flat iconRight={<FaGithub/>}
                            as={Link} href="https://github.com/kevinmessiaen/" target="_blank">
                        GitHub
                    </Button>
                </Navbar.Item>
            </Navbar.Content>
        </Navbar>
    )
}

export default PortfolioNavbar
