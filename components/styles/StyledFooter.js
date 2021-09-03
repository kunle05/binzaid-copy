import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: #f2f2f2;
    .container {
        padding: 4rem 1.5rem 3rem;
    }
    .d-flex {
        justify-content: space-between;
        flex-flow: wrap;
        .px-3 {
            margin-right: 6rem;
            margin-bottom: 3rem;
        }
        .px-3:last-child {
            margin-right: 0;
        }
    }
    h6 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
        font-weight: 600;
    }
    .list-group-item {
        padding: 0;
        font-size: 1.6rem;
        border-bottom: 0;
        font-weight: 300;
        line-height: 2.7rem;
        background-color: inherit;
        svg {
            height: 2rem;
            margin-right: .5rem;
            transition: all 0.5s;
        }
    }
    svg {
        height: 2.5rem;
        width: 2.5rem;
        margin-right: 2.5rem;
        color: var(--black);
    }
    a:hover, svg:hover {
        color: var(--blue);
        text-decoration: underline;
    }
    .social-links a:last-child {
        svg {
            margin-right: 0;
        }
    }
    p {
        margin: 1rem 0;
        font-size: 2.5rem;
        color: #a5a5a5;
    }
    .disclaimer {
        font-size: 1.5rem;
        padding-top: .5rem;
        margin: 0;
    }
    @media (max-width: 820px) {
        .px-3 {
            margin-right: 2rem !important;
        }
    }
`;

export default StyledFooter;