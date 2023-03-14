import { Children } from "react";
import Menu from "./Menu";
import LayoutStyles from './LayoutStyles';

function DefaultLayout(props) {
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