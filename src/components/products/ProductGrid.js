import ProductCard from './ProductCard'

// What each column span looks like: grid class, well height and how wide the screenshot renders.
const LAYOUT = {
  8: {
    span: 'lg:col-span-8',
    well: 'h-[164px] sm:h-[300px] lg:h-[400px]',
    sizes: '(min-width: 1024px) 66vw, (min-width: 768px) 50vw, 100vw',
  },
  6: {
    span: 'lg:col-span-6',
    well: 'h-[186px] sm:h-[300px] lg:h-[340px]',
    sizes: '(min-width: 768px) 50vw, 100vw',
  },
  4: {
    span: 'lg:col-span-4',
    well: 'h-[218px] sm:h-[260px]',
    sizes: '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw',
  },
}

// A handset screenshot needs its full height on phones, whatever the span.
const PHONE_WELL = 'h-[396px] sm:h-[300px] lg:h-[400px]'

/**
 * Column spans for a list of products. The full catalogue uses each product's own span.
 * A filtered list is re-flowed into rows of two and three so no row is left with a gap.
 */
function spansFor(products, filtered) {
  const own = products.map((product) => product.span)
  if (!filtered) return own

  const count = products.length
  if (count <= 3 && own.reduce((sum, span) => sum + span, 0) === 12) return own
  if (count === 1) return [6]

  const pairs = { 0: 0, 1: 2, 2: 1 }[count % 3] // rows of two needed before the rest fits in threes
  return products.map((_, index) => (index < pairs * 2 ? 6 : 4))
}

/** Catalogue grid: 12 columns on desktop, two on tablets, one on phones. */
export default function ProductGrid({ products, filtered = false }) {
  const spans = spansFor(products, filtered)
  let column = 0
  let slot = 0

  return (
    <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-12">
      {products.map((product, index) => {
        const layout = LAYOUT[spans[index]]
        // Stagger left to right within a row; the opening row waits for the page header.
        const position = slot
        column = (column + spans[index]) % 12
        slot = column === 0 ? 0 : slot + 1
        const firstRow = index < 2

        return (
          <ProductCard
            key={product.id}
            product={product}
            index={index + 1}
            well={product.frame === 'phone' ? PHONE_WELL : layout.well}
            sizes={layout.sizes}
            priority={firstRow}
            delay={(firstRow && !filtered ? 0.45 : 0.05) + position * 0.08}
            className={layout.span}
          />
        )
      })}
    </div>
  )
}
