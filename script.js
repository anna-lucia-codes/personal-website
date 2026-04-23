const projects = [
  { image: 'images/oefenstof/installation_01.jpg', href: 'oefenstof.html' },
  { image: 'images/oefenstof/installation_02.jpg', href: 'oefenstof.html' },
  { image: 'images/oefenstof/installation_03.jpg', href: 'oefenstof.html' },
  { image: 'images/oefenstof/installation_04.jpg', href: 'oefenstof.html' },
  { image: 'images/oefenstof/installation_05.jpg', href: 'oefenstof.html' },
  { image: 'images/oefenstof/installation_06.jpg', href: 'oefenstof.html' },
  { image: 'images/oefenstof/installation_07.jpg', href: 'oefenstof.html' },
  { image: 'images/yesyesno/yesyesno6_.jpg', href: 'yesyesno.html' },
  { image: 'images/yesyesno/yesyesno7_.jpg', href: 'yesyesno.html' },
  { image: 'images/yesyesno/yesyesno1_.jpg', href: 'yesyesno.html' },
  { image: 'images/yesyesno/yesyesno5_.jpg', href: 'yesyesno.html' },
  { image: 'images/generations/06.jpeg', href: 'generations.html' },
  { image: 'images/generations/installation_01.jpg', href: 'generations.html' },
  { image: 'images/generations/installation_04.jpg', href: 'generations.html' },
  { image: 'images/generations/19.png', href: 'generations.html' },
  { image: 'images/generations/installation_6.jpg', href: 'generations.html' },
  { image: 'images/generations/21.png', href: 'generations.html' },
  { image: 'images/generations/17.png', href: 'generations.html' },
  { image: 'images/generations/18.png', href: 'generations.html' },
  { image: 'images/33million/TENDER_Untitoed-21.jpg', href: '33million.html' },
  { image: 'images/33million/TENDER_Untitoed-16.jpg', href: '33million.html' },
  { image: 'images/33million/TENDER_Untitoed-12.jpg', href: '33million.html' },
  { image: 'images/33million/7.jpg', href: '33million.html' },
  { image: 'images/33million/9.jpg', href: '33million.html' },
  { image: 'images/33million/10.jpg', href: '33million.html' },
  { image: 'images/33million/13.jpg', href: '33million.html' },
  { image: 'images/33million/17.jpg', href: '33million.html' },
  { image: 'images/loom/1.png', href: 'loom.html' },
  { image: 'images/loom/5.png', href: 'loom.html' },
  { image: 'images/loom/7.png', href: 'loom.html' },
  { image: 'images/loom/13.png', href: 'loom.html' },
  { image: 'images/loom/4.png', href: 'loom.html' },
  { image: 'images/loom/8.png', href: 'loom.html' },
  { image: 'images/loom/16.png', href: 'loom.html' },
  { image: 'images/loom/14.png', href: 'loom.html' },
  { image: 'images/emailart/email-01.png', href: 'emailart.html' },
  { image: 'images/emailart/email-02.png', href: 'emailart.html' },
  { image: 'images/emailart/email-03.png', href: 'emailart.html' },
  { image: 'images/emailart/email-04.png', href: 'emailart.html' },
  { image: 'images/emailart/email-05.png', href: 'emailart.html' },
  { image: 'images/emailart/email-06.png', href: 'emailart.html' },
  { image: 'images/emailart/email-07.png', href: 'emailart.html' },
  { image: 'images/emailart/email-08.png', href: 'emailart.html' },
  { image: 'images/thread/8.png', href: 'thread.html' },
  { image: 'images/thread/13.png', href: 'thread.html' },
  { image: 'images/thread/29.png', href: 'thread.html' },
  { image: 'images/thread/30.png', href: 'thread.html' },
  { image: 'images/thread/32.png', href: 'thread.html' },
  { image: 'images/thread/43.png', href: 'thread.html' },
  { image: 'images/thread/47.png', href: 'thread.html' },
  { image: 'images/thread/80.png', href: 'thread.html' },
  { image: 'images/synths/Synths-031.png', href: 'synths.html' },
  { image: 'images/synths/Synths-037.png', href: 'synths.html' },
  { image: 'images/synths/Synths-040.png', href: 'synths.html' },
  { image: 'images/afwips/1.png', href: 'AFWIPS.html' },
  { image: 'images/afwips/2.png', href: 'AFWIPS.html' },
  { image: 'images/afwips/3.png', href: 'AFWIPS.html' },
  { image: 'images/afwips/4.png', href: 'AFWIPS.html' },
  { image: 'images/afwips/nabo.jpg', href: 'AFWIPS.html' },
  { image: 'images/perpetual/012.jpeg', href: 'perpetual.html' },
  { image: 'images/perpetual/015.jpeg', href: 'perpetual.html' },
  { image: 'images/perpetual/018.jpeg', href: 'perpetual.html' },
  { image: 'images/perpetual/020.jpeg', href: 'perpetual.html' },
  { image: 'images/perpetual/036.jpeg', href: 'perpetual.html' },
  { image: 'images/perpetual/lente1.jpg', href: 'perpetual.html' },
  { image: 'images/perpetual/lente2.jpg', href: 'perpetual.html' },
  { image: 'images/structured/structure-11.jpg', href: 'perpetual.html' },
  { image: 'images/patched/1.png', href: 'patchedparadise.html' },
  { image: 'images/patched/2.png', href: 'patchedparadise.html' },
  { image: 'images/patched/3.png', href: 'patchedparadise.html' },
  { image: 'images/patched/4.png', href: 'patchedparadise.html' },
  { image: 'images/patched/5.png', href: 'patchedparadise.html' },
  { image: 'images/patched/6.png', href: 'patchedparadise.html' },
  { image: 'images/patched/7.png', href: 'patchedparadise.html' },
  { image: 'images/patched/8.png', href: 'patchedparadise.html' },
];

function shuffleArrayInPlace(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function showProject(item) {
  const linkEl = document.getElementById('featured-link');
  const imgEl = document.getElementById('featured-image');
  linkEl.href = item.href;
  imgEl.style.opacity = '0';
  imgEl.src = item.image;
  imgEl.addEventListener('load', () => imgEl.style.opacity = '1', { once: true });
}

function initRandomizer() {
  const button = document.getElementById('randomize-btn');
  const imgEl = document.getElementById('featured-image');
  if (!button || !imgEl) return;
  
  imgEl.style.opacity = '0';
  let order = shuffleArrayInPlace(projects.slice());
  let currentItem = order[0];
  showProject(currentItem);

  button.addEventListener('click', () => {
    const newOrder = shuffleArrayInPlace(projects.slice());
    const currentIndex = newOrder.indexOf(currentItem);
    if (currentIndex !== -1) newOrder.splice(currentIndex, 1);
    currentItem = newOrder[0] || currentItem;
    showProject(currentItem);
  });
}

function initGridView() {
  const gridContainer = document.getElementById('projects-grid');
  if (!gridContainer) return;
  
  const uniqueProjects = [
    { image: 'images/structured/structure-06.png', href: 'emailart.html', name: '(e)mail art' },
    { image: 'images/structured/structure-02.jpg', href: 'oefenstof.html', name: 'oefenstof' },
    { image: 'images/structured/structure-07.png', href: 'thread.html', name: 'thread' },
    { image: 'images/structured/structure-08.jpg', href: 'synths.html', name: 'synths' },
    { image: 'images/structured/structure-04.png', href: '33million.html', name: '33 million' },
    { image: 'images/structured/structure-03.jpg', href: 'yesyesno.html', name: '{yes, yes, no, yes}' },
    { image: 'images/structured/structure-09.jpg', href: 'generations.html', name: 'generations' },
    { image: 'images/structured/structure-12.jpg', href: 'AFWIPS.html', name: 'art for walls in public spaces' },
    { image: 'images/structured/structure-11.jpg', href: 'perpetual.html', name: 'perpetual oscillations' },
    { image: 'images/structured/structure-10.png', href: 'patchedparadise.html', name: 'patched paradise' },
    { image: 'images/structured/structure-05.png', href: 'loom.html', name: 'loom' },
  ];
  
  const projectContainers = uniqueProjects.map(project => {
    const container = document.createElement('div');
    container.className = 'project-item image-loading';
    
    const link = document.createElement('a');
    link.href = project.href;
    link.setAttribute('aria-label', 'Open project');
    
    const img = document.createElement('img');
    img.dataset.src = project.image;
    img.alt = project.name;
    img.className = 'project-image';
    img.style.opacity = '0';
    
    const projectName = document.createElement('div');
    projectName.className = 'project-name';
    projectName.textContent = project.name;
    
    link.appendChild(img);
    link.appendChild(projectName);
    container.appendChild(link);
    
    return { container, img };
  });
  
  projectContainers.forEach(({ container }) => gridContainer.appendChild(container));
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          delete img.dataset.src;
          img.addEventListener('load', () => {
            img.style.opacity = '1';
            img.closest('.project-item')?.classList.remove('image-loading');
          }, { once: true });
          imageObserver.unobserve(img);
        }
      }
    });
  }, { rootMargin: '50px' });
  
  projectContainers.forEach(({ img }) => imageObserver.observe(img));
  
  projectContainers.slice(0, 4).forEach(({ img }) => {
    if (img.dataset.src) {
      img.src = img.dataset.src;
      delete img.dataset.src;
      img.addEventListener('load', () => {
        img.style.opacity = '1';
        img.closest('.project-item')?.classList.remove('image-loading');
      }, { once: true });
    }
  });
}

function initActiveNavItem() {
  const filename = window.location.pathname.split('/').pop() || '';
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  
  if (filename === 'more.html') {
    document.getElementById('nav-about')?.classList.add('active');
  } else if (filename === 'selected.html') {
    document.getElementById('nav-structure')?.classList.add('active');
  }
}

function toggleNavMenu() {
  const navMenu = document.getElementById('nav-menu');
  navMenu?.classList.toggle('open');
  document.body.classList.toggle('menu-open', navMenu?.classList.contains('open'));
  document.querySelector('.nav-toggle')?.classList.toggle('menu-open', navMenu?.classList.contains('open'));
}

function closeNavMenu() {
  document.getElementById('nav-menu')?.classList.remove('open');
  document.body.classList.remove('menu-open');
  document.querySelector('.nav-toggle')?.classList.remove('menu-open');
}

function initImageLazyLoading() {
  const images = document.querySelectorAll('.image-grid img, .single-image img');
  images.forEach(img => img.loading = 'lazy');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const handleLoad = () => {
          img.classList.add('loaded');
          img.style.opacity = '1';
        };
        if (img.complete && img.naturalHeight !== 0) {
          handleLoad();
        } else {
          img.addEventListener('load', handleLoad, { once: true });
        }
        imageObserver.unobserve(img);
      }
    });
  }, { rootMargin: '100px' });
  
  images.forEach(img => {
    img.style.opacity = '0';
    imageObserver.observe(img);
  });
  
  Array.from(images).slice(0, 4).forEach(img => {
    img.loading = 'eager';
    if (img.complete && img.naturalHeight !== 0) {
      img.classList.add('loaded');
      img.style.opacity = '1';
    } else {
      img.addEventListener('load', () => {
        img.classList.add('loaded');
        img.style.opacity = '1';
      }, { once: true });
    }
  });
}

function initNav() {
  const nav = document.createElement('nav');
  nav.className = 'top-nav';
  nav.innerHTML = `
    <a href="index.html" class="site-title"><h2>Anna Lucia</h2></a>
    <button class="nav-toggle" onclick="toggleNavMenu()" aria-label="Toggle menu">
      <img src="icons/hamburger.svg" class="hamburger-icon" alt="Menu" />
      <img src="icons/cross.svg" class="cross-icon" alt="Close" />
    </button>
    <ul class="nav-menu" id="nav-menu">
      <li><a href="selected.html" id="nav-structure" class="nav-link" onclick="closeNavMenu();">Selected work</a></li>
      <li><a href="more.html" id="nav-about" class="nav-link" onclick="closeNavMenu();">About</a></li>
    </ul>
  `;
  document.body.prepend(nav);
}

function initImageClickToOpen() {
  document.querySelectorAll('.image-grid img, .single-image img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {
      const src = this.getAttribute('src');
      if (src) window.open(src, '_blank', 'noopener');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initRandomizer();
  initGridView();
  initActiveNavItem();
  initImageLazyLoading();
  initImageClickToOpen();
});
