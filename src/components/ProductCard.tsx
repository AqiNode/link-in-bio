import type { Product } from '../data'
import { trackOutbound } from '../lib/analytics'
import { ArrowUpRight, ProductGlyph } from './icons'

const statusLabel: Record<Product['status'], string> = {
  available: 'Available',
  building: 'On build',
}

export function ProductCard({ product }: { product: Product }) {
  const content = (
    <>
      <span className="product-glyph" aria-hidden="true">
        <ProductGlyph name={product.icon} />
      </span>

      <div className="product-body">
        <div className="product-heading">
          <h3 className="product-name">{product.name}</h3>
          <span className={`product-status product-status--${product.status}`}>
            <span className="status-dot" aria-hidden="true" />
            {statusLabel[product.status]}
          </span>
        </div>
        <p className="product-description">{product.description}</p>
      </div>

      <span
        className={`product-action${product.url ? '' : ' product-action--idle'}`}
        aria-hidden="true"
      >
        {product.url ? <ArrowUpRight /> : null}
      </span>
    </>
  )

  if (product.url) {
    return (
      <a
        className="product product--link"
        href={product.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackOutbound(`product:${product.id}`, product.url!)}
      >
        {content}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    )
  }

  return (
    <article className="product" aria-label={`${product.name} is on build`}>
      {content}
    </article>
  )
}
