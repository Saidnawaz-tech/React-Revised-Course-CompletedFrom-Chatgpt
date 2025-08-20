import { useContext } from "react";
import { UserContext } from "../UserContext";

function Navbar() {
  const { user } = useContext(UserContext);

  return (
    <nav style={{ background: "#ddd", padding: "10px" }}>
      <h3>Welcome, {user.name}</h3>
    </nav>
  );
}
export default Navbar;


// export default function Other({todos}){
//     if (todos.length === 0){
//         return <h2>No tasks today</h2>
//     }
//     return(
//         <div>
//             <ul>
//                 {todos.map((todo, index)=>(
//                     <li key={index}>{todo}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }