import { HttpTypes } from "@medusajs/types"
import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type ProductInfoProps = {
  product: HttpTypes.StoreProduct
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div id="product-info">
      <div className="flex flex-col gap-y-4 lg:max-w-[500px] mx-auto small:mx-0">
        {product.collection && (
          <LocalizedClientLink
            href={`/collections/${product.collection.handle}`}
            className="text-lamparosos-accent font-bold uppercase tracking-widest hover:text-white transition-colors text-sm"
          >
            {product.collection.title}
          </LocalizedClientLink>
        )}
        <Heading
          level="h1"
          className="text-5xl lg:text-7xl font-black uppercase text-white tracking-tighter leading-[0.9]"
          data-testid="product-title"
        >
          {product.title}
        </Heading>

        <Text
          className="text-lg lg:text-xl text-neutral-400 font-medium whitespace-pre-line mt-4"
          data-testid="product-description"
        >
          {product.description}
        </Text>
      </div>
    </div>
  )
}

export default ProductInfo
