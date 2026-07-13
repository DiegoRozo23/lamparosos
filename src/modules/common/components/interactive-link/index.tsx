import { ArrowUpRightMini } from "@medusajs/icons"
import { Text } from "@medusajs/ui"
import LocalizedClientLink from "../localized-client-link"

type InteractiveLinkProps = {
  href: string
  children?: React.ReactNode
  onClick?: () => void
  className?: string
}

const InteractiveLink = ({
  href,
  children,
  onClick,
  className,
  ...props
}: InteractiveLinkProps) => {
  return (
    <LocalizedClientLink
      className={`flex gap-x-1 items-center group ${className || ""}`}
      href={href}
      onClick={onClick}
      {...props}
    >
      <Text className="text-current font-bold uppercase tracking-widest">{children}</Text>
      <ArrowUpRightMini
        className="group-hover:translate-x-1 group-hover:-translate-y-1 ease-in-out duration-300"
        color="currentColor"
      />
    </LocalizedClientLink>
  )
}

export default InteractiveLink
