import React from 'react'

const Fashionyoungfav = ({ cardimg, cardh3, cardh5 }) => {
    return (
        <div id='middle4card'>
            <img src={cardimg} />
            <h4>{cardh3}</h4>
            <h5>{cardh5}</h5>
        </div>
    )
}

export default Fashionyoungfav