import './style.css'
import TodoList from './todolist';
import Renderer from './dom-renderer';

(function() {
    const todoList = TodoList();
    if (localStorage.getItem('todoList')) {
        todoList.loadList();
    }

    const newListButton = document.querySelector('[data-new-list]');
    newListButton.addEventListener('click', () => {
        const listName = document.querySelector('[data-new-list-name]');
        todoList.addList(listName.value);
        listName.value = '';

        todoList.storeList();
        Renderer.todos(todoList);
    });

    Renderer.todos(todoList);
})();