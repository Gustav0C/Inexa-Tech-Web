import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { type MouseEvent } from 'react'
import { Linkedin, Github, User } from 'lucide-react'
import { team } from '../../constants/team'
import SectionTitle from '../ui/SectionTitle'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

interface TeamCardProps {
  member: (typeof team)[number]
}

function TeamCard({ member }: TeamCardProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 150,
    damping: 20,
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 150,
    damping: 20,
  })

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      style={{ perspective: '600px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="rounded-xl bg-surface-container/60 backdrop-blur-xl border border-white/10 p-6 text-center transition-shadow duration-300 ease-out hover:shadow-lg hover:shadow-primary/10"
        style={{
          transformStyle: 'preserve-3d',
          rotateX,
          rotateY,
        }}
      >
        {/* Photo placeholder */}
        <div className="mx-auto mb-4 w-24 h-24 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden">
          {member.photoUrl ? (
            <img
              src={member.photoUrl}
              alt={member.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <User className="w-10 h-10 text-on-surface-variant/40" aria-hidden="true" />
          )}
        </div>

        {/* Name */}
        <h3 className="font-sora font-semibold text-headline-md text-on-surface">
          {member.name}
        </h3>

        {/* Role */}
        <p className="mt-1 text-label-sm font-jetbrains text-secondary uppercase tracking-wider">
          {member.role}
        </p>

        {/* Bio */}
        <p className="mt-3 text-body-md text-on-surface-variant">{member.bio}</p>

        {/* Social links */}
        <div className="mt-4 flex items-center justify-center gap-3">
          {member.social.linkedin && (
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              className="text-on-surface-variant hover:text-secondary transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" aria-hidden="true" />
            </a>
          )}
          {member.social.github && (
            <a
              href={member.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on GitHub`}
              className="text-on-surface-variant hover:text-secondary transition-colors duration-200"
            >
              <Github className="w-5 h-5" aria-hidden="true" />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Team() {
  return (
    <section id="team" className="py-24 px-4 sm:px-6 lg:px-8 max-w-container mx-auto">
      <SectionTitle
        title="Our Team"
        subtitle="Engineers, architects, and problem-solvers building technology that matters."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {team.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </motion.div>
    </section>
  )
}
