// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at https://www.mozilla.org/MPL/2.0/.

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
