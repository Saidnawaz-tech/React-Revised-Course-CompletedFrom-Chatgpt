export default function profileCard({name, age, bio}){
    return(
        <div className="profile">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Bio: {bio}</p>
        </div>
    )
}