import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../../redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const handleCompleteClick = () => {
		dispatch(toggleComplete({id: id, completed: !completed}))
	}

	const handleDeleteClick = () => {
		dispatch(deleteTodo({id: id}))
	}

	return (
        <section>
            <li className={`list-group-item ${completed && 'list-group-item-success'}`}>
                <div className='todo-item'>
                    <div className='todo-item-content'>
                        <input 
                            type='checkbox' 
                            className="checkbox"
                            checked={completed}
                            onChange={handleCompleteClick}
                        ></input>
                        {title}
                    </div>
                    <button onClick={handleDeleteClick} className='delete-button'>X</button>
                    
                </div>
                
            </li>
        </section>
	);
};

export default TodoItem;
