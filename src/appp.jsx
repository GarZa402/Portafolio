import React, { useState, useEffect } from 'react';
import { Mail, Phone, Github, Code, Briefcase, GraduationCap, Award, Heart, ChevronRight, Menu, X, ExternalLink, Rocket, Zap, Target, CheckCircle } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre-mi', 'experiencia', 'educacion', 'proyectos', 'habilidades', 'contacto'];
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

  const projects = [
    {
      title: 'SalleConnect',
      description: 'Plataforma web integral para estudiantes universitarios con chatbot con IA, foros, gestión académica, sistema de reservas y procesamiento de pagos.',
      techs: ['Laravel', 'MySQL', 'Git'],
      github: 'https://github.com/GarZa402/SalleConnect'
    },
    {
      title: 'Attendo',
      description: 'Sistema web de gestión de asistencias empresariales con control de horarios, usuarios, departamentos y generación de reportes automatizados.',
      techs: ['Laravel', 'Apache Airflow', 'MySQL'],
      github: 'https://github.com/GarZa402/Attendo'
    }
  ];

  const skillsProgress = [
    { name: 'Desarrollo Frontend', level: 90 },
    { name: 'Desarrollo Backend', level: 85 },
    { name: 'Bases de Datos', level: 80 },
    { name: 'Control de Versiones', level: 85 }
  ];

  const services = [
    { icon: Code, title: 'Desarrollo Web', description: 'Aplicaciones web modernas y responsivas' },
    { icon: Briefcase, title: 'Gestión de Proyectos', description: 'Planificación y ejecución efectiva' },
    { icon: Zap, title: 'Optimización', description: 'Performance y mejores prácticas' },
    { icon: Target, title: 'Soluciones Personalizadas', description: 'Adaptadas a tus necesidades' }
  ];

  const certifications = [
    'EF SET Inglés C1 Avanzado',
    'Cisco CyberOps Associate',
    'Python Developer – Edutin Academy',
    'Cisco Cybersecurity Essentials',
    'Introduction to Cybersecurity – Cisco',
    'EF SET Inglés B2 Intermedio Alto'
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-900">
              <span className="text-blue-600">JJ</span> García
            </div>
            
            <div className="hidden md:flex space-x-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors ${
                    activeSection === item.id 
                      ? 'text-blue-600' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-4">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Organic Shapes */}
      <section id="inicio" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative min-h-screen flex items-center">
        {/* Decorative Shapes */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
        
        {/* Black decorative shape */}
        <div className="absolute top-40 left-0 w-64 h-64 bg-gray-900 rounded-full opacity-5"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              ¡Bienvenido! 👋
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Hola! Soy
              <br />
              <span className="text-blue-600">Juan José</span>
              <br />
              <span className="text-gray-700">García Villegas</span>
            </h1>
            <p className="text-2xl text-blue-600 font-semibold">
              Estudiante de Ingeniería Informática
            </p>
            <p className="text-xl text-gray-600">
              Desarrollador Web especializado en crear soluciones eficientes, escalables e innovadoras que transforman ideas en realidad digital.
            </p>
            <div className="flex gap-4 pt-4">
              <button
                onClick={() => scrollToSection('proyectos')}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Ver Proyectos <ChevronRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                Contactar
              </button>
            </div>
          </div>

          {/* Large Blue Organic Shape with Avatar */}
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-90 transform rotate-12"></div>
            <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-full w-full h-96 flex items-center justify-center shadow-2xl">
              <div className="text-center text-white">
                <div className="text-8xl font-bold mb-4">JJG</div>
                <div className="text-2xl font-semibold">Desarrollador Web</div>
              </div>
            </div>
            {/* Decorative dots */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 grid grid-cols-8 gap-1">
              {[...Array(64)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-blue-400 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:transform hover:-translate-y-2 text-center"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section with Blue Organic Shape */}
      <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 opacity-10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-full w-full h-80 flex items-center justify-center shadow-2xl">
              <div className="text-white text-center p-8">
                <h3 className="text-4xl font-bold mb-4">¿Necesitas un Desarrollador?</h3>
                <p className="text-xl">¡Puedo ayudarte!</p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gray-900 rounded-full opacity-5"></div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Sobre mí</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Estudiante universitario de Ingeniería Informática, apasionado por el desarrollo web y la tecnología. Me interesa aplicar conocimientos teóricos en entornos reales, colaborar en equipos multidisciplinarios y construir soluciones innovadoras.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Con mentalidad proactiva, enfoque en el aprendizaje continuo y fuerte compromiso profesional, busco constantemente crecer como desarrollador y aportar valor en cada proyecto que emprendo.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="mailto:juanjosegarcia756@gmail.com"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
              >
                Contáctame <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Progress Bars */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Mis Habilidades Técnicas</h2>
          <div className="space-y-8">
            {skillsProgress.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-semibold text-gray-900">{skill.name}</span>
                  <span className="text-lg font-bold text-blue-600">{skill.level}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Experiencia</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-600">
            <div className="flex items-start gap-4">
              <div className="p-4 bg-blue-100 rounded-xl">
                <Briefcase size={32} className="text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900">Web Developer</h3>
                <p className="text-blue-600 mb-2 font-semibold">Freelance / Self-employed</p>
                <p className="text-sm text-gray-500 mb-4">Junio 2024 – Presente | Remoto</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                    <span>Comunicación directa con clientes para entender necesidades y expectativas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                    <span>Gestión integral de proyectos web desde la planificación hasta el despliegue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                    <span>Desarrollo de soluciones personalizadas y escalables</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 opacity-10 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">Proyectos Destacados</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            Soluciones reales que demuestran mi capacidad para desarrollar aplicaciones web completas y escalables
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 border-t-4 border-blue-600"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Code className="text-blue-600" size={24} />
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techs.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  <Github size={20} />
                  Ver en GitHub
                  <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="educacion" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Educación y Certificaciones</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Educación</h3>
              <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-blue-600">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600 rounded-xl">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Ingeniería Informática</h4>
                    <p className="text-blue-600 font-semibold">Universidad de La Salle</p>
                    <p className="text-sm text-gray-500">Feb 2023 – Jun 2028</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-gray-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 rounded-xl">
                    <GraduationCap size={24} className="text-gray-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Bachillerato</h4>
                    <p className="text-gray-600 font-semibold">Instituto San Carlos De La Salle</p>
                    <p className="text-sm text-gray-500">Semillero de Diseño 3D</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Certificaciones</h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all"
                  >
                    <Award className="text-blue-600 flex-shrink-0" size={20} />
                    <span className="text-gray-700 font-medium text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-500">
            <div className="flex items-start gap-4">
              <div className="p-4 bg-red-100 rounded-xl">
                <Heart size={32} className="text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Voluntario</h3>
                <p className="text-red-600 mb-2 font-semibold">Cruz Roja Colombiana</p>
                <p className="text-sm text-gray-500 mb-4">2021 – 2022</p>
                <p className="text-gray-700 leading-relaxed">
                  Compromiso con la responsabilidad social y el servicio a la comunidad, demostrando valores de solidaridad y apoyo humanitario.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Strong Call to Action */}
      <section id="contacto" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block p-3 bg-white/10 rounded-full mb-6">
            <Rocket className="text-white" size={48} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            ¿Listo para dar vida a tu proyecto?
          </h2>
          <p className="text-xl sm:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto">
            Transformemos tus ideas en soluciones digitales exitosas
          </p>
          <p className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto">
            Ya sea que necesites un sitio web completo, una aplicación personalizada o asesoría técnica, estoy aquí para ayudarte a alcanzar tus objetivos.
          </p>

          {/* Contact Options */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
            <a
              href="tel:3007145281"
              className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/30 rounded-xl p-6 transition-all shadow-lg hover:shadow-2xl"
            >
              <Phone className="text-white" size={24} />
              <span className="text-lg text-white font-semibold">300 714 5281</span>
            </a>
            <a
              href="mailto:juanjosegarcia756@gmail.com"
              className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/30 rounded-xl p-6 transition-all shadow-lg hover:shadow-2xl"
            >
              <Mail className="text-white" size={24} />
              <span className="text-lg text-white font-semibold">Enviar Email</span>
            </a>
          </div>

          {/* Main CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="mailto:juanjosegarcia756@gmail.com"
              className="px-10 py-4 bg-white hover:bg-gray-100 text-blue-600 rounded-lg font-bold text-lg transition-all shadow-xl hover:shadow-2xl inline-flex items-center justify-center gap-2 transform hover:scale-105"
            >
              <Mail size={24} />
              Iniciar un Proyecto
            </a>
            <a
              href="https://github.com/GarZa402"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-bold text-lg transition-all shadow-xl hover:shadow-2xl inline-flex items-center justify-center gap-2 transform hover:scale-105"
            >
              <Github size={24} />
              Ver GitHub
            </a>
          </div>

          <p className="text-blue-200 text-sm">
            Respondo en menos de 24 horas • Disponible para proyectos freelance
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p className="font-medium">© 2026 Juan José García Villegas. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">Medellín, Antioquia, Colombia</p>
          <p className="mt-4 text-sm text-gray-500">Desarrollado con React + Vite</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;