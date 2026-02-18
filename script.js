/* ========================================
   NAVIGATION & MOBILE MENU
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav');
  const navLinks = document.querySelectorAll('nav a');
  const revealElements = document.querySelectorAll('.reveal');
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  // Mobile menu toggle
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
    });
  }
  
  // Close menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      nav.classList.remove('active');
    });
  });

  // Set active link based on current page/hash
  setActiveNavLink();
  window.addEventListener('hashchange', setActiveNavLink);

  // Scroll reveal animations
  initScrollReveal(revealElements);

  // FAQ accordion
  initFaqAccordion(faqQuestions);

  // Booking form submission
  initBookingForm();

  // Chatbot widget
  initChatbot();
});

function setActiveNavLink() {
  const navLinks = document.querySelectorAll('nav a');
  const currentPath = window.location.pathname;
  const currentHash = window.location.hash || '#home';
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      link.classList.toggle('active', href === currentHash);
      return;
    }

    if (currentPath.includes(href) || 
        (currentPath === '/' && href === 'index.html') ||
        (currentPath.endsWith('/') && href === 'index.html')) {
      link.classList.add('active');
      return;
    }

    link.classList.remove('active');
  });
}

/* ========================================
   SMOOTH SCROLL TO TOP
   ======================================== */

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ========================================
   UTILITY FUNCTIONS
   ======================================== */

function toggleMobileMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('active');
}

/* ========================================
   SCROLL REVEAL ANIMATIONS
   ======================================== */

function initScrollReveal(nodes) {
  if (!nodes || nodes.length === 0) return;
  
  // Fallback for browsers without IntersectionObserver
  if (!('IntersectionObserver' in window)) {
    nodes.forEach(node => node.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  nodes.forEach(node => observer.observe(node));
}

function initFaqAccordion(questions) {
  if (!questions || questions.length === 0) return;

  questions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.closest('.faq-item');
      const isOpen = item.classList.contains('active');

      questions.forEach(btn => {
        const parent = btn.closest('.faq-item');
        parent.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function initBookingForm() {
  const bookingForm = document.getElementById('booking-form');
  const formStatus = document.getElementById('form-status');
  const submitButton = bookingForm ? bookingForm.querySelector('button[type="submit"]') : null;

  if (!bookingForm) return;

  bookingForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    formStatus.textContent = '';
    formStatus.removeAttribute('data-state');

    if (!bookingForm.checkValidity()) {
      bookingForm.reportValidity();
      return;
    }

    if (submitButton) {
      submitButton.disabled = true;
    }

    const formData = new FormData(bookingForm);
    try {
      const response = await fetch('https://n8n.srv1235858.hstgr.cloud/webhook-test/85f8b530-2fba-4f39-9bff-d8d0231ffa59', {
        method: 'POST',
        body: formData
      });

      if (response.status < 200 || response.status > 299) {
        throw new Error('Submission failed');
      }

      bookingForm.reset();
      formStatus.textContent = 'Thank you, we will get back to you.';
      formStatus.setAttribute('data-state', 'success');
    } catch (error) {
      formStatus.textContent = 'Submission failed. Please try again.';
      formStatus.setAttribute('data-state', 'error');
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
      }
    }
  });
}

function initChatbot() {
  const toggle = document.getElementById('chatbot-toggle');
  const panel = document.getElementById('chatbot-panel');
  const closeBtn = document.querySelector('.chatbot-close');
  const form = document.getElementById('chatbot-form');
  const input = document.getElementById('chatbot-input');
  const messages = document.getElementById('chatbot-messages');

  if (!toggle || !panel || !form || !input || !messages) return;

  const webhookUrl = 'https://n8n.srv1235858.hstgr.cloud/webhook/79d83fd0-2387-4579-a908-0d5c33a70b09';
  const sessionId = getOrCreateSessionId();
  let hasOpened = false;

  const setOpen = (open) => {
    if (open && !hasOpened) {
      panel.classList.add('is-large');
      hasOpened = true;
    }
    panel.classList.toggle('is-open', open);
    panel.setAttribute('aria-hidden', String(!open));
    toggle.setAttribute('aria-expanded', String(open));
    if (open) {
      setTimeout(() => input.focus(), 50);
    }
  };

  toggle.addEventListener('click', () => {
    const isOpen = panel.classList.contains('is-open');
    setOpen(!isOpen);
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => setOpen(false));
  }

  const appendMessage = (text, type) => {
    const node = document.createElement('div');
    node.className = `chatbot-message ${type}`;
    node.textContent = text;
    messages.appendChild(node);
    messages.scrollTop = messages.scrollHeight;
  };

  if (!messages.children.length) {
    appendMessage('Hello! How can I help you?', 'bot');
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const value = input.value.trim();
    if (!value) return;

    appendMessage(value, 'user');
    input.value = '';

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: value,
          source: 'adelvo_website_chatbot_test',
          session_id: sessionId,
          timestamp: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const data = await response.json();
      console.log('Chatbot response:', data);
      const reply = typeof data.reply === 'string' ? data.reply : 'Something went wrong. Please try again.';
      appendMessage(reply, 'bot');
    } catch (error) {
      appendMessage('Something went wrong. Please try again.', 'bot');
    }
  });
}

function getOrCreateSessionId() {
  const key = 'adelvo_chatbot_session_id';
  let sessionId = localStorage.getItem(key);
  if (!sessionId) {
    sessionId = `adelvo-${crypto.randomUUID()}`;
    localStorage.setItem(key, sessionId);
  }
  return sessionId;
}
