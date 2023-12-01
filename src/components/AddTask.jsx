import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useAlert } from "react-alert";

import CustomInput from "./CustomInput";
import CustomButton from "./Button";

import "./AddTask.scss";

const AddTask = ({ fetchTasks }) => {
    const [task, setTask] = useState("");

    const alert = useAlert();

    const handleAddTask = async () => {
        try {
            if (!task) {
                alert.show("A tarefa não pode ser vazia!");
                return;
            }

            await fetch("http://localhost:8000/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    description: task,
                    isCompleted: false,
                }),
            });

            alert.success("Tarefa adicionada com sucesso!");

            setTask("");

            await fetchTasks();
        } catch (_error) {
            console.log(_error);
        }
    };

    const onChange = (e) => {
        setTask(e.target.value);
    };
    return (
        <div className="add-task-container">
            <CustomInput
                label="Adicionar Tarefa..."
                value={task}
                onChange={onChange}
                onEnterPress={handleAddTask}
            />
            <CustomButton onClick={handleAddTask}>
                <FaPlus size={12} />
            </CustomButton>
        </div>
    );
};

export default AddTask;
