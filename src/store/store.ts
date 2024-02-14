import { writable } from 'svelte/store';
import type { Todo } from '../types/Todo';


export const todos = writable(Array<Todo>());

export function addTodo(text: string, dueDate: Date) {
    todos.update(currentTodos => [...currentTodos, { id: Math.random(), text, done: false, dueDate }]);
}

export function deleteCompleted() {
    todos.update(todos => todos.filter(todo => !todo.done));
}
