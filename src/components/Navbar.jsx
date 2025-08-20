export default Navbar;

//3.----- pass childrens from component's inside ---
// function Navbar({children}){
//     return(
//         <div className="navbar">{children}</div>
//     )
// }

// 2.---Destructuring props------
// function Navbar({first, second, third}){
//     return(
//         <div className="navbar">
//             <ul>
//                 <li>{first}</li>
//                 <li>{second}</li>
//                 <li>{third}</li>
//             </ul>
//         </div>
//     )
// }


// 1.------props-------
// function Navbar(props){
//     return(
//         <div className="navbar">
//             <ul>
//                 <li>{props.first}</li>
//                 <li>{props.second}</li>
//                 <li>{props.third}</li>
//             </ul>
//         </div>
//     )
// }
