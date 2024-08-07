import Button from "./Button";
import NewTask from "./NewTask";
export default function Tasks({tasks,projectId, onAdd, onDelete}) {
    // const [tasks, setTasks] = useState([]);
    function handleSetTask(task) {
       onAdd(task)
    }

    function handleDeleteTask(id) {
        onDelete(id)
    }


    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTask projectId={projectId} setTask={handleSetTask}></NewTask>
            <p className="text-stone-800 mb-4">This project does not have any tasks yetl</p>
            <ul>
                {tasks.map(task =>  <li className="flex items-center gap-4">
                    <p>
                        {task.value}
                    </p>
                    <Button onClick={() => handleDeleteTask(task.id)}>
                        Delete
                    </Button>
                    </li>)}
            </ul>
        </section>
    )
}