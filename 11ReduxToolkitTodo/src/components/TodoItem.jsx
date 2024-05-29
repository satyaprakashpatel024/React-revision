import { useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';
import PropTypes from 'prop-types'; // Import PropTypes

function TodoItem({ todo }) {
	const dispatch = useDispatch();
	return (
		<li className='mt-4 flex justify-between bg-zinc-800 px-4 py-2 rounded' key={todo.id}>
			<div className='text-white flex items-center'>
				<span>{todo.text}</span>
			</div>
			<div className='flex gap-2'>
				<button onClick={() => dispatch(removeTodo(todo.id))} className='text-white bg-red-500 border-0 px-3 focus:outline-none hover:bg-red-600 rounded text-md'>
					delete
				</button>
			</div>
		</li>
	);
}

// Define PropTypes for the TodoItem component
TodoItem.propTypes = {
	todo: PropTypes.shape({
		id: PropTypes.number.isRequired,
		text: PropTypes.string.isRequired,
	}).isRequired,
};

export default TodoItem;
