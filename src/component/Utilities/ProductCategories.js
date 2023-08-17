
import React from 'react'

const ProductCategories = ({ imagesrc, heading, description }) => {
    return (
        <div id='productcard'>
            <img id='proImg' src={imagesrc} alt='product' />
            <h2>{heading}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        </div>
    )
}

export default ProductCategories;




// import React from 'react'

// const ProductCategories = () => {
//     return (
//         <div id='productcard'>
//             <img id='proImg' src={require("./pizza.png")} />
//             <h2>PIZZA</h2>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
//         </div>
//     )
// }

// export default ProductCategories;