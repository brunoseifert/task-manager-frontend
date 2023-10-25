import { useEffect } from "react";

const TaskItem = ({ task }) => {
    useEffect(() => {
        console.log("Componente montado");

        return () => console.log("Componente desmontado");
    }, []);
    return (
        <>
            <h1>{task.description}</h1>
            <p>{task.isCompleted ? "Concluída" : "Pendente"}</p>
        </>
    );
};

export default TaskItem;

///////Componentes de classe///////////

// import React from "react";

// class TaskItem extends React.Component {
//     render() {
//         return (
//             <>
//                 <h1>{this.props.task.description}</h1>
//                 <p>{this.props.task.isCompleted ? "Concluída" : "Pendente"}</p>
//             </>
//         );
//     }
// }

// export default TaskItem;
