import "./Sidebar.scss";
import CustomButton from "./Button";
import logo from "../assets/logo-1.png";

const Sidebar = () => {
    return (
        <div>
            <div className="sidebar-container">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className="sign-out">
                    <CustomButton>Sair</CustomButton>
                </div>
            </div>
            <div className="sign-out-mobile">
                <CustomButton>Sair</CustomButton>
            </div>
        </div>
    );
};

export default Sidebar;
