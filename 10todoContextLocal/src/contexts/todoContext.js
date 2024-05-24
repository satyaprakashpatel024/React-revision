/* eslint-disable no-unused-vars */
import { createContext, useContext } from 'react';

export const TodoContext = createContext({
	todos: [
		{
			id: 1,
			todo: 'task1',
			completed: false,
		},
	],
	addTodo: (todo) => {},
	updateTodo: (id, todo) => {},
	deleteTodo: (id) => {},
	toggleTodo: (id) => {},
});

export const useTodo = () => {
	return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
