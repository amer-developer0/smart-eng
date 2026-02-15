// بسم الله الرحمن الرحيم
import svData from './sectors.json' with { type: 'json' };
// ============================================================================
// Current page
const body = document.querySelector("body");
let currentPage = body.getAttribute("id");
const pagesMap = {
    "home-page": "index.html",
    "services-page": "services.html",
    "how-we-work-page": "how_we_work.html",
    "about-page": "about.html",
    "contact-page": "contact.html"
};
const currentFile = pagesMap[currentPage] || "فشل العثور على الصفحه";
// ------------------- Header & Footer & Mobile Menu ------------------------
let pathType, pathType2;
if (currentFile === "services.html"){[pathType, pathType2] = ["../", ""]} else {[pathType, pathType2] = ["", "services-page/"]};
const headerCode = `
<header id="main-header" role="banner">
    <button id="hamburger_menu_btn" aria-label="Open main menu">
        <i class="fa-solid fa-bars" aria-hidden="true"></i>
    </button>
    <a href="${pathType}index.html" class="header-logo" aria-label="Smart-eng Logo"> <img src="${pathType}assets/images/logo/header-logo.webp"
            alt="Smart-eng Logo"></a>
    <nav class="header-nav">
        <ul class="header-nav-list">
            <li><a href="${pathType}index.html" class="header-nav-link header-home-page" aria-label="Home">Home</a></li>
            <li>
                <a href="${pathType2}services.html" class="header-nav-link header-services-page" aria-label="Services">Services
                    <i class="fa-solid fa-chevron-down" id="menu-serv-open"></i><i class="fa-solid fa-chevron-up" id="menu-serv-closed"></i>
                </a>
                <ul id="servicesDropdownMenu">
                    <li><a href="${pathType2}services.html?sector=general_manufacturing" class="manufacturingLink servicesDropdownMenu-link">Manufacturing</a></li>
                    <li><a href="${pathType2}services.html?sector=food_industry" class="foodBeverageLink servicesDropdownMenu-link">Food & Beverage</a></li>
                    <li><a href="${pathType2}services.html?sector=oil_gas" class="oilGasLink servicesDropdownMenu-link">Oil & Gas</a></li>
                    <li><a href="${pathType2}services.html?sector=material_handling" class="materialHandlingLink servicesDropdownMenu-link">Material Handling</a></li>
                    <li><a href="${pathType2}services.html?sector=heavy_industry" class="constructionHeavyLink servicesDropdownMenu-link">Construction & Heavy Industry</a></li>
                    <li><a href="${pathType2}services.html?sector=agro_industry" class="agricultureAgroLink servicesDropdownMenu-link">Agriculture & Agro-Industry</a></li>
                </ul>
            </li>
            <li><a href="${pathType}how_we_work.html" class="header-nav-link header-how-we-work-page" aria-label="How We Work?">How
                    We Work</a></li>
            <li><a href="${pathType}about.html" class="header-nav-link header-about-page" aria-label="About Us">About Us</a></li>
            <li><a href="${pathType}contact.html" class="header-nav-link-contact" aria-label="Contact Us">Contact Us<i
                        class="fa-solid fa-handshake contact-icon"></i></a></li>
        </ul>
    </nav>
</header>
`;
const mobileMenuCode = `
<aside id="mobile_sidebar">
    <a href="${pathType}index.html" class="header-logo" aria-label="Smart-eng Logo">
        <img src="${pathType}assets/images/logo/header-logo.webp" alt="Smart-eng Logo">
    </a>
    <button id="hamburger-menu-closed-btn" aria-label="Close main menu">
        <i class="fa-solid fa-xmark" aria-hidden="true"></i>
    </button>
    <nav class="mobile-nav">
        <ul class="mobile-nav-list">
            <li> <a href="${pathType}index.html" class="mobile-nav-link mobile-home-page" aria-label="Home">Home</a></li>
            <li> <a href="${pathType2}services.html" class="mobile-nav-link mobile-services-page" aria-label="Services">Service</a></li>
            <li> <a href="${pathType}how_we_work.html" class="mobile-nav-link mobile-how-we-work-page" aria-label="How We Work?">How We Work</a></li>
            <li> <a href="${pathType}about.html" class="mobile-nav-link mobile-about-page" aria-label="About Us">About Us</a></li>
        </ul>
    </nav>
    <a href="${pathType}contact.html" class="mobile-contact-btn" aria-label="Contact Us">Contact Us</a>
</aside>

`;
const footerCode = `
<footer class="main-footer">
    <div class="company">
        <a href="${pathType}index.html" class="footer-logo"><img src="${pathType}assets/images/logo/footer-logo.webp"
                alt="Smart-eng Logo"></a>
        <p class="footer-p">Engineering solutions for industrial systems, production lines, and turnkey plants.</p>
        <div class="footer-cta">
            <p class="footer-cta-p">Have a project in mind?</p>
            <a href="${pathType}contact.html" class="footer-cta-btn">Contact Us</a>
        </div>
    </div>
    <div class="services">
        <ul class="footer-serv-links">
            <li><a href="${pathType2}services.html">Mechanical Design</a></li>
            <li><a href="${pathType2}services.html">Turnkey Plant Engineering</a></li>
            <li><a href="${pathType2}services.html">Automation & Conveying</a></li>
            <li><a href="${pathType2}services.html">Factory Layout</a></li>
            <li><a href="${pathType2}services.html">Fabrication Support</a></li>
        </ul>
    </div>
    <div class="industries">
        <ul class="footer-ind-links">
            <li><a href="${pathType2}services.html">Manufacturing</a></li>
            <li><a href="${pathType2}services.html">Food & Beverage</a></li>
            <li><a href="${pathType2}services.html">Oil & Gas</a></li>
            <li><a href="${pathType2}services.html">Material Handling</a></li>
            <li><a href="${pathType2}services.html">Construction</a></li>
            <li><a href="${pathType2}services.html">Agriculture</a></li>
        </ul>
    </div>
    <div class="contact">
        <ul>
            <li>Email: info@smart-eng.com</li>
            <li>Phone: +201280787721</li>
            <li>Location: Egypt</li>
        </ul>
    </div>
    <p id="final">Copyright © 2025 Smart-ENG.</p>
</footer>
`;
// ============================================================================
const mainContent = document.querySelector('main');
mainContent.insertAdjacentHTML('beforebegin', headerCode);
mainContent.insertAdjacentHTML('beforebegin', mobileMenuCode);
mainContent.insertAdjacentHTML('afterend', footerCode);
const headerCurrentPageLink = document.querySelector(`.header-${currentPage}`);
const mobileCurrentPageLink = document.querySelector(`.mobile-${currentPage}`);
headerCurrentPageLink.classList.add('header-link-active');
mobileCurrentPageLink.classList.add('mobile-link-active');
/* ============================================================================
   MOBILE SIDEBAR FUNCTIONALITY
   Complete JavaScript for Opening/Closing Mobile Menu
   ============================================================================ */

// ============================================================================
// 1. CREATE OVERLAY ELEMENT
// ============================================================================

function createSidebarOverlay() {
  // تحقق إذا كان الـ overlay موجود مسبقاً
  if (document.querySelector('.sidebar-overlay')) return;
  
  const overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  overlay.setAttribute('aria-hidden', 'true');
  document.body.appendChild(overlay);
}

// ============================================================================
// 2. DOM ELEMENTS SELECTION
// ============================================================================

// انتظر تحميل DOM بالكامل
document.addEventListener('DOMContentLoaded', function() {
  
  // إنشاء الـ overlay
  createSidebarOverlay();
  
  // تحديد العناصر
  const hamburgerBtn = document.getElementById('hamburger_menu_btn');
  const closeSidebarBtn = document.getElementById('hamburger-menu-closed-btn');
  const mobileSidebar = document.getElementById('mobile_sidebar');
  const sidebarOverlay = document.querySelector('.sidebar-overlay');
  const body = document.body;
  
  // التحقق من وجود العناصر
  if (!hamburgerBtn || !closeSidebarBtn || !mobileSidebar || !sidebarOverlay) {
    console.error('Mobile sidebar elements not found!');
    return;
  }

  // ============================================================================
  // 3. OPEN SIDEBAR FUNCTION
  // ============================================================================
  
  function openSidebar() {
    mobileSidebar.classList.add('active');
    sidebarOverlay.classList.add('active');
    body.style.overflow = 'hidden'; // منع التمرير في الخلفية
    
    // تحديث ARIA attributes
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    mobileSidebar.setAttribute('aria-hidden', 'false');
    sidebarOverlay.setAttribute('aria-hidden', 'false');
    
    // Focus على زر الإغلاق
    closeSidebarBtn.focus();
  }

  // ============================================================================
  // 4. CLOSE SIDEBAR FUNCTION
  // ============================================================================
  
  function closeSidebar() {
    mobileSidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    body.style.overflow = ''; // إعادة التمرير
    
    // تحديث ARIA attributes
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    mobileSidebar.setAttribute('aria-hidden', 'true');
    sidebarOverlay.setAttribute('aria-hidden', 'true');
    
    // إعادة Focus لزر الفتح
    hamburgerBtn.focus();
  }

  // ============================================================================
  // 5. EVENT LISTENERS
  // ============================================================================
  
  // فتح القائمة عند النقر على زر الهامبرغر
  hamburgerBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    openSidebar();
  });
  
  // إغلاق القائمة عند النقر على زر X
  closeSidebarBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    closeSidebar();
  });
  
  // إغلاق القائمة عند النقر على الـ overlay
  sidebarOverlay.addEventListener('click', function() {
    closeSidebar();
  });
  
  // إغلاق القائمة عند النقر على أي رابط داخلها
  const mobileNavLinks = mobileSidebar.querySelectorAll('.mobile-nav-link, .mobile-contact-btn');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
      closeSidebar();
    });
  });

  // ============================================================================
  // 6. KEYBOARD NAVIGATION (ESC KEY)
  // ============================================================================
  
  document.addEventListener('keydown', function(e) {
    // إغلاق القائمة عند الضغط على ESC
    if (e.key === 'Escape' && mobileSidebar.classList.contains('active')) {
      closeSidebar();
    }
  });

  // ============================================================================
  // 7. TRAP FOCUS INSIDE SIDEBAR (ACCESSIBILITY)
  // ============================================================================
  
  function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', function(e) {
      if (e.key !== 'Tab') return;
      
      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    });
  }
  
  // تطبيق Trap Focus
  trapFocus(mobileSidebar);

  // ============================================================================
  // 8. CLOSE SIDEBAR ON WINDOW RESIZE (إذا تم فتحها ثم تم تكبير الشاشة)
  // ============================================================================
  
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      // إغلاق القائمة إذا كانت الشاشة أكبر من 768px
      if (window.innerWidth > 768 && mobileSidebar.classList.contains('active')) {
        closeSidebar();
      }
    }, 250);
  });

  // ============================================================================
  // 9. PREVENT BODY SCROLL WHEN SIDEBAR IS OPEN
  // ============================================================================
  
  mobileSidebar.addEventListener('touchmove', function(e) {
    // السماح بالتمرير داخل القائمة فقط
    e.stopPropagation();
  }, { passive: true });
  
  sidebarOverlay.addEventListener('touchmove', function(e) {
    // منع التمرير على الـ overlay
    e.preventDefault();
  }, { passive: false });

  // ============================================================================
  // 10. SMOOTH ANIMATION ON PAGE LOAD
  // ============================================================================
  
  // التأكد من أن القائمة مخفية عند تحميل الصفحة
  mobileSidebar.classList.remove('active');
  sidebarOverlay.classList.remove('active');
  body.style.overflow = '';
  hamburgerBtn.setAttribute('aria-expanded', 'false');
  mobileSidebar.setAttribute('aria-hidden', 'true');

  console.log('✅ Mobile Sidebar initialized successfully!');
});

// =======================Services Page & Sectors Page=====================================================
// دالة انشاء صفحة الخدمات الاساسيه 
function createServicesPage(){
    const servicesHeroSection = document.createElement('section');
    servicesHeroSection.id ='se-pg-hero';
    servicesHeroSection.innerHTML = `
    <div class="se-pg-hero-text">
        <h1>Engineering Services Across Multiple Industrial Sectors</h1>
        <p>We provide specialized mechanical engineering services across manufacturing, food & beverage, oil & gas, material
        handling, construction, and agro-industries — delivering efficient, reliable, and cost-optimized solutions.</p>
        <a href="#se-pg-sectors">Explore Industries</a>
    </div>
    `;
    mainContent.appendChild(servicesHeroSection);
    const servicesSectorsSection = document.createElement('section');
    servicesSectorsSection.id = 'se-pg-sectors';
    servicesSectorsSection.innerHTML = `
    <h2 class="se-pg-setion-title">Industries We Serve</h2>
    <p class="se-pg-setion-desc" >Select your industry to explore our engineering services and solutions.</p>
    `;
    mainContent.appendChild(servicesSectorsSection);
    const servicesCardContainer = document.createElement('div');
    servicesCardContainer.className = 'se-pg-card-container';
    servicesSectorsSection.appendChild(servicesCardContainer);
    for (let i = 1; i <7; i++){
        const sectorCardCode = `
        <div class="se-pg-sector-card">
            <img src = "${svData[`sector-${i}`][`imgLink`]}" alt = "${svData[`sector-${i}`]['sectorName']}">
            <h3>${svData[`sector-${i}`]['sectorName']}</h3>
            <p>${svData[`sector-${i}`]['shortDescription']}</p>
            <button class="sector-card-btn sector-card-${i}-btn">View Details</button>
        </div>
        `;
        servicesCardContainer.insertAdjacentHTML('beforeend', sectorCardCode);
        const sectorBTN = document.querySelector(`.sector-card-${i}-btn`);
        sectorBTN.addEventListener('click', () => sectorPageNavigation(i));
    };
};
// دالة انشاء صفحة قطاع معين
function createSectorPage(sectorNumber){
    document.title = `${svData[`sector-${sectorNumber}`]['pageTitle']}`;
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) { metaDescription.setAttribute("content", svData[`sector-${sectorNumber}`]['metaDescription']);}
    const sectorHeroSection = `
        <div class="sector-hero-section">
            <img src="${svData[`sector-${sectorNumber}`]['imgLink']}" alt="${svData[`sector-${sectorNumber}`]['sectorName']}">
            <div class="sector-hero-content">
                <h1>${svData[`sector-${sectorNumber}`]['sectorName']}</h1>
                <p>${svData[`sector-${sectorNumber}`]['shortDescription']}</p>
            </div>
        </div>
        `;
    mainContent.insertAdjacentHTML('afterbegin', sectorHeroSection);
    const sectorOverviewSection = `
        <section id="sector-${sectorNumber}-overview" class="sector-overview-section">
        <div class="sector-overview-container">
            <h2 class="sector-overview-title">${svData[`sector-${sectorNumber}`]["overview"]["title"]}</h2>
            <div class="sector-overview-content">
                <div class="sector-overview-text">
                    <p class="sector-overview-desc">${svData[`sector-${sectorNumber}`]["overview"]["description"]}</p>
                </div>
                <div class="sector-overview-features">
                    <ul class="sector-overview-list">
                        <li><i class="fa-solid fa-check"></i><span>${svData[`sector-${sectorNumber}`]["overview"]["focusAreas"][0]}</span></li>
                        <li><i class="fa-solid fa-check"></i><span>${svData[`sector-${sectorNumber}`]["overview"]["focusAreas"][1]}</span></li>
                        <li><i class="fa-solid fa-check"></i><span>${svData[`sector-${sectorNumber}`]["overview"]["focusAreas"][2]}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    `;
    mainContent.insertAdjacentHTML('beforeend', sectorOverviewSection);
    // === الخدمات والخطوات ===
    const sectorServicesSection = document.createElement('section');
    sectorServicesSection.id = `sector-${sectorNumber}-services`;
    sectorServicesSection.className = 'sector-services-section';
    sectorServicesSection.insertAdjacentHTML('afterbegin','<h2 class="sector-services-title">Engineering Services for This Sector</h2>');
    mainContent.insertAdjacentElement('beforeend', sectorServicesSection);

    const sectorProcessSection = document.createElement('section');
    sectorProcessSection.id = `sector-${sectorNumber}-process`;
    sectorProcessSection.className = 'sector-process-section';
    sectorProcessSection.insertAdjacentHTML('afterbegin', `<h2 class="sector-process-title">${svData[`sector-${sectorNumber}`]["process"]["title"]}</h2>`);
    mainContent.insertAdjacentElement('beforeend', sectorProcessSection);

    let servicesContainer = document.createElement('div');
    servicesContainer.className = `sector-services-container`;
    sectorServicesSection.appendChild(servicesContainer);

    let stepsContainer = document.createElement('div');
    stepsContainer.className = `sector-process-steps`;
    sectorProcessSection.appendChild(stepsContainer);

    for (let j = 1; j < 7; j++){
        const serviceItemCode = `
            <div class="sector-services-card">
                <i class="${svData[`sector-${sectorNumber}`]['services'][`sv${j}`]['serviceIcon']}"></i>
                <h3>${svData[`sector-${sectorNumber}`]['services'][`sv${j}`]['serviceName']}</h3>
                <p>${svData[`sector-${sectorNumber}`]['services'][`sv${j}`]['serviceDescription']}</p>
            </div>
        `;
        servicesContainer.insertAdjacentHTML('beforeend', serviceItemCode);
    };

    for (let k = 1; k < 5; k++){
        const stepItemCode = `
            <div class="sector-process-step">
                <div class="step-number">0${k}</div>
                <p>${svData[`sector-${sectorNumber}`]['process']['steps'][k]}</p>
            </div>
        `;
        stepsContainer.insertAdjacentHTML('beforeend', stepItemCode);
    };
    // ========================
    const sectorFinalCTASection = `
        <section id="sector-${sectorNumber}-cta" class="sector-cta-section">
        <div class="sector-cta-container">
            <h2>${svData[`sector-${sectorNumber}`]['cta']['title']}</h2>
            <p>${svData[`sector-${sectorNumber}`]['cta']['description']}</p>
            <a href="contact.html" class="sector-cta-btn">${svData[`sector-${sectorNumber}`]['cta']['buttonText']}</a>
        </div>
    </section>
    `;
    mainContent.insertAdjacentHTML('beforeend', sectorFinalCTASection);

};

// دالة الانتقال من صفحة الخدمات لتفاصيل القطاع
function sectorPageNavigation(sectorNumber) {
    // 1. منع إنشاء أكثر من Overlay في نفس الوقت
    if (document.getElementById('transition-overlay')) return;

    document.body.insertAdjacentHTML('afterbegin', `
    <div id="transition-overlay" style="
        position: fixed;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        z-index: 9999;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.5s ease-in-out;
    "></div>
    `);

    const overlay = document.getElementById('transition-overlay');

    // تفعيل الظهور
    setTimeout(() => {
        overlay.style.opacity = "1";
        overlay.style.pointerEvents = "all";
    }, 20);

    // استخدام وظيفة منفصلة للتعامل مع انتهاء الحركة
    overlay.addEventListener('transitionend', function handleEnd() {
        if (overlay.style.opacity === "1") {
            // === ذروة التعتيم ===
            window.scrollTo(0, 0); // نصيحة: اصعد لأعلى الصفحة عند الانتقال
            mainContent.innerHTML = '';
            
            // استدعاء دالة بناء الصفحة الجديدة
            createSectorPage(sectorNumber);

            // بدء التلاشي (Fade out)
            setTimeout(() => {
                overlay.style.opacity = "0";
                overlay.style.pointerEvents = "none";
            }, 150);
        } else {
            // حذف العنصر تماماً بعد انتهاء الاختفاء
            overlay.remove();
        }
    }); 
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const sectorOfParams ={
    general_manufacturing: "sector-1",
    food_industry: "sector-2",
    oil_gas: "sector-3",
    material_handling: "sector-4",
    heavy_industry: "sector-5",
    agro_industry: "sector-6"
};
const currentParam = urlParams.get('sector');
if (currentPage === "services-page" && urlParams.size === 0){
    createServicesPage();
} else if(currentPage === "services-page" && urlParams.size !== 0) {
    const currentSectorKey = sectorOfParams[currentParam].split('-')[1];
    createSectorPage(currentSectorKey);
};

