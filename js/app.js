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

  // --- Creative Works Data (Reels & Posters) ---
  const reelsData = [
    {
      id: 'reel-1',
      client: 'Infinity Groom (Infiniti Groom Concepts)',
      title: 'Luxury Groom Styling & Wedding Wear Transitions',
      duration: '0:30',
      views: '850K+',
      likes: '32.4K',
      shares: '8.9K',
      audio: 'Original Audio — Full Pocket Audio Lab',
      description: 'Cinematic fashion brand shoot featuring bespoke wedding groom wear, dynamic fabric texture closeups, synchronized beat cuts, and viral creator transitions across Kerala.',
      tags: ['Men\'s Fashion', 'Wedding Styling', 'Viral Reels', 'Color Grading'],
      bgGradient: 'from-[#1c1208] via-[#0d1624] to-[#050b14]'
    },
    {
      id: 'reel-2',
      client: 'Dream Gym & Fitness Club',
      title: 'Unleash The Beast: Heavy Iron Barbell Lift Motivation',
      duration: '0:25',
      views: '520K+',
      likes: '21.8K',
      shares: '5.2K',
      audio: 'Workout Hype Phonk Beats — Dream Gym Sessions',
      description: 'High-energy fitness hype reel captured with speed ramping, dynamic low-angle tracking shots, gym floor ambient audio, and member transformation spotlights.',
      tags: ['Gym Commercial', 'Fitness Motivation', 'Speed Ramping', 'Sound Design'],
      bgGradient: 'from-[#0e210a] via-[#09181d] to-[#040e16]'
    },
    {
      id: 'reel-3',
      client: '1st Step Baby Shop (Panampilly & Vennala)',
      title: 'Boutique Baby Gear, Toddler Fashion & Store Walkthrough',
      duration: '0:40',
      views: '450K+',
      likes: '19.6K',
      shares: '4.8K',
      audio: 'Lifestyle Acoustic Pop — Kerala Creators',
      description: 'Warm, engaging lifestyle store walkthrough highlighting nursery essentials, organic toddler clothing, and interactive creator shopping experiences.',
      tags: ['Store Walkthrough', 'Creator Campaign', 'Baby Boutique', 'Retail Growth'],
      bgGradient: 'from-[#113156] via-[#0b203a] to-[#040e1b]'
    },
    {
      id: 'reel-4',
      client: 'Jerusalem Bus Body Builders (Thrissur)',
      title: 'Forged For The Highways: Industrial Bus Fabrication & Finish',
      duration: '0:45',
      views: '180K+',
      likes: '14.2K',
      shares: '3.1K',
      audio: 'Heavy Industrial Bass & Sound Design',
      description: 'Cinematic industrial documentary-style vertical video featuring metal fabrication, welding spark macros, paint booth finishes, and transport fleet delivery.',
      tags: ['Industrial Shoot', 'Automotive Media', 'Macro Video', 'Documentary'],
      bgGradient: 'from-[#1c1813] via-[#141d28] to-[#07111b]'
    },
    {
      id: 'reel-5',
      client: 'CEA The Automation Experts (Thrissur)',
      title: 'One-Touch Control: Smart Switches, Gates & Villa Ambiance',
      duration: '0:30',
      views: '290K+',
      likes: '11.5K',
      shares: '2.7K',
      audio: 'Futuristic Ambient Tech Score',
      description: 'Sleek luxury villa automation demonstration reel showing live smart touch switches, motorized gate control via smartphone, and custom architectural mood lighting.',
      tags: ['Smart Home Tech', 'B2B Demo', 'Motion Graphics', 'Lead Gen'],
      bgGradient: 'from-[#0a1e35] via-[#07172a] to-[#030b14]'
    },
    {
      id: 'reel-6',
      client: 'Jyothi Nivas Public School (Aluva)',
      title: 'Empowering Young Minds: Academics, Sports & Arts Festival',
      duration: '0:35',
      views: '310K+',
      likes: '15.8K',
      shares: '3.9K',
      audio: 'Inspiring Youth Academic Anthem',
      description: 'Vibrant, fast-paced vertical video montage showcasing modern campus facilities, science labs, annual cultural day performances, and student athletics.',
      tags: ['Campus Media', 'Admissions Campaign', 'Student Life', 'Video Editing'],
      bgGradient: 'from-[#112440] via-[#0b182d] to-[#050d18]'
    }
  ];

  const postersData = [
    {
      id: 'poster-1',
      client: 'Seven Bells',
      title: 'Exclusive Nightlife Sessions & VIP Pass Event Poster',
      format: 'Print Collateral & 4:5 Instagram Feed',
      brief: 'Crafted a dark-mode luxury Art Deco visual identity poster package for Seven Bells weekend club nights, blending rich gold typography with acoustic soundwave vectors.',
      dimensions: 'A2 Print (420 x 594 mm) + 1080 x 1350px Social',
      colors: ['#070B12', '#D4AF37', '#0E4B8A', '#E2E8F0'],
      capabilities: ['Visual Identity', 'Typography Direction', 'Art Deco Layout', 'Print Production']
    },
    {
      id: 'poster-2',
      client: 'KR Furniture Studio (Chevoor, Thrissur)',
      title: 'Architectural Minimal Living & Teak Woodwork Poster',
      format: 'Showroom Wall Display & Digital Catalog',
      brief: 'Developed clean, Swiss-inspired minimalist catalog posters highlighting custom teak furniture, modular living setups, and showroom coordinates.',
      dimensions: 'Showroom Board (24 x 36 in) + 1080 x 1350px Social',
      colors: ['#0D1622', '#C6EB1A', '#B47A44', '#FFFFFF'],
      capabilities: ['Editorial Design', 'Product Staging', 'Showroom Collateral', 'Minimalism']
    },
    {
      id: 'poster-3',
      client: 'Dream Gym & Fitness Club',
      title: '90-Day Summer Shred Transformation Challenge Poster',
      format: 'High-Impact Street Billboard & Gym Entrance',
      brief: 'High-contrast brutalist poster using electric lime branding and bold geometric type to drive instant member challenge signups and registration excitement.',
      dimensions: 'Large Billboard (10 x 8 ft) + A3 Gym Poster',
      colors: ['#081220', '#C6EB1A', '#143154', '#FFFFFF'],
      capabilities: ['Brutalist Typography', 'Campaign Key Art', 'Call-to-Action Design', 'Billboard']
    },
    {
      id: 'poster-4',
      client: '1st Step Baby Shop (Panampilly & Vennala)',
      title: 'Festive Toddler & Baby Wear Collection Grand Launch',
      format: 'In-Store POS Posters & Mall Display',
      brief: 'Playful yet sophisticated brand campaign poster spotlighting festive babywear collections, organic cotton lines, and dual store opening announcements.',
      dimensions: 'Mall Standee (2 x 5 ft) + 1080 x 1350px Feed',
      colors: ['#0A1A30', '#38BDF8', '#F472B6', '#FFFFFF'],
      capabilities: ['Retail Branding', 'Seasonal Campaign', 'Vector Illustration', 'POS Assets']
    },
    {
      id: 'poster-5',
      client: 'CEA The Automation Experts (Thrissur)',
      title: 'Architectural Smart Home & Villa Automation Masterclass',
      format: 'B2B Architect Summit Invitation & Tech Blueprint',
      brief: 'Technical blueprint-style poster with isometric smart villa schematics, smart switch icons, and architect forum invitation details.',
      dimensions: 'A1 Exhibition Poster + Digital Invitation Kit',
      colors: ['#051528', '#0E4B8A', '#38BDF8', '#C6EB1A'],
      capabilities: ['Schematic Design', 'B2B Marketing', 'Isometric Graphics', 'Event Branding']
    },
    {
      id: 'poster-6',
      client: 'Seven Bells',
      title: 'Sunset Sessions: Weekend Acoustic Lounge & Cocktails',
      format: 'Digital Social Art & Table Tent Cards',
      brief: 'Atmospheric neon sunset aesthetic blending purple/magenta twilight gradients with acoustic guitar silhouettes and weekend cocktail tasting menus.',
      dimensions: 'Table Tents (A5) + 1080 x 1350px Social Poster',
      colors: ['#1B0826', '#E879F9', '#0E4B8A', '#C6EB1A'],
      capabilities: ['Atmospheric Art', 'Menu Design', 'Nightlife Promo', 'Color Harmony']
    }
  ];

  // --- Works Filtering (All / Reels / Posters) ---
  const workFilterButtons = document.querySelectorAll('.work-filter-btn');
  const workCards = document.querySelectorAll('.work-card');

  workFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      workFilterButtons.forEach(b => {
        b.classList.remove('bg-[#C6EB1A]', 'text-[#081220]', 'font-bold');
        b.classList.add('bg-[#0E2038]', 'text-slate-300', 'font-semibold');
      });

      btn.classList.remove('bg-[#0E2038]', 'text-slate-300', 'font-semibold');
      btn.classList.add('bg-[#C6EB1A]', 'text-[#081220]', 'font-bold');

      const filterVal = btn.getAttribute('data-work-filter');
      workCards.forEach(card => {
        const cardType = card.getAttribute('data-work-type');
        if (filterVal === 'all' || cardType === filterVal) {
          card.classList.remove('hidden');
          card.style.opacity = '0';
          card.style.transform = 'scale(0.97)';
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

  // --- Reel Player Modal ---
  const reelModal = document.getElementById('reel-modal');
  const reelBackdrop = document.getElementById('reel-backdrop');
  const reelCloseBtn = document.getElementById('reel-close-btn');
  const reelModalContent = document.getElementById('reel-modal-content');

  function openReelModal(reelId) {
    const reel = reelsData.find(r => r.id === reelId);
    if (!reel || !reelModal || !reelModalContent) return;

    reelModalContent.innerHTML = `
      <div class="relative bg-gradient-to-b ${reel.bgGradient} p-6 aspect-reel flex flex-col justify-between overflow-hidden">
        <!-- Top phone status & header -->
        <div class="flex items-center justify-between text-xs text-white z-10 pt-2">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-full bg-[#0E4B8A] border border-[#C6EB1A] flex items-center justify-center font-bold text-xs text-[#C6EB1A]">
              FP
            </div>
            <div>
              <div class="font-bold flex items-center gap-1">
                @fullpocketcreations
                <svg class="w-3.5 h-3.5 text-blue-400 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              </div>
              <div class="text-[10px] text-slate-300">${reel.client}</div>
            </div>
          </div>
        </div>

        <!-- Simulated Video Stage & Interactive Progress -->
        <div class="my-auto flex flex-col items-center justify-center text-center z-10 py-6">
          <div class="w-20 h-20 rounded-full bg-[#C6EB1A] text-[#081220] flex items-center justify-center shadow-2xl play-pulse mb-4">
            <svg class="w-9 h-9 translate-x-0.5 text-[#081220]" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
          <span class="text-xs font-black uppercase tracking-widest text-[#C6EB1A] px-3 py-1 rounded-full bg-black/60 border border-[#C6EB1A]/40">
            Playing Reel Preview
          </span>
          <div class="w-full max-w-[200px] h-1.5 bg-slate-700 rounded-full overflow-hidden mt-4">
            <div class="h-full bg-[#C6EB1A] rounded-full animate-pulse" style="width: 72%;"></div>
          </div>
          <div class="flex items-center justify-between w-full max-w-[200px] text-[10px] text-slate-300 mt-1 font-mono">
            <span>0:18</span>
            <span>${reel.duration}</span>
          </div>
        </div>

        <!-- Reel Meta Info & Instagram Link -->
        <div class="z-10 space-y-3 pb-2 bg-gradient-to-t from-black/90 via-black/50 to-transparent -mx-6 -mb-6 p-6">
          <h3 class="text-sm sm:text-base font-bold text-white font-heading">${reel.title}</h3>
          <p class="text-xs text-slate-300 line-clamp-2">${reel.description}</p>
          
          <div class="flex flex-wrap gap-1.5 pt-1">
            ${reel.tags.map(t => `<span class="text-[10px] px-2 py-0.5 rounded bg-[#0E4B8A]/60 text-slate-200 border border-[#0E4B8A]">${t}</span>`).join('')}
          </div>

          <div class="flex items-center justify-between pt-2 border-t border-white/10 text-xs">
            <div class="flex items-center gap-4 text-slate-300">
              <span class="text-[#C6EB1A] font-bold">${reel.views} Views</span>
              <span>♥ ${reel.likes}</span>
              <span>↗ ${reel.shares}</span>
            </div>
            <a href="https://www.instagram.com/fullpocketcreations/" target="_blank" class="btn-lime px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-lg">
              <span>Watch on IG</span>
              <svg class="w-3.5 h-3.5 text-[#081220]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          </div>
        </div>
      </div>
    `;

    reelModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeReelModal() {
    if (!reelModal) return;
    reelModal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  // Attach reel click triggers
  document.querySelectorAll('.open-reel-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const reelId = btn.getAttribute('data-reel-id');
      openReelModal(reelId);
    });
  });

  if (reelCloseBtn) reelCloseBtn.addEventListener('click', closeReelModal);
  if (reelBackdrop) reelBackdrop.addEventListener('click', closeReelModal);

  // --- Poster Lightbox Modal ---
  const posterModal = document.getElementById('poster-modal');
  const posterBackdrop = document.getElementById('poster-backdrop');
  const posterCloseBtn = document.getElementById('poster-close-btn');
  const posterModalContent = document.getElementById('poster-modal-content');

  function openPosterModal(posterId) {
    const poster = postersData.find(p => p.id === posterId);
    if (!poster || !posterModal || !posterModalContent) return;

    posterModalContent.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Poster Art Container -->
        <div class="rounded-2xl p-6 bg-[#060F1A] border-2 border-[#0E4B8A] shadow-2xl relative overflow-hidden aspect-poster flex flex-col justify-between text-center">
          <div class="border-b border-[#0E4B8A]/50 pb-3">
            <span class="text-[9px] uppercase tracking-widest text-[#C6EB1A] font-bold block">${poster.client}</span>
            <h4 class="text-xl font-black text-white font-heading mt-1">${poster.title}</h4>
          </div>

          <div class="my-auto py-6">
            <div class="w-16 h-16 rounded-full bg-[#0E4B8A]/40 border-2 border-[#C6EB1A] mx-auto flex items-center justify-center text-[#C6EB1A] mb-3">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            </div>
            <div class="text-xs font-bold text-slate-300">High-Resolution Visual Key Art</div>
            <div class="text-[10px] text-slate-400 mt-1 font-mono">${poster.dimensions}</div>
          </div>

          <div class="pt-3 border-t border-[#0E4B8A]/50 flex items-center justify-between text-[10px] text-slate-400">
            <span>Official Client Asset</span>
            <span class="text-[#C6EB1A] font-bold font-mono">Full Pocket Studio</span>
          </div>
        </div>

        <!-- Poster Details & Specifications -->
        <div class="space-y-5">
          <div>
            <span class="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#C6EB1A]/15 text-[#C6EB1A] border border-[#C6EB1A]/30 mb-2">
              ${poster.format}
            </span>
            <h3 class="text-2xl font-bold text-white font-heading">${poster.title}</h3>
            <p class="text-xs text-slate-400 mt-1 font-mono">Client: ${poster.client}</p>
          </div>

          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">Design Brief & Direction</h4>
            <p class="text-slate-300 text-sm leading-relaxed">${poster.brief}</p>
          </div>

          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Color Palette Swatches</h4>
            <div class="flex items-center gap-2">
              ${poster.colors.map(c => `
                <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0E2038] border border-[#0E4B8A]/40">
                  <div class="w-3.5 h-3.5 rounded-full border border-white/20" style="background-color: ${c};"></div>
                  <span class="text-[10px] font-mono text-slate-300">${c}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Design Capabilities</h4>
            <div class="flex flex-wrap gap-1.5">
              ${poster.capabilities.map(cap => `
                <span class="text-[11px] px-2.5 py-0.5 rounded-md bg-[#0A1A30] text-slate-300 border border-[#0E4B8A]/40">${cap}</span>
              `).join('')}
            </div>
          </div>

          <div class="pt-4 border-t border-[#0E4B8A]/40 flex items-center justify-between">
            <span class="text-xs text-slate-400">Need custom brand posters?</span>
            <a href="#contact" onclick="closePosterModal()" class="btn-lime px-5 py-2.5 rounded-xl font-bold text-xs">
              Order Poster Package
            </a>
          </div>
        </div>
      </div>
    `;

    posterModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closePosterModal() {
    if (!posterModal) return;
    posterModal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  // Attach poster click triggers
  document.querySelectorAll('.open-poster-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const posterId = btn.getAttribute('data-poster-id');
      openPosterModal(posterId);
    });
  });

  if (posterCloseBtn) posterCloseBtn.addEventListener('click', closePosterModal);
  if (posterBackdrop) posterBackdrop.addEventListener('click', closePosterModal);

  // Close any open modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (reelModal && !reelModal.classList.contains('hidden')) closeReelModal();
      if (posterModal && !posterModal.classList.contains('hidden')) closePosterModal();
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
