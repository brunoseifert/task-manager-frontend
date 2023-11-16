import axios from "axios";
import { useEffect, useState } from "react";

import "./Tasks.scss";

const Tasks = () => {
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
    return (
        <div className="tasks-container">
            <h2>Minhas tarefas</h2>

            <div className="last-tasks">
                <h3>Ultimas tarefas</h3>
                <div className="tasks-list">
                    {tasks
                        .filter((task) => task.isCompleted === false)
                        .map((lastTask) => (
                            <p>{lastTask.description}</p>
                        ))}
                </div>
            </div>

            <div className="completed-tasks">
                <h3>Tarefas concluídas</h3>
                <div className="tasks-list">
                    {tasks
                        .filter((task) => task.isCompleted === true)
                        .map((completedTask) => (
                            <p>{completedTask.description}</p>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Tasks;
