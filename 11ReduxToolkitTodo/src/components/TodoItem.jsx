import { useDispatch } from 'react-redux';
// Import updateTodo
import { removeTodo, updateTodo } from '../features/todo/todoSlice'; 
// Import PropTypes
import PropTypes from 'prop-types';
// import useState
import { useState } from 'react';

function TodoItem({ todo }) {
	// using dispatch
	const dispatch = useDispatch();
	// State to manage editing mode
	const [editing, setEditing] = useState(false); 
	// State to manage edited text
	const [editedText, setEditedText] = useState(todo.text); 
	// State to manage toggleTodo
	const [toggleTodo,setToggleTodo] = useState(todo.completed);

	const handleDelete = () => {
		dispatch(removeTodo(todo.id));
	};

	const handleUpdate = () => {
		dispatch(updateTodo({ ...todo, text: editedText }));
		setEditing(!editing);
	};

	return (
		<li className='mt-4 flex justify-between bg-zinc-800 px-4 py-2 rounded' key={todo.id}>
			<div className='text-white flex items-center'>
				<input type='checkbox' className={`cursor-pointer mr-2`} checked={toggleTodo} onClick={()=>setToggleTodo(!toggleTodo)}/>
				{editing ? (
					<input
						type='text'
						value={editedText}
						onChange={(e) => {
							setEditedText(e.target.value);
						}}
						className='text-white bg-zinc-800 border-0 px-2 py-1 focus:outline-none rounded'
					/>
				) : (
					<div className={`text-white flex items-center ${toggleTodo ? 'line-through' : '' }`}>
						<span>{todo.text}</span>
					</div>
				)}
			</div>
			<div className='flex gap-2'>
				<button
					onClick={() => {
						setEditing(!editing);
						handleUpdate();
					}}
					className='text-white bg-blue-500 border-0 px-3 focus:outline-none hover:bg-blue-600 rounded text-md'
				>
					{editing ? 'Save' : 'Edit'}
				</button>
				<button onClick={handleDelete} className='text-white bg-red-500 border-0 px-3 focus:outline-none hover:bg-red-600 rounded text-md'>
					Delete
				</button>
			</div>
		</li>
	);
}

TodoItem.propTypes = {
	todo: PropTypes.shape({
		id: PropTypes.number.isRequired,
		text: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired,
	}).isRequired,
};

export default TodoItem;

/* eslint-disable no-unused-vars */
/*
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
*/