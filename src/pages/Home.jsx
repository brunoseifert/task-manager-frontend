import Sidebar from "../components/Sidebar";
import Tasks from "../components/Tasks";

const Home = () => {
    return (
        <div className="app-container">
            <Sidebar />
            <div className="tasks">
                <Tasks />
            </div>
        </div>
    );
};

export default Home;
