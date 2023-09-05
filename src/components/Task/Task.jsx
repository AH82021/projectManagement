import './Task.css'
const Task = ({title, body}) => {
  return (
    <div className="task-container">
        <h3>{title}</h3>
        <p>{body}</p>

      
    </div>
  )
}

export default Task
