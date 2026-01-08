import React, { useState, useEffect } from 'react';
import { Mail, Phone, Github, Linkedin, Code, Briefcase, GraduationCap, Award, Heart, ChevronRight, Menu, X, ExternalLink, ArrowUpRight, Zap, Shield, Rocket, Terminal } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre-mi', 'proyectos', 'habilidades', 'contacto'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-scroll-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'contacto', label: 'Contacto' }
  ];

  const certifications = [
    { name: 'EF SET Inglés C1 Avanzado', url: 'https://cert.efset.org/es/ojRoU7' },
    { name: 'Cisco CyberOps Associate', url: 'https://www.credly.com/badges/a28dc2cc-066a-47cc-bb41-a844a84067c7/linked_in_profile' },
    { name: 'Python Developer – Edutin Academy', url: 'https://app.edutin.com/verify/11679944' },
    { name: 'Cisco Cybersecurity Essentials', url: 'https://www.credly.com/badges/a6d571c3-7a07-4cf3-8bf7-70118b9a25e9/linked_in_profile' },
    { name: 'Introduction to Cybersecurity – Cisco', url: 'https://www.credly.com/badges/648fdd30-9df2-4ceb-9992-6ceb4212ee44/linked_in_profile' },
    { name: 'EF SET Inglés B2 Intermedio Alto', url: 'https://cert.efset.org/es/ojRoU7' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          .animate-on-scroll {
            opacity: 0;
          }
          
          .animate-on-scroll.visible {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          
          .animate-fade-left {
            opacity: 0;
          }
          
          .animate-fade-left.visible {
            animation: fadeInLeft 0.8s ease-out forwards;
          }
          
          .animate-fade-right {
            opacity: 0;
          }
          
          .animate-fade-right.visible {
            animation: fadeInRight 0.8s ease-out forwards;
          }
          
          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-400 { animation-delay: 0.4s; }
          
          /* Smooth scrolling for all browsers */
          * {
            scroll-behavior: smooth;
          }
          
          /* Hover effect for links */
          a:hover {
            transition: all 0.3s ease;
          }
        `}
      </style>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold">
              <span className="text-blue-400">JJ</span> García
            </div>
            
            <div className="hidden md:flex space-x-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors ${
                    activeSection === item.id 
                      ? 'text-blue-400' 
                      : 'text-gray-300 hover:text-blue-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/juanjgarciav"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/GarZa402"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <button
                onClick={() => scrollToSection('contacto')}
                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-all"
              >
                Contactar
              </button>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-4 py-4 space-y-4">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex gap-4 pt-4 border-t border-gray-700">
                <a
                  href="https://www.linkedin.com/in/juanjgarciav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/GarZa402"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative min-h-screen flex items-center">
        {/* Curved lines decoration */}
        <svg className="absolute top-20 right-0 w-1/2 h-96 opacity-20" viewBox="0 0 400 400">
          <path d="M 0 200 Q 100 100 200 200 T 400 200" stroke="#3B82F6" strokeWidth="2" fill="none" />
          <path d="M 0 250 Q 100 150 200 250 T 400 250" stroke="#3B82F6" strokeWidth="2" fill="none" />
        </svg>

        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-sm text-gray-400 uppercase tracking-widest">
              Desarrollador Web 
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Construyo <span className="text-blue-400">soluciones web</span> para tu futuro digital.
            </h1>
            
            {/* Stats */}
            <div className="flex items-center gap-6 py-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-gray-900 flex items-center justify-center text-xs font-bold">JJ</div>
                <div className="w-10 h-10 rounded-full bg-purple-500 border-2 border-gray-900"></div>
                <div className="w-10 h-10 rounded-full bg-pink-500 border-2 border-gray-900"></div>
                <div className="w-10 h-10 rounded-full bg-orange-500 border-2 border-gray-900"></div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">2+</div>
                <div className="text-sm text-gray-400">Proyectos Reales</div>
              </div>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed">
              Estudiante de Ingeniería Informática especializado en desarrollo web. Creo aplicaciones escalables y eficientes usando las mejores prácticas de la industria.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={() => scrollToSection('proyectos')}
                className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-all shadow-lg hover:shadow-blue-500/50 flex items-center gap-2"
              >
                <ArrowUpRight size={20} />
                Ver Proyectos
              </button>
              <a
                href="https://github.com/GarZa402"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg font-semibold transition-all flex items-center gap-2"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>
          </div>

          {/* Mockup/Illustration Area */}
          <div 
            data-scroll-animate 
            id="hero-mockup" 
            className={`relative hidden md:block animate-fade-right ${visibleSections.has('hero-mockup') ? 'visible' : ''}`}
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 shadow-2xl transform rotate-3">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">Desarrollador</div>
                    <a 
                      href="https://github.com/GarZa402" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>
                  </div>
                  <div className="text-4xl font-bold">Juan José García</div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Code className="text-blue-400" size={20} />
                      <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full w-4/5 bg-blue-400 rounded-full"></div>
                      </div>
                      <span className="text-sm text-blue-400">80%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Terminal className="text-blue-400" size={20} />
                      <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full w-9/10 bg-blue-400 rounded-full"></div>
                      </div>
                      <span className="text-sm text-blue-400">90%</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => scrollToSection('contacto')}
                    className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-all cursor-pointer"
                  >
                    Contactar Ahora
                  </button>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-3xl opacity-20 blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500 rounded-3xl opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              data-scroll-animate 
              id="about-text" 
              className={`animate-fade-left ${visibleSections.has('about-text') ? 'visible' : ''}`}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Tu <span className="text-blue-400">socio confiable</span> en desarrollo web.
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Estudiante universitario de Ingeniería Informática con enfoque en desarrollo web y tecnología. Apasionado por aplicar conocimientos teóricos en proyectos reales y construir soluciones innovadoras.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Con mentalidad proactiva y compromiso con el aprendizaje continuo, trabajo en crear experiencias web que generen impacto y valor.
              </p>
            </div>

            {/* Stats Card */}
            <div 
              data-scroll-animate 
              id="about-cards" 
              className={`space-y-6 animate-fade-right ${visibleSections.has('about-cards') ? 'visible' : ''}`}
            >
              <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-400">Experiencia</div>
                  <Briefcase className="text-blue-400" size={24} />
                </div>
                <div className="text-3xl font-bold text-blue-400 mb-2">Freelance Developer</div>
                <div className="text-gray-400">Junio 2024 - Presente</div>
              </div>

              <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-400">Educación</div>
                  <GraduationCap className="text-blue-400" size={24} />
                </div>
                <div className="text-3xl font-bold mb-2">Ingeniería Informática</div>
                <div className="text-gray-400">Universidad de La Salle</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards - Numbered */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 01 */}
            <div 
              data-scroll-animate 
              id="service-1" 
              className={`bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all group animate-on-scroll ${visibleSections.has('service-1') ? 'visible' : ''}`}
            >
              <div className="text-5xl font-bold text-gray-700 mb-4">01.</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                Desarrollo Frontend
              </h3>
              <p className="text-gray-400 mb-6">
                Interfaces modernas y responsivas con React, HTML5, CSS3 y JavaScript. Experiencia de usuario excepcional.
              </p>
              <button className="text-blue-400 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                Ver más <ArrowUpRight size={18} />
              </button>
            </div>

            {/* Card 02 - Highlighted */}
            <div 
              data-scroll-animate 
              id="service-2" 
              className={`bg-blue-500 rounded-2xl p-8 border border-blue-400 transform md:scale-105 shadow-xl shadow-blue-500/20 animate-on-scroll delay-100 ${visibleSections.has('service-2') ? 'visible' : ''}`}
            >
              <div className="text-5xl font-bold text-blue-300 mb-4">02.</div>
              <h3 className="text-2xl font-bold mb-3">
                Desarrollo Backend
              </h3>
              <p className="text-blue-100 mb-6">
                APIs robustas y escalables con Laravel, Node.js y PHP. Arquitecturas eficientes y seguras.
              </p>
              <button className="text-white font-semibold flex items-center gap-2 hover:gap-4 transition-all">
                Ver más <ArrowUpRight size={18} />
              </button>
            </div>

            {/* Card 03 */}
            <div 
              data-scroll-animate 
              id="service-3" 
              className={`bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all group animate-on-scroll delay-200 ${visibleSections.has('service-3') ? 'visible' : ''}`}
            >
              <div className="text-5xl font-bold text-gray-700 mb-4">03.</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                Bases de Datos
              </h3>
              <p className="text-gray-400 mb-6">
                Diseño e implementación de bases de datos MySQL optimizadas. Gestión eficiente de información.
              </p>
              <button className="text-blue-400 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                Ver más <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Curved decoration */}
        <svg className="absolute top-0 left-0 w-1/3 h-64 opacity-10" viewBox="0 0 200 200">
          <path d="M 0 100 Q 50 50 100 100 T 200 100" stroke="#3B82F6" strokeWidth="3" fill="none" />
        </svg>

        <div className="max-w-7xl mx-auto relative z-10">
          <div 
            data-scroll-animate 
            id="projects-header" 
            className={`text-center mb-16 animate-on-scroll ${visibleSections.has('projects-header') ? 'visible' : ''}`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Proyectos <span className="text-blue-400">destacados</span> en producción.
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Soluciones reales implementadas para usuarios y empresas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* SalleConnect */}
            <div 
              data-scroll-animate 
              id="project-1" 
              className={`bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all group animate-fade-left ${visibleSections.has('project-1') ? 'visible' : ''}`}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-sm text-blue-400 font-semibold mb-2">PROYECTO UNIVERSITARIO</div>
                  <h3 className="text-3xl font-bold mb-3 group-hover:text-blue-400 transition-colors">SalleConnect</h3>
                </div>
                <div className="p-3 bg-gray-900 rounded-xl">
                  <Code className="text-blue-400" size={24} />
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Plataforma web integral para estudiantes universitarios con chatbot con IA, foros, gestión académica, sistema de reservas y procesamiento de pagos.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-4 py-2 bg-gray-900 text-blue-400 rounded-lg text-sm font-semibold border border-gray-700">Laravel</span>
                <span className="px-4 py-2 bg-gray-900 text-blue-400 rounded-lg text-sm font-semibold border border-gray-700">MySQL</span>
                <span className="px-4 py-2 bg-gray-900 text-blue-400 rounded-lg text-sm font-semibold border border-gray-700">Git</span>
              </div>

              <a
                href="https://github.com/GarZa402/SalleConnect"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-4 transition-all"
              >
                <Github size={20} />
                Ver en GitHub
                <ExternalLink size={16} />
              </a>
            </div>

            {/* Attendo */}
            <div 
              data-scroll-animate 
              id="project-2" 
              className={`bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all group animate-fade-right delay-100 ${visibleSections.has('project-2') ? 'visible' : ''}`}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-sm text-blue-400 font-semibold mb-2">SISTEMA EMPRESARIAL</div>
                  <h3 className="text-3xl font-bold mb-3 group-hover:text-blue-400 transition-colors">Attendo</h3>
                </div>
                <div className="p-3 bg-gray-900 rounded-xl">
                  <Briefcase className="text-blue-400" size={24} />
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Sistema web de gestión de asistencias empresariales con control de horarios, usuarios, departamentos y generación de reportes automatizados.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-4 py-2 bg-gray-900 text-blue-400 rounded-lg text-sm font-semibold border border-gray-700">Laravel</span>
                <span className="px-4 py-2 bg-gray-900 text-blue-400 rounded-lg text-sm font-semibold border border-gray-700">Apache Airflow</span>
                <span className="px-4 py-2 bg-gray-900 text-blue-400 rounded-lg text-sm font-semibold border border-gray-700">MySQL</span>
              </div>

              <a
                href="https://github.com/GarZa402/Attendo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-4 transition-all"
              >
                <Github size={20} />
                Ver en GitHub
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Graph style */}
            <div 
              data-scroll-animate 
              id="skills-graph" 
              className={`bg-gray-800 rounded-2xl p-8 border border-gray-700 animate-fade-left ${visibleSections.has('skills-graph') ? 'visible' : ''}`}
            >
              <div className="mb-6">
                <div className="text-sm text-gray-400 mb-2">Stack Tecnológico</div>
                <div className="text-3xl font-bold text-blue-400">Full Stack Developer</div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-semibold">Frontend</span>
                    <span className="text-blue-400 font-bold">90%</span>
                  </div>
                  <div className="h-3 bg-gray-900 rounded-full overflow-hidden">
                    <div className="h-full w-9/10 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></div>
                  </div>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    <span className="text-xs bg-gray-900 px-2 py-1 rounded text-gray-400">React</span>
                    <span className="text-xs bg-gray-900 px-2 py-1 rounded text-gray-400">HTML/CSS</span>
                    <span className="text-xs bg-gray-900 px-2 py-1 rounded text-gray-400">JavaScript</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-semibold">Backend</span>
                    <span className="text-blue-400 font-bold">85%</span>
                  </div>
                  <div className="h-3 bg-gray-900 rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></div>
                  </div>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    <span className="text-xs bg-gray-900 px-2 py-1 rounded text-gray-400">Laravel</span>
                    <span className="text-xs bg-gray-900 px-2 py-1 rounded text-gray-400">Node.js</span>
                    <span className="text-xs bg-gray-900 px-2 py-1 rounded text-gray-400">PHP</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-semibold">Database</span>
                    <span className="text-blue-400 font-bold">80%</span>
                  </div>
                  <div className="h-3 bg-gray-900 rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></div>
                  </div>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    <span className="text-xs bg-gray-900 px-2 py-1 rounded text-gray-400">MySQL</span>
                    <span className="text-xs bg-gray-900 px-2 py-1 rounded text-gray-400">Git</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Certifications */}
            <div 
              data-scroll-animate 
              id="certifications" 
              className={`animate-fade-right ${visibleSections.has('certifications') ? 'visible' : ''}`}
            >
              <h3 className="text-3xl font-bold mb-8">Certificaciones y Logros</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <a 
                    key={index} 
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-blue-500 transition-all group cursor-pointer"
                  >
                    <div className="p-3 bg-blue-500 rounded-lg group-hover:bg-blue-600 transition-colors">
                      <Award className="text-white" size={20} />
                    </div>
                    <span className="text-gray-300 font-medium flex-1">{cert.name}</span>
                    <ExternalLink className="text-gray-600 group-hover:text-blue-400 transition-colors" size={20} />
                  </a>
                ))}
              </div>

              <div className="mt-8 bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500 rounded-lg">
                    <Heart className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Voluntariado</h4>
                    <p className="text-gray-400 text-sm mb-1">Cruz Roja Colombiana</p>
                    <p className="text-gray-500 text-xs">2021 - 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div 
            data-scroll-animate 
            id="cta-content" 
            className={`animate-on-scroll ${visibleSections.has('cta-content') ? 'visible' : ''}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-400 text-sm font-semibold">Disponible para proyectos</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold mb-6">
            ¿Listo para <span className="text-blue-400">construir algo increíble?</span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Transforma tu visión en una solución digital real. Trabajemos juntos en tu próximo proyecto.
          </p>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <a
              href="mailto:juanjosegarcia756@gmail.com"
              className="flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-blue-500 rounded-xl p-6 transition-all group"
            >
              <Mail className="text-blue-400" size={24} />
              <div className="text-left">
                <div className="text-sm text-gray-400">Email</div>
                <div className="text-white font-semibold group-hover:text-blue-400 transition-colors">Enviar mensaje</div>
              </div>
            </a>

            <a
              href="tel:3007145281"
              className="flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-blue-500 rounded-xl p-6 transition-all group"
            >
              <Phone className="text-blue-400" size={24} />
              <div className="text-left">
                <div className="text-sm text-gray-400">Teléfono</div>
                <div className="text-white font-semibold group-hover:text-blue-400 transition-colors">300 714 5281</div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/juanjgarciav"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-blue-500 rounded-xl p-6 transition-all group"
            >
              <Linkedin className="text-blue-400" size={24} />
              <div className="text-left">
                <div className="text-sm text-gray-400">LinkedIn</div>
                <div className="text-white font-semibold group-hover:text-blue-400 transition-colors">Conectar</div>
              </div>
            </a>
          </div>

          {/* Main CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:juanjosegarcia756@gmail.com"
              className="px-10 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-bold text-lg transition-all shadow-lg shadow-blue-500/50 hover:shadow-blue-500/75 inline-flex items-center justify-center gap-2"
            >
              <Rocket size={24} />
              Iniciar Proyecto
            </a>
            <a
              href="https://www.linkedin.com/in/juanjgarciav"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-blue-600 hover:bg-blue-700 border border-blue-500 rounded-lg font-bold text-lg transition-all inline-flex items-center justify-center gap-2"
            >
              <Linkedin size={24} />
              LinkedIn
            </a>
            <a
              href="https://github.com/GarZa402"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-blue-500 rounded-lg font-bold text-lg transition-all inline-flex items-center justify-center gap-2"
            >
              <Github size={24} />
              GitHub
            </a>
          </div>

          <p className="text-gray-500 text-sm mt-8">
            💙 Respuesta en menos de 24 horas • Basado en Medellín, Colombia
          </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2026 Juan José García Villegas. Todos los derechos reservados.
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/GarZa402" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/juanjgarciav" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:juanjosegarcia756@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;