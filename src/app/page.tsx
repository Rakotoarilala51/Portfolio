'use client'

import { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ParticleSystem from '../components/ParticleSystem'
import ScanLines from '../components/ScanLines'

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.href && target.href.includes('#')) {
        e.preventDefault()
        const targetId = target.getAttribute('href')?.substring(1)
        const targetElement = document.getElementById(targetId || '')
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    }

    document.addEventListener('click', handleSmoothScroll)

    // Navbar background on scroll
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar') as HTMLElement
      if (navbar) {
        if (window.scrollY > 100) {
          navbar.style.background = 'rgba(10, 10, 35, 0.95)'
        } else {
          navbar.style.background = 'rgba(10, 10, 35, 0.9)'
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Animate sections on scroll
    const animateOnScroll = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement
          target.style.opacity = '1'
          target.style.transform = 'translateY(0)'
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    // Apply animation to sections
    document.querySelectorAll('section').forEach(section => {
      const sectionElement = section as HTMLElement
      sectionElement.style.opacity = '0'
      sectionElement.style.transform = 'translateY(50px)'
      sectionElement.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
      animateOnScroll.observe(section)
    })

    return () => {
      document.removeEventListener('click', handleSmoothScroll)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className=''>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ParticleSystem />
      <ScanLines />
    </div >
  )
}