import { useState } from "react";
import { FaPlus } from "react-icons/fa";

import CustomInput from "./CustomInput";
import CustomButton from "./Button";

import "./AddTask.scss";

const AddTask = () => {
    const [task, setTask] = useState("");

    const onChange = (e) => {
        setTask(e.target.value);
    };
    return (
        <div className="add-task-container">
            <CustomInput
                label="Adicionar Tarefa..."
                value={task}
                onChange={onChange}
            />
            <CustomButton>
                <FaPlus size={12} />
            </CustomButton>
        </div>
    );
};

export default AddTask;
