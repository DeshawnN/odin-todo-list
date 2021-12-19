export default function Render() {
    function todos(todoList) {
        const container = document.querySelector('.container');
        const lists = Object.keys(todoList);
        
        for (const list of lists) {
            const listDiv = document.createElement('div');
            const heading = document.createElement('h2');
            heading.textContent = list;
            listDiv.append(heading);

            for (const todo of todoList[list]) {
                const todoDiv = document.createElement('div');
                todoDiv.classList.add('todo');
                
                const title = document.createElement("div");
                title.textContent = todo.title;
                todoDiv.append(title);

                const description = document.createElement("div");
                description.textContent = todo.description;
                todoDiv.append(description);

                const dueDate = document.createElement('div');
                dueDate.textContent = todo.dueDate;
                todoDiv.appendChild(dueDate);

                const priority = document.createElement('div');
                priority.textContent = todo.priority;
                todoDiv.appendChild(priority);

                listDiv.append(todoDiv);
            }
            container.append(listDiv);
        }
    }

    return {
        todos
    }
}