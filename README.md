# Extraordinary 3D Three.js Glassmorphism Portfolio ⚡

[![Portfolio Live](https://img.shields.io/badge/Live_Portfolio-Vercel_Deployment-10b981?style=for-the-badge&logo=vercel)](https://portfolio-beta-eight-i9qxb47dp1.vercel.app)
[![3D Engine](https://img.shields.io/badge/3D_Engine-Three.js_r128-3b82f6?style=for-the-badge&logo=three.js)](https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js)
[![Stack](https://img.shields.io/badge/Stack-HTML5_--_CSS3_--_JavaScript_--_WebGL-8b5cf6?style=for-the-badge&logo=javascript)](https://github.com/ananyamishra2025/Portfolio)

An Awwwards-inspired, high-performance **3D WebGL Glassmorphism Portfolio** architecture featuring an interactive Three.js 3D particle mesh canvas, Bento Grid layout, interactive developer terminal simulator, and real-time validated communication engines.

🚀 **Live Portfolio Website**: [https://portfolio-beta-eight-i9qxb47dp1.vercel.app](https://portfolio-beta-eight-i9qxb47dp1.vercel.app)

---

## 🏗️ Technical Architecture & Work Process

```
                               ┌────────────────────────────────────────┐
                               │       Client Viewport (Browser)       │
                               └──────────────────┬─────────────────────┘
                                                  │
                ┌─────────────────────────────────┼─────────────────────────────────┐
                ▼                                 ▼                                 ▼
   ┌──────────────────────────┐     ┌──────────────────────────┐     ┌──────────────────────────┐
   │ Three.js 3D WebGL Canvas │     │ Bento Grid System (CSS3) │     │ JS Interactive Engines   │
   │  - Particle Icosahedron  │     │  - Glassmorphism Blurs   │     │  - Fluid Spotlight Trail │
   │  - Outer Point Cloud     │     │  - Hairline Border Glows │     │  - Real-Time Validation  │
   │  - Mouse Rotation Tilt   │     │  - 3D Hover Tilt Physics │     │  - Project Modal Overlay │
   └──────────────────────────┘     └──────────────────────────┘     └──────────────────────────┘
```

### 1. 3D WebGL Scene & Particle Physics Engine
- **Three.js Scene Graph**: Uses `THREE.PerspectiveCamera`, `THREE.Scene`, and `THREE.WebGLRenderer` with alpha transparency and antialiasing.
- **Dual Geometry Architecture**:
  - Outer 3D particle cloud rendered with `THREE.IcosahedronGeometry(2.4, 2)` and `THREE.PointsMaterial`.
  - Inner wireframe sphere rendered with `THREE.MeshBasicMaterial({ wireframe: true })` for depth perception.
  - Core rotating sphere providing glowing central lighting.
- **Mouse Coordinate Interpolation**: Listens to viewport `mousemove` events and applies smooth linear interpolation (`targetX += (mouseX - targetX) * 0.05`) to tilt the 3D WebGL scene toward user interaction coordinates.

### 2. Design System & Bento Grid Architecture
- **Obsidian Noir Canvas (`#030306`)**: Deep charcoal background with subtle noise backdrop overlays.
- **Liquid Glassmorphism**: Cards utilize `backdrop-filter: blur(24px)` with 1px hairline glowing borders in Electric Sapphire (`#3b82f6`) and Neon Emerald (`#10b981`).
- **Asymmetric Bento Layout**: Flexibly arranges technical profile, skill clouds, certifications, and project cards across uneven grid spans (`grid-column: span 2`, `grid-column: span 3`).

### 3. State Engine & Real-Time Form Validation
- **Event-Driven Validation**: Attaches progressive `blur` and `input` listeners to form controls.
- **Accessibility & ARIA Sync**: Employs CSS `:user-invalid` and `:user-valid` pseudo-classes alongside JavaScript fallback states (`.user-invalid-fallback`), dynamically toggling `aria-invalid="true"` for screen reader compliance.
- **Toast Alert Engine**: Triggers an animated floating toast notification upon valid form submission with auto-dismissal timers.

---

## 🚀 Deployed Full-Stack Applications Ecosystem

| Platform Name | Architecture & Features | Live Deployment | Source Code |
| :--- | :--- | :---: | :---: |
| 🌐 **Live Portfolio** | **Three.js WebGL, Bento Grid**, Glassmorphism, 3D Canvas | [🚀 Live App](https://portfolio-beta-eight-i9qxb47dp1.vercel.app) | [📁 Repository](https://github.com/ananyamishra2025/Portfolio) |
| 🌾 **Agro-Mitra** | MERN Stack, AI Chatbot, Voice Support, Plant Disease Image Detection, Crop Advisory | [🚀 Live App](https://agro-mitra-ten.vercel.app) | [📁 Repository](https://github.com/ananyamishra2025/Agro_Mitra) |
| 💬 **PulseChat** | WebSockets Event Architecture, Node.js, Express, Topic Channels, Active User Status | [🚀 Live App](https://chat-app-ananya-mishra.vercel.app) | [📁 Repository](https://github.com/ananyamishra2025/Chat-App) |
| 🧵 **TexTrade B2B** | React / Vite, Express, MongoDB, B2B Commercial Fabric Sourcing, GOTS Certified, AI Assistant | [🚀 Live App](https://textile-marketplace-application.vercel.app) | [📁 Repository](https://github.com/ananyamishra2025/textile-marketplace-application) |
| 📈 **Tradescape Risk Dashboard** | React (JSX), Risk Calculations Engine, Drawdown Trajectory Curve, Realized P&L Logs | [🚀 Live App](https://trader-risk-dashboard-six.vercel.app) | [📁 Repository](https://github.com/ananyamishra2025/trader-risk-dashboard) |
| 🎯 **Focus** | JavaScript, Task Streaks, Category Priority Filtering (High/Med/Low), Subtask Progress Meters | — | [📁 Profile](https://github.com/ananyamishra2025) |

---

## 🛠️ Stack & Technology Dependencies

- **3D Graphics & Canvas**: Three.js (r128 CDN)
- **Frontend Architecture**: HTML5 (Semantic Structure), Vanilla CSS3 (Custom Variables, Flexbox, Grid, Keyframes), JavaScript (ES6+ Native Modules)
- **Icons & Typography**: FontAwesome 6.5.1 CDN, Google Fonts (Outfit, Plus Jakarta Sans, JetBrains Mono)
- **Deployment Platform**: Vercel & Node.js static HTTP environment

---

## 📁 Repository Structure

```
Portfolio/
├── index.html          # Semantic HTML5 document with 3D canvas viewport & bento layout
├── styles.css          # Design tokens, Obsidian Noir themes, 3D glass card rules, validation states
├── script.js           # Three.js WebGL scene init, fluid spotlight follower, project modal engine
├── assets/             # Authentic project UI screenshots
│   ├── agro_mitra.png  # Agro-Mitra platform interface
│   ├── pulse_chat.png  # PulseChat workspace interface
│   ├── textrade.png    # TexTrade B2B fabric marketplace interface
│   ├── tradescape.png  # Tradescape risk dashboard interface
│   └── focus_app.png   # Focus task app interface
└── README.md           # Technical documentation and architecture specification
```

---

## 🚦 Local Setup & Running Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ananyamishra2025/Portfolio.git
   cd Portfolio
   ```

2. **Launch static server**:
   ```bash
   npx serve -l 3000
   ```

3. **Inspect Application**: Open `http://localhost:3000` in Chrome, Edge, Firefox, or Safari to test WebGL canvas rendering, project detail modals, and form validation.

---
*Technical Specification & Architecture Documentation.*
