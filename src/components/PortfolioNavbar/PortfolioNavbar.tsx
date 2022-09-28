import {Avatar, Navbar, Text} from '@nextui-org/react';

const PortfolioNavbar = () => {
    return (
        <Navbar>
            <Navbar.Brand>
                <Avatar
                    squared
                    src="avatar.jpeg"/>
                <Text b color="inherit" hideIn="xs">
                    Kevin.Messiaen
                </Text>
            </Navbar.Brand>
        </Navbar>
    )
}

export default PortfolioNavbar
