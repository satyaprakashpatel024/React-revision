import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
	todos: [{ id: 1, text: 'Hello',completed:false },{id:2,text:"hiii",completed:false}],
};

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: (state, action) => {
            const todos = { id: nanoid(), text: action.payload };
			state.todos.push(todos);
		},
		removeTodo: (state, action) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},
		updateTodo: (state, action) => {
			state.todos = state.todos.map((todo) => (todo.id === action.payload.id ? action.payload : todo));
		},
	},
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
