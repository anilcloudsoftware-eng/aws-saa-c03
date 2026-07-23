# AWS Learning Portal — SAA-C03 Study Hub

A professional, self-hosted documentation website for AWS certification preparation.
Built to document the learning journey through the **AWS Certified Solutions Architect – Associate (SAA-C03)** exam and beyond.

> **Status:** Version 1.0 — Under Active Development  
> **Current Focus:** AWS SAA-C03 Certification  
> **Live at:** Open `index.html` in your browser (no server required)

---

## What This Is

This is not a simple HTML practice project. It is a long-term knowledge base — inspired by
[AWS Documentation](https://docs.aws.amazon.com), [HashiCorp Developer](https://developer.hashicorp.com),
[Microsoft Learn](https://learn.microsoft.com), and [Kubernetes Docs](https://kubernetes.io/docs) —
designed to grow into a complete AWS learning portal over months and years.

Every AWS service studied gets a dedicated page with:

- Introduction and "why does this service exist?"
- Core concepts with code examples
- Architecture diagrams (planned)
- Real-world use cases
- Best practices
- SAA-C03 exam tips
- Related services and official documentation links

---

## Project Structure

```
aws-saa-c03/
│
├── index.html              # Landing page (all 8 sections)
├── roadmap.html            # SAA-C03 learning roadmap (12 tracks)
├── services.html           # AWS services directory with category filter
├── materials.html          # Study notes, cheat sheets, practice questions
├── architecture.html       # Architecture patterns and Well-Architected
├── exam-guide.html         # SAA-C03 exam overview, domains, strategy
├── about.html              # Project story, principles, disclaimer
├── contact.html            # Feedback and contribution form
│
├── services/               # Individual AWS service pages
│   ├── iam.html            # ✅ Complete — IAM deep dive
│   ├── ec2.html            # 🔄 Placeholder — structure ready
│   ├── s3.html             # 🔄 Placeholder — structure ready
│   ├── vpc.html            # 🔄 Placeholder — structure ready
│   ├── ebs.html            # ⏳ Planned
│   ├── efs.html            # ⏳ Planned
│   ├── rds.html            # ⏳ Planned
│   ├── aurora.html         # ⏳ Planned
│   ├── dynamodb.html       # ⏳ Planned
│   ├── lambda.html         # ⏳ Planned
│   ├── api-gateway.html    # ⏳ Planned
│   ├── cloudfront.html     # ⏳ Planned
│   ├── route53.html        # ⏳ Planned
│   ├── cloudwatch.html     # ⏳ Planned
│   ├── cloudtrail.html     # ⏳ Planned
│   ├── ssm.html            # ⏳ Planned
│   └── kms.html            # ⏳ Planned
│
├── css/
│   ├── style.css           # Design system, all component styles
│   └── responsive.css      # Breakpoints: 1280 / 1024 / 768 / 640 / 480px
│
├── js/
│   └── app.js              # Navigation, scroll animations, filter, timestamps
│
├── images/                 # Screenshots, architecture diagrams (add here)
├── assets/                 # Fonts, icons, downloadable PDFs (add here)
│
└── README.md               # This file
```

---

## How to Use

### View Locally

No build tools, no npm, no server required. Just open the file:

```bash
# Option 1 — double-click index.html in Finder
open /path/to/aws-saa-c03/index.html

# Option 2 — VS Code Live Server (recommended for development)
# Install the "Live Server" extension, right-click index.html → Open with Live Server

# Option 3 — Python simple server
cd aws-saa-c03
python3 -m http.server 8080
# then open http://localhost:8080
```

### Adding a New Service Page

When you study a new AWS service, follow this pattern:

1. **Create the file** in `/services/` — copy the structure from `ec2.html` (the cleanest placeholder)
2. **Add your content** section by section — each section has an `id` anchor already wired to the sidebar
3. **Update `services.html`** — change the "Coming Soon" button to "View Notes →" with the correct link
4. **Update `index.html`** — change the service card button on the landing page
5. **Update this README** — mark the service as ✅ in the project structure above

### Service Page Sections (Standard Template)

Every service page should eventually contain these sections in this order:

| Section | `id` anchor | Description |
|---|---|---|
| Introduction | `#introduction` | What the service is, key facts |
| Why this service? | `#why-*` | The problem it solves, when to use it |
| Core Concepts | `#core-concepts` | Key entities, how it works, code examples |
| Use Cases | `#use-cases` | Real-world scenarios with context |
| Best Practices | `#best-practices` | AWS Well-Architected aligned guidance |
| Exam Tips | `#exam-tips` | SAA-C03 specific traps, key facts to memorize |
| Related Services | `#related` | How it connects to other AWS services |

---

## Design System

The UI is built with a custom CSS design system (no frameworks, no dependencies).

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `--color-aws-orange` | `#FF9900` | Primary brand, CTAs, highlights |
| `--color-aws-dark` | `#232F3E` | Navigation, hero, footer backgrounds |
| `--color-accent-blue` | `#0073BB` | Links, outline buttons, info badges |
| `--color-accent-green` | `#1D8348` | Success states, "open" badges |
| `--color-bg` | `#F8F9FA` | Section alternating backgrounds |
| `--color-text-primary` | `#1A202C` | Headings, body text |
| `--color-text-secondary` | `#4A5568` | Paragraph text |
| `--color-text-muted` | `#718096` | Labels, metadata, hints |

### Typography

Font: **Inter** (loaded from Google Fonts).  
Scale: `--text-xs` (0.75rem) → `--text-6xl` (3.75rem).  
All sizes and weights are CSS custom properties in `style.css`.

### Key CSS Classes

```css
/* Layout */
.container          /* max-width 1280px, centered, padded */
.section            /* standard vertical padding */
.section--alt       /* light gray background variant */
.grid-2 / .grid-3 / .grid-4 / .grid-5  /* responsive grid utilities */

/* Components */
.navbar             /* fixed top navigation */
.page-hero          /* dark header strip for inner pages */
.roadmap-card       /* learning track cards */
.service-card       /* AWS service cards with category stripe */
.material-card      /* resource cards */
.status-card        /* project status widget */
.coming-soon-banner /* placeholder content state */
.planned-list       /* grid of upcoming feature items */
.service-page-layout /* sidebar + content two-column layout */

/* Buttons */
.btn.btn--primary       /* AWS orange, filled */
.btn.btn--ghost-light   /* transparent, white border (on dark bg) */
.btn.btn--ghost         /* transparent, gray border (on light bg) */
.btn.btn--outline-blue  /* blue outline */
.btn.btn--coming-soon   /* disabled gray state */
.btn--sm / .btn--lg     /* size variants */

/* Animations */
.fade-in            /* opacity + translateY, triggered by IntersectionObserver */
.stagger            /* adds nth-child transition delays to children */
```

---

## JavaScript Architecture

`app.js` is structured as self-contained IIFE modules — no frameworks, no dependencies.

| Module | Responsibility |
|---|---|
| `Navigation` | Sticky scroll class, hamburger toggle, active link highlighting, escape/outside-click close |
| `ScrollAnimations` | IntersectionObserver-based fade-in for `.fade-in` elements, with fallback |
| `ProgressBars` | Animates `.hero__progress-fill` bars using `data-width` attribute |
| `ServiceFilter` | Category filter tabs on services pages using `data-filter` / `data-category` |
| `Timestamp` | Writes current date to `#last-updated` element |
| `SmoothScroll` | Anchor link smooth scroll with fixed nav offset compensation |
| `Accessibility` | Keyboard-only focus rings (hides outlines for mouse, shows for Tab key) |

---

## SAA-C03 Learning Progress

| Track | Status | Pages |
|---|---|---|
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

## Roadmap — What's Planned

### Version 1 (Current)
- [x] Professional landing page with all sections
- [x] Full site navigation (all pages linked)
- [x] IAM deep-dive page (complete content)
- [x] EC2, S3, VPC placeholder pages (structure ready)
- [x] Responsive design (desktop through mobile)
- [x] Scroll animations and interactive service filter

### Version 2 (Next)
- [ ] Complete EC2 study notes
- [ ] Complete S3 study notes  
- [ ] Complete VPC study notes
- [ ] Architecture diagrams (draw.io or SVG)
- [ ] Cheat sheet pages (printable PDF-friendly)
- [ ] Search functionality (client-side, no backend)

### Version 3 (Future)
- [ ] All 17+ SAA-C03 services documented
- [ ] Practice question bank (JavaScript quiz engine)
- [ ] Dark mode toggle
- [ ] Progress tracking (localStorage)
- [ ] RSS feed for new content

---

## Contributing

Found an error? Have better notes for a service? Want to add content?

1. Open an issue or pull request on GitHub (once the repo is public)
2. Use the [contact form](contact.html) to send feedback
3. All corrections and contributions are credited

### Content Standards

- Write for understanding first, exam second
- Include the "why" — not just "what"  
- Use concrete examples over abstract descriptions
- Mark opinion/interpretation clearly
- Cite official AWS sources where relevant

---

## Disclaimer

This is an independent learning resource. It is **not affiliated with, endorsed by, or sponsored by
Amazon Web Services (AWS)** or Amazon.com, Inc.

AWS, Amazon Web Services, and all related service names and logos are trademarks of Amazon.com, Inc.
All content is provided for educational purposes only. Always verify with
[official AWS documentation](https://docs.aws.amazon.com) for authoritative information.

---

## Official AWS Resources

| Resource | URL |
|---|---|
| AWS Documentation | https://docs.aws.amazon.com |
| AWS Skill Builder | https://skillbuilder.aws |
| SAA-C03 Exam Page | https://aws.amazon.com/certification/certified-solutions-architect-associate/ |
| AWS Whitepapers | https://aws.amazon.com/whitepapers/ |
| AWS Architecture Center | https://aws.amazon.com/architecture/ |
| AWS Well-Architected | https://aws.amazon.com/architecture/well-architected/ |

---

*Built for learners, by a learner. Last updated: see `about.html`.*
