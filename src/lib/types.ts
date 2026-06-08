// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.

export type ReportCategory = 'Physical' | 'Verbal' | 'Cyber' | 'Social' | 'Other';

export type ReportStatus = 'PENDING REVIEW' | 'UNDER REVIEW' | 'RESOLVED' | 'REJECTED';

export type AppointmentStatus = 'PENDING' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED';

/** Shape of /static/configs/{org}.json */
export interface OrgConfig {
	apiKey: string;
	authDomain: string;
	projectId: string;
	storageBucket: string;
	messagingSenderId: string;
	appId: string;
	cloudinaryCloudName: string;
	cloudinaryUploadPreset: string;
}

export interface StudentProfile {
	uid: string;
	name: string;
	email: string;
	lrn: string;
	createdAt: number;
}

export interface ReportHistoryEntry {
	oldStatus: ReportStatus;
	newStatus: ReportStatus;
	description: string;
	updatedBy: string;
	timestamp: number;
}

export interface Report {
	id: string;
	uid: string;
	name: string;
	email: string;
	category: ReportCategory;
	description: string;
	/** Cloudinary secure_url strings for uploaded evidence files */
	evidenceUrls: string[];
	externalLink: string | null;
	status: ReportStatus;
	createdAt: number;
	/** Embedded status-change log, appended via arrayUnion on each admin update */
	history: ReportHistoryEntry[];
}

export interface Appointment {
	/** Firestore auto-ID */
	id: string;
	uid: string;
	name: string;
	email: string;
	preferredDateTime: number;
	reason: string;
	status: AppointmentStatus;
	createdAt: number;
}

export interface DashboardStats {
	pendingReports: number;
	resolvedReports: number;
	totalAppointments: number;
	categoryCounts: Record<ReportCategory, number>;
	recentReports: Report[];
}
