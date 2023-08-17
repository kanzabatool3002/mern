import React, { useState } from 'react';
import './style3.css';
import logo from "./logo.png"
import home from './home1.png'
import Fashionarrival from '../Utilities/Fashionarrival';
import Fashionyoungfav from '../Utilities/Fashionyoungfav';
// import BsApple from "react-icons/bs";

import { BsApple, BsInstagram, BsTwitter } from 'react-icons/bs';
import { BiLogoPlayStore } from 'react-icons/bi';
import { FaFacebookF } from 'react-icons/fa';
import { BiLogoLinkedin } from 'react-icons/bi';

const Website3 = () => {
    const [Fashion, setfashion] = useState([
        {
            cardimg: require("./hoodie.png"),
            cardh3: "Hoodies and Sweetshirts",
            cardh5: "Explore Now!",

        },
        {
            cardimg: require("./coat.png"),
            cardh3: "Coats and Parkas",
            cardh5: "Explore Now!",

        },
        {
            cardimg: require("./tshirt.png"),
            cardh3: "Tees and T-Shirts",
            cardh5: "Explore Now!",
        },
    ])

    const [Young, setyoung] = useState([
        {
            cardimg: require("./hoodie.png"),
            cardh3: "Trending on instagram",
            cardh5: "ExploreNow!",

        },
        {
            cardimg: require("./coat.png"),
            cardh3: "All Under $400",
            cardh5: "Explore Now!",

        },
    ])


    return (
        <div id='main3'>
            <div id='topDiv3'>
                <div id='logo3'>
                    <img src={logo} alt='logo' />
                </div>
                <div id='navbar3'>

                    <a href="#"> CATALOGUE </a>
                    <a href="#"> FASHION </a>
                    <a href="#"> FAVOURITE </a>
                    <a href="#"> LIFESTYLE </a>
                    <button>SIGN UP</button>
                </div>

            </div>
            <div id='middleDiv3'>
                <div id='middlemain3'>
                    <div id='middleDiv3txt'>
                        <h1>LET'S EXPLORE UNIQUE CLOTHES.</h1>
                        <p>Live for Influential and Innovative fashion!</p>
                        <button>Shop Now</button>
                    </div>
                    <div id='middleDiv3img'>
                        <img src={home} alt='home image' />
                    </div>
                </div>
            </div>
            <div id='middle1Div3'>
                <img src={require('./HandM.png')} alt='HandM' />
                <img src={require('./obey.png')} alt='obey' />
                <img src={require('./shopify.png')} alt='shopify' />
                <img src={require('./locoste.png')} alt='locoste' />
                <img src={require('./levis.png')} alt='levis' />
                <img src={require('./amazon.png')} alt='amazon' />
            </div>
            <div id='middle2Div3'>
                <div>
                    <h1>NEW ARRIVALS</h1>
                </div>
                <div id='midmain'>
                    <div id='middle2Div3card'>
                        {Fashion.map((fashion, index) => {
                            return (
                                <Fashionarrival
                                    cardimg={fashion.cardimg}
                                    cardh3={fashion.cardh3}
                                    cardh5={fashion.cardh5}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
            <div id='middle3Div3'>
                <div id='middle3Div3img'>
                    <img src={require("./casual.png")} alt='Sale' />
                </div>
                <div id='middle3Div3txt'>
                    <h1>PAYDAY SALENOW</h1>
                    <p id='Div3txtpara1'>Spend minimal $100 get 30% off voucher code for your next purchase</p>
                    <h5>1 June - 10 June 2021</h5>
                    <p id='Div3txtpara2'>*Terms and Conditions apply</p>
                    <button>Shop Now</button>
                </div>
            </div>
            <div id='middle4Div3'>
                <div>
                    <h1>YOUNG'S FAVOURITE</h1>
                </div>
                <div id='mid4main'>
                    <div id='middle4Div3card'>
                        {Young.map((young, index) => {
                            return (
                                <Fashionyoungfav
                                    cardimg={young.cardimg}
                                    cardh3={young.cardh3}
                                    cardh5={young.cardh5}
                                />
                            )
                        }
                        )}
                    </div>
                </div>
            </div>
            <div id='middle5Div3'>
                <div id='middle5Div3main3'>
                    <div id='middle5Div3txt'>
                        <h1>DOWNLOAD APP & GET THE VOUCHER!</h1>
                        <p>Get 30% off for first transaction using Rondovision mobile app for now.</p>
                        <div id='middle5Div3txtbtn'>
                            <div id='middle5Div3txtbtn1'>
                                <div id='middle5btn1L'>
                                    <BsApple />
                                </div>
                                <div id='middle5btn1T'>
                                    <p>Download on the</p>
                                    <h6>Apple Store</h6>

                                </div>
                            </div>
                            <div id='middle5Div3txtbtn2'>
                                <div id='middle5btn2L'>
                                    <BiLogoPlayStore />
                                </div>
                                <div id='middle5btn2T'>
                                    <p>Get it on</p>
                                    <h6>Google Play</h6>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div id='middle5Div3img'>
                        <img src={require("./mobui.png")} alt='home image' />
                    </div>
                </div>
            </div>
            <div id='bottomDiv3'>
                <div id='bottom1Div3'>
                    <div id='bottom1'>
                        <h1>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h1>
                        <h4>Type your email down below and be youngwild generation</h4>
                        <div id='bottom1Div3in'>
                            <input type="text" id="fname" name="fname" placeholder="Add your email here" />
                            <button>SEND</button>
                        </div>
                    </div>
                </div>
                <div id='bottom2Div3'>
                    <div id='bottom2main'>
                        <div id='bottom21'>
                            <div>
                                <h1>FASHION</h1>
                                <p>Complete your style with awesome clothes from us.</p>
                            </div>
                            <div id='bottom2social'>
                                <div id='fa'><FaFacebookF /></div>
                                <div id='in'><BsInstagram /></div>
                                <div id='twi'><BsTwitter /></div>
                                <div id='lin'><BiLogoLinkedin /></div>
                            </div>
                        </div>
                        <div id='bottom22'>
                            <h4>Company</h4>

                            <a href="#">About</a>
                            <a href="#">Contact us</a>
                            <a href="#">Support</a>
                            <a href="#"> Careers </a>
                        </div>
                        <div id='bottom23'>
                            <h4>Quick Link</h4>
                            <a href="#">Share Location</a>
                            <a href="#">Orders Tracking</a>
                            <a href="#">Size Guide</a>
                            <a href="#"> FAQs </a>
                        </div>
                        <div id='bottom24'>
                            <h4>Legal</h4>
                            <a href="#">Terms and Conditions</a>
                            <a href="#">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Website3