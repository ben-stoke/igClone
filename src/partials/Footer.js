import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="content-footer">
            <div className="footer">
                <div className="copyright">
                    <span>Copyright © 2017 <b className="text-dark">Theme_Nate</b>. All rights reserved.</span>
                    <span className="go-right">
                        <Link to="#" className="text-gray mrg-right-15">Term &amp; Conditions</Link>
                        <Link to="#" className="text-gray">Privacy &amp; Policy</Link>
                    </span>
                </div>
            </div>
        </footer>

    );
}

export default Footer;