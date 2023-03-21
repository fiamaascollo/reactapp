import React from 'react'

const Footer = () => {
    return (
        <div className="container-fluid">
            <footer 
                className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p 
                    className="col-md-4 mb-0 text-muted">
                        &copy; 2022 Company, Inc
                </p>

                <ul className="nav col-md-4 justify-content-end">
                    <li 
                        className="nav-item">
                            <a 
                                href="https://sceu.frba.utn.edu.ar/" 
                                className="nav-link px-2 text-muted"
                                target="_blanc">
                            Home
                            </a>
                    </li>
                    <li className="nav-item"><a href="https://sceu.frba.utn.edu.ar/" className="nav-link px-2 text-muted">Features</a></li>
                    <li className="nav-item"><a href="https://sceu.frba.utn.edu.ar/" className="nav-link px-2 text-muted">Pricing</a></li>
                    <li className="nav-item"><a href="https://sceu.frba.utn.edu.ar/" className="nav-link px-2 text-muted">FAQs</a></li>
                    <li className="nav-item"><a href="https://sceu.frba.utn.edu.ar/" className="nav-link px-2 text-muted">About</a></li>
                </ul>
            </footer>
        </div>
    )
    }

export default Footer;