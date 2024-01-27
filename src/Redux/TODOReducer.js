const ADD_TODO = 'ADD-TODO';
const REMOVE_TODO = 'REMOVE-TODO';
const CHANGE_ACTIVE = 'CHANGE-ACTIVE';
const REMOVE_ALL = 'REMOVE-ALL'

let initialState = {
    todos: [
        {id: 1, text: 'Complete daily workout', completed: true},
        {id: 2, text: 'Read two chapters of a book', completed: false},
        {id: 3, text: 'Update professional LinkedIn profile', completed: true},
        {id: 4, text: 'Plan healthy meals for the week', completed: false},
    ],
}

const TODOReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: action.payload.id,
                        text: action.payload.text,
                        completed: false,
                    },
                ],
            };
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
            };
        case CHANGE_ACTIVE:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
                ),
            };
        case REMOVE_ALL:
            return {
                ...state,
                todos: []
            }
        default:
            return state
    }
}
export const AddTODO = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}
export const RemoveTODO = (todoId) => {
    return {
        type: REMOVE_TODO,
        payload: todoId
    }
}

export const ChangeActive = (todoId) => {
    return {
        type: CHANGE_ACTIVE,
        payload: todoId,
    }
}

export const RemoveAllTODO = () => {
    return {
        type: REMOVE_ALL,
    }
}

export default TODOReducer;







