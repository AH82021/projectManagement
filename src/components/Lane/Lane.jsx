import './Lane.css';
import Task from '../Task/Task';
function Lane({ title, loading, error, tasks }) {
  return (
    <div className='Lane-container'>
      <h2>{title}</h2>
      {
        loading || error ? (<span>{error || 'loading..'}</span>)  : tasks.map((task)=>(
        <Task key={task.id} id={task.id} title={task.title} body={task.body} /> 

        )
        )
      }
    </div>
  );
}

export default Lane;
