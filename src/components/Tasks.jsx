import axios from "axios";
import { useEffect, useState } from "react";

const Tasks = () => {
    const App = () => {
        const [tasks, setTasks] = useState([]);

        useEffect(() => {
            fetchTasks();
        }, []);

        const fetchTasks = async () => {
            try {
                const response = await axios.get(
                    "https://fsc-task-manager-backend.herokuapp.com/tasks"
                );
            } catch (error) {
                console.log(error);
            }
        };
    };
    return (
        <div className="tasks-container">
            <h3>Ultimas tarefas</h3>

            <div className="last-tasks">
                <div className="tasks-list"></div>
            </div>

            <div className="completed-tasks">
                <div className="tasks-list"></div>
            </div>
        </div>
    );
};

export default Tasks;
