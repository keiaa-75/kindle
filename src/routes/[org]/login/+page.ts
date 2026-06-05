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
