export default function Todo(title, description, dueDate, priority) {
    priority = priority.slice(0, 1).toUpperCase() + priority.slice(1);
    return {
        title, 
        description,
        dueDate: new Date(dueDate).toDateString(),
        priority
    }
}