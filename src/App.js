import React from 'react';

function App() {
    return (
        <>

            {/*<--NavBar-->*/}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            {/* <--Jumbutton--> */}
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                    With supporting text below as a natural lead-in to additional content.
                </p>
                <a href="#" className="btn btn-primary">
                    Button
                </a>
            </div>
            {/*Cards*/}
            <div class="row row-cols-1 row-cols-md-4">
                <div className="card" >
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                            Go somewhere
                        </a>
                    </div>
                </div>
                <div className="card" >
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                            Go somewhere
                        </a>
                    </div>
                </div>
                <div className="card" >
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                            Go somewhere
                        </a>
                    </div>
                </div>
                <div className="card" >
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                            Go somewhere
                        </a>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <div className="card-footer text-white-50 bg-dark">2 days ago</div>
        </>
    )
}

export default App;