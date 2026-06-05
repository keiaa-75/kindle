<script lang="ts">
	import { setContext } from 'svelte';
	import { getFirebaseApp } from '$lib/firebase';

	const { data, children } = $props();

	setContext('org', () => data.org);
	setContext('firebase', () => getFirebaseApp(data.org));
</script>

{@render children()}
