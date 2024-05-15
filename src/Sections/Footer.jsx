function Footer () {
    return (
        <div className="container-full section footer">
            <div className="container">
                <div className="row footer-row">
                    <div className="col-6">
                        <div className="col-8">
                            <h3 className="section-header pb-3">GROW YOUR BRAND BEYOND BOUNDARIES</h3>
                            <p>© Copyright 2024</p>

                        </div>
                    </div>
                    <div className="col-3 d-flex footer-column">
                        <h4>FOLLOW US</h4>
                        <a className="footer-link">LinkedIn</a>
                        <a className="footer-link">Instagram</a>
                        <a className="footer-link">Facebook</a>
                    </div>
                    <div className="col-3 d-flex footer-column">
                        <a className="footer-link" href="#">
                            <h4>BACK TO TOP</h4>
                        </a>
                        <a className="footer-link" href="about">About</a>
                        <a className="footer-link" href="services">Services</a>
                        <a className="footer-link" href="strategy">Strategy</a>
                        <a className="footer-link" href="contact">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer