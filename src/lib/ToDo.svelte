<script lang="ts">
    import type { Todo } from "../types/Todo";

    export let todo: Todo;
</script>

<form>
    <input id="${todo.id}" type="checkbox" bind:checked={todo.done} />
    <label class:line-through={todo.done} for="${todo.id}">{todo.text}</label>
</form>
