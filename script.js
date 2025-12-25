// All 100 wishes
const wishes = [
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

// State management
let picked = false;
let usedCodes = new Set();

// Generate random code
function generateCode() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    
    let part1 = '';
    for (let i = 0; i < 3; i++) {
        part1 += letters[Math.floor(Math.random() * letters.length)];
    }
    
    let part2 = '';
    for (let i = 0; i < 3; i++) {
        part2 += numbers[Math.floor(Math.random() * numbers.length)];
    }
    
    return { part1, part2, full: `${part1}-${part2}` };
}

// Pick a wish
function pickWish() {
    if (picked) return;
    
    // Generate unique code
    let code;
    do {
        code = generateCode();
    } while (usedCodes.has(code.full));
    
    usedCodes.add(code.full);
    
    // Get random wish
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    
    // Update UI
    document.getElementById('codePart1').textContent = code.part1;
    document.getElementById('codePart2').textContent = code.part2;
    document.getElementById('wishText').textContent = randomWish;
    
    // Hide pick section, show result
    document.getElementById('pickSection').classList.add('hidden');
    document.getElementById('resultSection').classList.remove('hidden');
    
    // Disable picking again
    picked = true;
    document.getElementById('pickBtn').disabled = true;
}

// Event listener
document.getElementById('pickBtn').addEventListener('click', pickWish);
