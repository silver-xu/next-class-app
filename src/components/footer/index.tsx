import "./footer.scss";

export const Footer = () => (
    <div id="footer" className="footer">
        <div className="container">
            <div className="footer__top">
                <div className="row">
                    <div className="footer__top__nav">
                        <h3>Company</h3>
                        <ul>
                            <li>
                                <a title="About Us" href="06_about-us.html">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    title="Blog"
                                    href="07_blog-right-sidebar.html"
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a title="Faqs" href="15_faqs.html">
                                    Faqs
                                </a>
                            </li>
                            <li>
                                <a title="Contact" href="09_contact-us.html">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__top__nav">
                        <h3>Support</h3>
                        <ul>
                            <li>
                                <a title="Get in Touch" href="#">
                                    Get in Touch
                                </a>
                            </li>
                            <li>
                                <a title="Help Center" href="#">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a title="Live chat" href="#">
                                    Live chat
                                </a>
                            </li>
                            <li>
                                <a title="How it works" href="#">
                                    How it works
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__top__nav footer__top__nav--contact">
                        <h3>Contact Us</h3>
                        <p>Email: support@domain.com</p>
                        <p>Phone: 1 (00) 832 2342</p>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <p className="footer__bottom__copyright">
                    2020 &copy;{" "}
                    <a title="Uxper Team" href="#">
                        uxper.co
                    </a>
                    . All rights reserved.
                </p>
            </div>
        </div>
    </div>
);
