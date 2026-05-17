"use strict";
// TASK
class TodoList {
    todos = [];
    nextId = 1;
    addTodo(task, dueDate) {
        if (!task.trim()) {
            throw new Error("Task cannot be empty");
        }
        const newTodo = {
            id: this.nextId++,
            task: task,
            completed: false,
            dueDate: dueDate
        };
        this.todos.push(newTodo);
    }
    completeTodo(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (!todo) {
            throw new Error(`Todo with ID ${id} not found.`);
        }
        todo.completed = true;
    }
    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }
    listTodos() {
        return this.todos;
    }
    filterTodos(completed) {
        return this.todos.filter(todo => todo.completed === completed);
    }
    updateTaskDescription(id, newTask) {
        if (!newTask.trim()) {
            throw new Error("New task description cannot be empty");
        }
        const todo = this.todos.find(todo => todo.id === id);
        if (!todo) {
            throw new Error(`Todo with ID ${id} not found.`);
        }
        todo.task = newTask;
    }
    clearCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed);
    }
}
//Code Implementation
console.log("--- THE CODE IS RUNNING! ---");
const myTodoList = new TodoList();
myTodoList.addTodo("Buy groceries", new Date("2026-06-01"));
myTodoList.addTodo("Walk the dog");
myTodoList.addTodo("Submit assignment", new Date("2026-05-20"));
console.log("Initial List:", myTodoList.listTodos());
myTodoList.completeTodo(1);
console.log("\nActive Todos:", myTodoList.filterTodos(false));
myTodoList.updateTaskDescription(2, "Walk the dog around the park");
myTodoList.clearCompleted();
console.log("\nList after clearing completed tasks:", myTodoList.listTodos());
