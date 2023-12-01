import CustomButton from "../components/Button";

import "./Login.scss";
import logo from "../assets/logo-2.png";

const Login = () => {
    return (
        <div className="login-container">
            <img src={logo} alt="logo" />
            <div className="button-container">
                <CustomButton>Entrar</CustomButton>
            </div>
        </div>
    );
};

export default Login;
