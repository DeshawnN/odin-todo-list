import Todo from './todos';

export default function TodoList() {
    let projects = { 
        default: [
            new Todo('Finish the Todo Application', 
            "Finalize the Todo Web App",
            "None",
            "None"),
            new Todo('Start next Application',
            "Find your next Project and develop it!",
            "None",
            "None")
        ]
    };

    const addTodo = (todo, list) => projects[list].push(todo);
    const addList = (listName) => {projects[listName] = []};
    const removeTodo = (list, position) => {
        projects[list].splice(position, 1);
    };
    const removeList = (list) => {
        delete projects[list];
    }
    const list = () => projects;
    const storeList = () => {
        localStorage.setItem('todoList', JSON.stringify(projects));
    }
    const loadList = () => {
        projects = JSON.parse(localStorage.getItem('todoList'));
    }

    return {
        addTodo,
        removeTodo,
        addList,
        removeList,
        list,
        storeList,
        loadList
    }
}