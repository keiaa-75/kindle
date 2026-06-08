// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at https://www.mozilla.org/MPL/2.0/.

import { redirect } from '@sveltejs/kit';
import { getFirebaseApp } from '$lib/firebase';
import { getAuth } from 'firebase/auth';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const { org } = await parent();
	const auth = getAuth(getFirebaseApp(org));

	if (auth.currentUser) {
		const token = await auth.currentUser.getIdTokenResult();
		const role = token.claims.role;

		redirect(302, role === 'admin' ? `/${org}/admin/dashboard` : `/${org}/student/dashboard`);
	}
};
