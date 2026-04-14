import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectDetail from './ProjectDetail';
import type { Project } from './ProjectDetail';

const Projects: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const projectList: Project[] = [
        {
            title: "My Mitsubishi Motors Indonesia",
            description: "Vehicle ownership & aftersales app providing vehicle management, service booking, emergency support, and exclusive promos. Built with Flutter and native iOS/Android integration.",
            image: "/assets/projects/mmid-home.jpg",
            record: "/assets/projects/mmid-record.avif",
            tech: ["Flutter", "MobX", "React-Nexjs"],
            date: "Sep 2025 - Present",
            company: "Transcosmos Indonesia",
            status: "Current",
            architecture: {
                overview: "A cross-platform mobile application built with Flutter, connecting vehicle owners to Mitsubishi's aftersales ecosystem. The app follows a layered architecture with a clear separation between UI, business logic, and data layers.",
                layers: [
                    {
                        name: "Presentation Layer",
                        description: "Flutter widgets organized into pages and reusable components. MobX observables drive reactive UI updates, eliminating manual setState calls across the feature tree.",
                    },
                    {
                        name: "Business Logic Layer",
                        description: "MobX Stores act as the single source of truth per feature (e.g., VehicleList, BookingService). Actions encapsulate all mutations; computed values derive derived UI state.",
                    },
                    {
                        name: "Data Layer",
                        description: "Repository pattern abstracts REST API calls. Dio handles HTTP with interceptors for auth token injection and error normalization. Local caching via Hive for offline-friendly vehicle data.",
                    },
                    {
                        name: "Native Integration",
                        description: "Platform channels bridge Flutter to native iOS/Android modules for push notifications (FCM), deep links, and device-specific aftersales features.",
                    },
                ],
                diagram: [
                    { label: "Flutter UI (Widgets)", color: "purple" },
                    { label: "MobX Stores (State)", color: "blue" },
                    { label: "Repository Layer", color: "cyan" },
                    { label: "REST API / Native Channels", color: "pink" },
                ],
            },
            stackDetails: [
                {
                    name: "Flutter",
                    role: "Cross-platform UI framework",
                    why: "Single codebase for iOS & Android with native performance. Critical for Mitsubishi's dual-platform requirement.",
                },
                {
                    name: "MobX",
                    role: "Reactive state management",
                    why: "Observable-based reactivity with minimal boilerplate. Scales well across many independent feature stores.",
                },
                {
                    name: "React / Next.js",
                    role: "Web admin & landing panel",
                    why: "SSR for SEO on public-facing promo pages; CSR for the internal dealer dashboard.",
                },
                {
                    name: "Dio",
                    role: "HTTP client",
                    why: "Interceptor support for JWT refresh, logging, and centralized error handling.",
                },
            ],
            highlights: [
                "Aftersales service booking with real-time dealer slot availability",
                "Emergency roadside assistance with live location sharing",
                "Exclusive promo engine with push notification targeting",
            ],
        },
        {
            title: "Loket Screen",
            description: "Movie theater booking app with interactive seat selection, F&B ordering, and VOD voucher purchase. Enabled Rp 3M+ GMV in 3 months during MVP validation.",
            image: "/assets/projects/loket-screen-home.jpg",
            tech: ["Flutter", "Kotlin+XML", "Riverpod", "React-Nextjs"],
            date: "Aug 2024 - Aug 2025",
            company: "Loket.com",
            impact: "Rp 3M+ GMV",
            record: "/assets/projects/loket-record.avif",
            architecture: {
                overview: "A multi-surface ticketing platform spanning mobile (Flutter), Android-native (Kotlin+XML) for kiosk/cinema screens, and a web checkout flow (Next.js). All surfaces share the same backend API, coordinated through a BFF (Backend for Frontend) layer.",
                layers: [
                    {
                        name: "Mobile App (Flutter + Riverpod)",
                        description: "Consumer-facing iOS/Android app. Riverpod providers scope state to feature modules — SeatProvider, CartProvider, OrderProvider — keeping the widget tree lean and testable.",
                    },
                    {
                        name: "Notification Custom Layout (Kotlin + XML)",
                        description: "Built a native Android notification with a custom XML layout in Kotlin, then exposed it to Flutter via a Method Channel — bridging platform-native UI with cross-platform logic.",
                    },
                    {
                        name: "Web Campaign & Promo, and Articles (Next.js)",
                        description: "Serves campaign, promo, and article pages as a Next.js web app, embedded in the Flutter app via WebView — keeping marketing content independently deployable without a native release cycle.",
                    },
                    {
                        name: "Shared API Contract",
                        description: "OpenAPI spec shared across all surfaces. Auth uses JWT with refresh tokens; seat lock uses WebSocket for real-time hold & release during checkout.",
                    },
                ],
                diagram: [
                    { label: "Flutter App (Consumer)", color: "purple" },
                    { label: "Kotlin+XML (Notification Custom Layout)", color: "blue" },
                    { label: "Next.js Web (Campaign & Promo, and Article Page)", color: "cyan" },
                    { label: "REST API + WebSocket BFF", color: "pink" },
                ],
            },
            stackDetails: [
                {
                    name: "Flutter",
                    role: "Primary consumer mobile app",
                    why: "Rapid feature iteration across iOS & Android. Hot reload accelerated the MVP delivery timeline significantly.",
                },
                {
                    name: "Riverpod",
                    role: "State & dependency injection",
                    why: "Compile-safe providers with auto-disposal. Better than BLoC for feature-scoped ephemeral state like seat selection.",
                },
                {
                    name: "Kotlin + XML",
                    role: "Native Android notification layout",
                    why: "Custom XML notification layout required native Android APIs unavailable in Flutter — bridged back to Flutter via Method Channel.",
                },
                {
                    name: "React / Next.js",
                    role: "Web campaign, promo & article pages",
                    why: "Marketing content served as a Next.js web app and embedded via WebView, so updates ship instantly without going through a native app release.",
                },
            ],
            highlights: [
                "Interactive seat map with seat selection and availability display",
                "F&B combo ordering bundled into the ticket checkout flow",
                "VOD voucher purchase for post-movie digital content",
                "Rp 3M+ GMV achieved within 3 months of MVP launch",
            ],
        },
        {
            title: "Loket X",
            description: "Event & recreational ticketing app supporting digital ticket purchases for events, theme parks, and attractions. Features interactive event calendar for date-based discovery.",
            image: "/assets/projects/loket-x-home.jpg",
            tech: ["Flutter", "Riverpod"],
            date: "Apr 2025 - Aug 2025",
            company: "Loket.com",
            record: "/assets/projects/loket-x-record.avif",
            architecture: {
                overview: "A focused Flutter application for event and recreational ticketing. Uses a clean feature-first folder structure with Riverpod for state. Each feature (Discover, Calendar, My Tickets, Checkout) is a self-contained module with its own providers, widgets, and data repositories.",
                layers: [
                    {
                        name: "Feature Modules",
                        description: "Discover, Calendar, Checkout, and My Tickets are each isolated modules. Modules expose only their top-level route and a public API through Riverpod providers — no direct widget imports across features.",
                    },
                    {
                        name: "Riverpod State Layer",
                        description: "AsyncNotifierProvider handles async data fetching with loading/error/data states out of the box. FutureProvider caches event lists; StateNotifier manages cart and filter state.",
                    },
                    {
                        name: "Repository & Data Layer",
                        description: "Repositories fetch from REST APIs using Dio. Response models are immutable Dart classes generated with Freezed. Hive caches purchased tickets for offline QR code display.",
                    },
                    {
                        name: "Navigation",
                        description: "GoRouter handles declarative routing with deep-link support for event share links and QR-code entry scans.",
                    },
                ],
                diagram: [
                    { label: "Feature Modules (UI)", color: "purple" },
                    { label: "Riverpod Providers (State)", color: "blue" },
                    { label: "Repositories (Data)", color: "cyan" },
                    { label: "REST API + Local Cache (Hive)", color: "pink" },
                ],
            },
            stackDetails: [
                {
                    name: "Flutter",
                    role: "Full-stack mobile UI framework",
                    why: "Single team, single codebase strategy. Loket X needed to ship quickly on both platforms simultaneously.",
                },
                {
                    name: "Riverpod",
                    role: "State management & DI",
                    why: "Scoped, testable providers. AsyncNotifier pattern significantly reduced boilerplate for loading states across event list screens.",
                },
                {
                    name: "GoRouter",
                    role: "Declarative routing",
                    why: "Deep-link support for event sharing URLs and QR-based entry flows without custom route-parsing logic.",
                },
                {
                    name: "Freezed",
                    role: "Immutable data models",
                    why: "Code-generated copyWith, equality, and JSON serialization. Prevents accidental mutation of event data mid-checkout.",
                },
            ],
            highlights: [
                "Interactive date-range calendar for event discovery",
                "Digital QR ticket with offline display via local cache",
                "Theme park & attraction date-based slot booking",
                "Deep-link sharing for events to drive organic growth",
            ],
        },
        {
            title: "Raya App",
            description: "Mobile banking app with Flutter and Next.js WebView communication layer. Developed Saku Bisnis registration and QRIS Merchant feature, driving 5,000+ merchant activations in first 6 months.",
            image: "/assets/projects/raya-home.jpg",
            tech: ["React-Nextjs", "Redux", "Tailwind", "Flutter", "BLOC"],
            date: "Jan 2024 - Aug 2024",
            company: "Bank Raya",
            impact: "5,000+ Merchants",
            record: "/assets/projects/raya-record.avif",
            architecture: {
                overview: "A hybrid mobile banking architecture that combines a Flutter shell app with Next.js WebView micro-frontends. Critical banking flows (auth, biometrics, QRIS) run as native Flutter, while product-specific screens (Saku Bisnis, merchant onboarding) are served as Next.js pages inside a WebView — enabling fast web deployments without full app releases.",
                layers: [
                    {
                        name: "Flutter Native Shell",
                        description: "Handles auth, biometrics (FaceID/fingerprint), QRIS camera scanning, push notifications, and secure local storage. BLOC manages the app lifecycle and session state. Acts as the host for all WebView pages.",
                    },
                    {
                        name: "Flutter ↔ Next.js Bridge",
                        description: "JavaScript channels (postMessage) enable bidirectional communication. Flutter passes auth tokens, device info, and user context into the WebView. Next.js pages call back to Flutter for camera, biometrics, or native navigation triggers.",
                    },
                    {
                        name: "Next.js WebView Pages",
                        description: "Product-specific flows (Saku Bisnis registration, QRIS Merchant setup) are full Next.js pages. Redux manages form state across multi-step flows. Tailwind CSS ensures pixel-perfect rendering inside the WebView.",
                    },
                    {
                        name: "Banking API Layer",
                        description: "All API calls are proxied through the Next.js BFF to avoid exposing bank API keys in the client. mTLS certificates are injected by the Flutter native layer for secure requests.",
                    },
                ],
                diagram: [
                    { label: "Flutter Native (Auth / QRIS / Shell)", color: "purple" },
                    { label: "JavaScript Bridge (postMessage)", color: "blue" },
                    { label: "Next.js WebView (Product Flows)", color: "cyan" },
                    { label: "Banking API via BFF + mTLS", color: "pink" },
                ],
            },
            stackDetails: [
                {
                    name: "Flutter + BLOC",
                    role: "Native shell & session management",
                    why: "BLOC's event-driven model maps cleanly to banking state machines (idle → loading → authenticated → locked). Strong typing prevents invalid state transitions.",
                },
                {
                    name: "React / Next.js",
                    role: "WebView micro-frontend for product flows",
                    why: "Decouples product feature releases from mobile app store review cycles. A new merchant flow can be shipped same-day via web without an app update.",
                },
                {
                    name: "Redux",
                    role: "Web-side state management",
                    why: "Multi-step merchant registration forms require persistent, serializable state that can survive WebView refreshes and be rehydrated on reconnect.",
                },
                {
                    name: "Tailwind CSS",
                    role: "Styling in WebView",
                    why: "Utility-first approach produces consistent, compact CSS with no runtime overhead — important for WebView render performance on low-end devices.",
                },
            ],
            highlights: [
                "Flutter ↔ Next.js JavaScript bridge for native/web interop",
                "Saku Bisnis registration — multi-step KYC flow with document upload",
                "QRIS Merchant activation with real-time QR generation",
                "5,000+ merchant activations within the first 6 months",
                "Biometric authentication (FaceID & fingerprint) via native Flutter",
                "Zero app-store releases needed for WebView-hosted product updates",
            ],
        },
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">Mobile applications I've built and contributed to</p>

                <div className="projects-grid">
                    {projectList.map((project, index) => (
                        <ProjectCard
                            key={index}
                            {...project}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
            </div>

            {selectedProject && (
                <ProjectDetail
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
};

export default Projects;
