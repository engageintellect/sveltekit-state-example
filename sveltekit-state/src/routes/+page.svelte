<script lang="ts">
	let name: string;
	import { foo } from '../lib/store';

	const handleSubmit = () => {
		$foo = name;
	};
</script>

<div>This is page 1</div>
<div>Your name: {name || 'stranger'}</div>
<div>Your state: {$foo}</div>

<input class="text-black" bind:value={name} placeholder="enter your name" />

<button class="bg-blue-500 p-2" on:click={handleSubmit}>Submit</button>
