import Lane from '../../components/Lane/Lane';
import './Board.css';

const lanes =[
  {id: 1,title : 'To Do 🆕'},
  {id: 2,title : 'In Progress 👨‍💻'},
  {id: 3,title : 'Review 🔄'},
  {id: 4,title : 'Done ✅'},
]

function Board() {
  return (
    <div className='Board-wrapper'>
      {lanes.map((lane) => (
        <Lane key={lane.id} title={lane.title} />
      ))}
    </div>
  );
}

export default Board;
