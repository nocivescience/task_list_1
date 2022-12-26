export function TaskList(props){
    if(props.tasks.length===0){
        return <div>Aca no hay nada</div>
    }
    return (
        <div>
            {props.tasks.map((task)=>(
                <div key={task.id}>
                    <h1>{task.title}</h1>
                    <h2>{task.description}</h2>
                </div>
            ))}
        </div>
    )
}