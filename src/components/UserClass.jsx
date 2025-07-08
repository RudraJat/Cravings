import React from "react";

//Class based component ko yeh btana pdta he react ko ki yeh ek class based component he
// aur yeh React.Component se extend hota he
class UserClass extends React.Component {
    constructor(props) {
        super(props); // Constructor ko use karke hum props ko initialize karte hain or super(props) ka kaam he parent class ke constructor ko call karna
        // yeh props ko class ke andar use karne ke liye store karta he
        console.log(props); 
    }
    render(){
        const {name, location}=this.props;
        return (
            <div className="user-class">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: 1234567890</h4>
            </div>
        )
    }
};

export default UserClass;
