/**
 * ANANYA MISHRA | EXTRAORDINARY 3D THREE.JS GLASSMORPHISM PORTFOLIO ENGINE
 * Three.js WebGL 3D Canvas, Vercel Live Deployment Integration, Real-Time Validation
 */

document.addEventListener('DOMContentLoaded', () => {
  initThreeJSScene();
  initMouseSpotlight();
  initThemeToggle();
  initProjectModals();
  initContactFormValidation();
  initBackToTop();
  initStickyHeader();
});

/* ==========================================================================
   1. Three.js Interactive 3D WebGL Mesh Canvas
   ========================================================================== */
function initThreeJSScene() {
  const canvas = document.getElementById('hero-3d-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const container = canvas.parentElement;
  const width = container.clientWidth;
  const height = container.clientHeight;

  // 1. Scene, Camera, Renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.z = 7;

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // 2. 3D Geometries & Materials
  // Outer Point Particles Icosahedron
  const outerGeo = new THREE.IcosahedronGeometry(2.4, 2);
  const outerMat = new THREE.PointsMaterial({
    color: 0x3b82f6,
    size: 0.05,
    transparent: true,
    opacity: 0.85
  });
  const outerPoints = new THREE.Points(outerGeo, outerMat);
  scene.add(outerPoints);

  // Inner Glowing Wireframe Sphere
  const innerGeo = new THREE.IcosahedronGeometry(1.6, 1);
  const innerMat = new THREE.MeshBasicMaterial({
    color: 0x10b981,
    wireframe: true,
    transparent: true,
    opacity: 0.35
  });
  const innerMesh = new THREE.Mesh(innerGeo, innerMat);
  scene.add(innerMesh);

  // Core Pulsing Sphere
  const coreGeo = new THREE.SphereGeometry(0.8, 16, 16);
  const coreMat = new THREE.MeshBasicMaterial({
    color: 0x3b82f6,
    wireframe: true,
    transparent: true,
    opacity: 0.6
  });
  const coreMesh = new THREE.Mesh(coreGeo, coreMat);
  scene.add(coreMesh);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0x3b82f6, 2, 50);
  pointLight.position.set(5, 5, 5);
  scene.add(pointLight);

  // Mouse Interaction Variables
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX - windowHalfX) * 0.0015;
    mouseY = (e.clientY - windowHalfY) * 0.0015;
  });

  // Animation Loop
  function animate() {
    requestAnimationFrame(animate);

    targetX += (mouseX - targetX) * 0.05;
    targetY += (mouseY - targetY) * 0.05;

    // Rotate meshes
    outerPoints.rotation.y += 0.004;
    outerPoints.rotation.x += 0.002;
    
    innerMesh.rotation.y -= 0.006;
    innerMesh.rotation.z += 0.003;

    coreMesh.rotation.y += 0.008;

    // Apply mouse tilt physics
    scene.rotation.y = targetX;
    scene.rotation.x = targetY;

    renderer.render(scene, camera);
  }

  animate();

  // Responsive Resize
  window.addEventListener('resize', () => {
    const newW = container.clientWidth;
    const newH = container.clientHeight;
    camera.aspect = newW / newH;
    camera.updateProjectionMatrix();
    renderer.setSize(newW, newH);
  });
}

/* ==========================================================================
   2. Fluid Mouse Spotlight Follower
   ========================================================================== */
function initMouseSpotlight() {
  const spotlight = document.getElementById('mouse-spotlight');
  if (!spotlight) return;

  window.addEventListener('mousemove', (e) => {
    spotlight.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
  });
}

/* ==========================================================================
   3. Theme Toggle Switcher
   ========================================================================== */
function initThemeToggle() {
  const themeBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const root = document.documentElement;

  const savedTheme = localStorage.getItem('ananya-theme') || 'dark';
  applyTheme(savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('ananya-theme', theme);
    if (themeIcon) {
      themeIcon.className = theme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    }
  }
}

/* ==========================================================================
   4. Real 5 Projects Modal Controller with Vercel Deployments
   ========================================================================== */
function initProjectModals() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const modalArea = document.getElementById('modal-content-area');

  const realProjectsData = {
    'agro-mitra': {
      title: 'Agro-Mitra — Smart Agriculture Assistance System',
      image: 'assets/agro_mitra.png',
      tags: ['MERN Stack', 'AI Chatbot', 'Voice Support', 'Image Detection', 'Crop Advisory'],
      summary: 'A comprehensive Smart Agriculture Assistance System helping farmers, gardeners, and learners make better agriculture decisions with crop advisory, voice support, disease detection, and learning resources.',
      highlights: [
        'Built full-stack crop advisory dashboard & AI assistance system',
        'Implemented image-based plant disease detection and voice assistant integration',
        'Integrated RESTful APIs and MongoDB database schemas for real-time recommendations'
      ],
      vercelUrl: 'https://agro-mitra-ten.vercel.app',
      repoUrl: 'https://github.com/ananyamishra2025/Agro_Mitra'
    },
    'pulse-chat': {
      title: 'PulseChat — Real-Time Workspace & Messaging Platform',
      image: 'assets/pulse_chat.png',
      tags: ['WebSockets', 'Node.js', 'Express', 'Channels', 'Active Users'],
      summary: 'A high-performance real-time workspace messaging platform supporting channels (#general, #tech-talk, #random, #announcements) and online user presence tracking.',
      highlights: [
        'Real-time WebSocket event architecture for instant message broadcasts',
        'Multi-channel workspace navigation & active user status indicators',
        'Dark mode workspace UI with responsive message feeds'
      ],
      vercelUrl: 'https://chat-app-ananya-mishra.vercel.app',
      repoUrl: 'https://github.com/ananyamishra2025/Chat-App'
    },
    'textrade': {
      title: 'TexTrade B2B — Commercial Fabric Marketplace',
      image: 'assets/textrade.png',
      tags: ['React / Vite', 'Node.js / Express', 'MongoDB', 'B2B Sourcing', 'AI Assistant'],
      summary: 'Next-Generation B2B Commercial Fabric Sourcing Ecosystem allowing buyers to discover certified organic fabrics, compare GSM specs, and inquire via an AI Assistant.',
      highlights: [
        'Full B2B commercial fabric catalog (Cotton, Silk, Denim, Linen, Organic Poplin)',
        'GOTS & OEKO-TEX certification badges with 48-hour sample swatch dispatch',
        'Fabric specification filters (GSM range, max price per meter, weave construction)'
      ],
      vercelUrl: 'https://textile-marketplace-application.vercel.app',
      repoUrl: 'https://github.com/ananyamishra2025/textile-marketplace-application'
    },
    'tradescape': {
      title: 'Tradescape — Trader Risk & Drawdown Monitor',
      image: 'assets/tradescape.png',
      tags: ['React (JSX)', 'Risk Engine', 'Equity Curve', 'Drawdown Monitor', 'Execution Log'],
      summary: 'Proprietary Trader Risk & Drawdown Monitor designed for prop firm traders to monitor max drawdown limits, daily loss thresholds, and historical trade logs.',
      highlights: [
        'Interactive Equity Curve & Drawdown Trajectory curve chart',
        'Max Drawdown & Daily Loss monitors with safety threshold alerts',
        'Realized P&L trade history execution log with asset performance breakdown'
      ],
      vercelUrl: 'https://trader-risk-dashboard-six.vercel.app',
      repoUrl: 'https://github.com/ananyamishra2025/trader-risk-dashboard'
    },
    'focus-app': {
      title: 'Focus — Productivity & To-Do List Application',
      image: 'assets/focus_app.png',
      tags: ['JavaScript', 'Task Streaks', 'Priority Filters', 'Subtasks', 'Focus Mode'],
      summary: 'An elegant productivity & To-Do List application featuring task streaks, priority filtering (High, Medium, Low), subtask progress meters, and evening reflection checklists.',
      highlights: [
        'Task streak tracker & category filtering (Work, Shopping, Personal)',
        'Subtask progress bars & priority tags with one-click completion',
        'Evening reflection focus mode for daily goal management'
      ],
      vercelUrl: 'https://to-do-list-two-xi-63.vercel.app',
      repoUrl: 'https://github.com/ananyamishra2025'
    }
  };

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.open-modal-trigger');
    if (trigger) {
      const key = trigger.getAttribute('data-project');
      const data = realProjectsData[key];
      if (data) {
        renderModal(data);
      }
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', hideModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) hideModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      hideModal();
    }
  });

  function renderModal(p) {
    const tags = p.tags.map(t => `<span class="skill-tag">${t}</span>`).join('');
    const items = p.highlights.map(h => `<li><i class="fa-solid fa-check" style="color: var(--accent-emerald); margin-right: 8px;"></i> ${h}</li>`).join('');

    const vercelBtn = p.vercelUrl ? `
      <a href="${p.vercelUrl}" target="_blank" class="btn-newera btn-live-vercel">
        <i class="fa-solid fa-globe"></i> Open Live Vercel App
      </a>
    ` : '';

    modalArea.innerHTML = `
      <img src="${p.image}" alt="${p.title}" class="modal-hero-img">
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">${tags}</div>
      <h3 style="font-size: 1.35rem;">${p.title}</h3>
      <p style="color: var(--text-muted); font-size: 1rem;">${p.summary}</p>
      <div>
        <h4 style="margin-bottom: 0.6rem; color: var(--accent-sapphire);">Key Accomplishments:</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; color: var(--text-muted); font-size: 0.95rem;">
          ${items}
        </ul>
      </div>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1rem;">
        ${vercelBtn}
        <a href="${p.repoUrl}" target="_blank" class="btn-newera btn-sapphire">
          <i class="fa-brands fa-github"></i> View GitHub Code
        </a>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function hideModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   5. Contact Form Real-Time Validation
   ========================================================================== */
function initContactFormValidation() {
  const form = document.getElementById('portfolio-contact-form');
  const nameIn = document.getElementById('c-name');
  const emailIn = document.getElementById('c-email');
  const messageIn = document.getElementById('c-message');
  const toast = document.getElementById('toast-banner');

  if (!form) return;

  const validateInput = (input, isValid) => {
    if (isValid) {
      input.classList.remove('user-invalid-fallback');
      input.classList.add('user-valid-fallback');
    } else {
      input.classList.remove('user-valid-fallback');
      input.classList.add('user-invalid-fallback');
    }
    return isValid;
  };

  const checkName = () => validateInput(nameIn, nameIn.value.trim().length >= 3);
  const checkEmail = () => validateInput(emailIn, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailIn.value.trim()));
  const checkMessage = () => validateInput(messageIn, messageIn.value.trim().length >= 10);

  nameIn.addEventListener('blur', checkName);
  emailIn.addEventListener('blur', checkEmail);
  messageIn.addEventListener('blur', checkMessage);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nValid = checkName();
    const eValid = checkEmail();
    const mValid = checkMessage();

    if (nValid && eValid && mValid) {
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 4000);
      form.reset();
      [nameIn, emailIn, messageIn].forEach(i => i.classList.remove('user-valid-fallback', 'user-invalid-fallback'));
    } else {
      if (!nValid) nameIn.focus();
      else if (!eValid) emailIn.focus();
      else if (!mValid) messageIn.focus();
    }
  });
}

/* ==========================================================================
   6. Sticky Navigation Bar
   ========================================================================== */
function initStickyHeader() {
  const header = document.getElementById('navbar-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  });
}

/* ==========================================================================
   7. Back To Top Floating Action
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('back-top-btn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) btn.classList.add('show');
    else btn.classList.remove('show');
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
