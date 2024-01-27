import './TODOList.css';
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {AddTODO, ChangeActive, RemoveAllTODO, RemoveTODO} from "../../Redux/TODOReducer";

const TODOList = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const [newTodo, setNewTodo] = useState('');

    const AddTodoHandler = () => {
        if (newTodo !== '') {
            let todo = {
                id: Date.now(),
                text: newTodo
            };
            dispatch(AddTODO(todo));
            setNewTodo('');
        }
    }

    const RemoveTodoHandler = (todoId) => {
        dispatch(RemoveTODO(todoId))
    }

    const ChangeActiveHandler = (todo) => {
        dispatch(ChangeActive(todo.id));
    }

    const KeyDownHandler = (e) => {
        if (e.key === 'Enter') {
            AddTodoHandler();
        }
    }

    const RemoveAllTodosHandler = () => {
        dispatch(RemoveAllTODO())
    }

    return (
        <div className='TodoList'>
            <div className='Input'>
                <input type="text" value={newTodo} maxLength={50} onKeyDown={e => KeyDownHandler(e)} onChange={e => setNewTodo(e.target.value)}/>
                <button onClick={AddTodoHandler}>Add Todo</button>
            </div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} className={todo.completed ? 'CompletedTask' : ''} onClick={() => ChangeActiveHandler(todo)}>
                        <input type="checkbox" onClick={() => ChangeActiveHandler(todo)} checked={todo.completed}/>
                        <p>{todo.text}</p>
                        <button onClick={() => RemoveTodoHandler(todo.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            {
                todos.length > 0 ? <button onClick={RemoveAllTodosHandler} className='ClearAll'>Clear All</button> : <h1>No tasks</h1>
            }
            </div>
    )
}

export default TODOList;