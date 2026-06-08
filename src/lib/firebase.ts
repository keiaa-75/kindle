// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at https://www.mozilla.org/MPL/2.0/.

import { initializeApp, getApps } from 'firebase/app';
import type { FirebaseApp } from 'firebase/app';

export function getFirebaseApp(org: string, config?: object): FirebaseApp {
	const existing = getApps().find((app) => app.name === org);
	if (existing) return existing;
	if (!config) throw new Error(`Firebase app "${org}" has not been initialized.`);
	return initializeApp(config, org);
}
