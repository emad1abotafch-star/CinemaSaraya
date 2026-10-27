import { useNavigate, useParams } from 'react-router-dom'
import { CATALOGUE } from '../data/catalogue.js'
import './DetailPage.css'

// Arabic labels for status and type
const STATUS_LABELS = { released: 'صدر', upcoming: 'قريبًا', announced: 'مُعلَن' }
const TYPE_LABELS   = { film: 'فيلم', series: 'مسلسل' }

function posterUrl(unsplashId) {
  return `https://images.unsplash.com/${unsplashId}?auto=format&fit=crop&w=1200&q=85`
}

export default function DetailPage({ expectedType }) {
  const { id } = useParams()
  const navigate = useNavigate()

  // Look up the entry
  const item = CATALOGUE.find(m => m.id === id)

  // ── Not found ────────────────────────────────────────────────
  if (!item) {
    return (
      <div className="detail-notfound" dir="rtl">
        <p className="detail-notfound__code">404</p>
        <h1 className="detail-notfound__title">لم يُعثر على هذا العمل</h1>
        <p className="detail-notfound__body">
          المعرّف <code dir="ltr">{id}</code> غير موجود في الكتالوج الحالي.
        </p>
        <button
          type="button"
          className="button-secondary detail-notfound__btn"
          onClick={() => navigate('/')}
        >
          ← العودة إلى الرئيسية
        </button>
      </div>
    )
  }

  // ── Type mismatch (e.g. /film/shogun-2024 for a series entry) ─
  if (expectedType && item.type !== expectedType) {
    const correctPath = `/${item.type === 'film' ? 'film' : 'series'}/${item.id}`
    return (
      <div className="detail-notfound" dir="rtl">
        <p className="detail-notfound__code">301</p>
        <h1 className="detail-notfound__title">مسار غير صحيح</h1>
        <p className="detail-notfound__body">
          هذا العمل مُصنَّف كـ <strong>{TYPE_LABELS[item.type]}</strong>،
          وليس كما هو محدد في الرابط الحالي.
        </p>
        <button
          type="button"
          className="button-secondary detail-notfound__btn"
          onClick={() => navigate(correctPath, { replace: true })}
        >
          انتقل إلى المسار الصحيح
        </button>
      </div>
    )
  }

  // ── Full detail page ─────────────────────────────────────────
  return (
    <div className="detail-page" dir="rtl">

      {/* Back navigation */}
      <div className="detail-page__back">
        <button
          type="button"
          className="detail-back-btn"
          onClick={() => navigate(-1)}
          aria-label="العودة إلى الصفحة السابقة"
        >
          <span aria-hidden="true">←</span>
          <span>عودة</span>
        </button>
      </div>

      {/* Hero backdrop — same image used as a full-width atmospheric backdrop */}
      <div
        className="detail-page__backdrop"
        role="presentation"
        aria-hidden="true"
        style={{ backgroundImage: `url('${posterUrl(item.posterUnsplashId)}')` }}
      />
      <div className="detail-page__backdrop-shade" aria-hidden="true" />

      {/* Main content layout */}
      <div className="detail-page__content">

        {/* Poster column */}
        <aside className="detail-page__poster-col">
          <div className="detail-poster-wrap">
            <img
              className="detail-poster"
              src={posterUrl(item.posterUnsplashId)}
              alt={`${item.titleEn} — صورة تجريبية، ليست الملصق الرسمي`}
              width="400"
              height="600"
            />
            {/* Explicit placeholder notice on the image itself */}
            <div className="detail-poster__notice" aria-hidden="true">
              صورة تجريبية
            </div>
          </div>
          {/* Accessible notice below the poster */}
          <p className="detail-poster__caption">
            الصورة أعلاه تجريبية لأغراض التصميم فقط وليست الملصق الرسمي للعمل.
          </p>
        </aside>

        {/* Info column */}
        <main className="detail-page__info" id="detail-main">

          {/* Type + status row */}
          <div className="detail-badges">
            <span className={`detail-badge detail-badge--type`}>
              {TYPE_LABELS[item.type] ?? item.type}
            </span>
            <span className={`detail-badge detail-badge--status detail-badge--${item.status}`}>
              {STATUS_LABELS[item.status] ?? item.status}
            </span>
          </div>

          {/* Titles */}
          <h1 className="detail-title-ar" lang="ar">{item.titleAr}</h1>
          <p className="detail-title-en" lang="en" dir="ltr">{item.titleEn}</p>

          {/* Year + Rating */}
          <div className="detail-meta-row">
            <span className="detail-year" dir="ltr">{item.year}</span>
            {item.rating !== null && (
              <span
                className="detail-rating"
                dir="ltr"
                title="تقييم تقريبي — لم يُتحقق منه مباشرةً"
              >
                ★ {item.rating.toFixed(1)}
                <span className="detail-rating__source"> — {item.ratingSource} (تقريبي)</span>
              </span>
            )}
          </div>

          {/* Genres */}
          <div className="detail-genres" aria-label="التصنيفات">
            {item.genres.map(g => (
              <span key={g} className="detail-genre">{g}</span>
            ))}
          </div>

          {/* Synopsis */}
          <section aria-labelledby="detail-synopsis-label">
            <h2 id="detail-synopsis-label" className="detail-section-label">
              القصة
            </h2>
            <p className="detail-synopsis">{item.synopsis}</p>
          </section>

          {/* Data provenance notice */}
          <p className="detail-data-notice">
            التقييمات تقريبية من IMDb ولم تُتحقق منها مباشرةً.
            البيانات مُجمَّعة يدويًا ولا ترتبط بقاعدة بيانات خارجية.
          </p>
        </main>
      </div>
    </div>
  )
}
