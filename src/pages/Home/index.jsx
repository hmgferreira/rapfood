import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

function Home() {
    const { user } = useContext(AuthContext);
    return (
        <>
            Seja bem vindo(a) {user}
        </>
    );
}

export default Home;