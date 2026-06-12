import { Link } from 'react-router-dom'
import { Linkedin, Github, Twitter } from 'lucide-react'

const quickLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Servicios', path: '/servicios' },
  { name: 'Productos', path: '/productos' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'Equipo', path: '/equipo' },
  { name: 'Contacto', path: '/contacto' },
]

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'Twitter/X', icon: Twitter, href: '#' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface-container-low border-t border-outline-variant">
      <div className="max-w-container mx-auto px-gutter py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <div className="text-2xl font-sora font-bold text-on-surface">
                INEXA <span className="text-secondary-container">TECH</span>
              </div>
            </Link>
            <p className="text-on-surface-variant font-inter leading-relaxed">
              Soluciones tecnológicas de vanguardia para empresas que buscan 
              transformación digital y excelencia operativa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-jetbrains font-medium text-on-surface mb-6 tracking-wider uppercase">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-on-surface-variant hover:text-on-surface transition-colors duration-200 font-inter"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="text-sm font-jetbrains font-medium text-on-surface mb-6 tracking-wider uppercase">
              Conecta con Nosotros
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-md bg-surface-container-high hover:bg-surface-container-highest transition-colors duration-200 text-on-surface-variant hover:text-on-surface"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <div className="mt-8">
              <p className="text-on-surface-variant font-inter text-sm">
                contact@inexatech.com
              </p>
              <p className="text-on-surface-variant font-inter text-sm mt-1">
                +54 11 1234-5678
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-outline-variant">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-on-surface-variant font-inter text-sm">
              © {currentYear} INEXA TECH. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-on-surface-variant hover:text-on-surface text-sm font-inter transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-on-surface-variant hover:text-on-surface text-sm font-inter transition-colors">
                Términos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}