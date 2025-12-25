import React, { useState } from 'react';
import { Gift, Sparkles } from 'lucide-react';

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

export default function WishBox() {
  const [picked, setPicked] = useState(false);
  const [wish, setWish] = useState('');
  const [code, setCode] = useState('');
  const [usedCodes, setUsedCodes] = useState(new Set());

  const generateCode = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const part1 = Array.from({length: 3}, () => letters[Math.floor(Math.random() * letters.length)]).join('');
    const part2 = Array.from({length: 3}, () => numbers[Math.floor(Math.random() * numbers.length)]).join('');
    return `${part1}-${part2}`;
  };

  const pickWish = () => {
    if (picked) return;
    
    let newCode;
    do {
      newCode = generateCode();
    } while (usedCodes.has(newCode));
    
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    setWish(randomWish);
    setCode(newCode);
    setUsedCodes(prev => new Set([...prev, newCode]));
    setPicked(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-yellow-300 mb-2 flex items-center justify-center gap-2">
            <Sparkles className="w-8 h-8" />
            ASF SACOETEC
            <Sparkles className="w-8 h-8" />
          </h1>
          <p className="text-white text-lg">Anglican Student Fellowship</p>
          <p className="text-yellow-200 text-sm mt-2">Wish Box - Pick Once Only!</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border-4 border-yellow-400">
          {!picked ? (
            <div className="text-center">
              <div className="mb-6">
                <Gift className="w-32 h-32 mx-auto text-yellow-300 animate-bounce" />
              </div>
              <button
                onClick={pickWish}
                className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold text-xl px-12 py-4 rounded-full shadow-lg transform transition hover:scale-105 active:scale-95"
              >
                Pick Your Wish! 🎁
              </button>
              <p className="text-white/80 text-sm mt-4">Click to receive your blessing</p>
            </div>
          ) : (
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-3">
                <div className="bg-yellow-300 text-purple-900 font-bold text-2xl px-6 py-3 rounded-lg shadow-lg">
                  {code.split('-')[0]}
                </div>
                <span className="text-yellow-300 text-3xl font-bold">-</span>
                <div className="bg-yellow-300 text-purple-900 font-bold text-2xl px-6 py-3 rounded-lg shadow-lg">
                  {code.split('-')[1]}
                </div>
              </div>
              <p className="text-yellow-200 text-sm">Your Unique Code</p>
              <div className="bg-white/20 rounded-2xl p-6 border-2 border-yellow-300">
                <p className="text-white text-xl leading-relaxed">{wish}</p>
              </div>
              <div className="flex items-center justify-center gap-2 text-yellow-300">
                <Sparkles className="w-5 h-5" />
                <p className="text-sm">Your blessing has been claimed!</p>
                <Sparkles className="w-5 h-5" />
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-6 text-white/70 text-sm">
          <p>Courtesy: FYB Chairman</p>
          <p className="mt-2">God bless you! 🙏</p>
        </div>
      </div>
    </div>
  );
}
