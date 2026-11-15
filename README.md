# LuzonCV — Cloud & Infrastructure Engineering Portfolio

**Live Production Site:** [https://luzon.arcilla.org](https://luzon.arcilla.org)

A serverless, cloud-native portfolio platform built with **React**, **Vite**, and **Tailwind CSS**, hosted on **Azure Static Web Apps** with automated GitHub Actions CI/CD, isolated Pull Request staging environments, and interactive architecture walkthroughs.

---

## Architecture & Tech Stack

* **Frontend:** React, Vite, Tailwind CSS, Framer Motion (`portfolio-v2/`)
* **Hosting & Edge Routing:** Azure Static Web Apps (SWA) with `staticwebapp.config.json` custom navigation fallback exceptions for standalone `*.html` walkthroughs
* **Serverless Backend:** Azure Functions (`/api/contact`) integrated with SendGrid / Microsoft Graph for secure portfolio enquiries
* **CI/CD Pipeline:** GitHub Actions automated build, PR staging preview environments, and production deployment to `luzon.arcilla.org`
* **Search & Discoverability:** Verified custom domain (`luzon.arcilla.org`) indexed via Google Search Console

---

## Interactive Architecture Walkthroughs

In addition to standard project cards, this repository serves self-contained, interactive HTML architecture walkthroughs directly from `/projects/*.html`:

1. **[LuzonCV Full-Stack Portfolio Architecture (`/projects/luzoncv-walkthrough.html`)](https://luzon.arcilla.org/projects/luzoncv-walkthrough.html)**  
   Interactive end-to-end architecture walkthrough featuring an animated SVG system diagram, step-by-step playback controls, and technical specifications across DNS, Azure SWA, React, and serverless API layers.
2. **[Multi-Node Raspberry Pi Home Lab (`/projects/homelab-walkthrough.html`)](https://luzon.arcilla.org/projects/homelab-walkthrough.html)**  
   Interactive topology walkthrough covering a 4-node MicroK8s cluster, Kyverno and Trivy DevSecOps guardrails, n8n workflow automation, Pi-hole DNS filtering, and Prometheus/Grafana observability.

---

## Repository Structure

```text
LuzonCV/
├── .github/workflows/       # Azure Static Web Apps CI/CD pipeline definitions
├── portfolio-v2/
│   ├── public/
│   │   ├── projects/        # Self-contained interactive HTML walkthroughs
│   │   └── staticwebapp.config.json
│   └── src/
│       └── components/      #  Modular React UI components (Projects, Hero, Contact, etc.)
└── README.md