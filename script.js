/**
 * ANANYA MISHRA | NEW-ERA NOIR PORTFOLIO ENGINE
 * Spotlight cursor follower, terminal simulator, project modals, real-time validation
 */

document.addEventListener('DOMContentLoaded', () => {
  initMouseSpotlight();
  initTerminalTabs();
  initThemeToggle();
  initProjectModals();
  initContactFormValidation();
  initBackToTop();
  initStickyHeader();
});

/* 1. Interactive Mouse Spotlight Follower */
function initMouseSpotlight() {
  const spotlight = document.getElementById('mouse-spotlight');
  if (!spotlight) return;

  window.addEventListener('mousemove', (e) => {
    spotlight.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
  });
}

/* 2. Terminal Simulator Tab Controller */
function initTerminalTabs() {
  const tabs = document.querySelectorAll('.term-tab');
  const snippets = document.querySelectorAll('.term-code-snippet');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      snippets.forEach(s => s.classList.remove('active'));

      tab.classList.add('active');
      const targetId = `snippet-${tab.getAttribute('data-tab')}`;
      const targetSnippet = document.getElementById(targetId);
      if (targetSnippet) {
        targetSnippet.classList.add('active');
      }
    });
  });
}

/* 3. Theme Toggle Switcher */
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

/* 4. Real GitHub Project Modal Viewer */
function initProjectModals() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const modalArea = document.getElementById('modal-content-area');

  const realProjectsData = {
    'agro-mitra': {
      title: 'Agro Mitra — MERN Stack Web Application',
      image: 'assets/agro_mitra.jpg',
      tags: ['Node.js', 'Express.js', 'MongoDB', 'React', 'REST API', 'Authentication'],
      summary: 'A full-stack agricultural platform designed to support farmers with crop insights, soil moisture analytics, and market data.',
      highlights: [
        'Developed and tested REST API endpoints using Node.js & Express.js',
        'Implemented secure user authentication and CRUD operations',
        'Designed MongoDB schemas & integrated external weather/crop APIs'
      ],
      repoUrl: 'https://github.com/ananyamishra2025/Agro_Mitra'
    },
    'chat-app': {
      title: 'Chat App — Real-Time Messaging Platform',
      image: 'assets/chat_app.jpg',
      tags: ['JavaScript', 'Node.js', 'WebSockets', 'Glassmorphism UI'],
      summary: 'A responsive real-time chat application with instant messaging sockets and clean glass interface.',
      highlights: [
        'Built real-time messaging pipeline using Node.js & WebSockets',
        'Implemented online contact status indicators & message history',
        'Designed mobile-first, dark mode user interface'
      ],
      repoUrl: 'https://github.com/ananyamishra2025/Chat-App'
    },
    'trader-risk': {
      title: 'Trader Risk Dashboard — Financial Analytics',
      image: 'assets/trader_risk.jpg',
      tags: ['React.js', 'Data Visualization', 'Financial Risk', 'Analytics'],
      summary: 'An interactive trading risk management dashboard displaying stock market trends, volatility metrics, and portfolio risk indicators.',
      highlights: [
        'Real-time candlestick charts and drawdown visualizations',
        'Risk status breakdown (VaR %, Max Drawdown, Leverage)',
        'Custom interactive risk status indicators'
      ],
      repoUrl: 'https://github.com/ananyamishra2025/trader-risk-dashboard'
    },
    'lead-mgmt': {
      title: 'Lead Management System — CRM Web Application',
      image: 'assets/lead_mgmt.jpg',
      tags: ['Full-Stack', 'Node.js', 'Express', 'MySQL', 'Pipeline CRM'],
      summary: 'A comprehensive lead tracking system allowing sales teams to track deals, manage customer status, and view funnel analytics.',
      highlights: [
        'Full-stack architecture with MySQL database persistence',
        'Interactive lead status board & pipeline stage management',
        'Optimized SQL queries for real-time sales funnel metrics'
      ],
      repoUrl: 'https://github.com/ananyamishra2025/lead-management-system'
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

    modalArea.innerHTML = `
      <img src="${p.image}" alt="${p.title}" class="modal-hero-img">
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">${tags}</div>
      <h3 style="font-size: 1.3rem;">${p.title}</h3>
      <p style="color: var(--text-muted); font-size: 1rem;">${p.summary}</p>
      <div>
        <h4 style="margin-bottom: 0.6rem; color: var(--accent-sapphire);">Key Accomplishments:</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; color: var(--text-muted); font-size: 0.95rem;">
          ${items}
        </ul>
      </div>
      <div style="margin-top: 1rem;">
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

/* 5. Contact Form Real-Time Validation */
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

/* 6. Sticky Header Scroll Effect */
function initStickyHeader() {
  const header = document.getElementById('navbar-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  });
}

/* 7. Back To Top Floating Action */
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
