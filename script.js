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

  { image: 'images/33million/TENDER_Untitoed-21.png', href: '33million.html' },
  { image: 'images/33million/TENDER_Untitoed-16.png', href: '33million.html' },
  { image: 'images/33million/TENDER_Untitoed-12.png', href: '33million.html' },
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

  { image: 'images/afwips/1.png', href: 'afwips.html' },  
  { image: 'images/afwips/2.png', href: 'afwips.html' }, 
  { image: 'images/afwips/3.png', href: 'afwips.html' },  
  { image: 'images/afwips/4.png', href: 'afwips.html' },   
  { image: 'images/afwips/nabo.jpg', href: 'afwips.html' }, 

  { image: 'images/perpetual/012.jpeg', href: 'perpetual.html' },  
  { image: 'images/perpetual/015.jpeg', href: 'perpetual.html' }, 
  { image: 'images/perpetual/018.jpeg', href: 'perpetual.html' },  
  { image: 'images/perpetual/020.jpeg', href: 'perpetual.html' },   
  { image: 'images/perpetual/036.jpeg', href: 'perpetual.html' },  
  { image: 'images/perpetual/lente1.jpg', href: 'perpetual.html' }, 
  { image: 'images/perpetual/lente2.jpg', href: 'perpetual.html' },  
  { image: 'images/structured/structure-11.png', href: 'perpetual.html' },   

  { image: 'images/patched/1.png', href: 'patched.html' },  
  { image: 'images/patched/2.png', href: 'patched.html' }, 
  { image: 'images/patched/3.png', href: 'patched.html' },  
  { image: 'images/patched/4.png', href: 'patched.html' },   
  { image: 'images/patched/5.png', href: 'patched.html' },  
  { image: 'images/patched/6.png', href: 'patched.html' }, 
  { image: 'images/patched/7.png', href: 'patched.html' },  
  { image: 'images/patched/8.png', href: 'patched.html' },   
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

    linkEl.href = item.href || '#';
    imgEl.src = item.image || '';
    imgEl.alt = item.alt || 'Featured project';
}

function initRandomizer() {
    const button = document.getElementById('randomize-btn');
    // first shuffle and render
    let order = shuffleArrayInPlace(projects.slice());
    let currentItem = order[0];
    showProject(currentItem);

    //shuffle on button click
    button.addEventListener('click', function () {
        const newOrder = shuffleArrayInPlace(projects.slice());
        const currentIndex = newOrder.indexOf(currentItem);
        if (currentIndex !== -1) {
            newOrder.splice(currentIndex, 1);
        }

        const nextItem = newOrder[0] || currentItem;
        currentItem = nextItem;
        showProject(currentItem);
    });
}

function initGridView() {
    const gridContainer = document.getElementById('projects-grid');
    
    const uniqueProjects = [
        { image: 'images/structured/structure-06.png', href: 'emailart.html', name: '(e)mail art' },  
        { image: 'images/structured/structure-02.jpg', href: 'oefenstof.html', name: 'oefenstof' },
        { image: 'images/structured/structure-07.png', href: 'thread.html', name: 'thread' }, 
        { image: 'images/structured/structure-08.jpg', href: 'synths.html', name: 'synths' },
        { image: 'images/structured/structure-04.png', href: '33million.html', name: '33 million' },
        { image: 'images/structured/structure-03.jpg', href: 'yesyesno.html', name: '{yes, yes, no}' },
        { image: 'images/structured/structure-09.jpg', href: 'generations.html', name: 'generations' },
        { image: 'images/structured/structure-12.jpg', href: 'AFWIPS.html', name: 'art for walls in public spaces' },  
        { image: 'images/structured/structure-11.jpg', href: 'perpetual.html', name: 'perpetual oscillations' },  
        { image: 'images/structured/structure-10.png', href: 'patchedparadise.html', name: 'patched paradise' }, 
        { image: 'images/structured/structure-05.png', href: 'loom.html', name: 'loom' },  
    ]
    
    Object.values(uniqueProjects).forEach(project => {
        const projectContainer = document.createElement('div');
        projectContainer.className = 'project-item';
        
        const link = document.createElement('a');
        link.href = project.href;
        link.setAttribute('aria-label', 'Open project');
        
        const img = document.createElement('img');
        img.src = project.image;
        img.alt = project.alt || 'Project image';
        img.loading = 'lazy';
        
        const projectName = document.createElement('div');
        projectName.className = 'project-name';
        projectName.textContent = project.name;
        
        link.appendChild(img);
        link.appendChild(projectName);
        projectContainer.appendChild(link);
        gridContainer.appendChild(projectContainer);
    });
}   

function switchView(viewType) {
    const randomnessView = document.getElementById('randomness-view');
    const structureView = document.getElementById('structure-view');
    const randomnessBtn = document.getElementById('randomness-btn');
    const structureBtn = document.getElementById('structure-btn');
    
    if (viewType === 'randomness') {
        randomnessView.style.display = 'flex';
        structureView.style.display = 'none';
        randomnessBtn.classList.add('active');
        structureBtn.classList.remove('active');
        history.pushState({view: 'randomness'}, '', '#randomness');
    } else if (viewType === 'structure') {
        randomnessView.style.display = 'none';
        structureView.style.display = 'block';
        randomnessBtn.classList.remove('active');
        structureBtn.classList.add('active');
        history.pushState({view: 'structure'}, '', '#structure');
    }
}

function initViewControls() {
    const randomnessBtn = document.getElementById('randomness-btn');
    const structureBtn = document.getElementById('structure-btn');
    
    randomnessBtn.addEventListener('click', () => switchView('randomness'));
    structureBtn.addEventListener('click', () => switchView('structure'));
}

function getViewFromURL() {
    const hash = window.location.hash;
    if (hash === '#structure') {
        return 'structure';
    } else if (hash === '#randomness') {
        return 'randomness';
    }
    return 'randomness'; // default
}

function initViewFromURL() {
    const view = getViewFromURL();
    switchView(view);
}

function handleBrowserNavigation() {
    window.addEventListener('popstate', function(event) {
        if (event.state && event.state.view) {
            switchView(event.state.view);
        } else {
            initViewFromURL();
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initRandomizer();
    initGridView();
    initViewControls();
    initViewFromURL();
    handleBrowserNavigation();
});

