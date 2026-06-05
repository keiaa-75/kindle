import { error } from '@sveltejs/kit';
import { getFirebaseApp } from '$lib/firebase';
import type { LayoutLoad } from './$types';

export const ssr = false;

export const load: LayoutLoad = async ({ params, fetch }) => {
	const { org } = params;

	const res = await fetch(`/configs/${org}.json`);

	if (!res.ok) {
		error(404, `Organization "${org}" not found.`);
	}

	const config = await res.json();
	getFirebaseApp(org, config);

	return { org };
};
