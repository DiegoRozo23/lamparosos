import { Button, Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-neutral-800 relative bg-lamparosos-darker overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 flex justify-center items-center opacity-20 pointer-events-none">
         <div className="w-96 h-96 bg-lamparosos-accent blur-[120px] rounded-full"></div>
      </div>
      
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center p-6 small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-4xl sm:text-6xl leading-tight text-white font-black uppercase tracking-tighter"
          >
            Camisetas que hablan <span className="text-lamparosos-accent">por ti</span>.
          </Heading>
          <Heading
            level="h2"
            className="mt-4 text-xl sm:text-2xl text-neutral-400 font-normal max-w-2xl mx-auto"
          >
            Sátira, humor negro y verdades incómodas. No nos hacemos cargo si alguien se ofende.
          </Heading>
        </span>
        <LocalizedClientLink href="/store">
          <Button className="mt-6 bg-lamparosos-accent text-black font-bold uppercase tracking-wide hover:bg-[#a5db00] hover:shadow-[0_0_20px_rgba(191,255,0,0.4)] transition-all duration-300 rounded-full px-10 py-4 h-auto text-lg border border-transparent">
            Ver Colección
          </Button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default Hero
