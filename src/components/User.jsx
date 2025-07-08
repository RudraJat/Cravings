
const User = ({name,location})=>{
    
    return(
        <div className="user">
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: 1234567890</h4>
        </div>
    )
};

export default User;