import { Children } from "react";
import Menu from "./Menu";

function DefaultLayout(props) {
    return (
        <>
            <Menu />
            {props.children}
        </>
    )
}

export default DefaultLayout;