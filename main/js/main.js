"use strict";
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
function avatarFallback(name) {
  const encoded = encodeURIComponent(name.split(" ")[0]);
  return `https://ui-avatars.com/api/?name=${encoded}&background=1a1924&color=ff8906&size=80`;
}
function initLoader() {
  const loader = $("#loader");
  if (!loader) return;
  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.style.opacity = "0";
      setTimeout(() => {
        loader.style.display = "none";
        initScrollAnimations();
      }, 800);
    }, 3000);
  });
}
function initCursor() {
  const dot = $("#cursor-dot");
  const ring = $("#cursor-ring");
  if (!dot || !ring) return;
  let mouseX = 0,
    mouseY = 0,
    ringX = 0,
    ringY = 0;
  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";
  });
  (function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.left = ringX + "px";
    ring.style.top = ringY + "px";
    requestAnimationFrame(animateRing);
  })();
  const onEnter = () => {
    ring.style.width = "48px";
    ring.style.height = "48px";
    ring.style.borderColor = "rgba(255,137,6,0.9)";
  };
  const onLeave = () => {
    ring.style.width = "32px";
    ring.style.height = "32px";
    ring.style.borderColor = "rgba(255,137,6,0.6)";
  };
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest("a, button, input")) onEnter();
    else onLeave();
  });
}
function initNavbar() {
  const navbar = $("#navbar");
  if (!navbar) return;
  const updateNav = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 60);
  };
  window.addEventListener("scroll", updateNav, { passive: true });
  updateNav();
}
function initMobileMenu() {
  const hamburger = $("#hamburger");
  const mobileMenu = $("#mobile-menu");
  if (!hamburger || !mobileMenu) return;
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle("open");
  });
  document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
      mobileMenu.classList.remove("open");
    }
  });
  $$(".mobile-nav-link", mobileMenu).forEach((link) => {
    link.addEventListener("click", () => mobileMenu.classList.remove("open"));
  });
}
function initSearch() {
  const desktopInput = $("#search-input");
  const mobileInput = $("#search-input-mobile");
  function doSearch(value) {
    const filter = value.toUpperCase().trim();
    const cards = $$(".student-card");
    let visible = 0;
    cards.forEach((card) => {
      const nameEl = card.querySelector(".student-name");
      const name = nameEl ? nameEl.textContent : "";
      const show = name.toUpperCase().includes(filter);
      card.style.display = show ? "" : "none";
      if (show) visible++;
    });
    const noResults = $("#no-results");
    if (noResults) noResults.style.display = visible === 0 ? "block" : "none";
  }
  function syncAndSearch(e) {
    const val = e.target.value;
    if (e.target === desktopInput && mobileInput) mobileInput.value = val;
    if (e.target === mobileInput && desktopInput) desktopInput.value = val;
    doSearch(val);
  }
  desktopInput?.addEventListener("input", syncAndSearch);
  mobileInput?.addEventListener("input", syncAndSearch);
}
function initOldSiteModal() {
  const modal = $("#old-site-modal");
  const openBtns = $$(".open-old-site");
  const closeBtn = $("#modal-close");
  if (!modal) return;
  const open = () => modal.classList.add("open");
  const close = () => modal.classList.remove("open");
  openBtns.forEach((btn) => btn.addEventListener("click", open));
  closeBtn?.addEventListener("click", close);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const delay = parseFloat(el.dataset.delay || 0);
        setTimeout(() => {
          el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, delay);
        observer.unobserve(el);
      });
    },
    { threshold: 0.1 },
  );
  $$(".timeline-item").forEach((el, i) => {
    el.dataset.delay = i * 100;
    observer.observe(el);
  });
  $$(".teacher-card").forEach((el, i) => {
    el.dataset.delay = i * 35;
    observer.observe(el);
  });
  const grid = $("#student-grid");
  if (grid) {
    const gridObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        $$(".student-card").forEach((el, i) => {
          setTimeout(() => {
            el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, i * 45);
        });
        gridObserver.disconnect();
      },
      { threshold: 0.05 },
    );
    gridObserver.observe(grid);
  }
  $$(".creation-card").forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.dataset.delay = i * 120;
    observer.observe(el);
  });
}
const SOCIAL_ICONS = {
  instagram: `<svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
  spotify: `<svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>`,
  tiktok: `<svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.16 8.16 0 004.77 1.52V6.79a4.85 4.85 0 01-1-.1z"/></svg>`,
  youtube: `<svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>`,
  twitter: `<svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.636zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
};
function makeSocialLinks(student) {
  const links = ["instagram", "spotify", "tiktok", "youtube", "twitter"];
  const html = links
    .filter((key) => student[key])
    .map(
      (key) =>
        `<a href="${student[key]}" target="_blank" rel="noopener" title="${key}">${SOCIAL_ICONS[key]}</a>`,
    )
    .join("");
  return (
    html ||
    '<span style="color:rgba(255,255,255,0.15);font-size:0.7rem;">—</span>'
  );
}
function renderStudents(students) {
  const grid = $("#student-grid");
  if (!grid) return;
  grid.innerHTML = students
    .map((s) => {
      const roleTag = s.role
        ? `<div style="font-size:0.6rem;font-family:'Space Mono',monospace;color:var(--orange);margin-bottom:0.25rem;">${s.role} ★</div>`
        : "";
      return `
      <div class="student-card glass-card">
        <img
          class="student-avatar"
          src="${s.img}"
          alt="${s.name}"
          onerror="this.src='${avatarFallback(s.name)}'"
        >
        ${roleTag}
        <div class="student-name">${s.name}</div>
        <div class="student-links">${makeSocialLinks(s)}</div>
      </div>`;
    })
    .join("");
}
function renderTeachers(teachers) {
  const grid = $("#teachers-grid");
  if (!grid) return;
  grid.innerHTML = teachers
    .map(
      (t) => `
    <div class="teacher-card glass-card">
      <div class="teacher-subject">${t.subject}</div>
      <div class="teacher-name">${t.name}</div>
    </div>
  `,
    )
    .join("");
}
function renderHistory(history) {
  const container = $("#timeline-container");
  if (!container) return;
  container.innerHTML = history
    .map((item, i) => {
      const side = i % 2 === 0 ? "odd" : "even";
      return `
      <div class="timeline-item ${side}">
        <div class="timeline-text">
          <div class="timeline-date">${item.date}</div>
          <div class="timeline-caption">${item.caption}</div>
        </div>
        <div class="timeline-img timeline-img-wrap">
          <div class="timeline-dot"></div>
          <img src="${item.img}" alt="${item.date}" loading="lazy" onerror="this.parentElement.style.display='none'">
        </div>
      </div>`;
    })
    .join("");
}
function renderCreations(creations) {
  const grid = $("#creation-grid");
  if (!grid) return;
  grid.innerHTML = creations
    .map((c) => {
      const media = c.video
        ? `<video src="${c.video}" muted autoplay loop playsinline></video>`
        : `<img src="${c.img}" alt="${c.author}" loading="lazy">`;
      return `
      <div class="creation-card glass-card">
        <div class="creation-media">
          ${media}
          <span class="creation-badge">${c.type}</span>
        </div>
        <div class="creation-info">
          <div class="teacher-subject" style="margin-bottom:0.25rem;">${c.type}</div>
          <a href="${c.instagram}" target="_blank" rel="noopener">${c.author}</a>
        </div>
      </div>`;
    })
    .join("");
}
function renderConfig(config) {
  const statStudents = $("#stat-students");
  const statTeachers = $("#stat-teachers");
  const statYear = $("#stat-year");
  if (statStudents) statStudents.textContent = config.stats.students;
  if (statTeachers) statTeachers.textContent = config.stats.teachers;
  if (statYear) statYear.textContent = config.stats.year;
  const hm = config.headmaster;
  const hmEl = $("#headmaster-card");
  if (hmEl && hm) {
    hmEl.innerHTML = `
      <img class="profile-avatar" src="${hm.img}" alt="${hm.name}" style="width:100px;height:100px;display:block;margin:0 auto 1rem;" onerror="this.src='${avatarFallback(hm.name)}'">
      <div style="font-weight:700;font-size:1.05rem;margin-bottom:0.25rem;">${hm.name}</div>
      <div style="font-size:0.75rem;color:var(--text-muted);margin-bottom:0.75rem;">${hm.title}</div>
      <a href="${hm.instagram}" target="_blank" rel="noopener" style="font-size:0.75rem;color:rgba(255,137,6,0.7);transition:color 0.2s;" onmouseover="this.style.color='#ff8906'" onmouseout="this.style.color='rgba(255,137,6,0.7)'">${SOCIAL_ICONS.instagram} @catharina.ns</a>
    `;
  }
  const hr = config.homeroom;
  const hrEl = $("#homeroom-card");
  if (hrEl && hr) {
    hrEl.innerHTML = `
      <img src="${hr.img}" alt="${hr.name}" style="width:72px;height:72px;border-radius:50%;object-fit:cover;border:2px solid rgba(255,137,6,0.35);flex-shrink:0;" onerror="this.src='${avatarFallback(hr.name)}'">
      <div >
        <div style="font-weight:700;font-size:1rem;">${hr.name}</div>
        <div style="font-size:0.72rem;color:var(--text-muted);margin-bottom:0.4rem;">${hr.title}</div>
        <a href="${hr.instagram}" target="_blank" rel="noopener" style="font-size:0.72rem;color:rgba(255,137,6,0.7);">${hr.handle}</a>
      </div>
    `;
  }
  const hocEl = $("#hoc-cards");
  if (hocEl && config.headOfClass) {
    hocEl.innerHTML = config.headOfClass
      .map(
        (p) => `
      <div class="glass-card" style="border-radius:16px;padding:1.25rem;display:flex;align-items:center;gap:1.25rem;">
        <img src="${p.img}" alt="${p.name}" style="width:64px;height:64px;border-radius:50%;object-fit:cover;border:2px solid rgba(255,137,6,0.35);flex-shrink:0;" onerror="this.src='${avatarFallback(p.name)}'">
        <div>
          <div style="font-size:0.65rem;font-family:'Space Mono',monospace;color:rgba(255,137,6,0.6);margin-bottom:0.2rem;">${p.role}</div>
          <div style="font-weight:700;font-size:0.95rem;">${p.name}</div>
          <a href="${p.instagram}" target="_blank" rel="noopener" style="font-size:0.72rem;color:var(--text-muted);">${p.handle}</a>
        </div>
      </div>
    `,
      )
      .join("");
  }
  const socials = config.socials;
  const footerSocials = $("#footer-socials");
  if (footerSocials && socials) {
    const items = [
      { key: "instagram", label: "Instagram" },
      { key: "youtube", label: "YouTube" },
      { key: "tiktok", label: "TikTok" },
      { key: "spotify", label: "Spotify" },
    ];
    footerSocials.innerHTML = items
      .filter(({ key }) => socials[key])
      .map(
        ({ key, label }) =>
          `<li><a href="${socials[key]}" target="_blank" rel="noopener" class="footer-nav-list-link">${label}</a></li>`,
      )
      .join("");
  }
}
async function fetchJSON(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
  return res.json();
}
async function loadData() {
  try {
    const [students, teachers, history, creations, config] = await Promise.all([
      fetchJSON("./data/students.json"),
      fetchJSON("./data/teachers.json"),
      fetchJSON("./data/history.json"),
      fetchJSON("./data/creations.json"),
      fetchJSON("./data/config.json"),
    ]);
    renderStudents(students);
    renderTeachers(teachers);
    renderHistory(history);
    renderCreations(creations);
    renderConfig(config);
  } catch (err) {
    console.error("Data load error:", err);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initCursor();
  initNavbar();
  initMobileMenu();
  initSearch();
  initOldSiteModal();
  loadData();
});
