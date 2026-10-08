import Button from '@/components/ui/Button'
import SectionHeader, { Accent } from '@/components/ui/SectionHeader'
import ProductCard from '@/components/products/ProductCard'
import { FEATURED_PRODUCTS } from '@/data/products'

// The first card spans the row; the rest sit three across.
const WIDE = {
  className: 'max-sm:mb-3 lg:col-span-3',
  well: 'h-[140px] sm:h-[320px]',
  sizes: '100vw',
}
const REGULAR = {
  className: '',
  well: 'h-[218px] sm:h-[260px]',
  sizes: '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw',
}
const DELAYS = [0.35, 0.47, 0.54, 0.61]

export default function FeaturedProducts({ total }) {
  return (
    <section id="products" className="flex flex-col gap-8 pt-16 sm:gap-10 sm:pt-24 lg:pt-32">
      <SectionHeader
        eyebrow="~/products — featured"
        title={
          <>
            Things we&apos;ve <Accent>shipped.</Accent>
          </>
        }
        aside={
          <Button href="/products" variant="secondary" arrow="↗">
            All {total} products
          </Button>
        }
      />
      <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {FEATURED_PRODUCTS.map((product, index) => (
          <ProductCard key={product.id} product={product} delay={DELAYS[index] ?? 0.61} {...(index === 0 ? WIDE : REGULAR)} />
        ))}
      </div>
    </section>
  )
}
