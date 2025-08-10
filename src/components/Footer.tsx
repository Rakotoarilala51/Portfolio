export default function Footer() {
  return (
    <footer className="bg-dark-navy py-8 border-t border-neon-cyan">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex justify-between items-center flex-wrap gap-4 md:flex-col md:text-center">
          <p>&copy; 2025 RaMaitre. Coded with ❤️ in the digital realm.</p>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/Rakotoarilala51" 
              className="text-neon-cyan no-underline transition-all duration-300 
                hover:text-neon-pink hover:drop-shadow-[0_0_10px_#FF0080]"
            >
              GitHub
            </a>
            <a 
              href="#" 
              className="text-neon-cyan no-underline transition-all duration-300 
                hover:text-neon-pink hover:drop-shadow-[0_0_10px_#FF0080]"
            >
              LinkedIn
            </a>
            <a 
              href="#" 
              className="text-neon-cyan no-underline transition-all duration-300 
                hover:text-neon-pink hover:drop-shadow-[0_0_10px_#FF0080]"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}