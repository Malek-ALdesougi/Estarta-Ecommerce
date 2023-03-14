import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Auth = ({children}) => {

    const {isAuth} = useSelector(state => state.authReducer);

    if(isAuth){
       return children;
    }else{
        return <Navigate to={'/login'} />
    }

}

export default Auth;