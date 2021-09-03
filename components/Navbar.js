import { useState } from 'react';
import Link from "next/link";
import styled from "styled-components";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GlobalNav = styled.header`
    color: var(--offWhite);
    .nav-item {
        padding: 0 1.5rem;
        a:hover {
            color: var(--white);
            transition: color 0.5s;
        }
    }
    .navbar-toggler {
        color: black;
    }
    .navbar-nav {
        position: absolute;
        transition: all .5s;
    }
    .show .navbar-nav {
        top: 71px;
        opacity: 1;
        transition: all .5s;
    }
    svg {
        height: 2.7rem;
        width: 3rem;
        color: var(--white);
    }
    @media (max-width: 820px) {
        .navbar-collapse {
            color: black;
            margin: 0 !important;
        }
        .navbar-nav {
            /* flex-direction: row; */
            flex-flow: wrap;
            justify-content: space-around;
            left: 0;
            width: 100%;
            padding: .5rem;
            background-color: white;
            top: 60px;
            opacity: 0;
        }
        .nav-item {
            font-size: 1.5rem;
            padding: 1rem;
        }
    }
`;

export const Logo = styled.h2`
    font-size: 2.5rem;
    color: var(--white);
    background: black;
    text-transform: uppercase;
    padding: 1rem;
    margin: 0;
    span {
        font-weight: 800;
        vertical-align: middle;
    }
    @media (max-width: 992px) {
        font-size: revert;
    }
    @media (max-width: 720px) {
        text-align: center;
    }
`;

export default function HeaderNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <GlobalNav>
            <Navbar dark expand="lg" className="p-0 dark">
                <Container className="col-md-10">
                    <Link href="/">
                        <a>
                            <Logo>
                                <img src="/binzaid.jpg" alt="BinZaid" width="50" height="50" />
                                <span className="m-1">Bin Zaid</span>
                            </Logo>
                        </a>
                    </Link>
                    <NavbarToggler onClick={toggle}>
                        <FontAwesomeIcon icon="ellipsis-v" />
                    </NavbarToggler>
                    <Collapse isOpen={isOpen} navbar className="mx-5">
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <Link href="/comp">Components</Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/comp">Components</Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/comp">Components</Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/comp">Components</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </GlobalNav>
    );
};
