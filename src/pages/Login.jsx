import { useNavigate } from "react-router-dom";

import CustomButton from "../components/Button";

import "./Login.scss";
import logo from "../assets/logo-2.png";

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/manager");
    };

    return (
        <div className="login-container">
            <img src={logo} alt="logo" />
            <div className="button-container">
                <CustomButton onClick={handleLogin}>Entrar</CustomButton>
            </div>
        </div>
    );
};

export default Login;
