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
        return (
            <div className="user-class">
                <h2>Name: {this.props.name}</h2>
                <h3>Location: Gwalior</h3>
                <h4>Contact: 1234567890</h4>
            </div>
        )
    }
};

export default UserClass;
