import Link from "next/link";
import styled from "styled-components";

const ArticleCard = styled.div`
    padding: 3rem;
    align-items: center;
    margin-bottom: 2rem;
    transition: all .75s;
    img {
        width: 100%;
    }
    .card-text {
        h4 {
            font-size: 2.2rem;
            font-weight: bold;
            margin: 2rem 0 1.5rem;
            letter-spacing: .625px;
        }
        p {
            font-size: 1.6rem;
            line-height: 2.2rem;
            margin: 0;
        }
    }
    :hover {
        transform: scale(1.09);
        border-radius: 10px;
        box-shadow: 0 6px 24px 0 rgba(0,0,0,0.09);
        background-color: var(--gold);
    }
    a:hover {
        color: inherit;
    }
    @media (max-width: 820px) {
        padding: 2rem 1rem;
    }
    @media (max-width: 380px) {
        padding: 2rem;
    }
`;

const ServiceCard = ({ title, link }) => {
    return (
        <ArticleCard className="col-md-4">
            { link ? <Link href={link}>
                <a>
                    <img src="/real-estate.jpeg" alt="realtor" />
                    <div className="card-text p-4">
                        <h4>{title}</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit debitis, non totam deserunt accusamus modi ratione quod voluptas. Numquam unde nostrum eligendi quam accusantium quia minus beatae explicabo fugiat deserunt!</p>
                    </div>
                </a>
            </Link> :
                <>
                    <img src="/real-estate.jpeg" alt="realtor" />
                    <div className="card-text p-4">
                        <h4>{title}</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit debitis, non totam deserunt accusamus modi ratione quod voluptas. Numquam unde nostrum eligendi quam accusantium quia minus beatae explicabo fugiat deserunt!</p>
                    </div>
                </>
            }
            
        </ArticleCard>
    );
};

export default ServiceCard;