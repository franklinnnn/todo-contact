import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todoSlice';

const TodoForm = () => {
	const [value, setValue] = useState('');

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		console.log('user entered: ' + value);
		dispatch(
			addTodo({
				title: value,
			}))
	};

	return (
		<form onSubmit={onSubmit} className='form-control mt-3 mb-3'>
			
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add todo...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

            <input type="submit" value="Add To Do" />
		</form>
	);
};

export default TodoForm;
