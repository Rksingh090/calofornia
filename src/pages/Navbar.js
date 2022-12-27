import React, { } from "react";
import '../pages/navbar.css';
import img11 from '../assets/img1.png';
import img22 from '../assets/california.jpg';

const Navbar = () => {
    return (
        <>
            <div>
                <div className="email">
                    <p>(234)-847635 kumarvicky@gmail.com</p>
                </div>
                <div className="navbar">
                    <div>
                        <img src={img11} alt="" />
                    </div>
                    <div className="btn">
                        <ul>
                            <li><a href="">work</a></li>
                            <li><a href="">Expert</a></li>
                            <li><a href="">luckdow</a></li>
                            <li><a href="">analysis</a></li>
                        </ul>
                        <button>Contact</button>
                    </div>
                </div>
                <div className="back">
                    <h1>BIG IDEAS,<br></br>
                        CREATIVE PEOPLE,<br></br>
                        NEW TECHNOLOGY .</h1>
                </div>
                <div className="think">
                    <div>
                        <h1>THINK<br></br><span>BIG.</span>
                            </h1>
                        <h2>Web Design Company in Los Angeles</h2>
                        <p>At SPINX Digital, our team of innovators and digital marketers in tech and design bring skills above and beyond the ordinary to every project. Our Los Angeles web design and development team is involved in professional B2B and B2C web design and development, mobile applications, digital strategy, user experience, advertising, social media, content management systems, and email marketing initiatives.

                        </p>
                        <h3>AWARD WINNING DIGITAL AGENCY
                        </h3>
                    </div>
                    <div>
                        <img src={img22} alt="" />
                    </div>
                </div>

            </div>
        </>
    );
};

export default Navbar;