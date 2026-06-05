import { initializeApp, getApps } from 'firebase/app';
import type { FirebaseApp } from 'firebase/app';

export function getFirebaseApp(org: string, config?: object): FirebaseApp {
	const existing = getApps().find((app) => app.name === org);
	if (existing) return existing;
	if (!config) throw new Error(`Firebase app "${org}" has not been initialized.`);
	return initializeApp(config, org);
}
