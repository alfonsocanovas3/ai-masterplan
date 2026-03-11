/* ============================================
   Dolead AI Agents Masterplan — Interactions
   ============================================ */

// Mobile hamburger menu toggle
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  if (links) links.classList.toggle('open');
}

// Close mobile menu when clicking a link
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      const menu = document.querySelector('.nav-links');
      if (menu) menu.classList.remove('open');
    });
  });

  // Agent card expand/collapse
  initCardExpand();

  // Agent filters (agents.html only)
  if (document.querySelector('.filter-bar')) {
    initFilters();
  }
});

// ============ CARD EXPAND/COLLAPSE ============
function initCardExpand() {
  var cards = document.querySelectorAll('.agent-card');
  cards.forEach(function(card) {
    // Make cards keyboard-accessible
    if (!card.getAttribute('tabindex')) card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-expanded', 'false');

    card.addEventListener('click', function() {
      var isExpanded = this.classList.toggle('expanded');
      this.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    });

    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });
}

// ============ AGENT FILTERS ============
function initFilters() {
  var activeStatus = 'all';
  var activeTeam = 'all';
  var activePlatform = 'all';

  var statusBtns = document.querySelectorAll('.filter-btn[data-filter="status"]');
  var teamSelect = document.getElementById('team-filter');
  var platformSelect = document.getElementById('platform-filter');

  // Status filter buttons
  statusBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      statusBtns.forEach(function(b) { b.classList.remove('active'); });
      this.classList.add('active');
      activeStatus = this.getAttribute('data-value');
      applyFilters();
    });
  });

  // Team dropdown
  if (teamSelect) {
    teamSelect.addEventListener('change', function() {
      activeTeam = this.value;
      applyFilters();
    });
  }

  // Platform dropdown
  if (platformSelect) {
    platformSelect.addEventListener('change', function() {
      activePlatform = this.value;
      applyFilters();
    });
  }

  // Read URL params and activate matching filter
  var params = new URLSearchParams(window.location.search);
  var urlStatus = params.get('status');
  if (urlStatus && ['exists', 'partial', 'new'].indexOf(urlStatus) !== -1) {
    activeStatus = urlStatus;
    statusBtns.forEach(function(btn) {
      btn.classList.remove('active');
      if (btn.getAttribute('data-value') === urlStatus) {
        btn.classList.add('active');
      }
    });
    applyFilters();
  }

  function applyFilters() {
    var cards = document.querySelectorAll('.agent-card[data-status]');
    var roleSections = document.querySelectorAll('.role-section');
    var counts = { all: 0, exists: 0, partial: 0, 'new': 0 };

    cards.forEach(function(card) {
      var status = card.getAttribute('data-status');
      var team = card.getAttribute('data-team');
      var platform = card.getAttribute('data-platform') || '';

      var matchStatus = (activeStatus === 'all' || status === activeStatus);
      var matchTeam = (activeTeam === 'all' || team === activeTeam);
      var matchPlatform = (activePlatform === 'all' || platform.indexOf(activePlatform) !== -1);

      // Magnus is always visible
      var isMagnus = card.classList.contains('magnus');

      if (isMagnus || (matchStatus && matchTeam && matchPlatform)) {
        card.style.display = '';
        if (!isMagnus) {
          counts.all++;
          if (status === 'exists') counts.exists++;
          else if (status === 'partial') counts.partial++;
          else if (status === 'new') counts['new']++;
        }
      } else {
        card.style.display = 'none';
      }
    });

    // Always count Magnus in all
    counts.all++;
    counts['new']++;

    // Update count displays
    var countAll = document.querySelector('.count-all');
    var countExists = document.querySelector('.count-exists');
    var countPartial = document.querySelector('.count-partial');
    var countNew = document.querySelector('.count-new');
    if (countAll) countAll.textContent = counts.all;
    if (countExists) countExists.textContent = counts.exists;
    if (countPartial) countPartial.textContent = counts.partial;
    if (countNew) countNew.textContent = counts['new'];

    // Show/hide role sections based on whether they have visible cards
    roleSections.forEach(function(section) {
      var sectionTeam = section.getAttribute('data-team');
      var visibleCards = section.querySelectorAll('.agent-card[data-status]:not([style*="display: none"])');

      // Also check if team filter hides this section
      if (activeTeam !== 'all' && sectionTeam !== activeTeam && sectionTeam !== 'Orchestrator') {
        section.style.display = 'none';
      } else if (visibleCards.length === 0 && sectionTeam !== 'Orchestrator') {
        section.style.display = 'none';
      } else {
        section.style.display = '';
      }
    });
  }
}
