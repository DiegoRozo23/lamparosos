import React from "react"

const Marquee = () => {
  return (
    <div className="w-full bg-lamparosos-accent text-lamparosos-darker py-3 overflow-hidden border-b border-lamparosos-darker/20">
      <div className="relative flex whitespace-nowrap animate-marquee">
        {/* We duplicate the span to ensure a continuous scrolling effect */}
        {[...Array(4)].map((_, i) => (
          <span key={i} className="mx-4 text-sm font-bold uppercase tracking-widest flex items-center gap-4">
            NO APTO PARA SENSIBLES <span className="text-xl leading-none">&bull;</span>
            DEVOLUCIONES SOLO SI LLORAS <span className="text-xl leading-none">&bull;</span>
            COMPRA O VETE <span className="text-xl leading-none">&bull;</span>
            HUMOR NEGRO INCLUIDO <span className="text-xl leading-none">&bull;</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee
