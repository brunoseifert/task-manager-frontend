import axios from "axios";
import { useEffect, useState } from "react";
import { useAlert } from "react-alert";

import "./Tasks.scss";

import TaskItem from "./TaskItem";
import AddTask from "./AddTask";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    const alert = useAlert();

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get("http://localhost:8000/tasks");

            setTasks(response.data);
            console.log(response.data);
        } catch (_error) {
            alert.show("Não foi possível carregar as tarefas!");
        }
    };
    return (
        <div className="tasks-container">
            <h2>Minhas tarefas</h2>

            <div className="last-tasks">
                <h3>Ultimas tarefas</h3>
                <AddTask fetchTasks={fetchTasks} />
                <div className="tasks-list">
                    {tasks
                        .filter((task) => task.isCompleted === false)
                        .map((lastTask) => (
                            <TaskItem
                                task={lastTask}
                                fetchTasks={fetchTasks}
                                key={lastTask}
                            />
                        ))}
                </div>
            </div>

            <div className="completed-tasks">
                <h3>Tarefas concluídas</h3>
                <div className="tasks-list">
                    {tasks
                        .filter((task) => task.isCompleted)
                        .map((completedTask) => (
                            <TaskItem
                                task={completedTask}
                                fetchTasks={fetchTasks}
                                key={completedTask}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Tasks;
