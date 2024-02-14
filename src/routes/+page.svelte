<script lang="ts">
    import ToDo from "$lib/ToDo.svelte";
    import { addTodo, deleteCompleted, todos } from "../store/store";
    import { isValidDate } from "$lib/utils";

    let inputText: string = "";
    let inputDate: string = "";
    let error: string;

    $: remaining = $todos.filter((todo) => !todo.done).length;

    const handleCreate = () => {
        if (!inputText.trim()) {
            error = "Please enter a todo";
            return;
        }

        if (!inputDate.trim() || !isValidDate(inputDate)) {
            error = "Please enter a valid date";
            return;
        }

        error = "";
        addTodo({ text: inputText, dueDate: new Date(inputDate) });
        inputText = "";
        inputDate = "";
    };
    const handleDeleteDone = () => {
        deleteCompleted();
    };
</script>

<div
    class="flex flex-col font-sans text-lg container max-w-screen-sm h-screen justify-center"
>
    <h1 class="text-center text-xl font-semibold">Todo app</h1>
    <p>{remaining} remaining</p>
    <form on:submit|preventDefault={handleCreate}>
        <label for="text" class="text-base font-semibold"> Text: </label>
        <div class="flex gap-2">
            <input
                bind:value={inputText}
                class="border border-1 border-gray-400 rounded py-1 px-2"
                placeholder="Todo text"
            />

            <input
                type="Date"
                class="border border-1 border-gray-400 rounded py-1 px-2"
                required
                bind:value={inputDate}
            />
            <button
                class="bg-blue-500 text-white rounded py-1 px-2"
                type="submit">Create</button
            >
        </div>
    </form>
    {#if error}
        <p class="text-red-500" aria-live="assertive">{error}</p>
    {/if}

    <div id="todos">
        {#each $todos as todo (todo.id)}
            <ToDo bind:todo />
        {/each}
    </div>
    <div>
        <button
            on:click={handleDeleteDone}
            class="bg-red-400 text-white rounded py-1 px-2 mt-2 hover:bg-red-500"
        >
            Clear completed
        </button>
    </div>
</div>
