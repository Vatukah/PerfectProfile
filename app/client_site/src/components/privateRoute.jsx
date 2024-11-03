import Loader from "./loader";
import {useSupa} from "../../hooks/useSupa.js";
import { Navigate } from "react-router-dom";


export default function PrivateRoute({children}){
    const {user,loading}=useSupa();
   


    if (loading) {
        // You can return a loading spinner or some loading message
        return <Loader/>;
    }

    if (!user) {
        // Redirect to sign-in if the user is not authenticated
        return <Navigate to={'/signIn'} replace/>;
    }

    // If the user is authenticated, show the children
    return <>{children}</>;
}
