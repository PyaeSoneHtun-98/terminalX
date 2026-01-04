import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { FiArrowLeft, FiChevronDown } from "react-icons/fi"
import { FaFacebook, FaTelegram } from 'react-icons/fa'
import { SiAdobepremierepro, SiAdobeaftereffects, SiBlender } from 'react-icons/si'

// Week data for accordion
const weekData = [
  {
    week: "Week 1",
    title: "Foundations & Professional Workflow",
    days: [
      {
        day: "Day 1: Orientation & Industry Insight",
        content: [
          "သင်တန်းမိတ်ဆက်နှင့် သင်တန်းသားများ၏ ရည်မှန်းချက်များကို ဆွေးနွေးခြင်း။",
          "Gaming Industry ထဲမှာ Editor တစ်ယောက်ရဲ့ အခန်းကဏ္ဍနှင့် အခွင့်အလမ်းများ။",
          "Professional Editor တစ်ယောက် သိထားရမည့် Do's & Don'ts များ။"
        ]
      },
      {
        day: "Day 2: Adobe Premiere Pro Essentials",
        content: [
          "Project Setup နှင့် Footage များ စနစ်တကျ စီမံခန့်ခွဲနည်း။",
          "အလုပ်တွင်ကျယ်စေမည့် Essential Shortcuts များ။",
          "Keyframe အခြေခံနှင့် Smooth ဖြစ်သော Motion များအတွက် Graph အသုံးပြုနည်း။"
        ]
      },
      {
        day: "Day 3: Editing Techniques & Audio Basics",
        content: [
          "Effects, Presets နှင့် Transitions များကို ကျွမ်းကျင်စွာ အသုံးပြုခြင်း။",
          "Masking အခြေခံနှင့် Green Screen ဖယ်ရှားနည်း။",
          "Sound Design အခြေခံ (Gaming Video တစ်ခု၏ အသက်သည် အသံဖြစ်သည်)။"
        ]
      }
    ],
    assignment: "Assignment 1: Basic Gaming Video တစ်ခုအား သင်ကြားခဲ့သည့် အချက်များသုံး၍ Edit ရန်။"
  },
  {
    week: "Week 2",
    title: "The Art of Speed & Sync (Time Remapping)",
    days: [
      {
        day: "Day 1: Advanced Time Remapping",
        content: ["Clip များကို အနှေး/အမြန် (Slow-mo & Fast-forward) Smooth ဖြစ်အောင် ပြုလုပ်နည်း။"]
      },
      {
        day: "Day 2: Sync Editing (Rhythm & Beat)",
        content: ["Music Beat နှင့် Gameplay အံကိုက်ဖြစ်အောင် Sync လုပ်နည်း။"]
      },
      {
        day: "Day 3: Assignment Review Session",
        content: ["Week 1 Assignment များအပေါ် အားနည်းချက်၊ အားသာချက်များကို အသေးစိတ် Feedback ပေးခြင်း။"]
      }
    ],
    assignment: "Assignment 2: Speed Remap နှင့် Sync ကို အသုံးပြုထားသော Montage Video တစ်ခု ဖန်တီးရန်။"
  },
  {
    week: "Week 3",
    title: "Dynamic Styling & EXE Content",
    days: [
      {
        day: "Day 1: Camera Shakes & Movement",
        content: ["Video ကို ပိုမို Dynamic ဖြစ်စေမည့် Shake Effect အမျိုးမျိုး။"]
      },
      {
        day: "Day 2: Professional EXE Video Editing",
        content: ["Week 1 & 2 သင်ခန်းစာများကို ပေါင်းစပ်ပြီး Funny/Fast-paced EXE Video တစ်ခု တည်ဆောက်နည်း။"]
      },
      {
        day: "Day 3: Assignment Review",
        content: ["Week 2 Assignment များအပေါ် Review ပေးခြင်း။"]
      }
    ],
    assignment: null
  },
  {
    week: "Week 4",
    title: "Cinematic Visuals & Finalizing Premiere Pro",
    days: [
      {
        day: "Day 1: Color Correction & Grading",
        content: ["Gaming Footage များကို ပိုမိုလှပသွားအောင် အရောင်တင်နည်း (Lumetri Color)။"]
      },
      {
        day: "Day 2: Career Path & Project Planning",
        content: ["မိမိသွားချင်သော လမ်းကြောင်း (Montage, EXE သို့မဟုတ် Content Video) အတွက် လိုအပ်သည်များကို ဆွေးနွေးခြင်း။"]
      },
      {
        day: "Day 3: Assignment Review",
        content: ["Week 3 Assignment များအပေါ် Review ပေးခြင်း။"]
      }
    ],
    assignment: "Assignment 4 (Premiere Pro Final): မိမိနှစ်သက်ရာ Style (EXE/Montage/Content) ဖြင့် Professional Video တစ်ခု Edit ရန်။",
    special: "အထူးအစီအစဉ်: လက်ရှိ EXE Editing နယ်ပယ်မှာ ကျွမ်းကျင်တဲ့ Guest Editor တစ်ယောက်မှ Review နှင့် Sharing လုပ်ပေးပါမည်။"
  },
  {
    week: "Week 5",
    title: "Intro to After Effects (VFX & Velocity)",
    days: [
      {
        day: "Day 1: After Effects Interface & Workflow",
        content: ["After Effects ၏ Interface နှင့် Workflow အခြေခံများ။"]
      },
      {
        day: "Day 2: Advanced Velocity & Shakes",
        content: ["Premiere Pro ထက် ပိုမိုကောင်းမွန်သော Advanced Time Remapping နှင့် Shakes များ။"]
      },
      {
        day: "Day 3: Week 4 Assignment Review",
        content: ["Week 4 Assignment များအပေါ် Review ပေးခြင်း။"]
      }
    ],
    assignment: "Assignment 5: AE ကို သုံးပြီး Smooth ဖြစ်လွန်းသော Velocity Edit တစ်ခု ပြုလုပ်ရန်။"
  },
  {
    week: "Week 6",
    title: "3D Space & Motion Control",
    days: [
      {
        day: "Day 1: Null Layers & Parenting",
        content: ["Complex Motion များအတွက် Null Layers နှင့် Parenting အသုံးပြုနည်း။"]
      },
      {
        day: "Day 2: Camera Layer & 3D Movement",
        content: ["Video ထဲမှာ 3D ဆန်ဆန် လှုပ်ရှားမှုများ ထည့်သွင်းနည်း။"]
      },
      {
        day: "Day 3: Week 5 Assignment Review",
        content: ["Week 5 Assignment များအပေါ် Review ပေးခြင်း။"]
      }
    ],
    assignment: "Assignment 6: Null & Camera သုံးပြီး ပိုမိုဆန်းသစ်သော Montage တစ်ခု ဖန်တီးရန်။"
  },
  {
    week: "Week 7",
    title: "Visual Effects & Element 3D",
    days: [
      {
        day: "Day 1: Essential Plugins & VFX Intro",
        content: ["VFX အတွက် အရေးကြီးသော Plugins များ မိတ်ဆက်။"]
      },
      {
        day: "Day 2: Element 3D Masterclass",
        content: ["3D Object များကို Video ထဲ ထည့်သွင်း အသုံးပြုနည်း။"]
      },
      {
        day: "Day 3: Week 6 Assignment Review",
        content: ["Week 6 Assignment များအပေါ် Review ပေးခြင်း။"]
      }
    ],
    assignment: "Assignment 7: Element 3D အသုံးပြုထားသော 3D Edit တစ်ခု ဖန်တီးရန်။"
  },
  {
    week: "Week 8",
    title: "After Effects Mastery",
    days: [
      {
        day: "Day 1 & 2: Project Guidance",
        content: ["သင်တန်းသားတစ်ဦးချင်းစီ၏ Editing Style ပေါ်မူတည်၍ လိုအပ်သော Advanced Technique များကို ပံ့ပိုးပေးခြင်း။"]
      },
      {
        day: "Day 3: Week 7 Assignment Review",
        content: ["Week 7 Assignment များအပေါ် Review ပေးခြင်း။"]
      }
    ],
    assignment: null
  },
  {
    week: "Week 9 & 10",
    title: "3D Animation with Blender (MLBB Focus)",
    days: [
      {
        day: "Blender 3D Animation",
        content: ["MLBB Characters များကို 3D Animation အဖြစ် ဘယ်လို ဖန်တီးမလဲဆိုတာကို အခြေခံမှ စတင် သင်ကြားပေးပါမည်။"]
      }
    ],
    assignment: null,
    finalAssignment: "🏆 Final Grand Assignment (၁၅ ရက် အချိန်ပေးပါမည်): သင်ကြားခဲ့သမျှ Skills အားလုံးကို အသုံးချပြီး ၂ ယောက် တစ်ဖွဲ့ Content တစ်ခု ဖန်တီးရပါမည်။"
  }
]

// Accordion Component
const WeekAccordion = ({ week, title, days, assignment, special, finalAssignment, isOpen, onClick }) => {
  return (
    <div className="mb-4">
      <motion.button
        onClick={onClick}
        className="w-full flex items-center justify-between p-4 bg-gray-900 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex items-center gap-3">
          <span className="text-purple-400 font-bold">{week}</span>
          <span className="text-white font-semibold text-sm md:text-base">{title}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiChevronDown className="text-white text-xl" />
        </motion.div>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-gray-800/50 rounded-b-lg border-x border-b border-gray-700">
              {days.map((dayItem, idx) => (
                <div key={idx} className="mb-4 last:mb-0">
                  <h4 className="text-purple-300 font-semibold mb-2 text-sm md:text-base">{dayItem.day}</h4>
                  <ul className="space-y-1">
                    {dayItem.content.map((item, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-gray-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {assignment && (
                <div className="mt-4 p-3 bg-purple-900/30 rounded-lg border border-purple-700/50">
                  <p className="text-purple-200 text-sm">📝 {assignment}</p>
                </div>
              )}
              {special && (
                <div className="mt-3 p-3 bg-yellow-900/30 rounded-lg border border-yellow-700/50">
                  <p className="text-yellow-200 text-sm">⭐ {special}</p>
                </div>
              )}
              {finalAssignment && (
                <div className="mt-3 p-3 bg-green-900/30 rounded-lg border border-green-700/50">
                  <p className="text-green-200 text-sm">{finalAssignment}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


export function Course() {
  const navigate = useNavigate()
  const [openWeek, setOpenWeek] = useState(null)

  const toggleWeek = (index) => {
    setOpenWeek(openWeek === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-black relative">
      <button onClick={() => navigate(-1)}
        className='absolute top-2 left-2 z-40 cursor-pointer'>
        <FiArrowLeft className="text-white text-2xl" />
      </button>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Course Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
            🎮 Mastering Gaming Video Editing & 3D Animation (MLBB Base)
          </h1>
          <h2 className="text-lg md:text-xl text-gray-300 mb-6">
            (From Zero to Pro: Premiere Pro, After Effects & Blender)
          </h2>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-600 mb-12"></div>

        {/* Who Should Attend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <span>🔸</span> ဘယ်သူတွေ တက်ရောက်သင့်လဲ?
          </h3>
          <ul className="space-y-3">
            <li className="text-sm md:text-base text-gray-300 flex items-start gap-2">
              <span className="text-white mt-1">•</span>
              <span>YouTube, TikTok, Facebook တို့မှာ ကိုယ်ပိုင် Gaming Content တွေကို စနစ်တကျ ဖန်တီးတင်ဆက်ချင်သူများ။</span>
            </li>
            <li className="text-sm md:text-base text-gray-300 flex items-start gap-2">
              <span className="text-white mt-1">•</span>
              <span>Gameplay တွေကို လှပသပ်ရပ်ပြီး Professional ဆန်အောင် တည်းဖြတ်ချင်သူများ။</span>
            </li>
            <li className="text-sm md:text-base text-gray-300 flex items-start gap-2">
              <span className="text-white mt-1">•</span>
              <span>Gaming နယ်ပယ်ကို အရည်အချင်းအပြည့်နဲ့ တကယ်ဝင်ရောက်ချင်သူများ။</span>
            </li>
          </ul>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-600 mb-12"></div>

        {/* What Will You Learn */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span>🎓</span> ဘာတွေ သင်ပြသွားမှာလဲ?
          </h3>
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            <div className="flex flex-col items-center space-y-3 p-4">
              <SiAdobepremierepro className="text-4xl text-purple-600" />
              <span className="text-white font-semibold text-xs md:text-base text-center">Adobe Premiere Pro</span>
            </div>
            <div className="flex flex-col items-center space-y-3 p-4">
              <SiAdobeaftereffects className="text-4xl text-purple-400" />
              <span className="text-white font-semibold text-xs md:text-base text-center">Adobe After Effects</span>
            </div>
            <div className="flex flex-col items-center space-y-3 p-4">
              <SiBlender className="text-4xl text-orange-500" />
              <span className="text-white font-semibold text-xs md:text-base text-center">Blender</span>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-600 mb-12"></div>

        {/* Week by Week Curriculum - Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span>📅</span> သင်ရိုးညွှန်းတမ်း (Week by Week)
          </h3>
          <div className="space-y-2">
            {weekData.map((week, index) => (
              <WeekAccordion
                key={index}
                week={week.week}
                title={week.title}
                days={week.days}
                assignment={week.assignment}
                special={week.special}
                finalAssignment={week.finalAssignment}
                isOpen={openWeek === index}
                onClick={() => toggleWeek(index)}
              />
            ))}
          </div>
        </motion.div>

        {/* Rewards & Opportunities - For First Place Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mb-12"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <span>🎁</span> ပထမဆုရရှိသော အဖွဲ့အတွက် အခွင့်အရေး
          </h3>
          <ul className="space-y-3">
            <li className="text-sm md:text-base text-gray-300 flex items-start gap-2">
              <span className="text-yellow-400 mt-1">🏆</span>
              <span><strong>Promotion:</strong> ပထမရရှိသော အဖွဲ့၏ Video ကို ကျွန်တော့်ရဲ့ Social Media Platform အားလုံးမှာ တင်ပေးပြီး Promote လုပ်ပေးပါမည်။</span>
            </li>
            <li className="text-sm md:text-base text-gray-300 flex items-start gap-2">
              <span className="text-yellow-400 mt-1">🏆</span>
              <span><strong>Job Opportunity:</strong> Gaming နယ်ပယ်မှာ အလုပ်လုပ်ချင်သူများအတွက် Client များနှင့် တိုက်ရိုက်ချိတ်ဆက်ပေးပြီး အလုပ်ရသည်အထိ ကူညီပေးပါမည်။</span>
            </li>
            <li className="text-sm md:text-base text-gray-300 flex items-start gap-2">
              <span className="text-yellow-400 mt-1">🏆</span>
              <span><strong>Special Guest Review:</strong> Final Assignment ကို Game Cast Network Myanmar ရဲ့ 3D Team Manager ဖြစ်သူ Yum Py ကိုယ်တိုင် Review ပေးသွားမှာ ဖြစ်ပါတယ်။</span>
            </li>
          </ul>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-600 mb-12"></div>

        {/* Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <span>🧰</span> သင်တန်းတက်ရန် လိုအပ်ချက်များ
          </h3>
          <ul className="space-y-3">
            <li className="text-sm md:text-base text-gray-300 flex items-start gap-2">
              <span className="text-white mt-1">•</span>
              <span>Editing ပြုလုပ်နိုင်တဲ့ Computer/Laptop တစ်လုံး။</span>
            </li>
            <li className="text-sm md:text-base text-gray-300 flex items-start gap-2">
              <span className="text-white mt-1">•</span>
              <span>Computer အခြေခံ အသုံးပြုတတ်ရန်။</span>
            </li>
          </ul>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-600 mb-12"></div>

        {/* Course Logistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12 space-y-6"
        >
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
              <span>📆</span> သင်တန်းကာလ: ၂ လခွဲ (၁၀ ပတ်)
            </h3>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
              <span>📚</span> သင်ကြားမည့်ရက်: တစ်ပတ် ၃ ရက်(သောကြာ၊ စနေ၊ တနင်္ဂနွေ)၊ တစ်ရက် ၂ နာရီ
            </h3>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2 mb-3">
              <span>💻</span> သင်ကြားပုံစံ: Zoom မှ Screen Share ဖြင့် တိုက်ရိုက်သင်ကြားမည်။
            </h3>
            <div className="space-y-3 text-sm md:text-base text-gray-300 ml-8">
              <p>သင်ခန်းစာလွတ်သွားပါက Telegram Group တွင် Record Video များဖြင့် ပြန်လည်လေ့လာနိုင်သည်။</p>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-600 mb-12"></div>

        {/* Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12 text-center"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center justify-center gap-2">
            <span>💰</span> သင်တန်းကြေး
          </h3>
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-600 max-w-md mx-auto">
            <div className="text-2xl md:text-3xl font-bold text-white">
              150,000 Ks
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-600 mb-12"></div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mb-12 text-center"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center justify-center gap-2">
            <span>📩</span> သင်တန်းစုံစမ်းရန်
          </h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <motion.a
              href="https://www.facebook.com/share/15xC1pXdLY/?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full sm:w-auto px-6 py-3 rounded-xl cursor-pointer font-semibold text-sm md:text-base text-white uppercase tracking-wider transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
              style={{
                border: '1px solid rgba(59, 130, 246, 0.5)',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 16px 0 rgba(59, 130, 246, 0.2)'
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaFacebook size={20} className="text-blue-400" />
              <span>စုံစမ်းမေးမြန်းရန်</span>
            </motion.a>

            <motion.a
              href="https://t.me/terminqlx"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full sm:w-auto px-6 py-3 rounded-xl cursor-pointer font-semibold text-sm md:text-base text-white uppercase tracking-wider transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
              style={{
                border: '1px solid rgba(59, 130, 246, 0.5)',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 16px 0 rgba(59, 130, 246, 0.2)'
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaTelegram size={20} className="text-blue-400" />
              <span>စုံစမ်းမေးမြန်းရန်</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}

export default Course