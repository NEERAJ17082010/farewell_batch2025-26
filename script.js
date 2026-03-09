// ========================================
// BATCH OF 2025-26 - FAREWELL SITE
// Interactive JavaScript
// ========================================

// ========================================
// DATA CONFIGURATION
// ========================================
// Add personal notes for each person here
// Format: 'Name': 'Your personal message'
const personalNotes = {
    'default': 'Thank you for being part of this amazing journey. Wishing you all the best for your future endeavors! May your path be filled with success, happiness, and new adventures. It was an honor to share this chapter of life with you.',
    'Bhanushree': 'Bhanushree, your presence made every moment brighter. Your infectious smile and positive attitude lifted the spirits of everyone around you. The way you handled challenges with grace and determination inspired us all. You have an incredible ability to make people feel valued and welcome. As you embark on this new journey, know that you left an indelible mark on all of us. Wishing you endless success and happiness in everything you do.',
    'Bhumika': 'Bhumika, your dedication and hard work have always been admirable. You approached every task with enthusiasm and delivered excellence consistently. Your friendly nature and helpful spirit made you a pillar of support for many. The memories we shared, whether in classrooms or corridors, will always be treasured. May your future be as bright and promising as your personality. Keep shining and achieving great things!',
    'Chiranth': 'Chiranth, your thoughtful conversations and insightful perspectives enriched our experiences together. You have a remarkable ability to listen and understand, making everyone feel heard and appreciated. Your calm demeanor and steady nature provided comfort during challenging times. The bond we formed goes beyond just being classmates - you became a true friend. As you move forward, may success follow you in every endeavor. Stay connected and keep being the amazing person you are.',
    'Harshith': 'Harshith, your energy and enthusiasm were truly contagious. You brought life to every gathering and made even ordinary moments memorable. Your humor and wit provided countless moments of laughter and joy. Despite the fun times, you also showed maturity and responsibility when it mattered most. You have a genuine heart and a kind soul. May your journey ahead be filled with exciting opportunities and wonderful experiences. Keep that beautiful smile forever!',
    'Kanchana': 'Kanchana, your kindness and compassion touched the hearts of everyone you met. You have an extraordinary ability to make people feel comfortable and at ease. Your gentle spirit and thoughtful nature made you a trusted friend to many. The support you offered, whether through words or actions, never went unnoticed. As you step into this new phase of life, carry forward your beautiful qualities. You deserve all the happiness and success that comes your way. Thank you for being such a wonderful person.',
    'Lalith': 'Lalith, your intelligence and creativity set you apart. You approached problems with innovative solutions and always encouraged others to think differently. Your determination and perseverance through challenges inspired those around you. Beyond academics, your friendship and loyalty meant the world to many. You have a bright mind and an even brighter future ahead. As you pursue your dreams, remember that you have the capability to achieve anything you set your mind to. Wishing you a journey filled with accomplishments and joy.',
    'Manyatha': 'Manyatha, your warm smile and welcoming nature made everyone feel included. You have a special gift of making people feel at home wherever you go. Your adaptability and positive attitude in various situations were truly remarkable. The support you provided to friends and peers showed your generous heart. As you move towards your future, may it be as bright and beautiful as your personality. Keep spreading that warmth and positivity wherever life takes you. You are one of a kind!',
    'Vibha': 'Vibha, your vibrant personality and zest for life were truly inspirational. You approached each day with enthusiasm and brought joy to those around you. Your ability to balance work and fun showed your wonderful character. The laughter and fun we shared created lasting memories. You have a way of making everyone feel special and valued. As you begin this new chapter, may it be filled with exciting adventures and fulfilling experiences. Keep being the amazing, spirited person you always have been!',
    'Shalini': 'Shalini, your grace and elegance made you stand out in the best possible way. You handled situations with poise and always maintained your composure. Your thoughtful nature and caring attitude made you a reliable friend. The conversations we shared and the moments we spent together will always be cherished. You have a beautiful soul and an even more beautiful future ahead. May all your dreams come true and may happiness be your constant companion. Thank you for being such a special part of this journey.',
    'Keerthan': 'Keerthan, your dedication and commitment to everything you do are truly commendable. You gave your best in every situation and inspired others to do the same. Your supportive nature and encouraging words helped many through difficult times. Beyond your capabilities, your humility and grounded personality made you approachable. As you step into the future, know that you have all the tools to succeed. May your path be smooth and your achievements numerous. Keep being the incredible person you are!',
    'Mithun': 'Mithun, your friendship was a gift that many treasured. You stood by your friends through thick and thin, showing true loyalty. Your humor and light-heartedness made even stressful times bearable. You have a big heart and a generous spirit that made you beloved by all. The memories we created together will be remembered fondly. As you embark on new adventures, may you find success in all your pursuits. Keep that wonderful spirit alive and continue touching lives with your kindness.',
    'Krutika': 'Krutika, your strength and resilience were truly inspiring. You faced challenges head-on and emerged stronger every time. Your determination to succeed was evident in everything you did. Beyond your achievements, your caring nature and genuine friendship made you special. The support you offered and the moments we shared created beautiful memories. As you move forward, may your determination lead you to extraordinary heights. You have the power to achieve anything you dream of. Best wishes for your incredible journey ahead!',
    'Sonika': 'Sonika, your warmth and affection made everyone feel like family. You have an amazing ability to connect with people on a deep level. Your kindness and generosity knew no bounds. The way you cared for your friends was truly heartwarming. As we part ways, remember that you made a lasting impact on everyone who knew you. Your future is incredibly bright, and I have no doubt you will achieve great things. May happiness and success follow you everywhere you go. You are truly special!',
    'Unnathi': 'Unnathi, your cheerful disposition brightened every room you entered. You brought positivity and hope to those around you. Your ability to find joy in simple things was truly admirable. The laughter and fun we shared created wonderful memories. You have a beautiful heart and an infectious laugh. As you step into the future, may it be filled with countless reasons to smile. Keep that positive energy flowing and continue being the amazing person you are. Wishing you nothing but happiness and success!',
    'Samrudh': 'Samrudh, your leadership qualities and responsible nature made you someone others looked up to. You led by example and inspired those around you to be better. Your thoughtful decisions and wise counsel helped many navigate challenges. Your friendship was valued and your presence will be missed. The experiences we shared and lessons we learned together will stay with us forever. As you move forward, may your leadership open doors to incredible opportunities. May success and happiness be your constant companions on this new journey.',
    'Rutvij': 'Rutvij, your sharp mind and quick wit made every interaction memorable. You brought unique perspectives and insights to discussions. Your ability to make people laugh while making valid points was a rare talent. Despite your many qualities, you remained humble and grounded. The time we spent together, whether studying or just hanging out, was always enjoyable. As you begin this new chapter, may your intelligence and charm take you far. Wishing you a future filled with achievements and contentment. Keep being yourself!',
    'Shreyas': 'Shreyas, your supportive nature and encouraging words lifted many spirits. You were always there to offer help and motivation when needed. Your patience and understanding made you a trusted friend to many. The bond we shared transcended the classroom and became something more meaningful. As we say goodbye, know that your friendship meant a great deal to me. May your future be as supportive and caring as you are. May all your endeavors lead to success and happiness. Thank you for being such a wonderful friend.'
};

// ========================================
    // STATE MANAGEMENT
    // ========================================
    // In-memory storage for profiles (in production, use a backend)
    let profiles = JSON.parse(localStorage.getItem('farewellProfiles')) || {};
    
    // Pre-created profiles for Batch of 2025-26
    // All passwords set to "class10"
    const defaultProfiles = {
        'Bhanushree': { name: 'Bhanushree', password: 'class10', childhoodPhoto: 'Bhanushree_childhoodpic.jpeg', currentPhoto: 'Bhanushree_currentpic.jpeg', profilePhoto: 'Bhanushree_profilepic.jpeg' },
        'Bhumika': { name: 'Bhumika', password: 'June01', childhoodPhoto: 'bhumika_childhoodpic.jpeg', currentPhoto: 'bhumika_currentpic.jpeg', profilePhoto: 'bhumika_profilepic.jpeg' },
        'Chiranth': { name: 'Chiranth', password: 'Aug10', childhoodPhoto: null, currentPhoto: null },
        'Harshith': { name: 'Harshith', password: 'class10', childhoodPhoto: null, currentPhoto: null },
        'Kanchana': { name: 'Kanchana', password: 'June13', childhoodPhoto: null, currentPhoto: null },
        'Lalith': { name: 'Lalith', password: 'Aug1309', childhoodPhoto: null, currentPhoto: null },
        'Manyatha': { name: 'Manyatha', password: 'Jan04', childhoodPhoto: 'Manyatha_childhoodpic.jpeg', currentPhoto: 'manyatha_currentpic.jpeg', profilePhoto: 'manyatha_profilepic.jpeg' },
        'Vibha': { name: 'Vibha', password: 'Oct26', childhoodPhoto: 'Vibha_childhoodpic.jpeg', currentPhoto: 'Vibha_current.jpeg', profilePhoto: 'Vibha_profilepic.jpeg' },
        'Shalini': { name: 'Shalini', password: 'Jan20', childhoodPhoto: null, currentPhoto: null },
        'Keerthan': { name: 'Keerthan', password: 'class10', childhoodPhoto: null, currentPhoto: null },
        'Mithun': { name: 'Mithun', password: 'Oct14', childhoodPhoto: null, currentPhoto: null },
        'Krutika': { name: 'Krutika', password: 'Apr19', childhoodPhoto: 'krutika_childhoodpic.jpeg', currentPhoto: 'Krutika_currentpic.jpeg', profilePhoto: 'Krutika_profilepic.jpeg' },
        'Sonika': { name: 'Sonika', password: 'Jul03', childhoodPhoto: 'sonika_childhoodpic.jpeg', currentPhoto: 'sonika_currentpic.jpeg', profilePhoto: 'sonika_profilepic.jpeg' },
        'Unnathi': { name: 'Unnathi', password: 'Apr17', childhoodPhoto: null, currentPhoto: null },
        'Samrudh': { name: 'Samrudh', password: 'Aug1310', childhoodPhoto: 'Samrudh_childhoodpic.jpeg', currentPhoto: 'Samrudh_currentpic.jpeg', profilePhoto: 'Samrudh_profilepic.jpeg' },
        'Rutvij': { name: 'Rutvij', password: 'Apr27', childhoodPhoto: null, currentPhoto: null },
        'Shreyas': { name: 'Shreyas', password: 'Feb12', childhoodPhoto: null, currentPhoto: null }
    };
    
    // Merge default profiles if not already in localStorage
    if (Object.keys(profiles).length === 0) {
        profiles = { ...defaultProfiles };
    } else {
        // Force update all passwords to "class10" (in case localStorage has old passwords)
        Object.keys(profiles).forEach(key => {
            profiles[key].password = 'class10';
        });
    }
    localStorage.setItem('farewellProfiles', JSON.stringify(profiles));
    
    let currentProfile = null;

// ========================================
// DOM ELEMENTS
// ========================================
const landingPage = document.getElementById('landing-page');
const profilePage = document.getElementById('profile-page');
const memoryPage = document.getElementById('memory-page');
const createModal = document.getElementById('create-modal');

const nameInput = document.getElementById('name-input');
const searchBtn = document.getElementById('search-btn');
const notFoundMsg = document.getElementById('not-found-msg');
const createProfileBtn = document.getElementById('create-profile-btn');

const newNameInput = document.getElementById('new-name');
const newPasswordInput = document.getElementById('new-password');
const confirmPasswordInput = document.getElementById('confirm-password');
const cancelCreateBtn = document.getElementById('cancel-create');
const saveProfileBtn = document.getElementById('save-profile');

const profileNameDisplay = document.getElementById('profile-name');
const currentPhoto = document.getElementById('current-photo');
const profilePasswordInput = document.getElementById('profile-password');
const unlockBtn = document.getElementById('unlock-btn');
const wrongPasswordMsg = document.getElementById('wrong-password');
const backToLandingBtn = document.getElementById('back-to-landing');

const childhoodPhoto = document.getElementById('childhood-photo');
const memoryCurrentPhoto = document.getElementById('memory-current-photo');
const noteName = document.getElementById('note-name');
const personalNote = document.getElementById('personal-note');
const backToProfileBtn = document.getElementById('back-to-profile');

const uploadChildhood = document.getElementById('upload-childhood');
const uploadCurrent = document.getElementById('upload-current');
const thankyouPage = document.getElementById('thankyou-page');
const thankyouBackBtn = document.getElementById('thankyou-back');
const viewThankyouBtn = document.getElementById('view-thankyou');

// Future Plans Page Elements
const futurePage = document.getElementById('future-page');
const futureNameInput = document.getElementById('future-name');
const futureCareerInput = document.getElementById('future-career');
const saveFutureBtn = document.getElementById('save-future-btn');
const futureSavedMsg = document.getElementById('future-saved-msg');
const futureList = document.getElementById('future-list');
const futureBackBtn = document.getElementById('future-back');

// ========================================
// PAGE NAVIGATION
// ========================================

function showPage(page) {
    // Hide overlay pages (profile, memory, thankyou)
    profilePage.classList.remove('active');
    profilePage.classList.add('hidden');
    memoryPage.classList.remove('active');
    memoryPage.classList.add('hidden');
    thankyouPage.classList.remove('active');
    thankyouPage.classList.add('hidden');
    
    // Always keep landing and future pages visible for scrolling
    landingPage.classList.remove('hidden');
    landingPage.classList.add('active');
    futurePage.classList.remove('hidden');
    
    // Show requested page if it's an overlay page
    if (page !== landingPage && page !== futurePage) {
        page.classList.remove('hidden');
        setTimeout(() => {
            page.classList.add('active');
        }, 10);
    }
}

// ========================================
// PROFILE SEARCH & CREATION
// ========================================

function searchProfile() {
    const name = nameInput.value.trim();
    
    if (!name) {
        return;
    }
    
    // Case-insensitive search
    const profileKey = Object.keys(profiles).find(key => key.toLowerCase() === name.toLowerCase() || profiles[key].name.toLowerCase() === name.toLowerCase());
    
    // Check if profile exists
    if (profileKey) {
        currentProfile = {
            name: profiles[profileKey].name,
            password: profiles[profileKey].password,
            childhoodPhoto: profiles[profileKey].childhoodPhoto,
            currentPhoto: profiles[profileKey].currentPhoto,
            profilePhoto: profiles[profileKey].profilePhoto
        };
        showProfilePage();
    } else {
        // Profile not found
        notFoundMsg.classList.remove('hidden');
        createProfileBtn.classList.add('hidden');
    }
}

function showProfilePage() {
    notFoundMsg.classList.add('hidden');
    createProfileBtn.classList.add('hidden');
    
    profileNameDisplay.textContent = currentProfile.name;
    
    // Set profile photo
    if (currentProfile.profilePhoto) {
        currentPhoto.src = currentProfile.profilePhoto;
    } else if (currentProfile.currentPhoto) {
        currentPhoto.src = currentProfile.currentPhoto;
    }
    
    // Apply random glow effect to profile card
    applyRandomGlow();
    
    showPage(profilePage);
    profilePasswordInput.value = '';
    wrongPasswordMsg.classList.add('hidden');
}

// ========================================
// RANDOM GLOW EFFECT
// ========================================

function applyRandomGlow() {
    const profileCard = document.getElementById('profile-card');
    const photoFrame = document.querySelector('.photo-frame');
    
    // Remove any existing glow classes
    profileCard.classList.remove('glow-cyan', 'glow-pink', 'glow-gold', 'glow-lavender', 'glow-mint');
    photoFrame.classList.remove('glow-cyan', 'glow-pink', 'glow-gold', 'glow-lavender', 'glow-mint');
    
    // Random glow colors
    const glowColors = ['glow-cyan', 'glow-pink', 'glow-gold', 'glow-lavender', 'glow-mint'];
    const randomGlow = glowColors[Math.floor(Math.random() * glowColors.length)];
    
    // Apply random glow to both card and photo frame
    profileCard.classList.add(randomGlow);
    photoFrame.classList.add(randomGlow);
}

function showCreateModal() {
    createModal.classList.remove('hidden');
    newNameInput.value = nameInput.value;
}

function hideCreateModal() {
    createModal.classList.add('hidden');
    newNameInput.value = '';
    newPasswordInput.value = '';
    confirmPasswordInput.value = '';
}

function createProfile() {
    const name = newNameInput.value.trim().toLowerCase();
    const password = newPasswordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    
    if (!name || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    if (profiles[name]) {
        alert('A profile with this name already exists!');
        return;
    }
    
    // Save profile
    profiles[name] = {
        name: newNameInput.value.trim(),
        password: password,
        childhoodPhoto: null,
        currentPhoto: null
    };
    
    // Store in localStorage
    localStorage.setItem('farewellProfiles', JSON.stringify(profiles));
    
    currentProfile = profiles[name];
    hideCreateModal();
    showProfilePage();
}

// ========================================
// PASSWORD VERIFICATION
// ========================================

function verifyPassword() {
    const enteredPassword = profilePasswordInput.value;
    
    if (enteredPassword === currentProfile.password) {
        wrongPasswordMsg.classList.add('hidden');
        showMemoryPage();
    } else {
        wrongPasswordMsg.classList.remove('hidden');
        profilePasswordInput.value = '';
    }
}

// ========================================
// MEMORY PAGE
// ========================================

function showMemoryPage() {
    // Set note
    noteName.textContent = currentProfile.name;
    
    // First try to get note from HTML
    const htmlNotesContainer = document.getElementById('html-notes');
    let note = null;
    
    if (htmlNotesContainer) {
        const noteElements = htmlNotesContainer.querySelectorAll('div[data-note-for]');
        for (const el of noteElements) {
            if (el.getAttribute('data-note-for').toLowerCase() === currentProfile.name.toLowerCase()) {
                note = el.textContent;
                break;
            }
        }
    }
    
    // Fall back to JavaScript if not found in HTML
    if (!note) {
        note = personalNotes[currentProfile.name] || personalNotes['default'];
    }
    
    personalNote.innerHTML = `
        <p>Dear ${currentProfile.name},</p>
        <p>${note}</p>
    `;
    
    // Set photos
    if (currentProfile.childhoodPhoto) {
        childhoodPhoto.src = currentProfile.childhoodPhoto;
    }
    
    if (currentProfile.currentPhoto) {
        memoryCurrentPhoto.src = currentProfile.currentPhoto;
    }
    
    showPage(memoryPage);
}

// ========================================
// THANK YOU PAGE
// ========================================

function showThankYouPage() {
    showPage(thankyouPage);
}

// ========================================
// PHOTO UPLOAD
// ========================================

function handlePhotoUpload(event, photoType) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const dataUrl = e.target.result;
        
        // Update current profile
        if (photoType === 'childhood') {
            currentProfile.childhoodPhoto = dataUrl;
            childhoodPhoto.src = dataUrl;
        } else {
            currentProfile.currentPhoto = dataUrl;
            memoryCurrentPhoto.src = dataUrl;
            currentPhoto.src = dataUrl;
        }
        
        // Save to storage - use exact name as stored in profiles
        const profileKey = Object.keys(profiles).find(key => profiles[key].name === currentProfile.name);
        if (profileKey) {
            profiles[profileKey][photoType + 'Photo'] = dataUrl;
            localStorage.setItem('farewellProfiles', JSON.stringify(profiles));
        }
    };
    reader.readAsDataURL(file);
}

// ========================================
// EVENT LISTENERS
// ========================================

// Landing page
searchBtn.addEventListener('click', searchProfile);
nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchProfile();
});

createProfileBtn.addEventListener('click', showCreateModal);

// Create modal
cancelCreateBtn.addEventListener('click', hideCreateModal);
saveProfileBtn.addEventListener('click', createProfile);

// Profile page
unlockBtn.addEventListener('click', verifyPassword);
profilePasswordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') verifyPassword();
});

backToLandingBtn.addEventListener('click', () => {
    showPage(landingPage);
    nameInput.value = '';
    notFoundMsg.classList.add('hidden');
    createProfileBtn.classList.add('hidden');
});

// Memory page
backToProfileBtn.addEventListener('click', () => {
    showPage(profilePage);
});

// Photo uploads
uploadChildhood.addEventListener('change', (e) => handlePhotoUpload(e, 'childhood'));
uploadCurrent.addEventListener('change', (e) => handlePhotoUpload(e, 'current'));

// Thank You page
viewThankyouBtn.addEventListener('click', showThankYouPage);
thankyouBackBtn.addEventListener('click', () => {
    showPage(memoryPage);
});

// View Future Plans button
const viewFutureBtn = document.getElementById('view-future');
viewFutureBtn.addEventListener('click', showFuturePlansPage);

// ========================================
// FUTURE PLANS PAGE
// ========================================

// Get future plans from localStorage
function getFuturePlans() {
    return JSON.parse(localStorage.getItem('futurePlans')) || {};
}

// Save future plan to localStorage
function saveFuturePlan(name, career) {
    const plans = getFuturePlans();
    
    // Store with lowercase name as key for case-insensitive lookup
    const key = name.toLowerCase().trim();
    plans[key] = {
        name: name.trim(),
        career: career.trim(),
        timestamp: Date.now()
    };
    
    localStorage.setItem('futurePlans', JSON.stringify(plans));
}

// Render the list of future plans
function renderFuturePlans() {
    const plans = getFuturePlans();
    futureList.innerHTML = '';
    
    if (Object.keys(plans).length === 0) {
        futureList.innerHTML = '<p class="no-entries">No future plans shared yet. Be the first!</p>';
        return;
    }
    
    // Sort by timestamp (newest first)
    const sortedPlans = Object.values(plans).sort((a, b) => b.timestamp - a.timestamp);
    
    sortedPlans.forEach(plan => {
        const entry = document.createElement('div');
        entry.className = 'future-entry';
        entry.innerHTML = `
            <div class="future-entry-name">${plan.name}</div>
            <div class="future-entry-career">${plan.career}</div>
        `;
        futureList.appendChild(entry);
    });
}

function showFuturePlansPage() {
    renderFuturePlans();
    futureNameInput.value = '';
    futureCareerInput.value = '';
    futureSavedMsg.classList.add('hidden');
    showPage(futurePage);
}

function handleSaveFuture() {
    const name = futureNameInput.value.trim();
    const career = futureCareerInput.value.trim();
    
    if (!name || !career) {
        alert('Please fill in both your name and future career!');
        return;
    }
    
    // Check if this person already submitted (case-insensitive)
    const plans = getFuturePlans();
    const existingKey = Object.keys(plans).find(key => key.toLowerCase() === name.toLowerCase());
    
    if (existingKey) {
        // Update existing entry
        saveFuturePlan(name, career);
    } else {
        // Create new entry
        saveFuturePlan(name, career);
    }
    
    futureSavedMsg.classList.remove('hidden');
    renderFuturePlans();
    
    // Hide success message after 3 seconds
    setTimeout(() => {
        futureSavedMsg.classList.add('hidden');
    }, 3000);
}

// Future page event listeners
saveFutureBtn.addEventListener('click', handleSaveFuture);
futureCareerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSaveFuture();
});
futureBackBtn.addEventListener('click', () => {
    showPage(thankyouPage);
});

// ========================================
// KEYBOARD SHORTCUTS
// ========================================

document.addEventListener('keydown', (e) => {
    // Escape to go back
    if (e.key === 'Escape') {
        if (!createModal.classList.contains('hidden')) {
            hideCreateModal();
        } else if (memoryPage.classList.contains('active')) {
            showPage(profilePage);
        } else if (profilePage.classList.contains('active')) {
            showPage(landingPage);
            nameInput.value = '';
            notFoundMsg.classList.add('hidden');
            createProfileBtn.classList.add('hidden');
        } else if (thankyouPage.classList.contains('active')) {
            showPage(memoryPage);
        } else if (futurePage.classList.contains('active')) {
            showPage(thankyouPage);
        }
    }
});

// ========================================
// INITIALIZATION
// ========================================

// Show landing page on load
showPage(landingPage);

// Clear any stored data (for demo purposes - remove in production)
// localStorage.removeItem('farewellProfiles');

// ========================================
// SMOOTH SCROLL FUNCTIONALITY
// ========================================

// Scroll progress tracking
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById('scroll-progress').style.width = scrollPercent + '%';
});

// Navigation dots functionality
const navDots = document.querySelectorAll('.nav-dot');
navDots.forEach(dot => {
    dot.addEventListener('click', () => {
        const sectionIndex = dot.getAttribute('data-section');
        const sections = ['landing-page', 'future-page'];
        if (sections[sectionIndex]) {
            document.getElementById(sections[sectionIndex]).scrollIntoView({ 
                behavior: 'smooth' 
            });
        }
    });
});

// Update active nav dot on scroll
window.addEventListener('scroll', () => {
    const sections = ['landing-page', 'future-page'];
    let currentSection = 0;
    
    sections.forEach((sectionId, index) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2) {
                currentSection = index;
            }
        }
    });
    
    navDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSection);
    });
});

