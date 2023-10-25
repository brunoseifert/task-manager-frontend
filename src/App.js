import { useState, useRef, useEffect } from "react";
import TaskItem from "./components/TaskItem";

const App = () => {
    const mounted = useRef(false);

    useEffect(() => {
        if (!mounted.current) {
            console.log("Componente montado");
            mounted.current = true;
        } else {
            console.log("Componente atualizado");
        }

        return () => console.log("Componente desmontado");
    });

    const [tasks, setTasks] = useState([
        { id: 1, description: "Estudar programação", isCompleted: false },
        { id: 2, description: "Ler livros", isCompleted: false },
        { id: 3, description: "Fazer compras", isCompleted: true },
    ]);

    const handleCleanTasks = () => {
        setTasks([]);
    };

    return (
        <>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
            <button onClick={() => setTasks([])}>Limpar Tarefas</button>
        </>
    );
};

export default App;

///////Componentes de classe///////////

// import React from "react";
// import TaskItem from "./components/TaskItem";
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleStateChange = this.handleStateChange.bind(this);
//         this.state = {
//             tasks: [
//                 {
//                     id: 1,
//                     description: "Estudar programação",
//                     isCompleted: false,
//                 },
//                 { id: 2, description: "Ler livros", isCompleted: false },
//                 { id: 3, description: "Fazer compras", isCompleted: true },
//             ],
//         };
//     }

// handleStateChange() {
//     this.setState({ tasks: [] });
// }

//     render() {
//         return (
//             <>
//                 {this.state.tasks.map((task) => (
//                     <TaskItem key={task.id} task={task} />
//                 ))}
//                 <button onClick={this.handleStateChange}>Limpar Tarefas</button>
//             </>
//         );
//     }
// }

// export default App;
