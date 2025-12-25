/**
 * ASF SACOETEC Wish Box
 * Anglican Student Fellowship
 * Courtesy: FYB Chairman
 */

// ==========================================
// WISH DATABASE (100 Wishes)
// ==========================================
const WISHES_DATABASE = [
    "May your faith grow stronger every day! 🙏",
    "Wishing you academic excellence and divine wisdom! 📚",
    "May God's grace overflow in your life! ✨",
    "Success in all your endeavors this semester! 🎯",
    "May you find joy in fellowship and friendship! 🤝",
    "Divine favor in your studies and exams! 📝",
    "May you be a light to others on campus! 💡",
    "Breakthrough in every area of your life! 🚀",
    "May your prayers be answered speedily! 🙌",
    "Academic success with divine understanding! 🎓",
    "May you experience God's love daily! ❤️",
    "Wisdom and knowledge in abundance! 🧠",
    "May you walk in divine health always! 💪",
    "Supernatural provision for all your needs! 💰",
    "May your testimony inspire others! 🌟",
    "Excellence in character and academics! 👑",
    "May you fulfill your God-given purpose! 🎯",
    "Divine connections and mentorship! 🤲",
    "May peace reign in your heart always! ☮️",
    "Breakthrough beyond your expectations! 🌈",
    "May you grow in grace and knowledge! 📖",
    "Academic distinction with ease! 🏆",
    "May God's presence guide you daily! 🕊️",
    "Favor with lecturers and colleagues! 🎓",
    "May you be blessed and be a blessing! 🌺",
    "Divine speed in your academic journey! ⚡",
    "May joy unspeakable fill your life! 😊",
    "Success in all your projects! 📊",
    "May you shine for Christ on campus! ⭐",
    "Uncommon grace for uncommon success! 🌟",
    "May your faith move mountains! ⛰️",
    "Excellence without stress! 🎯",
    "May God's love surround you always! 💖",
    "Divine ideas and creativity! 💡",
    "May you excel beyond your peers! 🚀",
    "Peace that passes understanding! 🕊️",
    "May your light shine brighter! 🔆",
    "Academic triumph and celebration! 🎉",
    "May you walk in divine favor! 👣",
    "Supernatural wisdom for decisions! 🧭",
    "May your joy be full always! 😄",
    "Excellence in all your courses! 📚",
    "May God surprise you this semester! 🎁",
    "Divine protection over your life! 🛡️",
    "May you experience miracles daily! ✨",
    "Academic success beyond measure! 📈",
    "May your fellowship experience be amazing! 🙌",
    "Breakthrough in your prayer life! 🙏",
    "May you be established in faith! 🏛️",
    "Divine acceleration in your goals! 🏃",
    "May blessings locate you easily! 🎯",
    "Excellence with divine backing! 💪",
    "May you grow closer to God! 💕",
    "Academic achievements that inspire! 🌟",
    "May your dreams come to pass! 🌙",
    "Divine upliftment and promotion! ⬆️",
    "May you experience God's goodness! 🌻",
    "Success in every examination! ✅",
    "May angels watch over you! 👼",
    "Divine speed in your academics! 🎓",
    "May your faith inspire nations! 🌍",
    "Academic progress without setbacks! 🚀",
    "May you be blessed abundantly! 💰",
    "Divine wisdom for every challenge! 🧩",
    "May your semester be stress-free! 😌",
    "Excellence in your character! 💎",
    "May God perfect all that concerns you! 🙌",
    "Academic distinction and honor! 🏅",
    "May your joy overflow always! 🎊",
    "Divine grace for every challenge! ⚡",
    "May you be fruitful and productive! 🌳",
    "Success beyond your wildest dreams! 🌠",
    "May God's word guide your steps! 📖",
    "Academic excellence with ease! 🎯",
    "May you be a blessing to ASF! 🌟",
    "Divine strength for every task! 💪",
    "May your faith never fail! ⚓",
    "Academic breakthrough this semester! 🎓",
    "May you walk in supernatural favor! ✨",
    "Excellence in all your ways! 👑",
    "May God's peace rule your heart! 💙",
    "Academic success and celebration! 🎉",
    "May you prosper in all things! 💫",
    "Divine grace upon grace! 🌈",
    "May your testimony be great! 📣",
    "Academic achievement with joy! 😊",
    "May you be celebrated for good! 🏆",
    "Divine wisdom beyond your years! 🦉",
    "May your faith move you forward! 🚶",
    "Academic excellence and distinction! 🌟",
    "May God's love overwhelm you! ❤️",
    "Divine favor in all areas! 🎯",
    "May you excel beyond measure! 📊",
    "Academic success and fulfillment! 🎓",
    "May you be a light on campus! 💡",
    "Divine breakthrough and victory! 🏁",
    "May your semester be glorious! ✨",
    "Academic excellence and honor! 🌟",
    "May God's blessings chase you down! 🎁"
];

// ==========================================
// STATE MANAGEMENT
// ==========================================
const appState = {
    hasPickedWish: false,
    usedCodesList: new Set()
};

// ==========================================
// DOM ELEMENTS
// ==========================================
const elements = {
    beforePickSection: document.getElementById('beforePick'),
    afterPickSection: document.getElementById('afterPick'),
    pickButton: document.getElementById('btnPickWish'),
    codeLeftBox: document.getElementById('codeLeft'),
    codeRightBox: document.getElementById('codeRight'),
    wishMessageText: document.getElementById('wishMessage')
};

// ==========================================
// CODE GENERATOR
// ==========================================
const CodeGenerator = {
    LETTERS: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    NUMBERS: '0123456789',
    
    /**
     * Generate random string from character set
     * @param {string} chars - Character set to use
     * @param {number} length - Length of string to generate
     * @returns {string} Generated string
     */
    generateRandomString(chars, length) {
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            result += chars[randomIndex];
        }
        return result;
    },
    
    /**
     * Generate unique code in format ABC-123
     * @returns {Object} Object containing leftPart, rightPart, and fullCode
     */
    generateUniqueCode() {
        let leftPart, rightPart, fullCode;
        
        // Keep generating until we get a unique code
        do {
            leftPart = this.generateRandomString(this.LETTERS, 3);
            rightPart = this.generateRandomString(this.NUMBERS, 3);
            fullCode = `${leftPart}-${rightPart}`;
        } while (appState.usedCodesList.has(fullCode));
        
        // Mark this code as used
        appState.usedCodesList.add(fullCode);
        
        return { leftPart, rightPart, fullCode };
    }
};

// ==========================================
// WISH SELECTOR
// ==========================================
const WishSelector = {
    /**
     * Get random wish from database
     * @returns {string} Random wish message
     */
    getRandomWish() {
        const randomIndex = Math.floor(Math.random() * WISHES_DATABASE.length);
        return WISHES_DATABASE[randomIndex];
    }
};

// ==========================================
// UI CONTROLLER
// ==========================================
const UIController = {
    /**
     * Hide before-pick section and show after-pick section
     */
    switchToResultView() {
        elements.beforePickSection.classList.add('hidden');
        elements.afterPickSection.classList.remove('hidden');
    },
    
    /**
     * Display the generated code
     * @param {Object} code - Code object with leftPart and rightPart
     */
    displayCode(code) {
        elements.codeLeftBox.textContent = code.leftPart;
        elements.codeRightBox.textContent = code.rightPart;
    },
    
    /**
     * Display the wish message
     * @param {string} wish - Wish message to display
     */
    displayWish(wish) {
        elements.wishMessageText.textContent = wish;
    },
    
    /**
     * Disable the pick button
     */
    disablePickButton() {
        elements.pickButton.disabled = true;
        elements.pickButton.style.cursor = 'not-allowed';
    }
};

// ==========================================
// MAIN CONTROLLER
// ==========================================
const WishBoxController = {
    /**
     * Initialize the wish box application
     */
    init() {
        this.attachEventListeners();
        console.log('ASF SACOETEC Wish Box initialized successfully! 🎁');
    },
    
    /**
     * Attach event listeners
     */
    attachEventListeners() {
        elements.pickButton.addEventListener('click', () => this.handlePickWish());
    },
    
    /**
     * Handle wish picking process
     */
    handlePickWish() {
        // Prevent multiple picks
        if (appState.hasPickedWish) {
            console.log('Wish already picked!');
            return;
        }
        
        // Generate unique code
        const generatedCode = CodeGenerator.generateUniqueCode();
        console.log('Generated Code:', generatedCode.fullCode);
        
        // Select random wish
        const selectedWish = WishSelector.getRandomWish();
        console.log('Selected Wish:', selectedWish);
        
        // Update UI
        UIController.displayCode(generatedCode);
        UIController.displayWish(selectedWish);
        UIController.switchToResultView();
        UIController.disablePickButton();
        
        // Update state
        appState.hasPickedWish = true;
        
        console.log('Blessing claimed successfully! ✨');
    }
};

// ==========================================
// APPLICATION ENTRY POINT
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    WishBoxController.init();
});
