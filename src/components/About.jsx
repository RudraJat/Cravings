// import User from "./User";
import UserClass from "./UserClass";

const About = () =>{
    return (
        <div>
            
            <h1>About Us</h1>
            <p>We are a food delivery service dedicated to bringing you the best meals from your favorite restaurants.</p>
            {/* <User name="RudraFunction" location="GwaliorFunction"/> */}
            <UserClass name="RudraClass" location="GwaliorClass"/>
        </div>
    );
};

export default About;