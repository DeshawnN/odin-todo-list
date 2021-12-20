import DOMCreate from './dom-creation';

export default class Renderer {
    static todos(todoList) {
        const container = document.querySelector('.container');
        
        this.clear(container);

        const lists = Object.keys(todoList.list());
        
        for (const list of lists) {
            const listDiv = DOMCreate.TodoList(todoList, list);

            for (const todo of todoList.list()[list]) {
                const todoDiv = DOMCreate.Todo(todo, todoList, list);
                listDiv.appendChild(todoDiv);
            }

            container.appendChild(listDiv);
        }
    }

    static clear(element) {
        element.innerHTML = "";
    }
}