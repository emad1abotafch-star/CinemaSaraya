import { Link } from 'react-router-dom'
import './MediaCard.css'

const STATUS_LABELS = {
  released: 'صدر',
  upcoming: 'قريبًا',
  announced: 'مُعلَن',
}

function posterUrl(unsplashId) {
  return `https://images.unsplash.com/${unsplashId}?auto=format&fit=crop&w=600&q=80`
}

export default function MediaCard({ item, size = 'md' }) {
  const sizeClass = size !== 'md' ? ` media-card--${size}` : ''
  const genresToShow = item.genres.slice(0, 2)
  // Route: /film/:id or /series/:id
  const detailPath = `/${item.type === 'film' ? 'film' : 'series'}/${item.id}`

  return (
    <Link
      to={detailPath}
      className={`media-card${sizeClass}`}
      aria-label={`${item.titleAr} — ${item.titleEn} (${item.year})`}
    >
      <div className="media-card__poster-wrap">
        <img
          className="media-card__poster"
          src={posterUrl(item.posterUnsplashId)}
          alt={`${item.titleEn} — صورة تجريبية`}
          loading="lazy"
          decoding="async"
          width="600"
          height="900"
        />
        <span
          className={`media-card__status media-card__status--${item.status}`}
          aria-label={`الحالة: ${STATUS_LABELS[item.status]}`}
        >
          {STATUS_LABELS[item.status]}
        </span>
        {/* Watermark: flags image as placeholder at very low opacity */}
        <span className="media-card__watermark" aria-hidden="true">
          PLACEHOLDER
        </span>
      </div>

      <div className="media-card__body">
        <div className="media-card__genres" aria-label="التصنيفات">
          {genresToShow.map(g => (
            <span key={g} className="media-card__genre">{g}</span>
          ))}
        </div>

        <p className="media-card__title-ar" lang="ar">{item.titleAr}</p>
        <p className="media-card__title-en" lang="en" dir="ltr">{item.titleEn}</p>

        <div className="media-card__meta">
          <span className="media-card__year" dir="ltr">{item.year}</span>
          {item.rating !== null && (
            <span
              className="media-card__rating"
              dir="ltr"
              title={`تقييم تقريبي من ${item.ratingSource}`}
            >
              ★ {item.rating.toFixed(1)} — {item.ratingSource}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
