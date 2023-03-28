import Menu from "./Menu";
import LayoutStyles from './LayoutStyles';
import AuthContext from "../contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../pages/Login";

function DefaultLayout(props) {
    const { isLogged }  = useContext(AuthContext);
    const navigate = useNavigate();
    
    if(props.isPrivate && isLogged === false) {
        return <Login />;
    }

    return (
        <>
            <Menu />
            <div className="content" style={LayoutStyles}>
                {props.children}
            </div>
            
        </>
    )
}

export default DefaultLayout;