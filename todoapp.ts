// TASK

// Your task is to implement a simple Todo List application using TypeScript. This application should allow users to add, complete, remove, and list todo items.


// Requirements


// 1. Create an interface TodoItem with the following properties:

//    - id: number

//    - task: string

//    - completed: boolean


// 2. Implement a TodoList class with the following methods:

//    - `addTodo(task: string): void` - Adds a new todo item

//    - `completeTodo(id: number): void` - Marks a todo item as completed

//    - `removeTodo(id: number): void` - Removes a todo item

//    - `listTodos(): TodoItem[]` - Returns all todo items


// 3. The TodoList class should maintain an array of TodoItem objects.


// 4. Add a method to filter todos by their completed status.


// 5. Implement a method to update the task description of a todo item.


// 6. Add a method to clear all completed todos.


// 7. Extend the TodoItem interface to include a `dueDate property of type Date`. Update relevant methods to accommodate this new property.


//  Evaluation Criteria


// - Correct implementation of the TodoItem interface and TodoList class

// - Proper use of TypeScript features (interfaces, types, access modifiers)

// - Error handling

// - Code organisation and readability





interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
    dueDate?: Date;
}

class TodoList {
    private todos: TodoItem[] = [];
    private nextId: number = 1;

    addTodo(task: string, dueDate?: Date): void {
        if (!task.trim()) {
            throw new Error("Task cannot be empty");
        }

        const newTodo: TodoItem = {
            id: this.nextId++,
            task: task,
            completed: false,
            dueDate: dueDate
        };

        this.todos.push(newTodo);
    }

    completeTodo(id: number): void {
        const todo = this.todos.find(todo => todo.id === id);

        if (!todo) {
            throw new Error(`Todo with ID ${id} not found.`);
        }

        todo.completed = true;
    }

    removeTodo(id: number): void {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    listTodos(): TodoItem[] {
        return this.todos;
    }

    filterTodos(completed: boolean): TodoItem[] {
        return this.todos.filter(todo => todo.completed === completed);
    }

    updateTaskDescription(id: number, newTask: string): void {
        if (!newTask.trim()) {
            throw new Error("New task description cannot be empty");
        }

        const todo = this.todos.find(todo => todo.id === id);

        if (!todo) {
            throw new Error(`Todo with ID ${id} not found.`);
        }

        todo.task = newTask;
    }

    clearCompleted(): void {
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

    console.log(
        "\nList after clearing completed tasks:",
        myTodoList.listTodos()
    );


