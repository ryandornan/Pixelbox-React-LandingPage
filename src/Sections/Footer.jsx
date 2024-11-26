function Footer() {
    return (
        <div className="container-full section footer">
            <div className="container">
                <div className="row footer-row">
                    {/* Pixelbox Studio Section */}
                    <div className="col-12 col-md-6 mb-4 mb-md-0">
                        <h3 className="section-header pb-3">PIXELBOX STUDIO</h3>
                        <p>© Copyright 2024</p>
                    </div>

                    {/* Follow Us Section */}
                    <div className="col-12 col-md-3 mb-4 mb-md-0 footer-column">
                        <h4>FOLLOW US</h4>
                        <a className="footer-link" href="#">LinkedIn</a>
                        <a className="footer-link" href="#">Instagram</a>
                        <a className="footer-link" href="#">Facebook</a>
                    </div>

                    {/* Back to Top Section */}
                    <div className="col-12 col-md-3 footer-column">
                        <h4>
                            <a className="footer-link" href="#">BACK TO TOP</a>
                        </h4>
                        <a className="footer-link" href="#about">About</a>
                        <a className="footer-link" href="#services">Services</a>
                        <a className="footer-link" href="#strategy">Strategy</a>
                        <a className="footer-link" href="#contact">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
