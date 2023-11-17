import "./TaskItem.scss";

import { AiFillDelete } from "react-icons/ai";
import { useAlert } from "react-alert";
import axios from "axios";

const TaskItem = ({ task, fetchTasks }) => {
    const alert = useAlert();

    const handleDeleteTask = async () => {
        try {
            await axios.delete(`http://localhost:8000/tasks/${task._id}`);

            await fetchTasks();

            alert.success("Tarefa deletada com sucesso!");
        } catch (error) {
            alert.show("Não foi possível deletar a tarefa!");
        }
    };

    return (
        <div className="task-item-container">
            <div className="task-description">
                <label
                    className={
                        task.isCompleted
                            ? "checkbox-container-completed"
                            : "checkbox-container"
                    }
                >
                    {task.description}
                    <input type="checkbox" defaultChecked={task.isCompleted} />
                    <span
                        className={
                            task.isCompleted
                                ? "checkmark completed"
                                : "checkmark"
                        }
                    ></span>
                </label>
            </div>
            <div className="delete">
                <AiFillDelete
                    size={18}
                    color="F97474"
                    onClick={handleDeleteTask}
                />
            </div>
        </div>
    );
};

export default TaskItem;
