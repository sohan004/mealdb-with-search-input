import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    
    return (
        <div className='container'>
            <div className='d-flex align-items-center flex-column flex-md-row gap-3 my-3 my-md-4 my-lg-5'>
                <div>

                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src="pexels-photo-70497.jpeg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src="pexels-photo-1640772.jpeg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="pexels-photo-3655916.jpeg" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
                <div>
                    <h1 className='my-3 display-4 fw-bolder'>What's your favourite <span className='text-danger'>Food ?</span></h1>
                    <div>
                        <button onClick={() => navigate('/food')} className="btn btn-warning btn-lg fw-bolder">Go Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;