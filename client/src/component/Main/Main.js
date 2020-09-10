import React, {useContext, useEffect} from 'react'
// import {AuthContext} from "../Context/Auth/Auth"
import Home from "../../pages/Home/Home";
import Autharization from "../../pages/Autharization/Autharization";
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch,
    Redirect,
  } from "react-router-dom";
  
// export default function Main(props) {
//     const context = useContext(AuthContext)
//     useEffect(() => {
//         console.log(context)
//         return () => {
//         }
//     }, [context])
//     return (
//         <div>
//                 {context ? (
//         <Switch>
//           <Route path="/" exact>
//             <Home />
//           </Route>
//           {/* <Route path="/create" exact>
//                     <Home />
//                 </Route> */}
//           <Redirect to="/" />
//         </Switch>
//       ) : (
//         <Switch>
//           <Route path="/login" exact>
//             <Autharization />
//           </Route>
//           <Route path="/register" exact>
//             <Home />
//           </Route>
//           <Redirect to="/login" />
//         </Switch>
//       )}

//         </div>
//     )
// }
