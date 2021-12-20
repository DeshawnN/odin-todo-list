import Renderer from './dom-renderer';
import Todo from './todos';
export default class DOMCreate {
    static TodoList(todoList, listName) {
        const list = document.createElement('div');
        list.classList.add('todolist');
        const heading = document.createElement('h2');
        heading.textContent = listName;
    
        list.appendChild(heading);

        const addTodoButton = document.createElement("button");
        addTodoButton.textContent = "Add";
        addTodoButton.addEventListener('click', () => {
            const inputArea = document.querySelector('.input-area');
            const title = inputArea.querySelector('[data-title]');
            const description = inputArea.querySelector('[data-description]');
            const dueDate = inputArea.querySelector('[data-due-date]');
            const priority = inputArea.querySelector('[data-priority]');

            if (!title.value) return;

            const todo = new Todo(
                title.value, 
                description.value || "None", 
                new Date(dueDate.value).toDateString() || new Date(Date.now()).toDateString(), 
                priority.value || "low"
            );
            todoList.addTodo(todo, listName);
            
            title.value = '';
            description.value = '';
            dueDate.value = '';
            priority.value = 'low';
            Renderer.todos(todoList);
        });
        list.appendChild(addTodoButton);
        return list;
    }

    static Todo(todoContent, todoList, list) {
        const todo = document.createElement('div');
        todo.classList.add('todo');
        
        const title = document.createElement("div");
        title.textContent = `Title: ${todoContent.title}`;
        todo.append(title);

        const drillDown = document.createElement('div');
        drillDown.classList.add('drilldown');
        drillDown.classList.toggle('hidden');

        todo.addEventListener('click', (event) => {
            drillDown.classList.toggle('hidden');
        });
        
        const description = document.createElement("div");
        description.textContent = `Description: ${todoContent.description}`;
        drillDown.append(description);

        const dueDate = document.createElement('div');
        dueDate.textContent = `Date Due: ${todoContent.dueDate}`;
        drillDown.appendChild(dueDate);

        const priority = document.createElement('div');
        priority.textContent = `Priority: ${todoContent.priority}`;
        drillDown.appendChild(priority);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener('click', (event) => {
            event.stopPropagation();
            const index = todoList.list()[list].indexOf(todoContent);
            todoList.removeTodo(list, index);
            Renderer.todos(todoList);
        });
        drillDown.appendChild(deleteButton);
        
        todo.appendChild(drillDown);

        return todo;
    }

    static NewListButton() {
        const button = document.createElement('button');
        button.textContent = 'New List';

        return button;
    }
}