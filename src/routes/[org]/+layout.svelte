<!--
This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
If a copy of the MPL was not distributed with this file, You can obtain one at https://www.mozilla.org/MPL/2.0/.
-->

<script lang="ts">
	import { setContext } from 'svelte';
	import { getFirebaseApp } from '$lib/firebase';

	const { data, children } = $props();

	setContext('org', () => data.org);
	setContext('firebase', () => getFirebaseApp(data.org));
</script>

{@render children()}
