const TaskItem = ({ task }) => {
    return (
        <>
            <h1>{task.description}</h1>
            <p>{task.isCompleted ? "Concluída" : "Pendente"}</p>
        </>
    );
};

export default TaskItem;
