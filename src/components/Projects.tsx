'use client'

import { useEffect, useState } from 'react'
import { 
  SiNextdotjs, SiReact, SiTypescript, SiFastapi, SiLangchain, SiSpring, 
  SiRust, SiGo, SiPython, SiJavascript, SiGithub
} from 'react-icons/si'
import { FaExternalLinkAlt, FaBrain, FaNewspaper, FaRobot, FaTasks, 
  FaGraduationCap, FaTerminal, FaShieldAlt, FaCode, FaServer } from 'react-icons/fa'

interface ProjectCardProps {
  title: string
  description: string
  category: string
  technologies: Array<{name: string, icon: React.ReactNode}>
  liveDemo?: string
  github: string
  featured?: boolean
  index: number
  image?: string
}

function ProjectCard({ title, description, category, technologies, liveDemo, github, featured, index, image }: ProjectCardProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, index * 150)

    return () => clearTimeout(timer)
  }, [index])

  return (
    <div 
      className={`project-card group relative bg-gradient-to-br from-gray-900/90 to-black/90 
        border border-cyan-400/30 rounded-2xl p-6 transition-all duration-700 ease-out
        shadow-[0_0_30px_rgba(0,255,255,0.1)] hover:-translate-y-3 hover:shadow-[0_0_50px_rgba(0,255,255,0.3)] 
        hover:border-pink-500/60 backdrop-blur-sm overflow-hidden
        ${featured ? 'ring-2 ring-pink-500/50 shadow-[0_0_40px_rgba(255,0,128,0.2)]' : ''}
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-pink-500/5 opacity-0 
        group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="absolute top-4 right-4 z-10">
        <span className="px-3 py-1 bg-cyan-400/20 border border-cyan-400/50 rounded-full text-xs 
          text-cyan-400 font-medium backdrop-blur-sm">
          {category}
        </span>
        {featured && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
        )}
      </div>

      {image && (
        <div className="relative mb-4 overflow-hidden rounded-lg group/image">
          <img 
            src={image} 
            alt={`${title} screenshot`}
            className="w-full h-48 transition-transform duration-500 group-hover/image:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      )}

      <div className="relative z-10">
        <h3 className="text-2xl text-white mb-3 group-hover:text-cyan-400 
          transition-colors duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          {title}
        </h3>
        
        <p className="text-gray-300 mb-6 leading-relaxed text-sm">
          {description}
        </p>

        <div className="flex flex-wrap gap-3 mb-6">
          {technologies.map((tech, techIndex) => (
            <div 
              key={techIndex}
              className="flex items-center gap-2 py-2 px-3 bg-white/5 border border-white/10 
                rounded-lg text-xs text-gray-300 font-medium backdrop-blur-sm
                hover:bg-cyan-400/10 hover:border-cyan-400/30 hover:text-cyan-400
                transition-all duration-300 group/tech"
            >
              <span className="text-cyan-400 group-hover/tech:text-pink-400 transition-colors duration-300">
                {tech.icon}
              </span>
              {tech.name}
            </div>
          ))}
        </div>
 
        <div className="flex gap-4">
          {liveDemo && (
            <a 
              href={liveDemo} 
              className="flex items-center gap-2 text-cyan-400 font-medium transition-all duration-300 
                hover:text-white hover:drop-shadow-[0_0_10px_#00FFFF] group/link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt className="text-xs group-hover/link:animate-bounce" />
              Live Demo
            </a>
          )}
          <a 
            href={github} 
            className="flex items-center gap-2 text-pink-400 font-medium transition-all duration-300 
              hover:text-white hover:drop-shadow-[0_0_10px_#FF0080] group/link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub className="text-sm group-hover/link:animate-pulse" />
            GitHub
          </a>
        </div>
      </div>

      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-pink-500/5 to-cyan-500/0 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  )
}

export default function Projects() {
  const projectsData: ProjectCardProps[] = [
    {
      title: 'TalentLens',
      description: 'AI-powered application that intelligently generates LinkedIn profiles, comprehensive CV summaries, and detailed skills assessments from uploaded CVs using advanced language models.',
      category: 'AI/ML',
      image: '/assets/images/talentLens.png',
      technologies: [
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'FastAPI', icon: <SiFastapi /> },
        { name: 'LangChain', icon: <FaBrain /> },
        { name: 'TypeScript', icon: <SiTypescript /> }
      ],
      github: 'https://github.com/Rakotoarilala51/TalentLens',
      featured: true,
      index: 0
    },
    {
      title: 'TrustMeBro',
      description: 'Real-time AI-powered news aggregation and summarization platform that provides intelligent category-based news summaries with advanced natural language processing.',
      category: 'AI/ML',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop&crop=center',
      technologies: [
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'FastAPI', icon: <SiFastapi /> },
        { name: 'LangChain', icon: <FaBrain /> },
        { name: 'Python', icon: <SiPython /> }
      ],
      github: 'https://github.com/Rakotoarilala51/TrustMeBro',
      featured: true,
      index: 1
    },
    {
      title: 'MrLarbin',
      description: 'Local AI assistant chat application powered by Ollama, providing secure and private conversational AI capabilities without relying on external APIs.',
      category: 'AI Chat',
      image: '/assets/images/mrlarbin.png',
      technologies: [
        { name: 'React', icon: <SiReact /> },
        { name: 'FastAPI', icon: <SiFastapi /> },
        { name: 'Ollama', icon: <FaRobot /> },
        { name: 'Python', icon: <SiPython /> }
      ],
      github: 'https://github.com/Rakotoarilala51/MrLarbin',
      index: 2
    },
    {
      title: 'Donezo',
      description: 'Modern task management application with intuitive user interface, real-time updates, and comprehensive project organization features for enhanced productivity.',
      category: 'Web App',
      image: '/assets/images/donezo.png',
      technologies: [
        { name: 'React', icon: <SiReact /> },
        { name: 'Spring Boot', icon: <SiSpring /> },
        { name: 'Java', icon: <FaCode /> },
        { name: 'JavaScript', icon: <SiJavascript /> }
      ],
      github: 'https://github.com/Rakotoarilala51/Donezo',
      index: 3
    },
    {
      title: 'Gestion-des-notes',
      description: 'Comprehensive grade and notes management system built with C++, featuring efficient data handling, student record management, and academic performance tracking.',
      category: 'Desktop App',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop&crop=center',
      technologies: [
        { name: 'C++', icon: <FaCode /> },
        { name: 'Systems', icon: <FaGraduationCap /> }
      ],
      github: 'https://github.com/Rakotoarilala51/Gestion-des-notes',
      index: 4
    },
    {
      title: 'forkyou',
      description: 'Powerful CLI tool built in Go that streamlines the GitHub workflow by automating repository forking and pull request submissions with simple commands.',
      category: 'CLI Tool',
      image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400&h=300&fit=crop&crop=center',
      technologies: [
        { name: 'Go', icon: <SiGo /> },
        { name: 'CLI', icon: <FaTerminal /> },
        { name: 'GitHub API', icon: <SiGithub /> }
      ],
      github: 'https://github.com/Rakotoarilala51/forkyou',
      index: 5
    },
    {
      title: 'BroChat',
      description: 'Secure command-line chat application built with Rust, featuring end-to-end encryption, robust security protocols, and high-performance messaging capabilities.',
      category: 'Security',
      image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=300&fit=crop&crop=center',
      technologies: [
        { name: 'Rust', icon: <SiRust /> },
        { name: 'Security', icon: <FaShieldAlt /> },
        { name: 'CLI', icon: <FaTerminal /> }
      ],
      github: 'https://github.com/Rakotoarilala51/BroChat',
      index: 6
    },
    {
      title: 'Markdown-Parser',
      description: 'High-performance Markdown to HTML converter written in Rust, providing fast and reliable document transformation with support for extended Markdown syntax.',
      category: 'Parser',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=300&fit=crop&crop=center',
      technologies: [
        { name: 'Rust', icon: <SiRust /> },
        { name: 'Parser', icon: <FaCode /> }
      ],
      github: 'https://github.com/Rakotoarilala51/Markdown-Parser',
      index: 7
    },
    {
      title: 'Rin',
      description: 'Lightweight and efficient Go library designed for building REST APIs quickly, featuring minimal overhead, intuitive design patterns, and excellent performance.',
      category: 'Library',
      image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=400&h=300&fit=crop&crop=center',
      technologies: [
        { name: 'Go', icon: <SiGo /> },
        { name: 'REST API', icon: <FaServer /> },
        { name: 'Library', icon: <FaCode /> }
      ],
      github: 'https://github.com/Rakotoarilala51/Rin',
      index: 8
    }
  ]

  return (
    <section id="projects" className="min-h-screen py-20 relative bg-gradient-to-br from-gray-900 via-black to-gray-900">

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center mb-16">
          <h2 className="font-mono text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto rounded-full 
            shadow-[0_0_20px_rgba(0,255,255,0.5)]"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            A showcase of innovative solutions spanning AI applications, web development, 
            system programming, and developer tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}