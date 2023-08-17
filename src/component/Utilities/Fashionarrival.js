import React from 'react'

const Fashionarrival = ({ cardimg, cardh3, cardh5 }) => {
    return (
        <div id='middle2card'>
            <img src={cardimg} />
            <h4>{cardh3}</h4>
            <h5>{cardh5}</h5>
        </div>
    )
}

export default Fashionarrival