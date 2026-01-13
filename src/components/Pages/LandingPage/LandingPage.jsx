import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  ExternalLink, 
  Code2, 
  User, 
  Briefcase, 
  Mail, 
  ChevronRight,
  Terminal,
  Cpu,
  Globe,
  Sparkles,
  Layers,
  Zap,
  Twitter,
  Instagram,
  Facebook,
  Send
} from 'lucide-react';

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = {
    github: "https://github.com/Jaysmart98",
    linkedin: "https://www.linkedin.com/in/joshua-ogunbunmi-63123a228",
    twitter: "https://x.com/jaysmart98",
    instagram: "https://www.instagram.com/king__jhay111",
    email: "mailto:engineerogunbunmi@gmail.com"
  };

  const skills = [
    { name: "React.js", color: "text-cyan-400", bg: "bg-cyan-400/10" },
    { name: "JavaScript", color: "text-yellow-400", bg: "bg-yellow-400/10" },
    { name: "Tailwind", color: "text-sky-400", bg: "bg-sky-400/10" },
    { name: "Node.js", color: "text-green-400", bg: "bg-green-400/10" },
    { name: "Bootstrap", color: "text-purple-400", bg: "bg-purple-400/10" },
    { name: "CSS", color: "text-blue-400", bg: "bg-blue-400/10" },
  ];

  const projects = [
    {
      title: "MedTrack Landing Page",
      image: "https://res.cloudinary.com/dsyq8apha/image/upload/v1768318638/LamdingPageForMedTrack_shmfrs.jpg",
      tags: ["Healthcare", "Node.js", "React", "Mongo.DB"],
      description: "A professional medical tracking platform interface designed for high-performance patient monitoring.",
      link: "https://github.com/Jaysmart98"
    },
    {
      title: "Task Management App",
      image: "https://res.cloudinary.com/dsyq8apha/image/upload/v1768320232/TodoApp_skfzhi.jpg",
      tags: ["Productivity", "Mongo.DB", "React"],
      description: "A streamlined task management system with real-time updates and intuitive drag-and-drop organization.",
      link: "https://github.com/Jaysmart98"
    },
    {
      title: "E-Commerce Experience",
      image: "https://res.cloudinary.com/dsyq8apha/image/upload/v1764072844/ECommerce1stPage_g5zzgh.jpg",
      tags: ["Shopping", "Modern"],
      description: "High-conversion storefront landing page with interactive product showcases and fluid layouts.",
      link: "https://github.com/Jaysmart98"
    },
    {
      title: "MedTrack Registration",
      image: "https://res.cloudinary.com/dsyq8apha/image/upload/v1768318639/RegisterPage_lcdnlu.jpg",
      tags: ["Auth", "Forms", "Validation"],
      description: "Streamlined user onboarding experience with secure input handling and accessible design.",
      link: "https://github.com/Jaysmart98"
    },
    {
      title: "Modern Sign Up Page",
      image: "https://res.cloudinary.com/dsyq8apha/image/upload/v1764072888/SignUpPage_b5o8ke.png",
      tags: ["UI Design", "Clean", "CSS"],
      description: "Minimalist and accessible authentication interface with soft aesthetics and focus on UX.",
      link: "https://github.com/Jaysmart98"
    },
    {
      title: "E-Commerce landing Page",
      image: "https://res.cloudinary.com/dsyq8apha/image/upload/v1764072845/ECommerceCartt_vdbtzx.png",
      tags: ["Redux", "E-commerce", "Logic"],
      description: "Functional shopping cart interface featuring real-time price calculations and state management.",
      link: "https://github.com/Jaysmart98"
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-emerald-500/30 overflow-x-hidden">
    
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#020617]/90 backdrop-blur-md py-4 border-b border-emerald-500/10' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
              <Code2 className="text-slate-900" size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Josh <span className="text-emerald-500"> Portfolio</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
            {['home', 'skills', 'projects', 'contact'].map((item) => (
              <a 
                key={item}
                href={`#${item}`}
                className={`hover:text-emerald-400 no-underline text-decoration-none transition-colors ${activeSection === item ? 'text-emerald-500' : 'text-slate-400'}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' });
                  setActiveSection(item);
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-6 animate-fade-in">
                <Sparkles size={14} />
                AVAILABLE FOR NEW PROJECTS
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-8 tracking-tighter">
                BUILDING THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">FUTURE</span> OF WEB.
              </h1>
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                I am a Full Stack Developer dedicated to building scalable, high-performance web applications. Bridging the gap between robust back-end logic and intuitive front-end design, I specialize in creating seamless digital experiences using modern frameworks and clean architecture.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-xl transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-emerald-500/20 border-none cursor-pointer"
                >
                  View My Work <ChevronRight size={20} />
                </button>
                <div className="flex gap-3">
                  <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-800/50 hover:bg-slate-700 border border-slate-700 rounded-xl text-slate-300 transition-all hover:-translate-y-1">
                    <Github size={24} />
                  </a>
                  <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-800/50 hover:bg-slate-700 border border-slate-700 rounded-xl text-slate-300 transition-all hover:-translate-y-1">
                    <Linkedin size={24} />
                  </a>
                  <a href={socialLinks.email} className="p-4 bg-slate-800/50 hover:bg-slate-700 border border-slate-700 rounded-xl text-slate-300 transition-all hover:-translate-y-1">
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 order-1 lg:order-2 mt-3">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />
                
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-emerald-500 to-cyan-500 overflow-hidden shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-4 border-slate-900">
                    <img 
                      src="https://res.cloudinary.com/dsyq8apha/image/upload/v1764072864/Jaysmart_ugfkhn.jpg" 
                      alt="Developer Portrait" 
                      className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
                    />
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 bg-slate-900 border-2 border-emerald-500 rounded-full px-4 py-2 flex items-center gap-2 shadow-xl">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-bold text-white uppercase tracking-widest">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-slate-950/40 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-emerald-500 tracking-[0.3em] uppercase mb-4">MERN Stack</h2>
            <h3 className="text-3xl md:text-5xl font-black text-white">MY SKILLS</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((skill, i) => (
              <div 
                key={i} 
                className={`${skill.bg} border border-slate-800 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 group hover:border-emerald-500/30 transition-all hover:-translate-y-2`}
              >
                <div className={`${skill.color} p-3 rounded-xl bg-slate-900/50 group-hover:scale-110 transition-transform`}>
                  <Zap size={24} />
                </div>
                <span className="font-bold text-slate-200 tracking-wide text-sm text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6 bg-[#020617]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-sm font-bold text-emerald-500 tracking-[0.3em] uppercase mb-4">Selected Works</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white">PORTFOLIO</h3>
            </div>
            <p className="text-slate-400 max-w-md">
              A curated collection of my latest work, ranging from complex healthcare platforms to sleek productivity tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group relative bg-slate-900/30 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/40 hover:bg-slate-900/60 transition-all duration-500 shadow-xl"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent opacity-60" />
                </div>
                
                <div className="p-6 relative">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 uppercase tracking-wider border border-emerald-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-sm font-bold text-emerald-500 hover:text-emerald-400 transition-all group/btn no-underline"
                  >
                    View Project
                    <ExternalLink size={16} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[#020617] border-t border-slate-900 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
                  <Code2 className="text-slate-900" size={18} />
                </div>
                <span className="text-lg font-bold text-white">Dev JaySmart <span className="text-emerald-500">Portfolio</span></span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Specializing in high-performance frontend and backend solutions and intuitive user experiences. Let's build something exceptional together.
              </p>
              
              <div className="flex gap-4">
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-400 transition-all">
                  <Twitter size={20} />
                </a>
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:text-pink-500 hover:border-pink-500 transition-all">
                  <Instagram size={20} />
                </a>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500 transition-all">
                  <Linkedin size={20} />
                </a>
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-500 hover:border-emerald-500 transition-all">
                  <Github size={20} />
                </a>
              </div>
            </div>

            <div className='lg:pl-10'>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 list-none p-0 m-0">
                {['Home', 'Skills', 'Projects', 'Contact'].map(link => (
                  <li key={link}>
                    <button 
                      onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                      className="bg-transparent border-none p-0 text-slate-400 text-sm hover:text-emerald-500 transition-colors flex items-center gap-2 group cursor-pointer"
                    >
                      <ChevronRight size={12} className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-white font-bold mb-6">Let's Connect</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-emerald-500 mt-0.5" />
                  <div>
                    <p className="text-white text-sm font-medium m-0">Email Us</p>
                    <a href={socialLinks.email} className="text-slate-400 text-sm hover:text-emerald-500 no-underline transition-colors block mt-1">engineerogunbunmi@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Briefcase size={18} className="text-emerald-500 mt-0.5" />
                  <div>
                    <p className="text-white text-sm font-medium m-0">Collaboration</p>
                    <p className="text-slate-400 text-sm m-0 mt-1">Available for freelance and full-time roles.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-medium tracking-wider">
            <p>© {new Date().getFullYear()} JAYSMART PORTFOLIO. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        html {
          scroll-behavior: smooth;
        }
        /* Hide scrollbar for Chrome, Safari and Opera */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #020617;
        }
        ::-webkit-scrollbar-thumb {
          background: #1e293b;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #10b981;
        }
      `}</style>

    </div>
  );
};

export default LandingPage;
