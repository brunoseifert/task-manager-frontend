import "./TaskItem.scss";

import { AiFillDelete } from "react-icons/ai";
import { useAlert } from "react-alert";
import axios from "axios";

const TaskItem = ({ task, fetchTasks }) => {
    const alert = useAlert();

    const handleDeleteTask = async () => {
        try {
            await axios.delete(
                `${process.env.REACT_APP_API_URL}/tasks/${task._id}`
            );

            await fetchTasks();

            alert.success("Tarefa deletada com sucesso!");
        } catch (_error) {
            alert.show("Não foi possível deletar a tarefa!");
        }
    };

    const handleCompleteTask = async () => {
        try {
            await axios.patch(
                `${process.env.REACT_APP_API_URL}/tasks/${task._id}`,
                {
                    isCompleted: !task.isCompleted,
                }
            );

            if (task.isCompleted) {
                alert.success("Tarefa marcada como não concluída!");
            } else {
                alert.success("Tarefa marcada como concluída!");
            }

            await fetchTasks();
        } catch (_error) {
            alert.show("Não foi possível atualizar a tarefa!");
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
                    <input
                        type="checkbox"
                        defaultChecked={task.isCompleted}
                        onChange={handleCompleteTask}
                    />
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
