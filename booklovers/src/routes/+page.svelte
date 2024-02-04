<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->



<script>
    export let data;
</script>

<!-- data.count f12 view source (render on server side) -->
<h1>Num of users: {data.count}</h1> 
