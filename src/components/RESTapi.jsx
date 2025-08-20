import {useEffect, useState} from 'react'
import axios from 'axios'

// export default function MyAxios(){
//     const [users, setUsers] = useState([])

//     useEffect(()=>{
//         axios.get('https://jsonplaceholder.typicode.com/users')
//         .then((res)=> setUsers(res.data))
//         .catch((err)=>console.log(err));
//     }, []);

//     return(
//         <ul>
//             <h1>List names: </h1>
//             {users.map((user)=> <li key={user.id}>{user.name}</li>)}
//         </ul>
//     )
// }


export default function WorkingApi(){
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            if(!res.ok){
                throw new Error('Failed to fetch, You are offline')
            }
            return res.json();
        })
        .then((data)=>{
            setUsers(data); // insert data into setusers
            setLoading(false); // stop loading
        })
        .catch((err)=>{
            setError(err.message)
            setLoading(false)
        }, [])
    })

    if (loading) return <p>Loading users...</p>
    if (error) return <p style={{color: 'red'}}>Error: {error}</p>
    return(
        <div>
            <h2>Users List: </h2>
            <ul>
                {users.map((user)=>(
                    <li key={user.id}>{user.name}  ({user.email})</li>
                ))}
            </ul>
        </div>
    )
}