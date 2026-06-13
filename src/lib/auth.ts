// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.

import { onAuthStateChanged } from 'firebase/auth';
import type { Auth, User } from 'firebase/auth';

/**
 * Resolves to the current Firebase user (or null) once the Auth SDK has
 * finished its initialization check.
 *
 * Under adapter-static, auth.currentUser can still be null on the first
 * render even when a valid session exists. The SDK restores the session
 * asynchronously from IndexedDB. Every layout auth guard should call this
 * instead of reading auth.currentUser directly.
 */
export function waitForUser(auth: Auth): Promise<User | null> {
	return new Promise((resolve) => {
		const unsub = onAuthStateChanged(auth, (user) => {
			unsub();
			resolve(user);
		});
	});
}
