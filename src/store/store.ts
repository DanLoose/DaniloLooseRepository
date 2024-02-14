import { writable } from 'svelte/store';
import type { Todo } from '../types/Todo';


export const todos = writable(Array<Todo>());

export function addTodo(todo: { text: string; dueDate: Date }) {
    todos.update(currentTodos => [...currentTodos, { id: Math.random(), ...todo, done: false }]);
}

export function deleteCompleted() {
    todos.update(todos => todos.filter(todo => !todo.done));
}
