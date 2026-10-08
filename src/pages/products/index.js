import { useState } from 'react'
import Seo from '@/components/Seo'
import Page, { PageHeader } from '@/components/ui/Page'
import { Accent } from '@/components/ui/SectionHeader'
import FilterPills from '@/components/ui/FilterPills'
import ProductGrid from '@/components/products/ProductGrid'
import { PRODUCT_FILTERS, productsFor } from '@/data/products'

const FILTERS = PRODUCT_FILTERS.map((filter) => ({ ...filter, count: productsFor(filter.id).length }))

export default function Products() {
  const [filter, setFilter] = useState('all')

  return (
    <Page className="pb-8">
      <Seo path="/products" />
      <PageHeader
        eyebrow="~/products"
        title={
          <>
            Products we&apos;ve
            <br />
            <Accent>shipped.</Accent>
          </>
        }
        lead="Twelve products live across the web, Android, iOS and the Chrome Web Store, built and maintained by students."
        aside={<FilterPills label="Filter products by platform" options={FILTERS} value={filter} onChange={setFilter} />}
      />
      {/* Keyed by filter so a new selection replays the card entrance. */}
      <ProductGrid key={filter} products={productsFor(filter)} filtered={filter !== 'all'} />
    </Page>
  )
}
