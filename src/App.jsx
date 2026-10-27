import { useEffect, useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CATALOGUE, FILM_NEWS } from './data/catalogue.js'
import MediaCard from './components/MediaCard.jsx'
import DetailPage from './pages/DetailPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

// ── Derived catalogue views ──────────────────────────────────────────────────
const FEATURED = CATALOGUE
  .filter(m => m.status === 'released' && m.rating !== null)
  .sort((a, b) => b.rating - a.rating)[0]

const FILMS     = CATALOGUE.filter(m => m.type === 'film')
const SERIES    = CATALOGUE.filter(m => m.type === 'series')
const UPCOMING  = CATALOGUE.filter(m => m.status === 'upcoming' || m.status === 'announced')
const TOP_RATED = CATALOGUE
  .filter(m => m.rating !== null)
  .sort((a, b) => b.rating - a.rating)

// ── Nav links ────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: 'الرئيسية',        href: '#home',                current: true  },
  { label: 'الأفلام',          href: '#films',               current: false },
  { label: 'المسلسلات',        href: '#series',              current: false },
  { label: 'الأكثر ترقبًا',   href: '#anticipated-section', current: false },
  { label: 'الأعلى تقييمًا', href: '#top-rated',            current: false },
  { label: 'أخبار السينما',   href: '#news',                current: false },
]

// ── Shared Navbar — used on every page ──────────────────────────────────────
function Navbar({ scrolled, searchDialogRef }) {
  return (
    <header
      className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
      role="banner"
    >
      <a
        className="brand"
        href="/"
        aria-label="سينما سرايا – الصفحة الرئيسية"
      >
        <span className="brand-mark" aria-hidden="true">S</span>
        <span className="brand-text">
          <strong>سينما سرايا</strong>
          <small>CINEMA SARAYA</small>
        </span>
      </a>

      <nav className="main-nav" aria-label="التنقل الرئيسي">
        {NAV_LINKS.map(link => (
          <a
            key={link.href}
            href={link.href}
            aria-current={link.current ? 'page' : undefined}
            className={link.current ? 'active' : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <button
        className="search-button"
        type="button"
        aria-label="البحث"
        onClick={() => searchDialogRef.current?.showModal()}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <circle cx="10.8" cy="10.8" r="6.8" />
          <path d="m16 16 5 5" />
        </svg>
      </button>

      <dialog
        ref={searchDialogRef}
        className="search-dialog"
        aria-labelledby="search-dialog-title"
        onClick={e => { if (e.target === searchDialogRef.current) searchDialogRef.current.close() }}
      >
        <p id="search-dialog-title">البحث عن أفلام</p>
        <p>
          البحث عن الأفلام غير متاح بعد.
          سيتوفر هذا القسم مع إضافة قاعدة بيانات الأفلام.
        </p>
        <button
          type="button"
          className="search-dialog-close"
          onClick={() => searchDialogRef.current?.close()}
        >
          إغلاق
        </button>
      </dialog>
    </header>
  )
}

// ── Homepage ─────────────────────────────────────────────────────────────────
function HomePage() {
  return (
    <div className="cinema-app" dir="rtl">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="hero" id="home" aria-labelledby="hero-heading">
        <div className="hero-image" role="presentation" aria-hidden="true" />
        <div className="hero-shade" role="presentation" aria-hidden="true" />

        <div className="hero-content">
          <p className="eyebrow" aria-hidden="true">
            <span className="eyebrow-line" />
            عالَم السينما بين يديك
          </p>

          {FEATURED && (
            <div
              className="hero-genre-tags"
              aria-label={`تصنيفات: ${FEATURED.genres.slice(0, 3).join('، ')}`}
            >
              {FEATURED.genres.slice(0, 3).map(g => (
                <span key={g} className="hero-genre-tag">{g}</span>
              ))}
            </div>
          )}

          <h1 id="hero-heading">
            {FEATURED ? (
              <>
                اكتشف الآن<br />
                <span>{FEATURED.titleAr}</span>
              </>
            ) : (
              <>
                لكل فيلمٍ<br />
                <span>حكاية تستحق أن تُروى.</span>
              </>
            )}
          </h1>

          {FEATURED && (
            <p
              className="hero-featured-meta"
              aria-label={`${FEATURED.year} — ${FEATURED.ratingSource} ${FEATURED.rating}`}
            >
              <span dir="ltr">{FEATURED.year}</span>
              {FEATURED.rating !== null && (
                <>
                  <span className="hero-meta-sep" aria-hidden="true">·</span>
                  <span className="hero-meta-rating" dir="ltr">
                    ★ {FEATURED.rating.toFixed(1)} {FEATURED.ratingSource}
                  </span>
                </>
              )}
            </p>
          )}

          <p className="hero-description">
            {FEATURED
              ? FEATURED.synopsis
              : 'اكتشف الأفلام المنتظرة، تابع أخبار الصناعة السينمائية، وانطلق في رحلة من ذاكرة الشاشة إلى مستقبلها.'}
          </p>

          <div className="hero-actions">
            <a className="button-primary" href="#films">
              <span>استكشف الأفلام</span>
              <span className="btn-arrow" aria-hidden="true">←</span>
            </a>
            <a className="button-secondary" href="#about">
              تعرّف على سينما سرايا
            </a>
          </div>

          <div className="hero-signature" aria-hidden="true">
            <span className="signature-line" />
            <span>الماضي يلتقي بالمستقبل</span>
          </div>
        </div>

        <div className="hero-index" aria-hidden="true">
          <span>01</span>
          <span className="index-rule" />
          <span>05</span>
        </div>

        <div className="vertical-label" aria-hidden="true">
          THE ART OF CINEMA
        </div>
      </section>

      {/* ── Films ─────────────────────────────────────────────── */}
      <section
        className="film-section"
        id="films"
        aria-labelledby="films-heading"
      >
        <div className="section-heading">
          <div>
            <span className="section-kicker">استكشف المجموعة</span>
            <h2 id="films-heading">أفلام مختارة</h2>
          </div>
          <span className="view-all-label" aria-hidden="true">المزيد قادم ←</span>
        </div>
        <div className="film-row-wrap">
          <div className="film-row" role="list" tabIndex="0" aria-label="أفلام مختارة">
            {FILMS.map(film => (
              <div key={film.id} role="listitem">
                <MediaCard item={film} />
              </div>
            ))}
          </div>
        </div>
        <p className="demo-note">
          الصور تجريبية لأغراض التصميم فقط. التقييمات تقريبية من IMDb.
        </p>
      </section>

      {/* ── Series ────────────────────────────────────────────── */}
      <section
        className="film-section"
        id="series"
        aria-labelledby="series-heading"
      >
        <div className="section-heading">
          <div>
            <span className="section-kicker">من الشاشة الصغيرة</span>
            <h2 id="series-heading">مسلسلات وإنتاجات</h2>
          </div>
          <span className="view-all-label" aria-hidden="true">المزيد قادم ←</span>
        </div>
        <div className="film-row-wrap">
          {SERIES.length > 0 ? (
            <div className="film-row" role="list" tabIndex="0" aria-label="مسلسلات وإنتاجات">
              {SERIES.map(s => (
                <div key={s.id} role="listitem">
                  <MediaCard item={s} />
                </div>
              ))}
            </div>
          ) : (
            <p className="empty-state">لا توجد مسلسلات مضافة بعد.</p>
          )}
        </div>
      </section>

      {/* ── Most Anticipated ──────────────────────────────────── */}
      <section
        className="film-section"
        id="anticipated-section"
        aria-labelledby="anticipated-heading"
      >
        <div className="section-heading">
          <div>
            <span className="section-kicker">ما ينتظره الجمهور</span>
            <h2 id="anticipated-heading">الأكثر ترقبًا</h2>
          </div>
        </div>
        <div className="film-row-wrap">
          {UPCOMING.length > 0 ? (
            <div className="film-row" role="list" tabIndex="0" aria-label="الأكثر ترقبًا">
              {UPCOMING.map(m => (
                <div key={m.id} role="listitem">
                  <MediaCard item={m} />
                </div>
              ))}
            </div>
          ) : (
            <p className="empty-state">لا توجد مشاريع مُعلَنة حاليًا.</p>
          )}
        </div>
        <p className="demo-note">
          المشاريع المُعلَنة فقط — لا تُعرض تقييمات لأعمال لم تُصدر بعد.
        </p>
      </section>

      {/* ── Top Rated ─────────────────────────────────────────── */}
      <section
        className="film-section"
        id="top-rated"
        aria-labelledby="top-rated-heading"
      >
        <div className="section-heading">
          <div>
            <span className="section-kicker">أعلى التقييمات</span>
            <h2 id="top-rated-heading">الأعلى تقييمًا</h2>
          </div>
        </div>
        <div className="film-row-wrap">
          <div className="film-row" role="list" tabIndex="0" aria-label="الأعلى تقييمًا">
            {TOP_RATED.map(m => (
              <div key={m.id} role="listitem">
                <MediaCard item={m} />
              </div>
            ))}
          </div>
        </div>
        <p className="demo-note">التقييمات تقريبية من IMDb.</p>
      </section>

      {/* ── Manifesto ─────────────────────────────────────────── */}
      <section
        className="manifesto"
        id="about"
        aria-labelledby="manifesto-heading"
      >
        <div className="manifesto-decoration" aria-hidden="true">S</div>
        <div className="manifesto-content">
          <span className="section-kicker">أكثر من مجرد شاشة</span>
          <h2 id="manifesto-heading">
            السينما ذاكرة،<br />
            <span>والمستقبل فصلها التالي.</span>
          </h2>
          <p>
            مساحة تجمع سحر الأفلام، وحكايات صُنّاعها،
            وتاريخ دور العرض التي صنعت ذكرياتنا.
          </p>
          <a className="button-secondary" href="#news">
            اكتشف حكاية السينما
          </a>
        </div>
        <div className="manifesto-label" aria-hidden="true">
          SUWAYDAH · CINEMA · CULTURE
        </div>
      </section>

      {/* ── News ──────────────────────────────────────────────── */}
      <section
        className="news-section"
        id="news"
        aria-labelledby="news-heading"
      >
        <div className="section-heading">
          <div>
            <span className="section-kicker">من عالم الشاشة</span>
            <h2 id="news-heading">نبض السينما</h2>
          </div>
        </div>
        <div className="news-cards">
          {FILM_NEWS.map(item => (
            <article key={item.id} className="news-card">
              <div className="news-card__meta">
                <span className="news-card__source">{item.sourceNameAr}</span>
                <span className="news-card__sep" aria-hidden="true">·</span>
                <time className="news-card__date" dateTime={item.dateTime}>
                  {item.dateAr}
                </time>
              </div>
              <p className="news-card__headline">{item.headlineAr}</p>
              <p className="news-card__summary">{item.summary}</p>
              <a
                className="news-card__link"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`زيارة ${item.sourceNameAr}`}
              >
                <span dir="ltr">{item.sourceName}</span>
                <span className="btn-arrow" aria-hidden="true">←</span>
              </a>
            </article>
          ))}
        </div>
        <p className="demo-note">
          روابط المصادر فقط — المقالات غير مرتبطة مباشرةً بموقع سينما سرايا.
        </p>
      </section>

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer className="footer" role="contentinfo">
        <a
          className="brand footer-brand"
          href="/"
          aria-label="سينما سرايا — العودة إلى الأعلى"
        >
          <span className="brand-mark" aria-hidden="true">S</span>
          <span className="brand-text">
            <strong>سينما سرايا</strong>
            <small>CINEMA SARAYA</small>
          </span>
        </a>
        <p className="footer-tagline">حيث تلتقي حكايات الشاشة بذاكرة المكان.</p>
        <span className="copyright" dir="ltr">
          © {new Date().getFullYear()} Cinema Saraya
        </span>
      </footer>

    </div>
  )
}

// ── App shell — router + shared navbar ───────────────────────────────────────
export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const searchDialogRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Navbar scrolled={scrolled} searchDialogRef={searchDialogRef} />
      <Routes>
        <Route path="/"           element={<HomePage />} />
        <Route path="/film/:id"   element={<DetailPage expectedType="film" />} />
        <Route path="/series/:id" element={<DetailPage expectedType="series" />} />
        <Route path="*"           element={<NotFoundPage />} />
      </Routes>
    </>
  )
}
