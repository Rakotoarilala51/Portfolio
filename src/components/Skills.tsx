'use client'
import { useEffect } from 'react'
import { 
  SiJavascript, SiTypescript, SiPython, SiGo, SiRust, SiC, SiPhp,
  SiReact, SiNextdotjs, SiVuedotjs, SiHtml5, SiCss3, SiTailwindcss,
  SiNodedotjs, SiSpring, SiFastapi, SiDjango, SiLaravel, SiNestjs,
  SiLangchain, SiScikitlearn, SiTensorflow, SiPytorch,
  SiGit, SiDocker, SiFigma,
  SiPostgresql, SiMysql, SiOracle, SiMongodb, SiRedis, SiJupyter
} from 'react-icons/si'
import { FaDatabase, FaJava } from 'react-icons/fa'

interface SkillItemProps {
  name: string
  percentage: string
  icon: React.ReactNode
}

function SkillItem({ name, percentage, icon }: SkillItemProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <div className="text-cyan-400 text-xl">
          {icon}
        </div>
        <span className="font-medium text-white">{name}</span>
      </div>
      <div className="h-2 bg-white/10 rounded overflow-hidden relative">
        <div
          className="skill-progress h-full bg-gradient-to-r from-pink-500 to-cyan-400 rounded shadow-[0_0_10px_rgba(255,0,128,0.5)] transition-all duration-1000 ease-out"
          data-width={percentage}
          style={{ width: '0%' }}
        />
      </div>
    </div>
  )
}

interface SkillCategoryProps {
  title: string
  skills: SkillItemProps[]
}

function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
      <h3 className="font-orbitron text-2xl text-cyan-400 mb-6 text-center drop-shadow-[0_0_10px_#00FFFF]">
        {title}
      </h3>
      <div className="flex flex-col gap-4">
        {skills.map((skill, index) => (
          <SkillItem key={index} name={skill.name} percentage={skill.percentage} icon={skill.icon} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  useEffect(() => {
    // Animate skill bars when they come into view
    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillBars = entry.target.querySelectorAll('.skill-progress')
          skillBars.forEach((bar) => {
            const width = bar.getAttribute('data-width')
            if (width) {
              setTimeout(() => {
                (bar as HTMLElement).style.width = width
              }, 200)
            }
          })
        }
      })
    }, {
      threshold: 0.3,
      rootMargin: '-50px'
    })

    const skillsSection = document.querySelector('.skills-container')
    if (skillsSection) {
      skillsObserver.observe(skillsSection)
    }

    return () => {
      if (skillsSection) {
        skillsObserver.unobserve(skillsSection)
      }
    }
  }, [])

  const languageSkills: SkillItemProps[] = [
    { name: 'JavaScript', percentage: '90%', icon: <SiJavascript /> },
    { name: 'TypeScript', percentage: '80%', icon: <SiTypescript /> },
    { name: 'Python', percentage: '88%', icon: <SiPython /> },
    { name: 'Go', percentage: '75%', icon: <SiGo /> },
    { name: 'Rust', percentage: '70%', icon: <SiRust /> },
    { name: 'C/C++', percentage: '95%', icon: <SiC /> },
    { name: 'PHP', percentage: '82%', icon: <SiPhp /> },
    { name: 'Java', percentage: '90%', icon: <FaJava /> }
  ]

  const frontendSkills: SkillItemProps[] = [
    { name: 'React', percentage: '95%', icon: <SiReact /> },
    { name: 'Next.js', percentage: '92%', icon: <SiNextdotjs /> },
    { name: 'Vue.js', percentage: '85%', icon: <SiVuedotjs /> },
    { name: 'HTML', percentage: '98%', icon: <SiHtml5 /> },
    { name: 'CSS', percentage: '95%', icon: <SiCss3 /> },
    { name: 'Tailwind CSS', percentage: '90%', icon: <SiTailwindcss /> }
  ]

  const backendSkills: SkillItemProps[] = [
    { name: 'Node.js', percentage: '90%', icon: <SiNodedotjs /> },
    { name: 'Spring Boot', percentage: '78%', icon: <SiSpring /> },
    { name: 'FastAPI', percentage: '85%', icon: <SiFastapi /> },
    { name: 'Django', percentage: '82%', icon: <SiDjango /> },
    { name: 'Laravel', percentage: '80%', icon: <SiLaravel /> },
    { name: 'NestJS', percentage: '88%', icon: <SiNestjs /> }
  ]

  const aiDataSkills: SkillItemProps[] = [
    { name: 'LangChain', percentage: '85%', icon: <SiLangchain /> },
    { name: 'Scikit-learn', percentage: '80%', icon: <SiScikitlearn /> },
    { name: 'TensorFlow', percentage: '75%', icon: <SiTensorflow /> },
    { name: 'PyTorch', percentage: '78%', icon: <SiPytorch /> }
  ]

  const toolsSkills: SkillItemProps[] = [
    { name: 'Git', percentage: '95%', icon: <SiGit /> },
    { name: 'Docker', percentage: '88%', icon: <SiDocker /> },
    { name: 'Jupyter NoteBooks', percentage: '75%', icon: <SiJupyter /> },
    { name: 'Figma', percentage: '85%', icon: <SiFigma /> }
  ]

  const databaseSkills: SkillItemProps[] = [
    { name: 'PostgreSQL', percentage: '90%', icon: <SiPostgresql /> },
    { name: 'MySQL', percentage: '88%', icon: <SiMysql /> },
    { name: 'Oracle', percentage: '75%', icon: <SiOracle /> },
    { name: 'Chroma', percentage: '80%', icon: <FaDatabase /> },
    { name: 'MongoDB', percentage: '85%', icon: <SiMongodb /> },
    { name: 'Redis', percentage: '78%', icon: <SiRedis /> }
  ]

  return (
    <section id='skills' className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-orbitron font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-400 mx-auto rounded-full shadow-[0_0_20px_rgba(255,0,128,0.5)]"></div>
        </div>

        <div className="skills-container grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          <SkillCategory title="Languages" skills={languageSkills} />
          <SkillCategory title="Frontend" skills={frontendSkills} />
          <SkillCategory title="Backend" skills={backendSkills} />
          <SkillCategory title="AI / LLM / Data Science" skills={aiDataSkills} />
          <SkillCategory title="Tools" skills={toolsSkills} />
          <SkillCategory title="Databases" skills={databaseSkills} />
        </div>
      </div>
    </section>
  )
}