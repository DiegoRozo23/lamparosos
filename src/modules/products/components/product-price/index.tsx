import { clx } from "@medusajs/ui"

import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"

export default function ProductPrice({
  product,
  variant,
}: {
  product: HttpTypes.StoreProduct
  variant?: HttpTypes.StoreProductVariant
}) {
  const { cheapestPrice, variantPrice } = getProductPrice({
    product,
    variantId: variant?.id,
  })

  const selectedPrice = variant ? variantPrice : cheapestPrice

  if (!selectedPrice) {
    return <div className="block w-32 h-9 bg-gray-100 animate-pulse" />
  }

  return (
    <div className="flex flex-col text-lamparosos-accent">
      <span
        className={clx("text-5xl font-black drop-shadow-[0_0_15px_rgba(191,255,0,0.4)]", {
          "text-white": selectedPrice.price_type === "sale",
        })}
      >
        {!variant && "Desde "}
        <span
          data-testid="product-price"
          data-value={selectedPrice.calculated_price_number}
        >
          {selectedPrice.calculated_price}
        </span>
      </span>
      {selectedPrice.price_type === "sale" && (
        <>
          <p className="mt-2">
            <span className="text-neutral-500">Original: </span>
            <span
              className="line-through text-neutral-400 font-bold"
              data-testid="original-product-price"
              data-value={selectedPrice.original_price_number}
            >
              {selectedPrice.original_price}
            </span>
          </p>
          <span className="text-lamparosos-accent font-bold mt-1">
            -{selectedPrice.percentage_diff}% Dto.
          </span>
        </>
      )}
    </div>
  )
}
