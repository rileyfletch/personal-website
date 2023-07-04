<script>
    import { onMount } from "svelte";

    let isVisible = false;

    onMount(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    });

    function handleScroll() {
        const element = document.querySelector('.scroll-animation');
        const position = element.getBoundingClientRect().top;

        const screenPosition = window.innerHeight / 1.3;

        isVisible = position < screenPosition;
    }
</script>

<style>
    .scroll-animation {
        opacity: 1;
        transform: translateX(100px);
        transition: opacity 0.3s, transform 0.3s;
    }

    .scroll-animation-visible {
        opacity: 1;
        transform: translateX(0);
    }
</style>

<div class:scroll-animation-visible={isVisible} class="scroll-animation">
    <h1>Example text</h1>
</div>