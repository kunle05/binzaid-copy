import Link from "next/link";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StyledFooter from "./styles/StyledFooter";

export default function Footer() {
    return (
        <StyledFooter>
            <Container className="col-lg-10">
                <div className="d-flex">
                    <div className="d-flex">
                        <div className="px-3">
                            <h6>Support</h6>
                            <div>
                                <ListGroup flush>
                                    <ListGroupItem>
                                        <Link href="/">Contact Us</Link>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <Link href="/">Policy</Link>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <Link href="/">FAQs</Link>
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                        </div>
                        <div className="px-3">
                            <h6>Company</h6>
                            <div>
                                <ListGroup flush>
                                    <ListGroupItem>
                                        <Link href="/">About Us</Link>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <Link href="/">Contact Us</Link>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <Link href="/">Careers</Link>
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                        </div>
                        <div className="px-3">
                            <h6>Locations</h6>
                            <div>
                                <ListGroup flush>
                                    <ListGroupItem>
                                        <Link href="/locations">See Locations</Link>
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                        </div>
                    </div>
                    <div className="social-links px-3">
                        <div>
                            <Link href="/">
                                <a id="mail-icon">
                                    <FontAwesomeIcon icon="envelope" /> 
                                </a>
                            </Link>
                            <Link href="/">
                                <a id="facebook-icon">
                                    <FontAwesomeIcon icon={['fab', 'facebook']} /> 
                                </a>
                            </Link>
                            <Link href="/">
                                <a id="twitter-icon">
                                    <FontAwesomeIcon icon={['fab', 'twitter']} /> 
                                </a>
                            </Link>
                            <Link href="/">
                                <a id="instagram-icon">
                                    <FontAwesomeIcon icon={['fab', 'instagram']} /> 
                                </a>
                            </Link>
                        </div>
                        <p className="disclaimer">
                            <a href="https://kunleyusuf.com" target="_blank">&copy;</a> {new Date().getFullYear()} K-Kodes Creatives
                        </p>
                    </div>
                </div>
                <p className="text-center">The royalty service you deserve</p>
            </Container>
        </StyledFooter>
    )
}