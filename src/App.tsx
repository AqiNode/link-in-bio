import { products, platforms } from './data'
import { PlatformGrid } from './components/PlatformGrid'
import { ProductCard } from './components/ProductCard'

const year = new Date().getFullYear()
const liveProducts = products.filter((product) => product.status === 'available').length
const buildingProducts = products.length - liveProducts

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div className="page">
        <header className="page-meta">
          <span>Official links / 001</span>
          <span>Nigeria / Est. 2025</span>
        </header>

        <main id="main">
          <section className="hero" aria-labelledby="brand-title">
            <p className="hero-eyebrow">AI &amp; Software Infrastructure</p>

            <div className="brand-lockup">
              <img
                className="brand-mark"
                src="/brand/aqinode-mark-128.png"
                alt=""
                width="56"
                height="56"
                decoding="async"
              />
              <h1 id="brand-title" className="brand-name">
                Aqinode
              </h1>
            </div>

            <p className="hero-description">
              Exploring the frontiers of AI, engineering intelligent systems, and
              turning bold ideas into real-world products.
            </p>

            <p className="tagline">
              <span className="tagline-mark" aria-hidden="true">
                //
              </span>
              Building Now, Shaping What&rsquo;s Next.
            </p>

            <p className="signal" role="status">
              <span className="signal-dot" aria-hidden="true" />
              <span>Now building</span>
              <span className="signal-separator" aria-hidden="true">
                /
              </span>
              <span className="signal-product">Plorpy</span>
            </p>
          </section>

          <section className="section" aria-labelledby="products-title">
            <div className="section-head">
              <span className="section-index" aria-hidden="true">
                01
              </span>
              <h2 id="products-title" className="section-title">
                Products
              </h2>
              <span className="section-meta">
                {liveProducts} live &middot; {buildingProducts} in build
              </span>
            </div>

            <div className="product-list">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>

          <section className="section" aria-labelledby="platforms-title">
            <div className="section-head">
              <span className="section-index" aria-hidden="true">
                02
              </span>
              <h2 id="platforms-title" className="section-title">
                Official platforms
              </h2>
              <span className="section-meta">{platforms.length} channels</span>
            </div>

            <PlatformGrid platforms={platforms} />
          </section>
        </main>

        <footer className="footer">
          <p>&copy; {year} Aqinode</p>
          <p>Building Now, Shaping What&rsquo;s Next.</p>
        </footer>
      </div>
    </>
  )
}
