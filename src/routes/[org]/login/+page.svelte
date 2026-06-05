<script lang="ts">
	import { getContext } from 'svelte';
	import { getFirebaseApp } from '$lib/firebase';
	import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
	import { invalidateAll } from '$app/navigation';

	const getOrg = getContext<() => string>('org');

	let email = $state('');
	let password = $state('');
	let error = $state('');

	async function login(event: Event) {
		event.preventDefault();
		error = '';
		try {
			const auth = getAuth(getFirebaseApp(getOrg()));
			await signInWithEmailAndPassword(auth, email, password);

			await invalidateAll();
		} catch {
			error = 'Invalid email or password.';
		}
	}
</script>

<form onsubmit={login}>
	<input type="email" bind:value={email} placeholder="Email" />
	<input type="password" bind:value={password} placeholder="Password" />
	{#if error}<p>{error}</p>{/if}
	<button type="submit">Log in</button>
</form>
