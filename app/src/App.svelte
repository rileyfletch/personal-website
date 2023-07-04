<script>
	import Button from "./Button.svelte";
	import Component from "./Component.svelte";
  	import DynamicList from "./DynamicList.svelte";
  	import Scroller from "./components/Scroller.svelte";


	let name = 'Riley';
	let banner = 'This is a <strong>BIG</strong> banner';
</script>

<main> 
	<h1>Hello {name}!</h1>
	<h1>{@html banner}</h1>
	<Component></Component>
	<Button></Button>
	<DynamicList></DynamicList>
	<Scroller></Scroller>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		font-family:Georgia, 'Times New Roman', Times, serif;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>