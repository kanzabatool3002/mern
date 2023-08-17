import React, { useState } from 'react';
import "./web.css";
import pizza from "./pizza.png";
import logo from "./logo.png";
import { BsFacebook } from 'react-icons/bs';
import { PiInstagramLogoFill } from 'react-icons/pi';
// import { useState } from "react";
import ProductCategories from '../Utilities/ProductCategories';



const Index = () => {
    const [Products, setProduct] = useState([
        {
            imagesrc: require('./pizza.png'),
            name: "Burger",
            Description: "Loryem ipsum dolor sit amet, consectetur adipiscing elit,",
        },
        {
            imagesrc: require('./logo.png'),
            name: "PIZZA",
            Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        },
        {
            imagesrc: require('./pizza.png'),
            name: "PIZZA",
            Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        },

    ])
    return (
        <div id='main'>
            <div id='topDiv'>
                <div id='topDivleft'>
                    <img src={logo} alt="Logo" />
                </div>
                <div id='topDivright'>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#shop">Shop</a>
                    <a href="#contact">Contact</a>
                    <a href="#blog">Blog</a>

                    <div id='icon'>
                        <a href="#instagram">
                            <PiInstagramLogoFill id='ins' />
                        </a>

                        <a href="#facebook">
                            <BsFacebook id='face' />
                        </a>
                    </div>
                </div>
            </div>
            <div id='bottomDiv'>
                <div id='leftDiv'>
                    <div id='leftDivMain'>
                        <h5>Welcome to our Website</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button class="button">Button</button>
                    </div>
                </div>
                <div id='rightDiv'>
                    <img src={pizza} alt="Food" />
                </div>
            </div>
            <div id='body'>
                <div id='topBody'>
                    <h3>Our Popular Menu</h3>
                    <h1>COME TO EAT</h1>
                </div>
                <div id='middleBody'>
                    {/* <div id='productcard'>
                        <img id='proImg' src={require("./pizza.png")} />
                        <h2>PIZZA</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    </div>
                    <div id='productcard'>
                        <img id='proImg' src={require("./pizza.png")} />
                        <h2>PIZZA</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    </div>
                    <div id='productcard'>
                        <img id='proImg' src={require("./pizza.png")} />
                        <h2>PIZZA</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    </div>
                    <div id='productcard'>
                        <img id='proImg' src={require("./pizza.png")} />
                        <h2>PIZZA</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    </div>
                    <div id='productcard'>
                        <img id='proImg' src={require("./pizza.png")} />
                        <h2>PIZZA</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    </div> */}

                    {/* <ProductCategories />
                        <ProductCategories />
                        <ProductCategories />
                        <ProductCategories />
                        <ProductCategories /> */}

                    {/* <ProductCategories imgsrc={require("./logo.png")} />
                    <ProductCategories imgsrc={require("./pizza.png")} /> */}

                    {Products.map((product, index) => {
                        return (
                            <ProductCategories
                                name={product.name}
                                description={product.description}
                                imagesrc={product.imagesrc}
                            />
                        );
                    })
                    }



                </div>
                <div id='bottomBody'>
                    <div id='leftBottomBody'>
                        <img src={require("./png-transparent-tomato-juice-cherry-tomato-food-vegetable-vegetable-natural-foods-leaf-vegetable-food-removebg-preview.png")} alt='Food' />
                    </div>
                    <div id='rightBottomBody'>
                        <div id='bottominner'>
                            <h1>we provide fresh food</h1>
                            <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit,,Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index



// npx create-react-app my-app