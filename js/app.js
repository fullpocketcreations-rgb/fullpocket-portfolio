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
      tagline: 'Complete visual identity revamp, signature event visuals, and campaign creative direction',
      client: 'Seven Bells',
      timeline: '4 Weeks Sprint',
      overview: 'Seven Bells partnered with Full Pocket Creations to craft an unforgettable brand identity and comprehensive design system spanning digital assets, multi-format promotional collateral, print assets, and event visual kits.',
      challenge: 'Outdated branding failed to reflect the premium, energetic atmosphere of modern entertainment & event experiences.',
      solution: 'Designed an evocative luxury dark-mode brand guidelines book, typography assets, promotional campaign visuals, and high-contrast digital marketing collateral.',
      results: [
        { label: 'Campaign Reach', value: '250K+' },
        { label: 'Ticket / Booking Rate', value: '+190%' },
        { label: 'Social Mentions', value: '15K+' }
      ],
      tags: ['Brand Identity', 'Visual Design', 'Event Visuals', 'Art Direction']
    },
    {
      id: 'proj-4',
      title: 'Jerusalem Bus Body Builders — Industrial Media & Social Growth',
      category: 'consultancy',
      categoryName: 'Brand Strategy & Media Production',
      tagline: 'Industrial media production, dynamic showcase films, and full social media page handling',
      client: 'Jerusalem Bus Body Builders (Kanjoor, Puthukkad, Thrissur)',
      timeline: 'Monthly Content Retainer',
      overview: 'Full Pocket Creations manages creative media production and digital growth for Jerusalem Bus Body Builders, delivering specialized industrial vehicle shoots, high-definition video content, and comprehensive social media channel management.',
      challenge: 'Translating heavy industrial craftsmanship into compelling, high-reach digital video content that drives transport fleet contracts.',
      solution: 'Executed cinematic on-site production shoots, developed high-engagement showcase films, and took over end-to-end social media page distribution.',
      results: [
        { label: 'Audience Reach', value: '185K+' },
        { label: 'Contract Inquiries', value: '+140%' },
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
      title: 'Jyothi Nivas Public School — Campus Media & Admissions Campaign',
      category: 'ads',
      categoryName: 'Video Production & Campus Media',
      tagline: 'Professional on-location campus video shoots, admissions reels, and annual highlight film',
      client: 'Jyothi Nivas Public School (Aluva, Kerala)',
      timeline: 'Multi-Phase Media Retainer',
      overview: 'Full Pocket Creations spearheaded the complete digital media production for Jyothi Nivas Public School, executing professional on-location video shoots across campuses, producing dynamic vertical reels, and crafting an annual school highlight film.',
      challenge: 'Modernizing institutional communications to engage prospective parents on Instagram with vibrant campus culture and academic highlights.',
      solution: 'Conducted scheduled multi-camera shoots, produced energetic student & faculty reels, and edited a flagship campus highlight film deployed for admissions outreach.',
      results: [
        { label: 'Admissions Inquiries', value: '+165%' },
        { label: 'Audience Reach', value: '310K+' },
        { label: 'Parent Engagement', value: '+190%' }
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
        { label: 'Showroom Footfall', value: '+135%' }
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

  // --- Creative Works Data (Real Reels & Posters from "rells and posts") ---
  const reelsData = [
    {
      id: 'reel-1',
      client: 'Infinity Groom',
      title: 'Luxury Groom Styling & Wedding Tuxedo Transitions',
      duration: '0:42',
      views: '850K+',
      likes: '32.4K',
      shares: '8.2K',
      videoSrc: 'rells and posts/INFINITY_REEL_01.mp4',
      audio: 'Original Audio — Full Pocket Audio Lab',
      description: 'Cinematic on-location fashion shoot capturing bespoke wedding tuxedo tailoring, fabric textures, and fast-paced styling transitions.',
      tags: ['Fashion Shoot', 'Luxury Tailoring', 'Reels Direction', 'Wedding Concept']
    },
    {
      id: 'reel-2',
      client: '1st Step Baby Shop',
      title: 'Panampilly Nagar Store Grand Opening & Influencer Walkthrough',
      duration: '0:38',
      views: '450K+',
      likes: '19.6K',
      shares: '4.8K',
      videoSrc: 'rells and posts/1ST STEP P.PILLY REEL 01.mp4',
      audio: 'Creator Audio — 1st Step Launch',
      description: 'High-energy creator walkthrough across the flagship Panampilly Nagar store, spotlighting toddler couture, strollers, and nursery essentials.',
      tags: ['Store Walkthrough', 'Influencer Marketing', 'Retail Growth', 'Kochi']
    },
    {
      id: 'reel-3',
      client: 'Jerusalem Bus Body Builders',
      title: 'Workshop Fabrication & Heavy Chassis Engineering',
      duration: '0:32',
      views: '210K+',
      likes: '16.2K',
      shares: '5.1K',
      videoSrc: 'rells and posts/JERUSALEM REEL 04.mp4',
      audio: 'Heavy Industrial Bass & Sound Design',
      description: 'Industrial craftsmanship film spotlighting steel structural fabrication, precision welding, and aerodynamic chassis building at the Puthukkad workshop.',
      tags: ['Industrial Media', 'Vehicle Fabrication', 'Heavy Engineering', 'Commercial Shoots']
    },
    {
      id: 'reel-4',
      client: 'KR Furniture Studio',
      title: 'Modern Teak Woodcraft & Showroom Living Walkthrough',
      duration: '0:35',
      views: '320K+',
      likes: '14.8K',
      shares: '3.9K',
      videoSrc: 'rells and posts/KR FURNITURE REEL_03.mp4',
      audio: 'Aesthetic Chillhop Beats',
      description: 'Cinematic studio walkthrough capturing luxury custom living room setups, grain textures, and hand-finished teak wood furniture.',
      tags: ['Interior Video', 'Teak Woodcraft', 'Showroom Tour', 'Furniture Reels']
    },
    {
      id: 'reel-5',
      client: 'Infinity Groom',
      title: 'Bespoke Men\'s Styling & Royal Wedding Collection',
      duration: '0:30',
      views: '490K+',
      likes: '22.5K',
      shares: '6.3K',
      videoSrc: 'rells and posts/INFINITI REEL  02.mp4',
      audio: 'Trending Audio — Royal Groom Beats',
      description: 'Luxury bridal & groom shoot featuring designer sherwanis, precision silhouettes, and royal wedding aesthetics across Kerala.',
      tags: ['Bridal & Groom', 'Men\'s Fashion', 'Trend Audio', 'Statewide Reach']
    },
    {
      id: 'reel-6',
      client: '1st Step Baby Shop',
      title: 'Vennala Store Walkthrough & Toddler Couture Showcase',
      duration: '0:40',
      views: '380K+',
      likes: '17.4K',
      shares: '4.2K',
      videoSrc: 'rells and posts/1ST STEP VENNALA  02.mp4',
      audio: 'Happy Lifestyle Beats',
      description: 'Vibrant retail showcase reel capturing baby care ranges, toddler play gear, and customer experience at the Vennala Kochi branch.',
      tags: ['Vennala Branch', 'Retail Shoot', 'Baby Couture', 'Social Reach']
    },
    {
      id: 'reel-7',
      client: 'Jerusalem Bus Body Builders',
      title: 'Finished Highway Cruiser Coach Delivery & Road Showcase',
      duration: '0:28',
      views: '260K+',
      likes: '18.9K',
      shares: '7.4K',
      videoSrc: 'rells and posts/JERUSALEM REEL 06.MP4',
      audio: 'Highway Cruiser Soundtrack',
      description: 'Dynamic highway showcase film highlighting multi-axle luxury tourist coaches with custom interior ambient lighting and aerodynamic styling.',
      tags: ['Highway Cruiser', 'Coach Delivery', 'Automotive Video', 'Viral Reach']
    },
    {
      id: 'reel-8',
      client: 'KR Furniture Studio',
      title: 'Custom Sofa Craftsmanship & Dining Collection',
      duration: '0:36',
      views: '290K+',
      likes: '12.6K',
      shares: '3.1K',
      videoSrc: 'rells and posts/KR FURNITURE REEL_04.mp4',
      audio: 'Smooth Interior Score',
      description: 'Sensory macro shots capturing upholstery detailing, ergonomic dining craftsmanship, and contemporary home decor in Thrissur.',
      tags: ['Custom Sofas', 'Dining Sets', 'Macro Video', 'Showroom Sales']
    },
    {
      id: 'reel-9',
      client: '1st Step Baby Shop',
      title: 'Daily Baby Essentials & Infant Care Spotlight',
      duration: '0:26',
      views: '310K+',
      likes: '15.1K',
      shares: '3.6K',
      videoSrc: 'rells and posts/1ST STEP P.PILLY REEL 03.mp4',
      audio: 'Gentle Parenting Audio',
      description: 'Engaging mobile-first vertical reel highlighting daily baby essentials, organic cotton wear, and parental comfort items.',
      tags: ['Baby Essentials', 'Mobile-First', 'Panampilly Nagar', 'Creator Reels']
    },
    {
      id: 'reel-10',
      client: 'Jerusalem Bus Body Builders',
      title: 'Precision Spray Painting & Neon Ambient Lighting',
      duration: '0:30',
      views: '240K+',
      likes: '15.8K',
      shares: '5.9K',
      videoSrc: 'rells and posts/JERUSALEM REEL 05.mp4',
      audio: 'Workshop Electro Bass',
      description: 'Sleek behind-the-scenes production footage featuring automated spray painting booths, custom body graphics, and neon cockpit installations.',
      tags: ['Spray Paint Booth', 'Neon Lighting', 'Workshop BTS', 'Fleet Production']
    }
  ];

  const postersData = [
    {
      id: 'poster-1',
      client: 'Seven Bells Music Academy',
      title: 'Vidyarambham Classical Music & Arts Admissions',
      category: 'Academy Admissions',
      format: '3:4 Print & Social Poster',
      brief: 'Bespoke festive admissions poster for Trinity College London affiliated Seven Bells Music Academy in Irinjalakuda, featuring traditional Vidyarambham instruments and vocal arts in warm golden hues.',
      dimensions: '1080 x 1440 px',
      imageSrc: 'rells and posts/WhatsApp Image 2026-10-15 at 3.15.57 PM.jpeg',
      colors: ['#D4AF37', '#1E120A', '#F5EBE1', '#0E4B8A'],
      capabilities: ['Art Direction', 'Cultural Typography', 'Photo Retouching', 'Print Collateral']
    },
    {
      id: 'poster-2',
      client: 'Dream Gym Family Fitness Centre',
      title: 'Dasan & Vijayan Malayalam Pop-Culture Meme Campaign',
      category: 'Viral Social Meme',
      format: '3:4 Instagram Feed & Story',
      brief: 'High-engagement Malayalam cinema pop-culture illustration turning everyday fitness excuses into viral social banter for Dream Gym Family Fitness Centre.',
      dimensions: '1080 x 1440 px',
      imageSrc: 'rells and posts/WhatsApp Image 2026-10-16 at 2.56.10 PM.jpeg',
      colors: ['#0E141D', '#F4C542', '#E1251B', '#FFFFFF'],
      capabilities: ['Pop Culture Humor', 'Character Illustration', 'Viral Copywriting', 'Social Engagement']
    },
    {
      id: 'poster-3',
      client: 'Dream Gym Family Fitness Centre',
      title: 'Ayudha Pooja Festive Fitness Motivation',
      category: 'Festive Campaign',
      format: '3:4 Instagram Feed & Gym Display',
      brief: 'Cinematic back-lit fitness creative connecting sacred Ayudha Pooja discipline with daily bodybuilding and wellness dedication at Dream Gym.',
      dimensions: '1080 x 1440 px',
      imageSrc: 'rells and posts/WhatsApp Image 2026-10-19 at 1.58.05 PM.jpeg',
      colors: ['#181A12', '#FFAE00', '#E52D27', '#EBEBEB'],
      capabilities: ['Lighting Direction', 'Brush Typography', 'Festival Creative', 'Brand Positioning']
    },
    {
      id: 'poster-4',
      client: 'Sree Bhadra Furniture Palace',
      title: 'Vijayadashami Heritage Woodcraft & Blessings',
      category: 'Heritage Branding',
      format: '3:4 Festival Print & Digital Ad',
      brief: 'Rich crimson cultural branding for Sree Bhadra Furniture Palace (Ayoor & Anchal) celebrating the timeless bond between generations and handcrafted furniture heritage.',
      dimensions: '1080 x 1440 px',
      imageSrc: 'rells and posts/WhatsApp Image 2026-10-19 at 12.47.02 PM.jpeg',
      colors: ['#881D27', '#E0F075', '#D4AF37', '#FDF8F2'],
      capabilities: ['Cultural Storytelling', 'Malayalam Calligraphy', 'Emotional Branding', 'Print Ad']
    },
    {
      id: 'poster-5',
      client: 'CEA The Automation Experts',
      title: 'Vijayadashami Smart Touch Automation Poster',
      category: 'Smart Tech Media',
      format: '3:4 Architectural Tech Poster',
      brief: 'Minimalist luxury smart home creative spotlighting digital temperature and light controls harmonized with traditional festival warmth for CEA The Automation Experts.',
      dimensions: '1080 x 1440 px',
      imageSrc: 'rells and posts/WhatsApp Image 2026-10-19 at 3.31.38 PM.jpeg',
      colors: ['#D1BBA3', '#2D2D2D', '#D96B27', '#0E4B8A'],
      capabilities: ['Tech Minimalism', 'Product Compositing', 'Luxury Tech Copy', 'Brand Identity']
    },
    {
      id: 'poster-6',
      client: '1st Step Baby Shop',
      title: 'Aloe Vera Baby Wipes Commercial Product Campaign',
      category: 'Product Ad Creative',
      format: '3:4 Commercial Ad Creative',
      brief: 'Clean, dermatologically-focused product campaign poster for 1st Step Baby Shop (Vennala, Kochi) highlighting natural aloe vera extracts, zero alcohol, and pure hydration.',
      dimensions: '1080 x 1440 px',
      imageSrc: 'rells and posts/WhatsApp Image 2026-10-21 at 1.32.43 PM.jpeg',
      colors: ['#00A896', '#FFA400', '#F0F9F8', '#333333'],
      capabilities: ['Commercial Product Design', 'Packaging Highlight', 'Trust Badges', 'Retail Marketing']
    },
    {
      id: 'poster-7',
      client: 'Urban Company',
      title: 'Machine-Powered Deep Clean Campaign (Malayalam)',
      category: 'Performance Ad Campaign',
      format: '1179 x 1587 px High-ROI Ad Creative',
      brief: 'Localized high-conversion service promotion ad for Urban Company tackling stubborn bathroom grime with high-speed machine polish technology and direct coupon code triggers.',
      dimensions: '1179 x 1587 px',
      imageSrc: 'rells and posts/WhatsApp Image 2026-10-21 at 12.35.02 PM.jpeg',
      colors: ['#6C5CE7', '#1D1D1D', '#55EFC4', '#FFFFFF'],
      capabilities: ['Direct Response Ad', 'Local Language Hook', 'Action Callout', 'High-Converting Layout']
    },
    {
      id: 'poster-8',
      client: 'Dream Gym Family Fitness Centre',
      title: 'Thoppumpady Branch Grand Opening Announcement',
      category: 'Branch Expansion',
      format: '3:4 High-Contrast Teaser Graphic',
      brief: 'Bold minimalist launch banner announcing Dream Gym\'s premier fitness expansion into Thoppumpady, connecting the established network across Kaloor and Kadavanthra.',
      dimensions: '1080 x 1440 px',
      imageSrc: 'rells and posts/WhatsApp Image 2026-10-21 at 12.51.12 PM.jpeg',
      colors: ['#070707', '#E52D27', '#0084FF', '#FAFA00'],
      capabilities: ['High-Impact Typography', 'Network Expansion', 'Geo-Targeting', 'Brand Consistency']
    },
    {
      id: 'poster-9',
      client: 'Dream Gym Family Fitness Centre',
      title: 'Murthy & Coach Comic Illustration Campaign',
      category: 'Character Illustration',
      format: '3:4 Comic Strip Art Poster',
      brief: 'Graphic novel style gym humor strip depicting the classic workout banter between a stunned trainer and comic lifter Murthy, generating massive organic shareability.',
      dimensions: '1080 x 1440 px',
      imageSrc: 'rells and posts/WhatsApp Image 2026-10-21 at 12.51.13 PM.jpeg',
      colors: ['#182333', '#FFAE00', '#FF4757', '#F1F2F6'],
      capabilities: ['Comic Illustration', 'Speech Bubble Copy', 'Pop Character Design', 'Viral Social Storytelling']
    },
    {
      id: 'poster-10',
      client: '1st Step Baby Shop',
      title: 'Gentle Care & Motherhood Product Campaign',
      category: 'Brand Photography & Ad',
      format: '3:4 Commercial Lifestyle Creative',
      brief: 'Heartfelt commercial product ad blending soft nursery lighting, maternal warmth, and natural cotton elements showcasing 1st Step\'s premium infant wipes line.',
      dimensions: '1080 x 1440 px',
      imageSrc: 'rells and posts/WhatsApp Image 2026-10-21 at 3.09.47 PM.jpeg',
      colors: ['#00A896', '#FFA400', '#F8F6F0', '#4A4A4A'],
      capabilities: ['Lifestyle Ad Design', 'Warm Editorial Tone', 'Feature Highlighting', 'Parenting Trust']
    },
    {
      id: 'poster-11',
      client: 'Seven Bells Music Academy',
      title: 'From Small Steps to Great Musical Dreams',
      category: 'Classical Academy Admissions',
      format: '3:4 Classical Music Academy Poster',
      brief: 'Trinity College London accredited youth enrollment poster for Seven Bells Academy in Irinjalakuda, spotlighting vocal, violin, and tabla students on their musical journey.',
      dimensions: '1080 x 1440 px',
      imageSrc: 'rells and posts/WhatsApp Image 2026-10-22 at 11.35.35 AM.jpeg',
      colors: ['#6BBF2B', '#1C2818', '#FAF6EE', '#0E4B8A'],
      capabilities: ['Malayalam 3D Typography', 'Classical Art Direction', 'Aesthetic Retouching', 'Print Production']
    },
    {
      id: 'poster-12',
      client: 'Jerusalem Bus Body Builders',
      title: 'Industrial Tourist Bus Fleet Panorama Showcase',
      category: 'Automotive Industrial Banner',
      format: '1080 x 477 px 3-Grid Instagram Showcase Banner',
      brief: 'Cinematic 3-grid Instagram hero panorama showcasing Jerusalem Bus Body Builders\' flagship tourist cruiser coaches lined up at the Kanjoor Puthukkad workshop.',
      dimensions: '1080 x 477 px',
      imageSrc: 'rells and posts/WhatsApp Image 2026-10-22 at 2.08.15 PM.jpeg',
      colors: ['#0E1117', '#E53E3E', '#A0AEC0', '#FFFFFF'],
      capabilities: ['3D Chrome Lettering', 'Multi-Vehicle Compositing', 'Atmospheric Fog & Lighting', 'Fleet Branding']
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
      const allCards = document.querySelectorAll('.work-card');
      allCards.forEach(card => {
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
      <div class="relative bg-black aspect-reel flex flex-col justify-between overflow-hidden rounded-[32px] max-h-[88vh]">
        <!-- Top phone status & header overlay -->
        <div class="absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-black/90 via-black/50 to-transparent z-20 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-full bg-[#0E4B8A] border border-[#C6EB1A] flex items-center justify-center font-bold text-xs text-[#C6EB1A]">
              FP
            </div>
            <div>
              <div class="text-xs font-bold text-white flex items-center gap-1">
                @fullpocketcreations
                <svg class="w-3.5 h-3.5 text-blue-400 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              </div>
              <div class="text-[10px] text-slate-300">${reel.client}</div>
            </div>
          </div>
          <span class="text-[10px] font-mono text-[#C6EB1A] bg-[#081220]/80 px-2 py-0.5 rounded border border-[#C6EB1A]/40 mr-8">
            ${reel.views} Views
          </span>
        </div>

        <!-- Real HTML5 Video Player -->
        <div class="w-full h-full flex-1 flex items-center justify-center bg-black min-h-[460px]">
          <video id="active-reel-video" src="${reel.videoSrc}" controls autoplay playsinline loop class="w-full h-full object-cover bg-black"></video>
        </div>

        <!-- Reel Meta Info & Instagram Link -->
        <div class="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black via-black/85 to-transparent z-20 space-y-2.5">
          <h3 class="text-sm font-bold text-white font-heading">${reel.title}</h3>
          <p class="text-xs text-slate-300 line-clamp-2">${reel.description}</p>
          
          <div class="flex flex-wrap gap-1.5 pt-1">
            ${reel.tags.map(t => `<span class="text-[10px] px-2 py-0.5 rounded bg-[#0E4B8A]/70 text-slate-200 border border-[#0E4B8A]">${t}</span>`).join('')}
          </div>

          <div class="flex items-center justify-between pt-2 border-t border-white/10 text-xs">
            <div class="flex items-center gap-3 text-slate-300">
              <span class="text-[#C6EB1A] font-bold">${reel.views}</span>
              <span>♥ ${reel.likes}</span>
              <span>↗ ${reel.shares}</span>
            </div>
            <a href="https://www.instagram.com/fullpocketcreations/" target="_blank" class="btn-lime px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-lg">
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
    const activeVideo = document.getElementById('active-reel-video');
    if (activeVideo) {
      activeVideo.pause();
      activeVideo.src = '';
    }
    reelModal.classList.add('hidden');
    document.body.style.overflow = '';
  }

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
        <!-- High-Resolution Real Poster Image Container -->
        <div class="rounded-2xl p-2 bg-black/60 border border-[#0E4B8A]/50 shadow-2xl flex items-center justify-center">
          <img src="${poster.imageSrc}" alt="${poster.title}" class="max-h-[70vh] w-auto object-contain rounded-xl shadow-2xl" />
        </div>

        <!-- Poster Details & Specifications -->
        <div class="space-y-5">
          <div>
            <span class="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#C6EB1A]/15 text-[#C6EB1A] border border-[#C6EB1A]/30 mb-2">
              ${poster.category}
            </span>
            <h3 class="text-2xl font-bold text-white font-heading">${poster.title}</h3>
            <p class="text-xs text-slate-400 mt-1 font-mono">Client: ${poster.client}</p>
          </div>

          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">Design Brief & Creative Direction</h4>
            <p class="text-slate-300 text-sm leading-relaxed">${poster.brief}</p>
          </div>

          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Color Palette Swatches</h4>
            <div class="flex flex-wrap items-center gap-2">
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
            <span class="text-xs text-slate-400">Resolution: <span class="font-mono text-slate-300">${poster.dimensions}</span></span>
            <a href="#contact" onclick="closePosterModal()" class="btn-lime px-5 py-2.5 rounded-xl font-bold text-xs">
              Order Custom Posters
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

  if (posterCloseBtn) posterCloseBtn.addEventListener('click', closePosterModal);
  if (posterBackdrop) posterBackdrop.addEventListener('click', closePosterModal);

  // Global event delegation for modal triggers (reels and posters)
  document.addEventListener('click', (e) => {
    const reelBtn = e.target.closest('.open-reel-btn');
    if (reelBtn) {
      e.preventDefault();
      const reelId = reelBtn.getAttribute('data-reel-id');
      openReelModal(reelId);
      return;
    }

    const posterBtn = e.target.closest('.open-poster-btn');
    if (posterBtn) {
      e.preventDefault();
      const posterId = posterBtn.getAttribute('data-poster-id');
      openPosterModal(posterId);
      return;
    }
  });

  // Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (reelModal && !reelModal.classList.contains('hidden')) closeReelModal();
      if (posterModal && !posterModal.classList.contains('hidden')) closePosterModal();
    }
  });

  // Desktop Hover Video Preview on Reel Cards
  document.querySelectorAll('.work-card[data-work-type="reels"]').forEach(card => {
    const video = card.querySelector('video');
    if (video) {
      card.addEventListener('mouseenter', () => {
        video.play().catch(() => {});
      });
      card.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
      });
    }
  });

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

  // --- Contact Form Submission, Email Dispatch (FormSubmit) & WhatsApp Connect ---
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast');
  const toastTitle = document.getElementById('toast-title');
  const toastMessage = document.getElementById('toast-message');
  const toastActionContainer = document.getElementById('toast-action-container');
  const toastActionBtn = document.getElementById('toast-action-btn');
  const inquiryStatusBox = document.getElementById('inquiry-status-box');
  const directWaLink = document.getElementById('direct-wa-link');

  let toastTimer = null;

  function showToast(message, isSuccess = true, waUrl = null) {
    if (!toast) return;
    if (toastTimer) clearTimeout(toastTimer);

    if (toastTitle) {
      toastTitle.textContent = isSuccess ? 'Inquiry Dispatched' : 'Notification';
    }
    if (toastMessage) {
      toastMessage.textContent = message;
    }

    if (waUrl && toastActionContainer && toastActionBtn) {
      toastActionBtn.href = waUrl;
      toastActionContainer.classList.remove('hidden');
    } else if (toastActionContainer) {
      toastActionContainer.classList.add('hidden');
    }

    toast.classList.remove('hidden', 'translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    if (isSuccess) {
      toast.classList.remove('border-red-500', 'bg-red-950/90');
      toast.classList.add('border-[#C6EB1A]/50', 'bg-[#0A1A30]/95');
    } else {
      toast.classList.add('border-red-500', 'bg-red-950/90');
      toast.classList.remove('border-[#C6EB1A]/50', 'bg-[#0A1A30]/95');
    }

    toastTimer = setTimeout(() => {
      toast.classList.add('translate-y-20', 'opacity-0');
      setTimeout(() => toast.classList.add('hidden'), 300);
    }, 7000);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('user-name')?.value.trim();
      const brand = document.getElementById('user-brand')?.value.trim();
      const email = document.getElementById('user-email')?.value.trim();
      const phone = document.getElementById('user-phone')?.value.trim();
      const serviceSelect = document.getElementById('service-select');
      const service = serviceSelect ? (serviceSelect.options[serviceSelect.selectedIndex]?.text || serviceSelect.value) : '';
      const budgetSelect = document.getElementById('budget-select');
      const budget = budgetSelect ? (budgetSelect.options[budgetSelect.selectedIndex]?.text || budgetSelect.value) : '';
      const message = document.getElementById('user-message')?.value.trim();

      if (!name || !email || !message) {
        showToast('Please fill in your name, email, and project message.', false);
        return;
      }

      // Format WhatsApp Message with full client inquiry details
      const waMessage = 
        `🔥 *New Project Inquiry — Full Pocket Creations*\n\n` +
        `👤 *Name:* ${name}\n` +
        `🏢 *Brand:* ${brand || 'Not specified'}\n` +
        `📧 *Email:* ${email}\n` +
        `📱 *Phone:* ${phone || 'Not specified'}\n` +
        `🎯 *Service:* ${service}\n` +
        `💰 *Budget:* ${budget}\n\n` +
        `📝 *Project Brief:*\n${message}`;

      const waUrl = `https://wa.me/919778799063?text=${encodeURIComponent(waMessage)}`;

      // Update submit button UI with loading animation
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-[#081220] inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        Sending &amp; Connecting WhatsApp...
      `;

      // 1. Dispatch formatted inquiry directly to Gmail via FormSubmit AJAX endpoint
      fetch('https://formsubmit.co/ajax/fullpocketcreations@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Project Inquiry from ${name} (${brand || 'Full Pocket'})`,
          _template: 'table',
          _captcha: 'false',
          'Client Name': name,
          'Brand / Business': brand || 'N/A',
          'Email Address': email,
          'Phone / WhatsApp': phone || 'N/A',
          'Primary Service': service,
          'Budget Range': budget,
          'Project Brief': message
        })
      })
      .then(res => res.json())
      .catch(err => {
        console.log('Dispatch notification note:', err);
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();

        // 2. Reveal in-page confirmation box with direct WhatsApp link
        if (inquiryStatusBox) {
          inquiryStatusBox.classList.remove('hidden');
          if (directWaLink) directWaLink.href = waUrl;
        }

        // 3. Show Interactive Toast Notification with WhatsApp button
        showToast(`Thank you, ${name}! Your inquiry has been emailed to fullpocketcreations@gmail.com and is opening on WhatsApp.`, true, waUrl);

        // 4. Automatically open WhatsApp chat in new tab
        window.open(waUrl, '_blank');
      });
    });
  }
});
