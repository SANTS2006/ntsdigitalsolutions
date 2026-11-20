import ntsoneHome from '../assets/images/solutions/ntsone/home.webp';
import transportHome from '../assets/images/solutions/transport/home.webp';
import realestateHome from '../assets/images/solutions/realestate/home.webp';
import schoolHome from '../assets/images/solutions/school/home.webp';
import attendHome from '../assets/images/solutions/attend/home.webp';

const solutions = [
    {
        id: "ntsone",
        title: "NTSOne",
        category: "Business Operations Platform",
        liveUrl: "https://ntsone.ntsdigitalsolutions.com",
        liveLabel: "ntsone.ntsdigitalsolutions.com",

        description:
            "One workspace for registrations, voting polls, orders, mobile-money payments, bookkeeping, invoices and receipts, shared with a simple link or QR code.",

        features: [
            "Registration forms with many question types, from text to file uploads",
            "Free or paid voting polls",
            "Orders, mobile-money payments and contribution tracking",
            "Bookkeeping, invoices, quotations and receipts",
            "Wish lists to plan what you want to buy",
            "ID cards and event tickets from 50+ ready-made designs",
            "Share anything with a link or QR code and review every response"
        ],

        technology: {
            platform: [
                "Works on any phone",
                "Light & dark mode",
                "Installable on the home screen",
                "Scan-to-register"
            ],
            outputs: [
                "ID cards",
                "Event tickets",
                "Invoices & receipts",
                "Business cards"
            ]
        },

        challenge:
            "Organisations, events and small businesses often juggle separate tools for sign-ups, polls, orders, payments and record keeping, so it is hard to see who registered, who paid and what was approved.",

        solution:
            "NTS built NTSOne as a single, secure workspace that takes a participant from sign-up form to approved record, collects payments by mobile money, and issues the invoices, receipts, ID cards and tickets that follow.",

        images: [ntsoneHome]
    },

    {
        id: "nts-transport",
        title: "NTS Transport",
        category: "Transport Management Solution",
        liveUrl: "https://ntstransport.onrender.com",
        liveLabel: "ntstransport.onrender.com",

        description:
            "A complete system for bus and coach companies: seat booking, QR tickets, dispatch, fleet care, people and payroll, all under the company's own brand.",

        features: [
            "Online and desk seat sales on a real seat map, with no double bookings",
            "QR and barcode tickets scanned with the phone camera at boarding",
            "Dispatch board to assign vehicles and crew and post delays",
            "Payments, refunds and daily cash-up",
            "Fleet maintenance jobs, vehicle documents and expiry alerts",
            "Recruitment, hiring and payroll, with role-based access and an audit trail"
        ],

        technology: {
            platform: [
                "Installable web app",
                "Offline page",
                "Camera scanning",
                "Light & dark themes"
            ],
            branding: [
                "Your logo & colours",
                "Your own web address"
            ]
        },

        challenge:
            "Transport companies run on spreadsheets, paper tickets and scattered chats, which leads to double-sold seats, missed maintenance and slow, unreliable communication with passengers.",

        solution:
            "NTS built a single connected platform where a seat sold at the desk is gone online in the same second, dispatch and boarding share live data, and finance, HR and fleet teams work from the same records.",

        images: [transportHome]
    },

    {
        id: "nts-real-estate",
        title: "NTS Real Estate System",
        category: "Property Management Solution",
        liveUrl: "https://ntsrealestate.onrender.com",
        liveLabel: "ntsrealestate.onrender.com",

        description:
            "A property management platform that brings owners, tenants, agents, vendors and finance teams together, from the first unit listed to the last receipt reconciled.",

        features: [
            "Properties, buildings and units with owner and manager assignments",
            "Tenants, leases and a self-service tenant portal",
            "Rent invoicing, multi-method payments, refunds and expense approvals",
            "Maintenance requests, vendor work orders and inspections",
            "Land and unit sales with instalment plans and agent referrals",
            "Built-in chat, reports, audit log, roles and MFA"
        ],

        technology: {
            modules: [
                "Portfolio",
                "Leasing",
                "Billing",
                "Operations",
                "Land & deals",
                "Communication",
                "Insights"
            ],
            security: [
                "Role-based permissions",
                "Multi-factor authentication",
                "Audit trail"
            ]
        },

        challenge:
            "Property businesses juggle spreadsheets, chat groups and paper files, so occupancy, arrears, maintenance and cash flow are hard to see in one place.",

        solution:
            "NTS built one connected workspace where every record links to the next: a unit to its lease, a lease to its invoices, an invoice to its payments, with a live dashboard across the whole portfolio.",

        images: [realestateHome]
    },

    {
        id: "nts-school-system",
        title: "NTS School System",
        category: "Education Solution",
        liveUrl: "https://ntsschoolsystem.onrender.com",
        liveLabel: "ntsschoolsystem.onrender.com",

        description:
            "A school management platform covering student records, admissions, academics, attendance, exams, fees, communication and campus services, with the right access for every person.",

        features: [
            "Student profiles, guardians, online admissions, ID cards and transcripts",
            "Academics and exams with a draft, approved and published results workflow",
            "Fees and finance",
            "Targeted announcements and events by class, section, department or individual",
            "Campus operations",
            "Role-based dashboards for administrators, teachers, accountants and students"
        ],

        technology: {
            platform: [
                "Runs in any browser",
                "Role-based access",
                "Multi-school, each kept separate",
                "In-app and e-mail notifications"
            ]
        },

        challenge:
            "Schools often keep student details in registers, marks in spreadsheets and fees in another book, so marks are totalled by hand and nobody sees who has paid, who attended or which results are final.",

        solution:
            "NTS built a connected platform where each school has its own address, branding, users and data, and every role gets a dashboard made for their job.",

        images: [schoolHome]
    },

    {
        id: "nts-attend",
        title: "NTSAttend",
        category: "Attendance & Security Solution",
        liveUrl: "https://ntsattend.onrender.com",
        liveLabel: "ntsattend.onrender.com",

        description:
            "A secure, multi-organisation attendance system that proves someone was really there, using expiring QR codes, server-verified location, automatic student ID checks and selfies.",

        features: [
            "Dynamic QR codes that expire and can rotate every 30 seconds",
            "Server-verified geofencing, so the server measures distance to the classroom",
            "Automatic student ID check and optional selfie capture",
            "Live lecturer dashboard with present, absent and attendance rate",
            "One record per student per session, with duplicates blocked",
            "Export to CSV, Excel or PDF, with role-based access and an audit log"
        ],

        technology: {
            platform: [
                "No student account or app needed",
                "Works on any phone",
                "Installable web app",
                "Multi-tenant"
            ],
            security: [
                "256-bit QR tokens",
                "Argon2id password hashing",
                "Optional two-factor authentication",
                "Append-only audit log"
            ]
        },

        challenge:
            "Attendance decides grades, eligibility and payments, yet proxy sign-ins, shared QR photos and paper registers make records hard to trust.",

        solution:
            "NTS built NTSAttend so every check-in is verified on the server using location, timing and student ID, with live dashboards for lecturers and strict isolation between organisations.",

        images: [attendHome]
    }
];

export default solutions;
