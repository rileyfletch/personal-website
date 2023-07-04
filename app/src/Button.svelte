<script>
    let count = 0;
        
    function increment() {
        count++;
    }
    
    $: doubled = count * 2;
    $: quad = doubled * 2;
    $: console.log(`The count is ${count}`);

    $: {
        console.log(`This is : ${count}`);
        console.log(`This is double: ${doubled}`);
    }

    $: if (count >= 10) {
        alert('Count is very high, resetting!');
        count = 0;
    }
</script>

<div>
    <button on:click={increment}>
        Clicked {count}
        {count === 1 ? 'time' : 'times'}
    </button>
    <br>
    <button>
        {count} is {doubled}
    </button>
    <br>
    <button>
        {doubled} is {quad}
    </button>
</div>

