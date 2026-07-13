import { getLocaleHeader } from "@lib/util/get-locale-header"
import Medusa, { FetchArgs, FetchInput } from "@medusajs/js-sdk"

// Defaults to standard port for Medusa server
let MEDUSA_BACKEND_URL = "http://localhost:9000"

if (process.env.MEDUSA_BACKEND_URL) {
  MEDUSA_BACKEND_URL = process.env.MEDUSA_BACKEND_URL
}

export const sdk = new Medusa({
  baseUrl: MEDUSA_BACKEND_URL,
  debug: process.env.NODE_ENV === "development",
  publishableKey: process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY,
})

const originalFetch = sdk.client.fetch.bind(sdk.client)

sdk.client.fetch = async <T>(
  input: FetchInput,
  init?: FetchArgs
): Promise<T> => {
  const headers = init?.headers ?? {}
  let localeHeader: Record<string, string | null> | undefined
  try {
    localeHeader = await getLocaleHeader()
    headers["x-medusa-locale"] ??= localeHeader["x-medusa-locale"]
  } catch {}

  const newHeaders = {
    ...localeHeader,
    ...headers,
  }
  init = {
    ...init,
    headers: newHeaders,
  }
  // --- MOCK DATA FOR UI DEVELOPMENT ---
  const url = typeof input === "string" ? input : (input as Request).url
  
  if (url.includes("/store/regions")) {
    return {
      regions: [
        {
          id: "reg_mock",
          name: "North America",
          currency_code: "usd",
          countries: [{ iso_2: "us", display_name: "United States" }],
        },
      ],
    } as any
  }

  if (url.includes("/store/collections")) {
    return {
      collections: [
        { id: "col_1", handle: "lo-mas-ofensivo", title: "Lo Más Ofensivo" },
        { id: "col_2", handle: "recien-salidos", title: "Recién Salidos del Horno" },
      ],
      count: 2,
      offset: 0,
      limit: 10
    } as any
  }

  if (url.includes("/store/products")) {
    const allProducts = [
      {
        id: "prod_1",
        title: "Adicto a las Cajeras del Ara",
        handle: "adicto-cajeras-ara",
        thumbnail: "/camisetas/adicto a las cajeras del ara.png",
        description: "Porque el descuento no es lo único atractivo.",
        variants: [{ calculated_price: { calculated_amount: 35000, original_amount: 35000, currency_code: "cop", calculated_price: { price_list_type: "default" } } }],
        images: [{ url: "/camisetas/adicto a las cajeras del ara.png" }],
        options: [{ id: "opt_1", title: "Talla", values: [{ id: "val_s", value: "S" }, { id: "val_m", value: "M" }, { id: "val_l", value: "L" }] }]
      },
      {
        id: "prod_2",
        title: "Adicto a las Cajeras del D1",
        handle: "adicto-cajeras-d1",
        thumbnail: "/camisetas/adicto a las cajeras del d1.png",
        description: "Comprando barato, enamorándose caro.",
        variants: [{ calculated_price: { calculated_amount: 35000, original_amount: 35000, currency_code: "cop", calculated_price: { price_list_type: "default" } } }],
        images: [{ url: "/camisetas/adicto a las cajeras del d1.png" }],
        options: [{ id: "opt_2", title: "Talla", values: [{ id: "val_s", value: "S" }, { id: "val_m", value: "M" }, { id: "val_l", value: "L" }] }]
      },
      {
        id: "prod_3",
        title: "Adicto a las Cajeras del Éxito",
        handle: "adicto-cajeras-exito",
        thumbnail: "/camisetas/adicto a las cajeras del exito.png",
        description: "El verdadero éxito es que te devuelvan la mirada.",
        variants: [{ calculated_price: { calculated_amount: 35000, original_amount: 35000, currency_code: "cop", calculated_price: { price_list_type: "default" } } }],
        images: [{ url: "/camisetas/adicto a las cajeras del exito.png" }],
        options: [{ id: "opt_3", title: "Talla", values: [{ id: "val_s", value: "S" }, { id: "val_m", value: "M" }, { id: "val_l", value: "L" }] }]
      },
      {
        id: "prod_4",
        title: "Adicto al Camello",
        handle: "adicto-camello",
        thumbnail: "/camisetas/adicto al camello.jpeg",
        description: "Síndrome de Estocolmo laboral en su máxima expresión.",
        variants: [{ calculated_price: { calculated_amount: 35000, original_amount: 35000, currency_code: "cop", calculated_price: { price_list_type: "default" } } }],
        images: [{ url: "/camisetas/adicto al camello.jpeg" }],
        options: [{ id: "opt_4", title: "Talla", values: [{ id: "val_s", value: "S" }, { id: "val_m", value: "M" }, { id: "val_l", value: "L" }] }]
      },
      {
        id: "prod_5",
        title: "¿Cuándo Pagan?",
        handle: "cuando-pagan",
        thumbnail: "/camisetas/cuando pagan.jpeg",
        description: "La pregunta que atormenta tu existencia desde el día 16.",
        variants: [{ calculated_price: { calculated_amount: 35000, original_amount: 35000, currency_code: "cop", calculated_price: { price_list_type: "default" } } }],
        images: [{ url: "/camisetas/cuando pagan.jpeg" }],
        options: [{ id: "opt_5", title: "Talla", values: [{ id: "val_s", value: "S" }, { id: "val_m", value: "M" }, { id: "val_l", value: "L" }] }]
      },
      {
        id: "prod_6",
        title: "Gorda Solo La De Abajo",
        handle: "gorda-solo-abajo",
        thumbnail: "/camisetas/gorda solo la de abajo}.jpeg",
        description: "Exceso de sinceridad y falta de filtro.",
        variants: [{ calculated_price: { calculated_amount: 35000, original_amount: 35000, currency_code: "cop", calculated_price: { price_list_type: "default" } } }],
        images: [{ url: "/camisetas/gorda solo la de abajo}.jpeg" }],
        options: [{ id: "opt_6", title: "Talla", values: [{ id: "val_s", value: "S" }, { id: "val_m", value: "M" }, { id: "val_l", value: "L" }] }]
      },
      {
        id: "prod_7",
        title: "Que Viva El Perico",
        handle: "viva-perico",
        thumbnail: "/camisetas/que viva el perico.jpeg",
        description: "Hablamos del café con leche... guiño guiño.",
        variants: [{ calculated_price: { calculated_amount: 35000, original_amount: 35000, currency_code: "cop", calculated_price: { price_list_type: "default" } } }],
        images: [{ url: "/camisetas/que viva el perico.jpeg" }],
        options: [{ id: "opt_7", title: "Talla", values: [{ id: "val_s", value: "S" }, { id: "val_m", value: "M" }, { id: "val_l", value: "L" }] }]
      },
      {
        id: "prod_8",
        title: "Técnico En Decepcionar A Mi Familia",
        handle: "decepcionar-familia",
        thumbnail: "/camisetas/tecnico en decepcionar a mi familia .jpeg",
        description: "Al menos la camiseta está buena y el título es profesional.",
        variants: [{ calculated_price: { calculated_amount: 35000, original_amount: 35000, currency_code: "cop", calculated_price: { price_list_type: "default" } } }],
        images: [{ url: "/camisetas/tecnico en decepcionar a mi familia .jpeg" }],
        options: [{ id: "opt_8", title: "Talla", values: [{ id: "val_s", value: "S" }, { id: "val_m", value: "M" }, { id: "val_l", value: "L" }] }]
      },
      {
        id: "prod_9",
        title: "Viva Cristo Rey",
        handle: "viva-cristo-rey",
        thumbnail: "/camisetas/viva cristo rey.jpeg",
        description: "Fe inquebrantable, humor cuestionable.",
        variants: [{ calculated_price: { calculated_amount: 35000, original_amount: 35000, currency_code: "cop", calculated_price: { price_list_type: "default" } } }],
        images: [{ url: "/camisetas/viva cristo rey.jpeg" }],
        options: [{ id: "opt_9", title: "Talla", values: [{ id: "val_s", value: "S" }, { id: "val_m", value: "M" }, { id: "val_l", value: "L" }] }]
      },
      {
        id: "prod_10",
        title: "Ya Pagaron La Quincena",
        handle: "ya-pagaron-quincena",
        thumbnail: "/camisetas/ya pagaron la quincena .jpeg",
        description: "Dura dos días, pero se celebra como fin de año.",
        variants: [{ calculated_price: { calculated_amount: 35000, original_amount: 35000, currency_code: "cop", calculated_price: { price_list_type: "default" } } }],
        images: [{ url: "/camisetas/ya pagaron la quincena .jpeg" }],
        options: [{ id: "opt_10", title: "Talla", values: [{ id: "val_s", value: "S" }, { id: "val_m", value: "M" }, { id: "val_l", value: "L" }] }]
      },
    ]

    let matchedProducts = allProducts
    const query = (init as any)?.query || {}
    const requestedHandle = query.handle
    
    // Also support filtering by collection if requested
    const collectionIdParam = query.collection_id 
    if (collectionIdParam) {
       // Mock logic: return a subset based on collection id just so it looks distinct
       if (collectionIdParam === "col_1") {
           matchedProducts = allProducts.slice(0, 5)
       } else if (collectionIdParam === "col_2") {
           matchedProducts = allProducts.slice(5, 10)
       }
    } else if (requestedHandle) {
      matchedProducts = allProducts.filter(p => p.handle === requestedHandle)
    }

    return {
      products: matchedProducts,
      count: matchedProducts.length,
      offset: 0,
      limit: 100
    } as any
  }
  if (url.includes("/store/customers/me")) {
    return { customer: null } as any
  }

  if (url.includes("/store/locales")) {
    return { locales: [] } as any
  }

  if (url.includes("/store/product-categories")) {
    return { product_categories: [], count: 0, offset: 0, limit: 100 } as any
  }

  // Catch-all to prevent ECONNREFUSED
  if (url.includes("/store/")) {
    console.log("[MOCK] Bypassing fetch for:", url)
    return {} as any
  }
  // --- END MOCK ---

  return originalFetch(input, init)
}
