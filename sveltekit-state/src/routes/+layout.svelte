<script lang="ts">
	import '../app.css';
	import Nav from '../lib/components/Nav.svelte';
	import Footer from '../lib/components/Footer.svelte';
</script>

<div>
	<Nav />
	<div class="p-4 bg-neutral-800 text-white min-h-screen">
		<slot />
	</div>
	<Footer />
</div>
