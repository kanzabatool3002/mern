import React from 'react'

const FoodCategories = ({ imgsrc, heading, para, pricebtn }) => {
    return (
        <div id='bottom2Div1'>
            <div id='bottom2Div1img'>
                <img src={imgsrc} alt='random' />
            </div>
            <div id='bottom2Div1ctn'>
                <div id='Div1txt'>
                    <h4>{heading}</h4>
                    <p>{para} </p>
                </div>
                <div id='Div1btn'>
                    <button>{pricebtn}</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCategories