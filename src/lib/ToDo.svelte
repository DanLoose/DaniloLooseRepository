<script lang="ts">
    import type { Todo } from "../types/Todo";

    export let todo: Todo;
</script>

<form class="flex justify-between">
    <div>
        <input id="${todo.id}" type="checkbox" bind:checked={todo.done} />
        <label class:line-through={todo.done} for="${todo.id}"
            >{todo.text}</label
        >
    </div>
    <div>
        <!-- {todo.dueDate ?? ""} -->
        {todo.dueDate ? new Date(todo.dueDate).toLocaleDateString() : ""}
    </div>
</form>
