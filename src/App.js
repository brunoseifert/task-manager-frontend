import { useState, useEffect } from "react";
import TaskItem from "./components/TaskItem";
import axios from "axios";

const App = () => {
    const [tasks, setTasks] = useState([
        { id: 1, description: "Estudar programação", isCompleted: false },
        { id: 2, description: "Ler livros", isCompleted: false },
        { id: 3, description: "Fazer compras", isCompleted: true },
    ]);

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
        <>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </>
    );
};

export default App;
