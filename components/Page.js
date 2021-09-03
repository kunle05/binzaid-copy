import Navbar from "./Navbar";
import Meta from "./Meta";
import Footer from "./Footer";

export default function Page(props) {
    return (
        <>
            <Meta />
            <Navbar />
            <div className="content">
                {props.children}
            </div>
            <Footer />
        </>
    );
};