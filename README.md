# Cloud Learning Portal — Multi-Certification Study Hub

A professional, self-hosted documentation platform for **multiple certification paths**: AWS Solutions Architect Associate (SAA-C03), Certified Kubernetes Administrator (CKA), AWS Machine Learning Specialty, and more.

Built as a long-term knowledge base—inspired by [AWS Documentation](https://docs.aws.amazon.com), [Kubernetes Docs](https://kubernetes.io/docs), and [HashiCorp Developer](https://developer.hashicorp.com)—designed to evolve as your learning journey progresses.

> **Status:** Version 2.0 — Multi-Certification Platform  
> **Current Focus:** AWS SAA-C03 (Active) + CKA (In Development)  
> **Live at:** Open `index.html` in your browser (no server required)

---

## What This Is

This is **not a simple study guide or practice project**. It is a growing, professional learning platform that combines:

- **Multiple certification tracks** — Each with 12-14 progressive learning paths
- **Deep-dive service/concept pages** — Not bullet points, but thorough explanations with examples
- **Architecture patterns** — Real-world designs and best practices
- **Exam strategies** — Domain breakdowns, question patterns, and time management
- **Zero dependencies** — No login, no paywall, no build tools — just open in a browser

### Current Certifications

| Certification | Status | Tracks | Content |
|---|---|---|---|
| **AWS SAA-C03** | ✅ Active | 12 | Landing page, roadmap, 1 deep-dive service (IAM) |
| **CKA** | 🔄 In Development | 14 | Roadmap structure, 14 track outlines |
| **AWS ML Specialty** | 📋 Planned | 12 | To be added in Phase 3 |

---

## Project Structure

```
cloud-learning-portal/
│
├── index.html              # Landing page — multi-cert platform hero
├── roadmap.html            # Roadmap hub — all certifications overview
│
├── roadmaps/               # Certification-specific roadmaps
│   ├── saa-c03.html        # AWS SAA-C03 — 12 tracks (ACTIVE)
│   ├── cka.html            # CKA — 14 tracks (IN DEVELOPMENT)
│   └── aws-ml.html         # AWS ML — 12 tracks (PLANNED)
│
├── services/               # Individual service/concept pages
│   ├── iam.html            # ✅ AWS IAM — Complete deep-dive
│   ├── ec2.html            # 🔄 AWS EC2 — Placeholder (structure ready)
│   ├── s3.html             # 🔄 AWS S3 — Placeholder (structure ready)
│   ├── vpc.html            # 🔄 AWS VPC — Placeholder (structure ready)
│   │
│   ├── k8s-pods.html       # ⏳ Kubernetes Pods — Planned
│   ├── k8s-deployments.html# ⏳ Kubernetes Deployments — Planned
│   ├── k8s-services.html   # ⏳ Kubernetes Services — Planned
│   └── [16+ more services] # Additional AWS and Kubernetes services
│
├── shared/                 # Shared assets and utilities
│   ├── css/
│   │   ├── style.css       # Design system, all component styles
│   │   └── responsive.css  # Mobile breakpoints (1280/1024/768/640/480px)
│   ├── js/
│   │   └── app.js          # Navigation, animations, filters (no frameworks)
│   └── data/
│       └── certifications.json  # Centralized certification metadata
│
├── materials.html          # Study notes, cheat sheets, resources
├── architecture.html       # Architecture patterns and Well-Architected
├── exam-guide.html         # SAA-C03 exam guide (CKA guide coming)
├── about.html              # Project story and principles
├── contact.html            # Feedback form
│
├── images/                 # Architecture diagrams (add here)
├── assets/                 # Downloadable PDFs, cheat sheets
│
└── README.md               # This file
```

---

## How to Use

### View Locally

No build tools, no npm, no server required:

```bash
# Option 1 — Direct (macOS)
open /path/to/cloud-learning-portal/index.html

# Option 2 — VS Code Live Server (recommended)
# Install "Live Server" extension → Right-click index.html → Open with Live Server

# Option 3 — Python simple server
cd cloud-learning-portal
python3 -m http.server 8080
# Then visit http://localhost:8080
```

### Browse Certifications

1. **Home** → `index.html` — Platform overview
2. **All Roadmaps** → `roadmap.html` — Browse all certification paths
3. **AWS SAA-C03** → `roadmaps/saa-c03.html` — 12-track learning path
4. **CKA** → `roadmaps/cka.html` — 14-track learning path (in development)

### Adding a New Service Page

When you start learning a new service or concept:

1. **Create the file** in `/services/` with the standard template
2. **Add your content** using these standard sections:
   - Introduction & Key Facts
   - Why This Service?
   - Core Concepts (with code/command examples)
   - Use Cases (real-world scenarios)
   - Best Practices
   - Exam Tips (exam-specific guidance)
   - Related Services
3. **Update `roadmaps/[cert].html`** to link to your new page
4. **Update this README** with the new service status

---

## Development Roadmap

### ✅ Phase 1: Multi-Certification Architecture (Complete)
- [x] Refactored into multi-cert platform structure
- [x] Created roadmap hub (`roadmap.html`)
- [x] Moved SAA-C03 to `roadmaps/saa-c03.html`
- [x] Created `shared/data/certifications.json` metadata
- [x] Updated navigation and branding

### 🔄 Phase 2: CKA Track Development (In Progress)
- [x] CKA roadmap outline with 14 tracks
- [ ] Deep-dive Kubernetes concept pages (k8s-pods.html, k8s-services.html, etc.)
- [ ] Hands-on lab guides
- [ ] Command reference pages
- [ ] Architecture patterns for Kubernetes

### 📋 Phase 3: AWS ML Track + Enhancements (Planned)
- [ ] AWS ML roadmap with 12 tracks
- [ ] SageMaker deep-dive pages
- [ ] ML architecture patterns
- [ ] Practice labs and examples

### 🎯 Phase 4: Advanced Features (Future)
- [ ] Search functionality (client-side)
- [ ] Progress tracking (localStorage)
- [ ] Practice question bank
- [ ] Dark mode toggle
- [ ] Certificate tracking dashboard

---

## Design System

Built with a custom, lightweight CSS design system (no frameworks, no dependencies).

### Color Palette

```css
/* Brand Colors */
--color-aws-orange:      #FF9900  /* Primary AWS brand */
--color-aws-dark:        #232F3E  /* Navigation & headers */

/* Certification Colors */
--color-accent-blue:     #0073BB  /* Kubernetes / Links */
--color-accent-green:    #1D8348  /* Success states */

/* Semantic */
--color-bg:              #F8F9FA  /* Section backgrounds */
--color-text-primary:    #1A202C  /* Headings */
--color-text-secondary:  #4A5568  /* Body text */
--color-text-muted:      #718096  /* Labels, hints */
```

### Typography

- **Font:** Inter (from Google Fonts)
- **Scale:** `--text-xs` (0.75rem) → `--text-6xl` (3.75rem)
- **Weights:** 400 (normal) → 800 (extrabold)

### Key Components

```css
/* Layout */
.container              /* max-width 1280px, auto-centered */
.section                /* vertical padding rhythm */
.section--alt           /* light background variant */

/* Navigation */
.navbar                 /* sticky top nav with mobile menu */

/* Cards */
.roadmap-card           /* learning track cards */
.cert-card              /* certification overview cards */
.service-card           /* service/concept cards */
.feature-card           /* feature highlights */

/* Buttons */
.btn.btn--primary       /* AWS orange, filled */
.btn.btn--ghost-light   /* transparent, white text */
.btn.btn--coming-soon   /* disabled state */
.btn--sm / .btn--lg     /* size variants */

/* Animations */
.fade-in                /* IntersectionObserver-triggered fade */
.stagger                /* cascading nth-child delays */
```

---

## JavaScript Architecture

`shared/js/app.js` is organized as self-contained IIFE modules with no dependencies:

| Module | Responsibility |
|--------|----------------|
| `Navigation` | Sticky scroll, hamburger toggle, active link highlighting |
| `ScrollAnimations` | Fade-in animations via IntersectionObserver |
| `ProgressBars` | Animated progress bar fills |
| `ServiceFilter` | Category filter for service cards |
| `Timestamp` | Updates last-modified dates |
| `SmoothScroll` | Anchor smooth scroll with nav offset |
| `Accessibility` | Keyboard-only focus rings |

---

## SAA-C03 Learning Progress

| Track | Status | Pages |
|-------|--------|-------|
| Cloud Fundamentals | 🔄 In Progress | — |
| Identity & Security | 🔄 In Progress | [IAM](services/iam.html) |
| Compute | ⏳ Up Next | [EC2](services/ec2.html) |
| Storage | ⏳ Upcoming | [S3](services/s3.html), EBS, EFS |
| Networking | ⏳ Upcoming | [VPC](services/vpc.html), Route 53, CloudFront |
| Databases | ⏳ Upcoming | RDS, Aurora, DynamoDB |
| Serverless | ⏳ Upcoming | Lambda, API Gateway |
| Integration | ⏳ Upcoming | SQS, SNS, Kinesis |
| Monitoring | ⏳ Upcoming | CloudWatch, CloudTrail |
| Migration | ⏳ Upcoming | — |
| Architecture Patterns | ⏳ Upcoming | — |
| Exam Preparation | ⏳ Final Stage | — |

---

## CKA Learning Progress

| Track | Status | Pages |
|-------|--------|-------|
| Kubernetes Fundamentals | 📋 Planned | — |
| Pods & Containers | 📋 Planned | — |
| Workload Management | 📋 Planned | [Deployments], [StatefulSets] |
| Services & Networking | 📋 Planned | — |
| RBAC & Security | 📋 Planned | — |
| Storage & Persistence | 📋 Planned | — |
| Configuration Management | 📋 Planned | — |
| Monitoring & Logging | 📋 Planned | — |
| Cluster Maintenance | 📋 Planned | — |
| Troubleshooting | 📋 Planned | — |
| Resource Management | 📋 Planned | — |
| Cluster Autoscaling | 📋 Planned | — |
| Scheduling & Affinity | 📋 Planned | — |
| Exam Preparation | 📋 Planned | — |

---

## Contributing

Found a mistake? Want to add content? Have suggestions?

1. **Open a GitHub issue** with your feedback
2. **Submit a pull request** with improvements
3. **Use the [contact form](contact.html)** for general feedback

### Content Standards

- Write for **understanding first**, exam second
- Include the "**why**" — not just the "what"
- Use **concrete examples** over abstract descriptions
- Mark **opinions** clearly when presenting interpretations
- **Cite official sources** (AWS docs, Kubernetes docs, etc.)
- Keep a **conversational tone** — this is for learners

---

## Disclaimer

This is an **independent learning resource**. It is **NOT affiliated with, endorsed by, or sponsored by**:

- Amazon Web Services (AWS) or Amazon.com, Inc.
- The Cloud Native Computing Foundation (CNCF) or Linux Foundation
- Kubernetes project or related organizations

All trademarks belong to their respective owners. Content is provided for **educational purposes only**. Always verify with official documentation for authoritative information.

---

## Official Resources

### AWS
| Resource | URL |
|----------|-----|
| AWS Documentation | https://docs.aws.amazon.com |
| AWS Skill Builder | https://skillbuilder.aws |
| SAA-C03 Exam Page | https://aws.amazon.com/certification/certified-solutions-architect-associate/ |
| AWS Whitepapers | https://aws.amazon.com/whitepapers/ |
| AWS Architecture Center | https://aws.amazon.com/architecture/ |

### Kubernetes & CKA
| Resource | URL |
|----------|-----|
| Kubernetes Official Docs | https://kubernetes.io/docs/ |
| CKA Exam Page | https://www.cncf.io/certification/cka/ |
| Linux Foundation Training | https://www.linux.com/training/ |
| Kubernetes GitHub | https://github.com/kubernetes/kubernetes |

---

**Built for learners, by a learner.** Free forever.