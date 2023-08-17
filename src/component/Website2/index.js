import React, { useState } from 'react';
import logo from "./food_logo.png";
import './style.css';
import FoodCategories from '../Utilities/FoodCategories';

const Website2 = () => {
    const [Foods, setFood] = useState([
        {
            imgsrc: require('./burger.png'),
            heading: "Burger",
            para: "Loryem ipsum dolor sit amet, consectetur adipiscing elit,",
            pricebtn: "$17.0"
        },
        {
            imgsrc: require('./pizza2.png'),
            heading: "Pizza",
            para: "Loryem ipsum dolor sit amet, consectetur adipiscing elit,",
            pricebtn: "$20.0"
        },
        {
            imgsrc: require('./macoroni.png'),
            heading: "MAcoroni",
            para: "Loryem ipsum dolor sit amet, consectetur adipiscing elit,",
            pricebtn: "$15.0"
        },
        {
            imgsrc: require('./biryani.png'),
            heading: "Biryani",
            para: "Loryem ipsum dolor sit amet, consectetur adipiscing elit,",
            pricebtn: "$10.0"
        },
        {
            imgsrc: require('./sweet.png'),
            heading: "Sweet Dishes",
            para: "Loryem ipsum dolor sit amet, consectetur adipiscing elit,",
            pricebtn: "$20.0"
        },
        {
            imgsrc: require('./icecream.png'),
            heading: "Icecream",
            para: "Loryem ipsum dolor sit amet, consectetur adipiscing elit,",
            pricebtn: "$12.0"
        },
    ])
    return (
        <div id='main2'>
            <div id='topDiv2'>
                <div id='topDivtop2'>
                    <img src={logo} alt="Logo" />
                    <input type="text" id="search2" placeholder="Search Food .." />
                </div>
                <div id='topDivbottom2'>
                    <button>All</button>
                    <button>Breakfast</button>
                    <button>Lunch</button>
                    <button>DineIn</button>
                </div>
            </div>
            <div id='bottom2'>
                <div id='bottommain'>
                    {Foods.map((food, index) => {
                        return (
                            <FoodCategories
                                imgsrc={food.imgsrc}
                                heading={food.heading}
                                para={food.para}
                                pricebtn={food.pricebtn}
                            />
                        )
                    }
                    )}
                </div>
            </div>
        </div>
    )
}
export default Website2