import { useNavigate } from "react-router-dom";

import "./Sidebar.scss";
import CustomButton from "./Button";
import logo from "../assets/logo-1.png";

const Sidebar = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        navigate("/");
    };
    return (
        <div>
            <div className="sidebar-container">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className="sign-out">
                    <CustomButton onClick={handleSignOut}>Sair</CustomButton>
                </div>
            </div>
            <div className="sign-out-mobile">
                <CustomButton onClick={handleSignOut}>Sair</CustomButton>
            </div>
        </div>
    );
};

export default Sidebar;
