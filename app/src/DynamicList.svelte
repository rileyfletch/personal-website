<script>
    let items = ['Item 1', 'Item 2', 'Item 3'];

    function addItem() {
        items = [...items, `Item ${items.length + 1}`];
    }

    function removeItem(index) {
        items = items.filter((_, i) => i !== index);
    }
</script>

<button on:click={addItem}>Add Item</button>

<ul>
    {#each items as item, index}
        <li>
            {item}
            <button on:click={() => removeItem(index)}>Remove</button>
        </li>
    {/each}
</ul>