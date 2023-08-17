
import React from 'react'
// import Home from './../Home/index';
// import AboutUS from './../AbouUs/index';

const index = () => {
    return (
        // #total
        <div id='total' style={{
            height: "100vh",
            width: "100vw",
            // backgroundColor: "blue",
            display: "flex",

        }}>
            <div id="leftDiv" style={{
                height: "100vh",
                width: "40vw",
                // backgroundColor: "pink",
            }}>
                <div id='topLeftDiv' style={{
                    height: "7vh",
                    width: '40vw',
                    // backgroundColor: 'green',
                    display: "flex",
                    justifyContent: "space-between",
                    textAlign: "center",


                }}>
                    <div id='topLeftDivLeft' style={{
                        // backgroundColor: "darkcyan",
                        width: "7vw",
                        paddingTop: "10px",
                    }}>
                        <h4 href='#'>Back</h4>
                    </div>
                    <div id='topLeftDivright' style={{
                        // backgroundColor: "darkgoldenrod",
                        width: "10vw",
                        paddingTop: "10px",
                    }}>
                        <a href='#' style={{
                            marginRight: "10px",
                            textDecoration: "none",
                            color: "black",
                            fontSize: "20px",
                        }}>Home</a>
                        <a href='#' style={{
                            marginLeft: "4px", textDecoration: "none",
                            color: "black",
                            fontSize: "20px"
                        }}>About</a>
                    </div>
                </div>
                <div id='bottomLeftDiv' style={{
                    height: "90vh",
                    width: "40vw",
                    // backgroundColor: "purple",
                    display: "flex",
                    alignItems: "center",
                }}>
                    <div id='contentDiv' style={{
                        width: "60vh",
                        marginLeft: "10px"

                    }}>

                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,</p>
                        <a>Read</a>
                    </div>
                </div>
            </div>
            <div id="rightDiv" style={{
                height: "100vh",
                width: "60vw",
                backgroundColor: "yellow",
                // display: 'flex',
            }}>
                <div id='topRightDiv' style={{
                    height: '50vh',
                    width: '100%',
                    backgroundColor: 'purple',
                    display: 'flex',

                }}>
                    <div id='topRightDivLeft' style={{
                        height: "50vh",
                        width: "100%",
                        backgroundColor: "lightblue",
                    }}>
                        <img src="https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Girl in a jacket"
                            style={{
                                height: "50vh",
                                width: "100%",
                            }} />
                    </div>
                    <div id='topRightDivRight' style={{
                        height: "50vh",
                        width: "100%",
                        backgroundColor: "lightcyan",
                    }}>
                        <img src="https://images.unsplash.com/photo-1580894912989-0bc892f4efd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNvZnR3YXJlJTIwZW5naW5lZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Girl in a jacket"
                            style={{
                                height: "50vh",
                                width: "100%",
                            }} />
                    </div>
                </div>
                <div id='bottomRightDiv' style={{
                    height: '50vh',
                    width: '100%',
                    backgroundColor: 'green',
                }}>
                    <img src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80S" alt="Girl in a jacket"
                        style={{
                            height: "50vh",
                            width: "100%",
                        }} />
                </div>


            </div>
        </div>

    )
}

export default index