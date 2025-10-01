import { ChevronRight, Shield, Heart, Users, MessageSquare, Sparkles, Check, Copy, X } from 'lucide-react';
import { useState, useRef } from 'react';

function App() {
  const [activeReply, setActiveReply] = useState(0);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [showVibeList, setShowVibeList] = useState(false);
  const [copyTooltip, setCopyTooltip] = useState(false);

  const signupRef = useRef<HTMLElement>(null);
  const samplesRef = useRef<HTMLElement>(null);

  const sampleReplies = [
    {
      type: 'Gentleman',
      text: "Your scuba pick's wild—what pulled you into the deep first, the calm or the rush?",
      color: 'from-blue-600 to-blue-700'
    },
    {
      type: 'Witty',
      text: "Two truths & a lie? I call K-drama a truth—plot armor energy. Prove me wrong?",
      color: 'from-purple-600 to-purple-700'
    },
    {
      type: 'Playful',
      text: "You had me at coffee. Settle this: cortado > cold brew? Loser buys the next.",
      color: 'from-emerald-600 to-emerald-700'
    }
  ];

  const vibes = ['Confident King 👑', 'Smooth Operator 😎', 'Funny Guy 😂', 'Deep Talker 💭', 'Adventurous Soul 🏔️'];

  const easterEggLines = [
    "That smile could power half of Bangalore 😏",
    "Are you a WiFi signal? Because I'm feeling a strong connection 📶",
    "Your bio made me swipe right so fast, I think I broke my screen 📱",
    "I'd share my last samosa with you. That's how serious I am 🥟",
    "If we match, I promise to delete this app. No cap 🚫🧢"
  ];

  const scrollToSignup = () => {
    signupRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSamples = () => {
    samplesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const copyWittyLine = async () => {
    const textToCopy = "Two truths & a lie? I bet your 'lie' is that you're single 👀.";
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopyTooltip(true);
      setTimeout(() => setCopyTooltip(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const showRandomEasterEgg = () => {
    setShowEasterEgg(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-slate-950 to-emerald-600/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjMWU0MGFmIiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-30" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">India's First AI Wingman</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Text smarter,<br />
              <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">not thirstier.</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto">
              Get gentleman, witty, or playful replies for any situation—without screenshots or creepiness.
            </p>

            <button
              onClick={scrollToSignup}
              className="group bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-400 hover:to-blue-400 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/25 inline-flex items-center gap-2"
            >
              Fix My Rizz 🚀
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-4">Pick Your Situation</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Tell us the vibe: bio theme, your goal, and the energy you want to bring.
                </p>
                <button
                  onClick={() => setShowVibeList(!showVibeList)}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg transition-all transform hover:scale-105"
                >
                  Pick My Vibe 😎
                </button>
                {showVibeList && (
                  <div className="mt-4 space-y-2">
                    {vibes.map((vibe, idx) => (
                      <div key={idx} className="bg-slate-950 border border-slate-600 rounded-lg px-4 py-2 text-sm">
                        {vibe}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8" />
                </div>
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-4">Get 3 AI-Crafted Replies</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Choose from Gentleman, Witty, or Playful—tailored to your style.
                </p>
                <button
                  onClick={scrollToSamples}
                  className="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-4 py-2 rounded-lg transition-all transform hover:scale-105"
                >
                  Show Me the Magic ✨
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8" />
                </div>
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <h3 className="text-2xl font-bold mb-4">Send With Confidence</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Get feedback on your draft and level up your conversation game.
                </p>
                <button
                  onClick={scrollToSignup}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-4 py-2 rounded-lg transition-all transform hover:scale-105"
                >
                  Send With Swagger 💬
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Wingman */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Why Wingman?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-emerald-500/20 rounded-2xl p-8">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">No screenshots. No creep.</h3>
              <p className="text-slate-300 leading-relaxed">
                We only coach your words. Your privacy is sacred.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-blue-500/20 rounded-2xl p-8">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Respect-first AI</h3>
              <p className="text-slate-300 leading-relaxed">
                Never pushes risky or rude lines. Real connections only.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-purple-500/20 rounded-2xl p-8">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Made for Indian men</h3>
              <p className="text-slate-300 leading-relaxed">
                Cultural awareness baked in. We get it.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-slate-800/50 border border-slate-700 rounded-full px-6 py-3 font-semibold">
              🔒 Privacy-first
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-full px-6 py-3 font-semibold">
              ❤️ Respect-first
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-full px-6 py-3 font-semibold">
              🤝 For the Boys
            </div>
          </div>
        </div>
      </section>

      {/* Sample Outputs */}
      <section ref={samplesRef} className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Sample Replies
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center gap-4 mb-8">
              {sampleReplies.map((reply, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveReply(idx)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    activeReply === idx
                      ? `bg-gradient-to-r ${reply.color} shadow-lg`
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {reply.type}
                </button>
              ))}
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-10 h-10 bg-gradient-to-br ${sampleReplies[activeReply].color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-emerald-400 mb-2">{sampleReplies[activeReply].type}</div>
                  <p className="text-xl md:text-2xl leading-relaxed">
                    {sampleReplies[activeReply].text}
                  </p>
                </div>
              </div>
              <div className="relative inline-block">
                <button
                  onClick={copyWittyLine}
                  className="bg-slate-700 hover:bg-slate-600 text-white font-semibold px-4 py-2 rounded-lg transition-all inline-flex items-center gap-2"
                >
                  <Copy className="w-4 h-4" />
                  Copy a Witty Line
                </button>
                {copyTooltip && (
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
                    Line copied—use wisely, bro 😎
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Choose Your Level
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <div className="text-4xl font-bold mb-6">₹0</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">5 replies per day</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">3 style options</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Basic feedback</span>
                </li>
              </ul>
              <button
                onClick={scrollToSignup}
                className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 rounded-xl transition-colors"
              >
                I'll Risk the Dry Texts 🥲
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-emerald-600 to-blue-600 rounded-2xl p-8 relative transform md:scale-105 shadow-2xl shadow-emerald-500/25">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-slate-900 font-bold px-4 py-1 rounded-full text-sm">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro Wingman</h3>
              <div className="text-4xl font-bold mb-6">₹399<span className="text-lg font-normal">/month</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Unlimited replies</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Saved favorites</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Custom vibes</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Advanced feedback</span>
                </li>
              </ul>
              <a
                href="#payment"
                className="block w-full bg-white text-slate-900 hover:bg-slate-100 font-semibold py-3 rounded-xl transition-colors text-center"
              >
                Unlimited Rizz 🕶️
              </a>
            </div>

            {/* Elite Plan */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-2">Elite Coaching</h3>
              <div className="text-4xl font-bold mb-6">₹4,999<span className="text-lg font-normal">/month</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Everything in Pro</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">AI + human hybrid coaching</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Profile optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Weekly strategy calls</span>
                </li>
              </ul>
              <a
                href="#elite-coaching"
                className="block w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-400 hover:to-blue-400 text-white font-semibold py-3 rounded-xl transition-all text-center"
              >
                I Want The Dating MBA 🎓❤️
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600/20 via-slate-900 to-emerald-600/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stop Ghosting. Start Dating.
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Upgrade your game. Join thousands of Indian men texting smarter.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setShowSignupModal(true)}
              className="group bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-400 hover:to-blue-400 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/25 inline-flex items-center gap-2"
            >
              Join the Boys' Club 🚀
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToSamples}
              className="group bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all transform hover:scale-105 inline-flex items-center gap-2"
            >
              Give Me Lines That Work 💌
            </button>
          </div>
        </div>
      </section>

      {/* Signup Form Section */}
      <section ref={signupRef} className="py-20 bg-slate-900/50">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4 text-center">Join the Waitlist</h2>
            <p className="text-slate-300 text-center mb-8">Be the first to level up your dating game.</p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <input
                type="tel"
                placeholder="Your Phone (Optional)"
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-400 hover:to-blue-400 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-105"
              >
                Get Early Access 🚀
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-6">
            <p className="text-slate-400 mb-2">
              Wingman never stores names, photos, or handles. 100% privacy-first.
            </p>
            <p className="text-emerald-400 font-semibold text-lg">
              For the boys. Not the bots.
            </p>
          </div>
          <div className="flex justify-center mb-6">
            <button
              onClick={showRandomEasterEgg}
              className="text-slate-600 hover:text-slate-400 text-xs transition-colors"
            >
              Don't Press Me 👀
            </button>
          </div>
          <div className="text-center text-slate-500 text-sm">
            © 2025 Wingman. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Signup Modal */}
      {showSignupModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowSignupModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-3xl font-bold mb-4">Join the Waitlist</h2>
            <p className="text-slate-300 mb-6">Be the first to level up your dating game.</p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <input
                type="tel"
                placeholder="Your Phone (Optional)"
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-400 hover:to-blue-400 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-105"
              >
                Get Early Access 🚀
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Easter Egg Modal */}
      {showEasterEgg && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-gradient-to-br from-emerald-600 to-blue-600 border border-emerald-400 rounded-2xl p-8 max-w-md w-full relative animate-bounce">
            <button
              onClick={() => setShowEasterEgg(false)}
              className="absolute top-4 right-4 text-white hover:text-slate-200 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-center">
              <div className="text-6xl mb-4">😏</div>
              <h3 className="text-2xl font-bold mb-4">Caught You Lacking!</h3>
              <p className="text-lg leading-relaxed">
                {easterEggLines[Math.floor(Math.random() * easterEggLines.length)]}
              </p>
              <button
                onClick={() => setShowEasterEgg(false)}
                className="mt-6 bg-white text-slate-900 hover:bg-slate-100 font-semibold px-6 py-2 rounded-lg transition-colors"
              >
                I Shouldn't Have Clicked 😂
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
