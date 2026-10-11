import { useState, useEffect, useRef, type ReactNode } from 'react';

const BUSINESS_PHONE = '+16478743551';
const BUSINESS_PHONE_DISPLAY = '(647) 874-3551';
const BOOKING_EMAIL = 'shandallee@proton.me';

// ============ SCROLL REVEAL ============
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    const elements = document.querySelectorAll('.reveal-section');
    elements.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);
  
  return ref;
}

function RevealSection({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal-section ${className}`}>
      {children}
    </div>
  );
}

// ============ NAVIGATION ============
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass py-3' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#FF5A00] rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-sm font-[Space_Grotesk]">LM</span>
          </div>
          <span className="text-[#F4F1EA] font-[Space_Grotesk] font-bold text-lg tracking-tight">LIBERTY MOVING</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-[#B8BDC2] hover:text-[#FF5A00] transition-colors text-sm font-medium">Services</a>
          <a href="#journey" className="text-[#B8BDC2] hover:text-[#FF5A00] transition-colors text-sm font-medium">How It Works</a>
          <a href="#calculator" className="text-[#B8BDC2] hover:text-[#FF5A00] transition-colors text-sm font-medium">Book a Move</a>
          <a href="#challenges" className="text-[#B8BDC2] hover:text-[#FF5A00] transition-colors text-sm font-medium">Condo Moving</a>
          <a href={`tel:${BUSINESS_PHONE}`} className="btn-primary bg-[#FF5A00] text-white px-5 py-2.5 rounded-sm text-sm font-semibold hover:bg-[#e64d00] transition-colors">
            CALL NOW
          </a>
        </div>

        <button type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#F4F1EA]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-navigation" onClick={() => setMenuOpen(false)} className="md:hidden glass mt-2 mx-4 rounded-lg p-6 animate-scale-in">
          <div className="flex flex-col gap-4">
            <a href="#services" className="text-[#B8BDC2] hover:text-[#FF5A00] transition-colors text-sm font-medium">Services</a>
            <a href="#journey" className="text-[#B8BDC2] hover:text-[#FF5A00] transition-colors text-sm font-medium">How It Works</a>
            <a href="#calculator" className="text-[#B8BDC2] hover:text-[#FF5A00] transition-colors text-sm font-medium">Book a Move</a>
            <a href="#challenges" className="text-[#B8BDC2] hover:text-[#FF5A00] transition-colors text-sm font-medium">Condo Moving</a>
            <a href={`tel:${BUSINESS_PHONE}`} className="bg-[#FF5A00] text-white px-5 py-2.5 rounded-sm text-sm font-semibold text-center">CALL NOW</a>
          </div>
        </div>
      )}
    </nav>
  );
}

// ============ HERO SECTION ============
function Hero() {
  const [currentScene, setCurrentScene] = useState(0);
  const scenes = ['TRUCK', 'LIBERTY VILLAGE', 'CONDO', 'ELEVATOR', 'APARTMENT', 'NEW HOME'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScene(prev => (prev + 1) % scenes.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <img 
          src="https://image.qwenlm.ai/generated-images/da997b2f-5a10-40b4-82ce-7c8eedccffda/_result.png" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#101010]/60 to-[#050505]" />
        
        {/* Animated city elements */}
        <div className="absolute inset-0 opacity-20">
          {/* Building silhouettes */}
          <div className="absolute bottom-0 left-0 right-0 h-[60%]">
            <div className="absolute bottom-0 left-[5%] w-[8%] h-[45%] bg-[#181818] rounded-t-sm" />
            <div className="absolute bottom-0 left-[15%] w-[6%] h-[55%] bg-[#1a1a1a] rounded-t-sm" />
            <div className="absolute bottom-0 left-[23%] w-[10%] h-[70%] bg-[#151515] rounded-t-sm" />
            <div className="absolute bottom-0 left-[35%] w-[7%] h-[50%] bg-[#1c1c1c] rounded-t-sm" />
            <div className="absolute bottom-0 left-[45%] w-[12%] h-[80%] bg-[#181818] rounded-t-sm" />
            <div className="absolute bottom-0 left-[60%] w-[8%] h-[60%] bg-[#1a1a1a] rounded-t-sm" />
            <div className="absolute bottom-0 left-[70%] w-[10%] h-[65%] bg-[#151515] rounded-t-sm" />
            <div className="absolute bottom-0 left-[82%] w-[9%] h-[40%] bg-[#1c1c1c] rounded-t-sm" />
            <div className="absolute bottom-0 left-[92%] w-[7%] h-[50%] bg-[#181818] rounded-t-sm" />
          </div>
        </div>

        {/* Moving truck silhouette */}
        <div className="absolute bottom-[15%] left-0 right-0 overflow-hidden">
          <div className="animate-[truck-drive_15s_linear_infinite]">
            <svg width="200" height="80" viewBox="0 0 200 80" className="opacity-30">
              <rect x="10" y="20" width="120" height="50" rx="3" fill="#181818" stroke="#FF5A00" strokeWidth="0.5" />
              <rect x="130" y="35" width="50" height="35" rx="2" fill="#1a1a1a" stroke="#FF5A00" strokeWidth="0.5" />
              <circle cx="40" cy="72" r="8" fill="#101010" stroke="#FF5A00" strokeWidth="0.5" />
              <circle cx="100" cy="72" r="8" fill="#101010" stroke="#FF5A00" strokeWidth="0.5" />
              <circle cx="155" cy="72" r="8" fill="#101010" stroke="#FF5A00" strokeWidth="0.5" />
              <rect x="135" y="40" width="20" height="15" rx="1" fill="#0a0a0a" stroke="#FF5A00" strokeWidth="0.3" />
            </svg>
          </div>
        </div>

        {/* Orange accent lights */}
        <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-[#FF5A00] rounded-full animate-glow-pulse" />
        <div className="absolute top-[30%] right-[15%] w-1.5 h-1.5 bg-[#FF5A00] rounded-full animate-glow-pulse" style={{animationDelay: '0.5s'}} />
        <div className="absolute top-[50%] left-[80%] w-1 h-1 bg-[#FF5A00] rounded-full animate-glow-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-[30%] left-[20%] w-1.5 h-1.5 bg-[#FF5A00] rounded-full animate-glow-pulse" style={{animationDelay: '1.5s'}} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Scene indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {scenes.map((scene, i) => (
            <div key={scene} className={`transition-all duration-500 ${i === currentScene ? 'w-8 h-1 bg-[#FF5A00]' : 'w-3 h-1 bg-[#B8BDC2]/30'}`} />
          ))}
        </div>

        <div className="text-xs font-mono text-[#FF5A00] tracking-[0.3em] mb-4 uppercase animate-fade-in">
          {scenes[currentScene]}
        </div>

        <h1 className="font-[Space_Grotesk] text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-6 animate-slide-up">
          <span className="gradient-text">YOUR MOVE.</span>
          <br />
          <span className="gradient-text-accent">WITHOUT THE CHAOS.</span>
        </h1>

        <p className="text-[#B8BDC2] text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-slide-up" style={{animationDelay: '0.2s'}}>
          Professional moving help for Liberty Village, condos, apartments and Toronto homes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
          <a href="#calculator" className="btn-primary animate-pulse-glow bg-[#FF5A00] text-white px-8 py-4 rounded-sm font-semibold text-lg hover:bg-[#e64d00] transition-all">
            REQUEST A BOOKING
          </a>
          <a href={`tel:${BUSINESS_PHONE}`} className="border border-[#B8BDC2]/30 text-[#F4F1EA] px-8 py-4 rounded-sm font-semibold text-lg hover:border-[#FF5A00] hover:text-[#FF5A00] transition-all">
            CALL NOW
          </a>
        </div>

        {/* Location tags */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 animate-fade-in" style={{animationDelay: '0.6s'}}>
          {['Liberty Village', 'King West', 'Fort York', 'CityPlace', 'Queen West', 'Parkdale'].map(loc => (
            <span key={loc} className="text-xs text-[#B8BDC2]/60 border border-[#B8BDC2]/10 px-3 py-1 rounded-full">
              {loc}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-[10px] text-[#B8BDC2]/50 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#FF5A00] to-transparent" />
      </div>
    </section>
  );
}

// ============ 3D MOVE JOURNEY ============
function MoveJourney() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { room: 'BEDROOM', action: 'PACK', item: 'BED FRAME', status: 'PROTECTED' },
    { room: 'LIVING ROOM', action: 'PROTECT', item: 'SOFA', status: 'WRAPPED' },
    { room: 'KITCHEN', action: 'LOAD', item: 'BOX 024', status: 'SEALED' },
    { room: 'HALLWAY', action: 'CARRY', item: 'DINING TABLE', status: 'IN TRANSIT' },
    { room: 'ELEVATOR', action: 'DESCEND', item: 'WARDROBE', status: 'MOVING' },
    { room: 'LOADING DOCK', action: 'TRUCK', item: 'ALL ITEMS', status: 'LOADED' },
    { room: 'TRANSPORT', action: 'DRIVE', item: 'FULL LOAD', status: 'EN ROUTE' },
    { room: 'UNLOAD', action: 'DELIVER', item: 'ALL ITEMS', status: 'ARRIVED' },
    { room: 'NEW HOME', action: 'SETTLE', item: 'EVERYTHING', status: 'HOME' },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const ratio = entry.intersectionRatio;
            const step = Math.min(Math.floor(ratio * steps.length * 2), steps.length - 1);
            setActiveStep(step);
          }
        });
      },
      { threshold: Array.from({ length: 20 }, (_, i) => i / 20) }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="journey" ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-xs font-mono text-[#FF5A00] tracking-[0.3em] mb-4">THE MOVE JOURNEY</div>
          <h2 className="font-[Space_Grotesk] text-4xl md:text-5xl font-bold gradient-text mb-4">
            FROM ROOM TO NEW HOME
          </h2>
          <p className="text-[#B8BDC2] max-w-xl mx-auto">Watch your move unfold. Every item tracked. Every step planned.</p>
        </div>

        {/* 3D Apartment Visualization */}
        <div className="apartment-3d relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Visual */}
            <div className="relative">
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Apartment outline */}
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  {/* Building outline */}
                  <rect x="50" y="30" width="300" height="340" fill="none" stroke="#181818" strokeWidth="2" rx="4" />
                  
                  {/* Rooms */}
                  <rect x="60" y="40" width="130" height="100" fill={activeStep >= 0 ? 'rgba(255,90,0,0.05)' : '#0a0a0a'} stroke={activeStep >= 0 ? '#FF5A00' : '#333'} strokeWidth="1" rx="2" className="transition-all duration-500" />
                  <text x="125" y="95" textAnchor="middle" fill={activeStep >= 0 ? '#FF5A00' : '#666'} fontSize="10" className="transition-all duration-500">BEDROOM</text>
                  
                  <rect x="200" y="40" width="140" height="100" fill={activeStep >= 1 ? 'rgba(255,90,0,0.05)' : '#0a0a0a'} stroke={activeStep >= 1 ? '#FF5A00' : '#333'} strokeWidth="1" rx="2" className="transition-all duration-500" />
                  <text x="270" y="95" textAnchor="middle" fill={activeStep >= 1 ? '#FF5A00' : '#666'} fontSize="10" className="transition-all duration-500">LIVING ROOM</text>
                  
                  <rect x="60" y="150" width="130" height="80" fill={activeStep >= 2 ? 'rgba(255,90,0,0.05)' : '#0a0a0a'} stroke={activeStep >= 2 ? '#FF5A00' : '#333'} strokeWidth="1" rx="2" className="transition-all duration-500" />
                  <text x="125" y="195" textAnchor="middle" fill={activeStep >= 2 ? '#FF5A00' : '#666'} fontSize="10" className="transition-all duration-500">KITCHEN</text>
                  
                  <rect x="200" y="150" width="140" height="80" fill={activeStep >= 3 ? 'rgba(255,90,0,0.05)' : '#0a0a0a'} stroke={activeStep >= 3 ? '#FF5A00' : '#333'} strokeWidth="1" rx="2" className="transition-all duration-500" />
                  <text x="270" y="195" textAnchor="middle" fill={activeStep >= 3 ? '#FF5A00' : '#666'} fontSize="10" className="transition-all duration-500">HALLWAY</text>
                  
                  {/* Elevator */}
                  <rect x="150" y="240" width="100" height="60" fill={activeStep >= 4 ? 'rgba(255,90,0,0.1)' : '#0a0a0a'} stroke={activeStep >= 4 ? '#FF5A00' : '#333'} strokeWidth="1.5" rx="2" className="transition-all duration-500" />
                  <text x="200" y="275" textAnchor="middle" fill={activeStep >= 4 ? '#FF5A00' : '#666'} fontSize="10" fontWeight="bold" className="transition-all duration-500">ELEVATOR</text>
                  
                  {/* Loading dock */}
                  <rect x="100" y="310" width="200" height="50" fill={activeStep >= 5 ? 'rgba(255,90,0,0.05)' : '#0a0a0a'} stroke={activeStep >= 5 ? '#FF5A00' : '#333'} strokeWidth="1" rx="2" className="transition-all duration-500" />
                  <text x="200" y="340" textAnchor="middle" fill={activeStep >= 5 ? '#FF5A00' : '#666'} fontSize="10" className="transition-all duration-500">LOADING DOCK</text>

                  {/* Movement path */}
                  {activeStep > 0 && (
                    <path
                      d="M 125 90 L 270 90 L 125 190 L 270 190 L 200 270 L 200 335"
                      fill="none"
                      stroke="#FF5A00"
                      strokeWidth="2"
                      strokeDasharray="8 4"
                      opacity="0.6"
                      className="moving-path"
                    />
                  )}

                  {/* Moving item indicator */}
                  {activeStep < steps.length && (
                    <g className="transition-all duration-700">
                      <circle
                        cx={[125, 270, 125, 270, 200, 200, 200, 200, 200][activeStep]}
                        cy={[90, 90, 190, 190, 270, 335, 335, 335, 335][activeStep]}
                        r="6"
                        fill="#FF5A00"
                        className="animate-glow-pulse"
                      />
                    </g>
                  )}
                </svg>

                {/* Floating labels */}
                <div className="absolute top-4 right-4 glass rounded-lg p-3 text-xs">
                  <div className="text-[#FF5A00] font-mono mb-1">DEMO</div>
                  <div className="text-[#F4F1EA] font-semibold">{steps[activeStep]?.item}</div>
                  <div className="text-[#B8BDC2]">{steps[activeStep]?.room}</div>
                  <div className="text-[#FF5A00] mt-1">{steps[activeStep]?.status}</div>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-3">
              {steps.map((step, i) => (
                <div
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`cursor-pointer p-4 rounded-lg border transition-all duration-300 ${
                    i === activeStep
                      ? 'border-[#FF5A00] bg-[#FF5A00]/5 glow-border'
                      : i < activeStep
                      ? 'border-[#FF5A00]/20 bg-[#101010]'
                      : 'border-[#181818] bg-[#0a0a0a]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                      i === activeStep ? 'bg-[#FF5A00] text-white' : i < activeStep ? 'bg-[#FF5A00]/20 text-[#FF5A00]' : 'bg-[#181818] text-[#666]'
                    }`}>
                      {i < activeStep ? '✓' : i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className={`font-semibold text-sm ${i === activeStep ? 'text-[#FF5A00]' : i < activeStep ? 'text-[#F4F1EA]' : 'text-[#666]'}`}>
                          {step.action}
                        </span>
                        <span className="text-xs text-[#B8BDC2] font-mono">{step.room}</span>
                      </div>
                      {i === activeStep && (
                        <div className="mt-2 flex gap-4 text-xs">
                          <span className="text-[#B8BDC2]">ITEM: <span className="text-[#F4F1EA]">{step.item}</span></span>
                          <span className="text-[#B8BDC2]">STATUS: <span className="text-[#FF5A00]">{step.status}</span></span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ MOVING CALCULATOR ============
function MovingCalculator() {
  const [moveType, setMoveType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    time: '',
    notes: '',
    from: '',
    to: '',
    floor: '',
    elevator: '',
    rooms: '',
    items: '',
    date: '',
  });
  const moveTypes = ['CONDO', 'APARTMENT', 'HOUSE', 'OFFICE', 'SINGLE ITEM', 'SMALL MOVE', 'FULL MOVE'];

  return (
    <section id="calculator" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]" />
      <div className="relative max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-xs font-mono text-[#FF5A00] tracking-[0.3em] mb-4">REQUEST YOUR MOVE</div>
          <h2 className="font-[Space_Grotesk] text-4xl md:text-5xl font-bold gradient-text mb-4">
            BOOK YOUR MOVE
          </h2>
          <p className="text-[#B8BDC2]">Request your preferred moving date. We will confirm availability and pricing before your booking is finalized.</p>
        </div>

        {/* Move Type Selection */}
        <div className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {moveTypes.map(type => (
              <button
                key={type}
                type="button"
                aria-pressed={moveType === type}
                onClick={() => setMoveType(type)}
                className={`p-4 rounded-lg border text-sm font-semibold transition-all duration-300 ${
                  moveType === type
                    ? 'border-[#FF5A00] bg-[#FF5A00]/10 text-[#FF5A00] glow-border'
                    : 'border-[#181818] bg-[#101010] text-[#B8BDC2] hover:border-[#FF5A00]/30'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Form */}
        {moveType && (
          <form action={`https://formsubmit.co/${BOOKING_EMAIL}`} method="POST" className="glass rounded-xl p-8 animate-scale-in">
            <input type="hidden" name="_subject" value="Liberty Moving — New booking request" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="move_type" value={moveType} />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="quote-name" className="text-xs text-[#B8BDC2] mb-2 block">YOUR NAME</label>
                <input name="name" id="quote-name" autoComplete="name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-[#0a0a0a] border border-[#181818] rounded-lg px-4 py-3" />
              </div>
              <div>
                <label htmlFor="quote-phone" className="text-xs text-[#B8BDC2] mb-2 block">CALLBACK NUMBER</label>
                <input name="phone" id="quote-phone" type="tel" autoComplete="tel" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-[#0a0a0a] border border-[#181818] rounded-lg px-4 py-3" />
              </div>
              <div>
                <label htmlFor="booking-email" className="text-xs text-[#B8BDC2] mb-2 block">YOUR EMAIL</label>
                <input id="booking-email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-[#0a0a0a] border border-[#181818] rounded-lg px-4 py-3" />
              </div>
              <div>
                <label htmlFor="booking-time" className="text-xs text-[#B8BDC2] mb-2 block">PREFERRED ARRIVAL WINDOW (TORONTO TIME)</label>
                <select id="booking-time" name="preferred_time" value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} className="w-full bg-[#0a0a0a] border border-[#181818] rounded-lg px-4 py-3">
                  <option value="">Flexible</option>
                  <option value="Morning (8 AM–12 PM)">Morning (8 AM–12 PM)</option>
                  <option value="Afternoon (12 PM–5 PM)">Afternoon (12 PM–5 PM)</option>
                  <option value="Evening (5 PM–8 PM)">Evening (5 PM–8 PM)</option>
                </select>
              </div>
              <div>
                <label htmlFor="quote-from" className="text-xs text-[#B8BDC2] font-mono tracking-wider mb-2 block">CURRENT LOCATION</label>
                <input name="pickup_location" id="quote-from" required
                  type="text"
                  value={formData.from}
                  onChange={e => setFormData({...formData, from: e.target.value})}
                  placeholder="e.g., Liberty Village, Unit 1204"
                  className="w-full bg-[#0a0a0a] border border-[#181818] rounded-lg px-4 py-3 text-[#F4F1EA] placeholder-[#666] focus:border-[#FF5A00] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="quote-to" className="text-xs text-[#B8BDC2] font-mono tracking-wider mb-2 block">NEW LOCATION</label>
                <input name="destination" id="quote-to" required
                  type="text"
                  value={formData.to}
                  onChange={e => setFormData({...formData, to: e.target.value})}
                  placeholder="e.g., King West, Suite 805"
                  className="w-full bg-[#0a0a0a] border border-[#181818] rounded-lg px-4 py-3 text-[#F4F1EA] placeholder-[#666] focus:border-[#FF5A00] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="quote-floor" className="text-xs text-[#B8BDC2] font-mono tracking-wider mb-2 block">FLOOR</label>
                <select name="floor" id="quote-floor"
                  value={formData.floor}
                  onChange={e => setFormData({...formData, floor: e.target.value})}
                  className="w-full bg-[#0a0a0a] border border-[#181818] rounded-lg px-4 py-3 text-[#F4F1EA] focus:border-[#FF5A00] focus:outline-none transition-colors"
                >
                  <option value="">Select floor</option>
                  {Array.from({length: 50}, (_, i) => (
                    <option key={i} value={i + 1}>{i + 1}{i === 0 ? 'st' : i === 1 ? 'nd' : i === 2 ? 'rd' : 'th'} floor</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="quote-elevator" className="text-xs text-[#B8BDC2] font-mono tracking-wider mb-2 block">ELEVATOR</label>
                <select name="elevator" id="quote-elevator"
                  value={formData.elevator}
                  onChange={e => setFormData({...formData, elevator: e.target.value})}
                  className="w-full bg-[#0a0a0a] border border-[#181818] rounded-lg px-4 py-3 text-[#F4F1EA] focus:border-[#FF5A00] focus:outline-none transition-colors"
                >
                  <option value="">Select</option>
                  <option value="yes">Building has elevator</option>
                  <option value="no">No elevator / Walk-up</option>
                  <option value="freight">Freight elevator</option>
                </select>
              </div>
              <div>
                <label htmlFor="quote-rooms" className="text-xs text-[#B8BDC2] font-mono tracking-wider mb-2 block">NUMBER OF ROOMS</label>
                <input name="rooms" id="quote-rooms"
                  type="number"
                  value={formData.rooms}
                  onChange={e => setFormData({...formData, rooms: e.target.value})}
                  placeholder="e.g., 2"
                  min="1"
                  className="w-full bg-[#0a0a0a] border border-[#181818] rounded-lg px-4 py-3 text-[#F4F1EA] placeholder-[#666] focus:border-[#FF5A00] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="quote-date" className="text-xs text-[#B8BDC2] font-mono tracking-wider mb-2 block">MOVING DATE</label>
                <input name="moving_date" id="quote-date" required
                  type="date"
                  value={formData.date}
                  onChange={e => setFormData({...formData, date: e.target.value})}
                  className="w-full bg-[#0a0a0a] border border-[#181818] rounded-lg px-4 py-3 text-[#F4F1EA] focus:border-[#FF5A00] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="booking-notes" className="text-xs text-[#B8BDC2] mb-2 block">ITEMS & SPECIAL INSTRUCTIONS (OPTIONAL)</label>
              <textarea id="booking-notes" name="notes" rows={4} maxLength={3000} value={formData.notes} onChange={e => setFormData({...formData, notes: e.target.value})} placeholder="Large furniture, access restrictions, packing help…" className="w-full bg-[#0a0a0a] border border-[#181818] rounded-lg px-4 py-3" />
            </div>
            <p className="mt-6 text-sm text-[#B8BDC2]">Your details are processed by FormSubmit and emailed to Liberty Moving so we can respond to your request. This does not reserve a date or take payment.</p>
            <button
              type="submit"
              className="mt-8 w-full btn-primary bg-[#FF5A00] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#e64d00] transition-all"
            >
              SEND BOOKING REQUEST
            </button>
          </form>
        )}

        <p className="mt-6 text-center text-sm text-[#B8BDC2]">
          Prefer to contact us directly? <a href={`mailto:${BOOKING_EMAIL}`} className="text-[#FF5A00] underline">{BOOKING_EMAIL}</a>
          {' '}or <a href={`tel:${BUSINESS_PHONE}`} className="text-[#FF5A00] underline">{BUSINESS_PHONE_DISPLAY}</a>.
        </p>
      </div>
    </section>
  );
}

// ============ SERVICES ============
function Services() {
  const services = [
    { title: 'LOCAL MOVING', icon: '🏙️', desc: 'Moving within Toronto. Fast, efficient, no surprises.' },
    { title: 'CONDO MOVING', icon: '🏢', desc: 'Elevator booking, dock coordination, building rules handled.' },
    { title: 'APARTMENT MOVING', icon: '🏠', desc: 'Walk-ups, tight stairwells, narrow hallways — we know the drill.' },
    { title: 'HOUSE MOVING', icon: '🏡', desc: 'Full home moves with careful handling of everything inside.' },
    { title: 'OFFICE MOVING', icon: '💼', desc: 'Minimal downtime. Organized office relocations.' },
    { title: 'FURNITURE MOVING', icon: '🛋️', desc: 'Single pieces or full furniture sets. Protected and delivered.' },
    { title: 'SINGLE-ITEM MOVING', icon: '📦', desc: 'Just one thing? We handle that too.' },
    { title: 'PACKING', icon: '📋', desc: 'Professional packing services. Everything wrapped, boxed, labeled.' },
    { title: 'LOADING & UNLOADING', icon: '🚛', desc: 'You drive, we load. Or we handle everything.' },
    { title: 'MOVE-IN / MOVE-OUT', icon: '🔑', desc: 'Full transition support. Clean start, clean finish.' },
  ];

  return (
    <section id="services" className="py-32 relative">
      <div className="absolute inset-0">
        <img 
          src="https://image.qwenlm.ai/generated-images/971c0048-9c95-4c00-b15d-c04d7f0d9927/_result.png" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/95 to-[#050505]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-xs font-mono text-[#FF5A00] tracking-[0.3em] mb-4">OUR SERVICES</div>
          <h2 className="font-[Space_Grotesk] text-4xl md:text-5xl font-bold gradient-text mb-4">
            BUILT FOR THE CITY MOVE
          </h2>
          <p className="text-[#B8BDC2] max-w-xl mx-auto">Every service designed for Toronto's unique moving challenges.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="card-3d glass rounded-xl p-6 group cursor-pointer hover:border-[#FF5A00]/30 transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="font-[Space_Grotesk] font-bold text-sm text-[#F4F1EA] mb-2 group-hover:text-[#FF5A00] transition-colors">
                {service.title}
              </h3>
              <p className="text-xs text-[#B8BDC2] leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ CONDO CHALLENGE ============
function CondoChallenge() {
  const [activeChallenge, setActiveChallenge] = useState<number | null>(null);

  const challenges = [
    { title: 'ELEVATOR', icon: '⬆️', desc: 'Coordinating elevator reservations with building management. Time slots are tight — we plan ahead.', detail: 'Most Liberty Village condos require elevator bookings 48-72 hours in advance. We handle the scheduling.' },
    { title: 'LOADING DOCK', icon: '🚛', desc: 'Reserving loading dock access and ensuring truck fits the space.', detail: 'Dock dimensions vary. We measure first, send the right truck.' },
    { title: 'PARKING', icon: '🅿️', desc: 'City parking permits and truck positioning for efficient loading.', detail: 'We secure city parking permits and position trucks for minimal carry distance.' },
    { title: 'STAIRS', icon: '🪜', desc: 'Navigating tight stairwells with large furniture pieces.', detail: 'Our team is trained in stair navigation techniques for tight Toronto stairwells.' },
    { title: 'TIGHT HALLWAYS', icon: '🚪', desc: 'Maneuvering furniture through narrow condo corridors.', detail: 'Furniture blankets, corner protectors, and experienced technique keep walls and items safe.' },
    { title: 'BUILDING RULES', icon: '📋', desc: 'Following each building\'s specific moving policies and requirements.', detail: 'Every building is different. We review requirements before move day.' },
    { title: 'TIME WINDOWS', icon: '⏰', desc: 'Working within strict move-in/move-out time windows.', detail: 'Most buildings allow 4-8 hour windows. We maximize every minute.' },
  ];

  return (
    <section id="challenges" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://image.qwenlm.ai/generated-images/3165e5be-aa01-4bcb-a1cd-badd0d89cc41/_result.png" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#0d0d0d]/85 to-[#050505]/90" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-xs font-mono text-[#FF5A00] tracking-[0.3em] mb-4">LIBERTY VILLAGE SPECIALIST</div>
          <h2 className="font-[Space_Grotesk] text-4xl md:text-5xl font-bold gradient-text mb-4">
            CONDO MOVING IS A<br />DIFFERENT GAME.
          </h2>
          <p className="text-[#B8BDC2] max-w-xl mx-auto">We know the challenges. We've built our process around them.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Challenge Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {challenges.map((challenge, i) => (
              <button
                key={challenge.title}
                onClick={() => setActiveChallenge(activeChallenge === i ? null : i)}
                className={`p-4 rounded-lg border text-left transition-all duration-300 ${
                  activeChallenge === i
                    ? 'border-[#FF5A00] bg-[#FF5A00]/10 glow-border'
                    : 'border-[#181818] bg-[#101010] hover:border-[#FF5A00]/30'
                }`}
              >
                <div className="text-2xl mb-2">{challenge.icon}</div>
                <div className={`text-xs font-bold font-[Space_Grotesk] ${activeChallenge === i ? 'text-[#FF5A00]' : 'text-[#F4F1EA]'}`}>
                  {challenge.title}
                </div>
              </button>
            ))}
          </div>

          {/* Detail Panel */}
          <div className="glass rounded-xl p-8 min-h-[300px]">
            {activeChallenge !== null ? (
              <div className="animate-scale-in">
                <div className="text-4xl mb-4">{challenges[activeChallenge].icon}</div>
                <h3 className="font-[Space_Grotesk] text-2xl font-bold text-[#FF5A00] mb-3">
                  {challenges[activeChallenge].title}
                </h3>
                <p className="text-[#F4F1EA] mb-4">{challenges[activeChallenge].desc}</p>
                <p className="text-[#B8BDC2] text-sm leading-relaxed">{challenges[activeChallenge].detail}</p>
                <div className="mt-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#FF5A00] rounded-full animate-glow-pulse" />
                  <span className="text-xs text-[#B8BDC2] font-mono">PLANNED & MANAGED</span>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-center">
                <div>
                  <div className="text-4xl mb-4 opacity-30">👆</div>
                  <p className="text-[#B8BDC2]">Select a challenge to learn how we handle it</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ MOVE CHECKLIST ============
function MoveChecklist() {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());

  const steps = [
    { label: 'BOOK', desc: 'Reserve your moving date', icon: '📅' },
    { label: 'CONFIRM', desc: 'Confirm details with your team', icon: '✅' },
    { label: 'PACK', desc: 'Organize and pack your items', icon: '📦' },
    { label: 'PROTECT', desc: 'Wrap and protect fragile items', icon: '🛡️' },
    { label: 'LOAD', desc: 'Load the truck efficiently', icon: '📤' },
    { label: 'MOVE', desc: 'Transport to your new location', icon: '🚛' },
    { label: 'UNLOAD', desc: 'Unload and place items', icon: '📥' },
    { label: 'SETTLE IN', desc: 'Make your new place home', icon: '🏡' },
  ];

  const toggleItem = (index: number) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setCheckedItems(newChecked);
  };

  const progress = (checkedItems.size / steps.length) * 100;

  return (
    <section className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-xs font-mono text-[#FF5A00] tracking-[0.3em] mb-4">MOVE CHECKLIST</div>
          <h2 className="font-[Space_Grotesk] text-4xl md:text-5xl font-bold gradient-text mb-4">
            YOUR MOVE, TRACKED
          </h2>
          <p className="text-[#B8BDC2]">Click each step as you complete it. We handle the rest.</p>
        </div>

        {/* Progress bar */}
        <div className="mb-12">
          <div className="flex justify-between text-xs text-[#B8BDC2] mb-2">
            <span>PROGRESS</span>
            <span className="text-[#FF5A00] font-mono">{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-[#181818] rounded-full overflow-hidden">
            <div className="progress-fill h-full bg-gradient-to-r from-[#FF5A00] to-[#FF8A3D] rounded-full" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {steps.map((step, i) => (
            <button
              key={step.label}
              onClick={() => toggleItem(i)}
              className={`flex items-center gap-4 p-5 rounded-xl border transition-all duration-300 text-left ${
                checkedItems.has(i)
                  ? 'border-[#FF5A00]/30 bg-[#FF5A00]/5'
                  : 'border-[#181818] bg-[#101010] hover:border-[#FF5A00]/20'
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                checkedItems.has(i) ? 'bg-[#FF5A00] scale-110' : 'bg-[#181818]'
              }`}>
                {checkedItems.has(i) ? (
                  <span className="text-white text-lg animate-check-pop">✓</span>
                ) : (
                  <span className="text-lg">{step.icon}</span>
                )}
              </div>
              <div>
                <div className={`font-[Space_Grotesk] font-bold text-sm ${checkedItems.has(i) ? 'text-[#FF5A00]' : 'text-[#F4F1EA]'}`}>
                  {step.label}
                </div>
                <div className="text-xs text-[#B8BDC2]">{step.desc}</div>
              </div>
            </button>
          ))}
        </div>

        {checkedItems.size === steps.length && (
          <div className="mt-8 text-center animate-scale-in">
            <div className="glass rounded-xl p-6 glow-border">
              <div className="text-2xl mb-2">🎉</div>
              <p className="text-[#F4F1EA] font-semibold">You're all set! Ready to move?</p>
              <a href="#calculator" className="inline-block mt-3 text-[#FF5A00] text-sm font-semibold hover:underline">Get your quote →</a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ============ WHY LIBERTY MOVING ============
function WhyLibertyMoving() {
  const reasons = [
    { number: '01', title: 'CAREFUL HANDLING', desc: 'Every item treated with professional care. Furniture protection, floor coverage, and careful carrying.' },
    { number: '02', title: 'CLEAR COMMUNICATION', desc: 'You know what\'s happening, when it\'s happening, and what it costs. No surprises.' },
    { number: '03', title: 'CITY EXPERIENCE', desc: 'We know Toronto. Liberty Village, King West, Fort York — we move here every day.' },
    { number: '04', title: 'ORGANIZED MOVES', desc: 'Systematic approach to every move. Items tracked, rooms labeled, nothing lost.' },
    { number: '05', title: 'CONDO-READY PLANNING', desc: 'Elevator bookings, dock reservations, building rules — all handled before move day.' },
    { number: '06', title: 'NO SURPRISES', desc: 'Transparent pricing. Clear timelines. Professional execution from start to finish.' },
  ];

  return (
    <section className="py-32 relative">
      <div className="absolute inset-0">
        <img 
          src="https://image.qwenlm.ai/generated-images/d6b11323-11a1-44e6-b351-5d3021f0b8c8/_result.png" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#080808]/95 to-[#050505]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-xs font-mono text-[#FF5A00] tracking-[0.3em] mb-4">WHY LIBERTY MOVING</div>
          <h2 className="font-[Space_Grotesk] text-4xl md:text-5xl font-bold gradient-text mb-4">
            THE CITY MOVE SPECIALIST
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div key={reason.number} className="glass rounded-xl p-8 card-3d group">
              <div className="text-5xl font-[Space_Grotesk] font-bold text-[#FF5A00]/20 group-hover:text-[#FF5A00]/40 transition-colors mb-4">
                {reason.number}
              </div>
              <h3 className="font-[Space_Grotesk] font-bold text-lg text-[#F4F1EA] mb-3 group-hover:text-[#FF5A00] transition-colors">
                {reason.title}
              </h3>
              <p className="text-sm text-[#B8BDC2] leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ MOVING TEAM ============
function MovingTeam() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const team = [
    { name: 'TEAM LEAD', role: 'Move Coordinator', specialty: 'Logistics & Planning', experience: 'City Moves', skills: 'Route optimization, elevator coordination' },
    { name: 'LEAD MOVER', role: 'Senior Mover', specialty: 'Heavy Furniture', experience: 'High-rise Moves', skills: 'Stair navigation, furniture disassembly' },
    { name: 'PACKING PRO', role: 'Packing Specialist', specialty: 'Fragile Items', experience: 'Full-home Packing', skills: 'Custom crating, art handling' },
    { name: 'DRIVER', role: 'Transport Lead', specialty: 'Safe Transport', experience: 'Toronto Routes', skills: 'Truck loading, secure transport' },
  ];

  const toggleFlip = (index: number) => {
    const newFlipped = new Set(flippedCards);
    if (newFlipped.has(index)) {
      newFlipped.delete(index);
    } else {
      newFlipped.add(index);
    }
    setFlippedCards(newFlipped);
  };

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-xs font-mono text-[#FF5A00] tracking-[0.3em] mb-4">THE TEAM</div>
          <h2 className="font-[Space_Grotesk] text-4xl md:text-5xl font-bold gradient-text mb-4">
            PROFESSIONAL MOVERS
          </h2>
          <p className="text-[#B8BDC2]">Click a card to see specialties</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div
              key={member.name}
              role="button"
              tabIndex={0}
              aria-label={`${member.name}: show ${flippedCards.has(i) ? 'role' : 'specialties'}`}
              aria-pressed={flippedCards.has(i)}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleFlip(i); } }}
              onClick={() => toggleFlip(i)}
              className="cursor-pointer perspective-1000"
            >
              <div className={`relative transition-transform duration-500 transform-style-3d ${flippedCards.has(i) ? '[transform:rotateY(180deg)]' : ''}`} style={{ transformStyle: 'preserve-3d' }}>
                {/* Front */}
                <div className="glass rounded-xl p-8 text-center" style={{ backfaceVisibility: 'hidden' }}>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#181818] border-2 border-[#FF5A00]/30 flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                  </div>
                  <h3 className="font-[Space_Grotesk] font-bold text-[#F4F1EA] mb-1">{member.name}</h3>
                  <p className="text-sm text-[#B8BDC2]">{member.role}</p>
                  <div className="mt-4 text-xs text-[#FF5A00]">TAP TO SEE MORE</div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 glass rounded-xl p-8 [transform:rotateY(180deg)]" style={{ backfaceVisibility: 'hidden' }}>
                  <div className="text-center">
                    <h3 className="font-[Space_Grotesk] font-bold text-[#FF5A00] mb-4">{member.name}</h3>
                    <div className="space-y-3 text-left">
                      <div>
                        <div className="text-xs text-[#B8BDC2] font-mono">SPECIALTY</div>
                        <div className="text-sm text-[#F4F1EA]">{member.specialty}</div>
                      </div>
                      <div>
                        <div className="text-xs text-[#B8BDC2] font-mono">EXPERIENCE</div>
                        <div className="text-sm text-[#F4F1EA]">{member.experience}</div>
                      </div>
                      <div>
                        <div className="text-xs text-[#B8BDC2] font-mono">SKILLS</div>
                        <div className="text-sm text-[#F4F1EA]">{member.skills}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ CASE STUDIES ============
function CaseStudies() {
  const cases = [
    {
      title: 'LIBERTY VILLAGE CONDO',
      subtitle: '32nd Floor Move',
      challenge: 'Elevator + loading dock coordination',
      solution: 'Pre-booked freight elevator, coordinated dock access, planned loading sequence',
      result: 'Completed within 4-hour building window',
      tag: 'EXAMPLE PROJECT',
    },
    {
      title: 'KING WEST APARTMENT',
      subtitle: 'Walk-up, 3rd Floor',
      challenge: 'Narrow stairwell, large sofa, no elevator',
      solution: 'Furniture disassembly, stair protection, specialized carry technique',
      result: 'Zero damage to walls or furniture',
      tag: 'EXAMPLE PROJECT',
    },
    {
      title: 'FORT YORK HIGH-RISE',
      subtitle: 'Full Condo Move',
      challenge: 'Tight move-in window, building rules, parking restrictions',
      solution: 'City parking permit secured, building rules reviewed, team staged early',
      result: 'Smooth move-in, on schedule',
      tag: 'EXAMPLE PROJECT',
    },
  ];

  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-xs font-mono text-[#FF5A00] tracking-[0.3em] mb-4">CASE STUDIES</div>
          <h2 className="font-[Space_Grotesk] text-4xl md:text-5xl font-bold gradient-text mb-4">
            EXAMPLE MOVES.<br />TORONTO MOVING CHALLENGES.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((caseStudy, i) => (
            <div key={i} className="glass rounded-xl overflow-hidden card-3d group">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#FF5A00] bg-[#FF5A00]/10 px-2 py-1 rounded">{caseStudy.tag}</span>
                  <span className="text-xs text-[#B8BDC2]">#{String(i + 1).padStart(3, '0')}</span>
                </div>
                <h3 className="font-[Space_Grotesk] font-bold text-lg text-[#F4F1EA] mb-1">{caseStudy.title}</h3>
                <p className="text-sm text-[#B8BDC2] mb-6">{caseStudy.subtitle}</p>

                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-[#B8BDC2] font-mono mb-1">CHALLENGE</div>
                    <p className="text-sm text-[#F4F1EA]">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <div className="text-xs text-[#B8BDC2] font-mono mb-1">SOLUTION</div>
                    <p className="text-sm text-[#F4F1EA]">{caseStudy.solution}</p>
                  </div>
                  <div>
                    <div className="text-xs text-[#B8BDC2] font-mono mb-1">RESULT</div>
                    <p className="text-sm text-[#FF5A00] font-semibold">{caseStudy.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ FINAL CTA ============
function FinalCTA() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0d0505] to-[#050505]" />
        {/* Orange glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF5A00]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="text-xs font-mono text-[#FF5A00] tracking-[0.3em] mb-4">LET'S MOVE</div>
        <h2 className="font-[Space_Grotesk] text-5xl md:text-7xl font-bold mb-4">
          <span className="gradient-text">READY TO MOVE?</span>
        </h2>
        <p className="text-2xl md:text-3xl font-[Space_Grotesk] text-[#FF5A00] font-bold mb-8">
          LET'S GET YOU THERE.
        </p>
        <p className="text-[#B8BDC2] max-w-lg mx-auto mb-12">
          Professional moving help for Liberty Village, Toronto condos, apartments and homes. Fast. Careful. Organized.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="#calculator" className="btn-primary animate-pulse-glow bg-[#FF5A00] text-white px-10 py-5 rounded-sm font-bold text-lg hover:bg-[#e64d00] transition-all w-full sm:w-auto">
            REQUEST A BOOKING
          </a>
          <a href={`tel:${BUSINESS_PHONE}`} className="border border-[#B8BDC2]/30 text-[#F4F1EA] px-10 py-5 rounded-sm font-bold text-lg hover:border-[#FF5A00] hover:text-[#FF5A00] transition-all w-full sm:w-auto">
            CALL NOW
          </a>
          <a href={`sms:${BUSINESS_PHONE}`} className="border border-[#B8BDC2]/30 text-[#F4F1EA] px-10 py-5 rounded-sm font-bold text-lg hover:border-[#FF5A00] hover:text-[#FF5A00] transition-all w-full sm:w-auto">
            TEXT US
          </a>
        </div>

        {/* Service areas */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {['Liberty Village', 'King West', 'Parkdale', 'Fort York', 'Queen West', 'CityPlace', 'Etobicoke', 'Downtown Toronto'].map(area => (
            <span key={area} className="text-xs text-[#B8BDC2]/60 border border-[#B8BDC2]/10 px-3 py-1.5 rounded-full hover:border-[#FF5A00]/30 hover:text-[#FF5A00] transition-colors cursor-default">
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer className="border-t border-[#181818] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#FF5A00] rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm font-[Space_Grotesk]">LM</span>
              </div>
              <span className="text-[#F4F1EA] font-[Space_Grotesk] font-bold text-lg">LIBERTY MOVING</span>
            </div>
            <p className="text-sm text-[#B8BDC2]">Toronto's city move specialist. Liberty Village and beyond.</p>
          </div>
          <div>
            <h4 className="text-xs font-mono text-[#FF5A00] tracking-wider mb-4">SERVICES</h4>
            <ul className="space-y-2 text-sm text-[#B8BDC2]">
              <li>Local Moving</li>
              <li>Condo Moving</li>
              <li>Apartment Moving</li>
              <li>Packing Services</li>
              <li>Loading & Unloading</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-mono text-[#FF5A00] tracking-wider mb-4">AREAS</h4>
            <ul className="space-y-2 text-sm text-[#B8BDC2]">
              <li>Liberty Village</li>
              <li>King West</li>
              <li>Fort York</li>
              <li>CityPlace</li>
              <li>Downtown Toronto</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-mono text-[#FF5A00] tracking-wider mb-4">CONTACT</h4>
            <ul className="space-y-2 text-sm text-[#B8BDC2]">
              <li>Toronto, ON</li>
              <li>Liberty Village Area</li>
              <li><a href={`tel:${BUSINESS_PHONE}`} className="text-[#FF5A00]">{BUSINESS_PHONE_DISPLAY}</a></li>
              <li><a href={`mailto:${BOOKING_EMAIL}`} className="text-[#FF5A00]">{BOOKING_EMAIL}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#181818] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#B8BDC2]/50">© {new Date().getFullYear()} Liberty Moving. All rights reserved.</p>
          <p className="text-xs text-[#B8BDC2]/50">Toronto's City Move Specialist</p>
        </div>
      </div>
    </footer>
  );
}

// ============ MOBILE STICKY BAR ============
function MobileStickyBar() {
  return (
    <div className="mobile-sticky-bar md:hidden p-3">
      <div className="grid grid-cols-3 gap-2">
        <a href={`tel:${BUSINESS_PHONE}`} className="bg-[#181818] text-[#F4F1EA] py-3 rounded-lg text-xs font-semibold text-center hover:bg-[#FF5A00] hover:text-white transition-colors">
          📞 CALL
        </a>
        <a href={`sms:${BUSINESS_PHONE}`} className="bg-[#181818] text-[#F4F1EA] py-3 rounded-lg text-xs font-semibold text-center hover:bg-[#FF5A00] hover:text-white transition-colors">
          💬 TEXT
        </a>
        <a href="#calculator" className="bg-[#FF5A00] text-white py-3 rounded-lg text-xs font-semibold text-center hover:bg-[#e64d00] transition-colors">
          📋 BOOK MOVE
        </a>
      </div>
    </div>
  );
}

// ============ SECTION DIVIDER ============
function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-4">
      <div className="h-px w-16 bg-[#181818]" />
      <div className="mx-4 w-2 h-2 bg-[#FF5A00] rounded-full animate-glow-pulse" />
      <div className="h-px w-16 bg-[#181818]" />
    </div>
  );
}

// ============ STATS BAR ============
function StatsBar() {
  return (
    <RevealSection>
      <section className="py-16 border-y border-[#181818]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-[Space_Grotesk] text-3xl md:text-4xl font-bold text-[#FF5A00] mb-1">LV</div>
              <div className="text-xs text-[#B8BDC2] font-mono tracking-wider">LIBERTY VILLAGE</div>
              <div className="text-xs text-[#B8BDC2]/50 mt-1">PRIMARY MARKET</div>
            </div>
            <div className="text-center">
              <div className="font-[Space_Grotesk] text-3xl md:text-4xl font-bold text-[#F4F1EA] mb-1">24/7</div>
              <div className="text-xs text-[#B8BDC2] font-mono tracking-wider">AVAILABILITY</div>
              <div className="text-xs text-[#B8BDC2]/50 mt-1">BOOK ANYTIME</div>
            </div>
            <div className="text-center">
              <div className="font-[Space_Grotesk] text-3xl md:text-4xl font-bold text-[#F4F1EA] mb-1">100%</div>
              <div className="text-xs text-[#B8BDC2] font-mono tracking-wider">PROFESSIONAL</div>
              <div className="text-xs text-[#B8BDC2]/50 mt-1">TRAINED TEAM</div>
            </div>
            <div className="text-center">
              <div className="font-[Space_Grotesk] text-3xl md:text-4xl font-bold text-[#FF5A00] mb-1">TO</div>
              <div className="text-xs text-[#B8BDC2] font-mono tracking-wider">TORONTO</div>
              <div className="text-xs text-[#B8BDC2]/50 mt-1">& SURROUNDING AREAS</div>
            </div>
          </div>
        </div>
      </section>
    </RevealSection>
  );
}

// ============ MAIN APP ============
export default function App() {
  useScrollReveal();
  
  return (
    <div className="min-h-screen pb-24 md:pb-0 bg-[#050505] text-[#F4F1EA]">
      {/* Noise overlay */}
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero */}
      <Hero />
      
      {/* Stats Bar */}
      <StatsBar />
      
      {/* 3D Move Journey */}
      <RevealSection>
        <MoveJourney />
      </RevealSection>
      <SectionDivider />
      
      {/* Services */}
      <RevealSection>
        <Services />
      </RevealSection>
      <SectionDivider />
      
      {/* Condo Challenge */}
      <RevealSection>
        <CondoChallenge />
      </RevealSection>
      <SectionDivider />
      
      {/* Moving Calculator */}
      <RevealSection>
        <MovingCalculator />
      </RevealSection>
      <SectionDivider />
      
      {/* Move Checklist */}
      <RevealSection>
        <MoveChecklist />
      </RevealSection>
      <SectionDivider />
      
      {/* Why Liberty Moving */}
      <RevealSection>
        <WhyLibertyMoving />
      </RevealSection>
      <SectionDivider />
      
      {/* Moving Team */}
      <RevealSection>
        <MovingTeam />
      </RevealSection>
      <SectionDivider />
      
      {/* Case Studies */}
      <RevealSection>
        <CaseStudies />
      </RevealSection>
      <SectionDivider />
      
      {/* Final CTA */}
      <FinalCTA />
      
      {/* Footer */}
      <Footer />
      
      {/* Mobile Sticky Bar */}
      <MobileStickyBar />
    </div>
  );
}
