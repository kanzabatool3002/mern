import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
//import Heading from "../Heading";

function ContactUs() {
  const [userData, setUserData] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json()).then((data) => {
      console.log(data)
      setUserData(data)
    })
  }, []);

  //todo create components for user
  const User = ({ user }) => {
    return (
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "10px",
        padding: "10px",
        width: "200px",

      }
      }>
        <div style={{
          border: "2px solid black",
          borderRadius: '5px',
          alignItems: "center",
          justifyContent: "center",
          margin: "20px",
          padding: "20x",
          display: "flex",
          flexWrap: "wrap",

        }}>
          <img src={"https://picsum.photos/200"} alt="user" style={{
            borderRadius: "50%",
            height: "100px",
            width: "100px",

          }} />
          <h3 style={{
            color: "red",

          }}>{user.name}</h3>
          <p style={{
            color: "red",

          }}>{user.email}</p>
        </div>
      </div >
    );
  };



  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{
          textAlign: "center",
        }}>Contact us</h1>
        <Link to="/Home">Home</Link>
        {
          userData.map((user) => {
            return (
              // <div style={{
              //  display: "flex",
              //  flexWrap: "wrap",
              // }}>
              <User key={user.id} user={user} />
              //</div>
            )


          })
        }

      </header>
    </div>
  );
}

export default ContactUs;



