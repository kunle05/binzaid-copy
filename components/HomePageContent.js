import Link from "next/link";
import { Col, Container, Row } from "reactstrap"
import styled from "styled-components";
import ServiceCard from "./ServiceCard";

const HomeHero = styled.section`
    min-height: calc(100vh - 70px);
    background: linear-gradient( #1e1f21, #4c4d4f);
    color: var(--white);
    display: flex;
    align-items: center;
    text-align: center;
    .display-3 {
        line-height: 8rem;
        letter-spacing: 2px;
        font-size: 6rem;
        font-weight: 500;
        color: var(--gold);
    }
    p {
        padding: 2rem 0;
        line-height: 3.5rem;
        font-size: 2.4rem;
        text-align: left;
    }
    .btn {
        background-color: var(--gold);
        color: black;
        font-size: 2rem;
        padding: 1rem 2rem;
        margin: 2.5rem 0;
        text-transform: uppercase;
        :hover {
            background-color: #b7a415;
        }
    }
    @media (max-width: 765px) {
        .display-3 {
            font-size: 3rem;
            line-height: initial;
        }
        p {
            font-size: 1.8rem;
            line-height: 2.5rem;
        }
    }
`;

const Interior = styled.section`
    padding: 4rem 0;
    h2 {
        font-weight: 500;
    }
    .service {
        padding: 3rem;
        justify-content: space-evenly;
    }
    @media (max-width: 820px) {
        .service {
            padding: 0;
        }
    }
`;

const HomePageContent = () => {
    return (
        <>
        <HomeHero className="home-hero">
            <Container className="col-xl-8 p-4">
                <h1 className="display-3">Welcome to BinZaid!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit debitis, non totam deserunt accusamus modi ratione quod voluptas. Numquam unde nostrum eligendi quam accusantium quia minus beatae explicabo fugiat deserunt!</p>
                <Link href="/">
                    <a className="btn">Book Service</a>
                </Link>
            </Container>
        </HomeHero>
        <Interior className="interior container col-xl-10">
            <h2 className="text-center display-3">Our Services</h2>
            <Row className="service">
                <ServiceCard title="Realty Consultancy" link="/" />
                <ServiceCard title="Facility Management" />
                <ServiceCard title="Cleaning Services" />
                <ServiceCard title="Haulage &amp; Logistics Services" />
                <ServiceCard title="Goods &amp; Services" link="/" />
                <ServiceCard title="Handyman" />
            </Row>
        </Interior>
        </>
    );
};

export default HomePageContent;