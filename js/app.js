/**
 * Full Pocket Creations - Main JavaScript Application
 * Updated with Official Brand Theme: Navy Blue (#081220), Cerulean Blue (#0E4B8A), Electric Lime (#C6EB1A)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Update copyright year automatically
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // --- Mobile Navigation Menu ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Portfolio Projects Data & Modal ---
  const projectsData = [
    {
      id: 'proj-1',
      title: '1st Step — Growth & Creator Launchpad',
      category: 'influencer',
      categoryName: 'Influencer Marketing & Branding',
      tagline: 'Multi-creator viral campaign driving 280% organic engagement increase',
      client: '1st Step Baby Shop (Panampilly Nagar & Vennala)',
      timeline: '6 Weeks Campaign',
      overview: 'Full Pocket Creations developed a dual strategy for 1st Step: refreshing their social brand architecture while orchestrating a targeted micro-creator campaign across Kerala to drive foot traffic and direct online inquiries.',
      challenge: 'High customer acquisition cost and low engagement on legacy promotional graphics.',
      solution: 'Re-imagined the visual language into sleek short-form vertical video assets, conducted Panampilly Nagar & Vennala store shoots, and onboarded 18 high-engagement lifestyle creators.',
      results: [
        { label: 'Total Reach', value: '450K+' },
        { label: 'Engagement Rate', value: '8.4%' },
        { label: 'Lead Inquiries', value: '+142%' }
      ],
      tags: ['Influencer Marketing', 'Brand Strategy', 'Reels Production', 'Creator Outreach']
    },
    {
      id: 'proj-2',
      title: 'Acco Finetech — Fintech Performance Ads',
      category: 'ads',
      categoryName: 'Digital Ads & Performance Marketing',
      tagline: 'High-converting Meta & Google Ad funnels delivering a 4.6x ROAS',
      client: 'Acco Finetech',
      timeline: 'Ongoing Growth Retainer',
      overview: 'Acco Finetech needed qualified B2B and consumer leads for their specialized accounting and business technology solutions. We engineered hyper-targeted conversion funnels across Meta & Google Search.',
      challenge: 'Complex financial services require building instant trust and demystifying features for business owners.',
      solution: 'Constructed custom educational ad creatives, pain-point video hooks, dedicated landing page copy, and sophisticated retargeting layers.',
      results: [
        { label: 'Return on Ad Spend', value: '4.6x ROAS' },
        { label: 'Cost Per Acquisition', value: '-38%' },
        { label: 'Qualified Leads', value: '1,200+' }
      ],
      tags: ['Meta Ads', 'Google Ads', 'Funnel Optimization', 'B2B Growth']
    },
    {
      id: 'proj-3',
      title: 'Seven Bells — Premium Visual & Event Production',
      category: 'design',
      categoryName: 'Design & Visual Identity',
      tagline: 'Complete visual identity revamp, poster packages, and campaign creative direction',
      client: 'Seven Bells',
      timeline: '4 Weeks Sprint',
      overview: 'Seven Bells partnered with Full Pocket Creations to craft an unforgettable brand identity and comprehensive design system spanning digital assets, multi-poster packages, print collateral, and event visual kits.',
      challenge: 'Outdated branding failed to reflect the premium, energetic atmosphere of modern entertainment & event experiences.',
      solution: 'Designed an evocative luxury dark-mode brand guidelines book, typography assets, promotional poster packages, and high-contrast digital marketing collateral.',
      results: [
        { label: 'Brand Assets Created', value: '60+' },
        { label: 'Ticket / Booking Rate', value: '+190%' },
        { label: 'Social Mentions', value: '15K+' }
      ],
      tags: ['Brand Identity', 'Visual Design', 'Poster Packages', 'Art Direction']
    },
    {
      id: 'proj-4',
      title: 'Jerusalem Bus Body Builders — Video Production & Social Growth',
      category: 'consultancy',
      categoryName: 'Brand Strategy & Media Production',
      tagline: 'Multi-shoot video production, 6 dedicated films, and full social media page handling',
      client: 'Jerusalem Bus Body Builders (Kanjoor, Puthukkad, Thrissur)',
      timeline: 'Monthly Content Retainer',
      overview: 'Full Pocket Creations manages creative media production and digital growth for Jerusalem Bus Body Builders, delivering specialized industrial vehicle shoots, high-definition video content, and comprehensive social media channel management.',
      challenge: 'Translating heavy industrial craftsmanship into compelling, high-reach digital video content that drives transport fleet contracts.',
      solution: 'Executed 2 comprehensive on-site production shoots, developed 6 high-engagement showcase videos, and took over end-to-end social media page distribution.',
      results: [
        { label: 'Content Created', value: '6 Videos' },
        { label: 'Production Shoots', value: '2 Completed' },
        { label: 'Page Engagement', value: '+185%' }
      ],
      tags: ['Video Production', 'Industrial Shoots', 'Social Media Handling', 'Brand Strategy']
    },
    {
      id: 'proj-5',
      title: 'Infinity Groom — Luxury Men\'s Fashion & Reels Direction',
      category: 'influencer',
      categoryName: 'Influencer Marketing & Fashion Production',
      tagline: 'Cinematic fashion brand shoot, bespoke groom wear reels, and viral social reach',
      client: 'Infinity Groom (Infiniti Groom Concepts)',
      timeline: 'Fashion Launch Campaign',
      overview: 'Full Pocket Creations partnered with Infiniti Groom Concepts to plan, produce, and direct high-impact fashion video shoots and creator styling reels, spotlighting their premium custom tailoring and wedding wear collections across Kerala.',
      challenge: 'Differentiating in the luxury groom wear sector and translating bespoke fabric craftsmanship into viral, thumb-stopping vertical video reels.',
      solution: 'Orchestrated cinematic on-location video production, creator transitions, trend audio synchronization, and targeted Instagram reel distribution.',
      results: [
        { label: 'Total Views', value: '850K+' },
        { label: 'Booking Inquiries', value: '+210%' },
        { label: 'Statewide Reach', value: 'Top Trending' }
      ],
      tags: ['Fashion Shoot', 'Influencer Marketing', 'Reels Production', 'Creative Direction']
    },
    {
      id: 'proj-6',
      title: 'Jyothi Nivas Public School — Campus Video & Admissions Media',
      category: 'ads',
      categoryName: 'Video Production & Campus Media',
      tagline: 'Professional on-location video shoots, 8 vertical reels, and annual highlight film',
      client: 'Jyothi Nivas Public School (Aluva, Kerala)',
      timeline: 'Multi-Phase Media Retainer',
      overview: 'Full Pocket Creations spearheaded the complete digital media production for Jyothi Nivas Public School, executing professional on-location video shoots across campuses, producing 8 dynamic vertical reels, and crafting an annual school highlight film.',
      challenge: 'Modernizing institutional communications to engage prospective parents on Instagram with vibrant campus culture and academic highlights.',
      solution: 'Conducted scheduled multi-camera shoots, produced 8 energetic student & faculty reels, and edited a flagship campus highlight film deployed for admissions outreach.',
      results: [
        { label: 'Reels Produced', value: '8 Reels' },
        { label: 'Highlight Films', value: '2 Films' },
        { label: 'Parent Engagement', value: '+165%' }
      ],
      tags: ['Campus Video Shoot', 'Reels Production', 'Highlight Video', 'Admissions Outreach']
    },
    {
      id: 'proj-7',
      title: 'KR Furniture Studio — Showroom Visuals & Interior Catalog',
      category: 'design',
      categoryName: 'Design & Interior Visuals',
      tagline: 'High-end furniture video showcases, studio catalog design, and showroom footfall campaigns',
      client: 'KR Furniture Studio (Chevoor, Thrissur, Kerala)',
      timeline: 'Showroom Creative Retainer',
      overview: 'Full Pocket Creations created high-end commercial video walkthroughs, catalog visual designs, and social media reels showcasing KR Furniture\'s premium custom woodwork, modern living room setups, and interior collections.',
      challenge: 'Capturing the tactile luxury, scale, and craftsmanship of bespoke furniture in fast-paced mobile formats to attract high-intent local homeowners.',
      solution: 'Engineered cinematic lighting shoots across their Thrissur showroom, produced dynamic product reels, designed digital catalog showcases, and ran targeted local discovery campaigns.',
      results: [
        { label: 'Showroom Inquiries', value: '+175%' },
        { label: 'Reels Reach', value: '320K+' },
        { label: 'Catalog Assets', value: '45+ Creatives' }
      ],
      tags: ['Showroom Walkthrough', 'Furniture Reels', 'Catalog Design', 'Commercial Shoots']
    },
    {
      id: 'proj-8',
      title: 'CEA Automation — Smart Living Tech Ads & Explainer Media',
      category: 'ads',
      categoryName: 'Digital Ads & Tech Media',
      tagline: 'High-converting smart home explainer reels, feature demos, and B2B/B2C lead gen funnels',
      client: 'CEA The Automation Experts (Thrissur, Kerala)',
      timeline: 'Lead Gen & Performance Sprint',
      overview: 'Full Pocket Creations spearheaded performance ad campaigns and high-tech explainer reels for CEA, showcasing smart switches, automated gate systems, smart lighting, and intelligent living solutions for luxury homeowners, architects, and builders.',
      challenge: 'Demystifying complex smart home tech and conveying premium convenience in 15-30 second reels that convert into qualified sales consultations.',
      solution: 'Shot sleek live-action automation demos showing real-time mobile and voice controls, built hyper-targeted Meta lead generation funnels, and optimized retargeting ad sequences.',
      results: [
        { label: 'Qualified Leads', value: '480+ Leads' },
        { label: 'Cost Per Acquisition', value: '-42%' },
        { label: 'Reel Completion', value: '68%' }
      ],
      tags: ['Smart Home Tech', 'Explainer Reels', 'Lead Gen Ads', 'B2B & B2C Marketing']
    },
    {
      id: 'proj-9',
      title: 'Dream Gym — High-Energy Fitness Media & Membership Drive',
      category: 'influencer',
      categoryName: 'Influencer Marketing & Fitness Production',
      tagline: 'Cinematic workout hype reels, creator athlete features, and viral membership campaigns',
      client: 'Dream Gym & Fitness (Kerala)',
      timeline: 'Brand Hype & Membership Sprint',
      overview: 'Full Pocket Creations planned, shot, and edited high-energy cinematic gym showcase reels and creator workout sessions for Dream Gym, transforming facility features and personal training into viral fitness motivation content that surged memberships.',
      challenge: 'Differentiating Dream Gym in a crowded local fitness market and driving immediate signups for annual memberships.',
      solution: 'Directed intense, rhythmic fitness reels with dynamic camera movements, sound-designed hype beats, member transformation spotlights, and localized influencer collaborations.',
      results: [
        { label: 'Total Views', value: '520K+' },
        { label: 'New Memberships', value: '+230 Signups' },
        { label: 'Follower Growth', value: '+340%' }
      ],
      tags: ['Fitness Reels', 'Creator Workouts', 'Gym Commercials', 'Membership Growth']
    }
  ];

  // --- Filter Projects ---
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button state
      filterButtons.forEach(b => {
        b.classList.remove('bg-[#C6EB1A]', 'text-[#081220]', 'shadow-lg', 'shadow-[#C6EB1A]/30', 'font-bold');
        b.classList.add('bg-[#0E2038]', 'text-slate-300', 'hover:bg-[#143154]', 'font-semibold');
      });

      btn.classList.remove('bg-[#0E2038]', 'text-slate-300', 'hover:bg-[#143154]', 'font-semibold');
      btn.classList.add('bg-[#C6EB1A]', 'text-[#081220]', 'shadow-lg', 'shadow-[#C6EB1A]/30', 'font-bold');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.classList.remove('hidden');
          // Smooth fade in
          card.style.opacity = '0';
          card.style.transform = 'scale(0.96)';
          setTimeout(() => {
            card.style.transition = 'all 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 30);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // --- Modal Logic ---
  const modal = document.getElementById('project-modal');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalBody = document.getElementById('modal-body-content');

  function openProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project || !modal || !modalBody) return;

    modalBody.innerHTML = `
      <div class="space-y-6">
        <div>
          <span class="inline-block px-3 py-1 text-xs font-bold rounded-full bg-[#C6EB1A]/15 text-[#C6EB1A] border border-[#C6EB1A]/30 mb-2">
            ${project.categoryName}
          </span>
          <h2 class="text-2xl sm:text-3xl font-bold text-white font-heading">${project.title}</h2>
          <p class="text-slate-300 text-sm mt-1">${project.tagline}</p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-[#09172B] border border-[#0E4B8A]/40">
          <div>
            <div class="text-xs text-slate-400">Client</div>
            <div class="font-medium text-white text-sm mt-0.5">${project.client}</div>
          </div>
          <div>
            <div class="text-xs text-slate-400">Timeline</div>
            <div class="font-medium text-white text-sm mt-0.5">${project.timeline}</div>
          </div>
          <div class="col-span-2 sm:col-span-1">
            <div class="text-xs text-slate-400">Agency Role</div>
            <div class="font-bold text-[#C6EB1A] text-sm mt-0.5">Full Pocket Execution</div>
          </div>
        </div>

        <div>
          <h4 class="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-1">The Overview</h4>
          <p class="text-slate-300 text-sm leading-relaxed">${project.overview}</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-red-950/20 border border-red-500/20">
            <h4 class="text-xs font-bold uppercase tracking-wider text-red-400 mb-1">The Challenge</h4>
            <p class="text-slate-300 text-xs leading-relaxed">${project.challenge}</p>
          </div>
          <div class="p-4 rounded-xl bg-[#0E4B8A]/20 border border-[#C6EB1A]/30">
            <h4 class="text-xs font-bold uppercase tracking-wider text-[#C6EB1A] mb-1">The Full Pocket Solution</h4>
            <p class="text-slate-300 text-xs leading-relaxed">${project.solution}</p>
          </div>
        </div>

        <div>
          <h4 class="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-2">Key Impact & Metrics</h4>
          <div class="grid grid-cols-3 gap-3">
            ${project.results.map(r => `
              <div class="p-3 text-center rounded-xl bg-[#0A1A30] border border-[#0E4B8A]/50">
                <div class="text-xl sm:text-2xl font-extrabold text-[#C6EB1A]">${r.value}</div>
                <div class="text-[11px] text-slate-400 mt-1">${r.label}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="pt-2">
          <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Capabilities Used</h4>
          <div class="flex flex-wrap gap-1.5">
            ${project.tags.map(t => `
              <span class="px-2.5 py-1 text-xs rounded-md bg-[#0E2038] text-slate-300 border border-[#0E4B8A]/40">${t}</span>
            `).join('')}
          </div>
        </div>

        <div class="pt-4 border-t border-[#0E4B8A]/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div class="text-xs text-slate-400">
            Ready for similar measurable growth?
          </div>
          <a href="#contact" onclick="document.getElementById('project-modal').classList.add('hidden')" class="btn-lime w-full sm:w-auto text-center px-6 py-2.5 rounded-xl font-bold text-xs">
            Start Your Campaign
          </a>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  // Attach modal trigger to buttons
  const viewDetailsButtons = document.querySelectorAll('.open-project-btn');
  viewDetailsButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project-id');
      openProjectModal(projectId);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeProjectModal();
    }
  });

  // --- Select Service from Service Cards ---
  const serviceCtaButtons = document.querySelectorAll('.service-select-btn');
  const serviceSelectInput = document.getElementById('service-select');

  serviceCtaButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const serviceVal = btn.getAttribute('data-service');
      if (serviceSelectInput && serviceVal) {
        serviceSelectInput.value = serviceVal;
      }
    });
  });

  // --- Contact Form Submission & Toast ---
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  function showToast(message, isSuccess = true) {
    if (!toast) return;
    toastMessage.textContent = message;
    toast.classList.remove('hidden', 'translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    if (isSuccess) {
      toast.classList.remove('border-red-500', 'bg-red-950/90');
      toast.classList.add('border-[#C6EB1A]/50', 'bg-[#0A1A30]/95');
    } else {
      toast.classList.add('border-red-500', 'bg-red-950/90');
    }

    setTimeout(() => {
      toast.classList.add('translate-y-20', 'opacity-0');
      setTimeout(() => toast.classList.add('hidden'), 300);
    }, 4500);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('user-name')?.value.trim();
      const email = document.getElementById('user-email')?.value.trim();
      const brand = document.getElementById('user-brand')?.value.trim();
      const service = document.getElementById('service-select')?.value;
      const message = document.getElementById('user-message')?.value.trim();

      if (!name || !email || !message) {
        showToast('Please fill in your name, email, and project message.', false);
        return;
      }

      // Simulate successful dispatch
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-[#081220] inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        Sending Proposal...
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();
        showToast(`Thank you, ${name}! Your inquiry for Full Pocket Creations has been received. We will respond within 24 hours.`, true);
      }, 1000);
    });
  }
});
