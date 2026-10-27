import { useNavigate } from 'react-router-dom'

export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '40px 7%',
        gap: '16px',
        direction: 'rtl',
      }}
    >
      <p
        style={{
          fontSize: '80px',
          fontFamily: 'Georgia, serif',
          color: '#ffffff08',
          fontWeight: 700,
          lineHeight: 1,
          margin: 0,
          letterSpacing: '-3px',
        }}
      >
        404
      </p>
      <h1
        style={{
          fontSize: 'clamp(22px, 3vw, 36px)',
          fontWeight: 500,
          color: '#f7f3fa',
          margin: 0,
        }}
      >
        الصفحة غير موجودة
      </h1>
      <p
        style={{
          color: 'var(--muted)',
          fontSize: '14px',
          maxWidth: '360px',
          lineHeight: 1.8,
          margin: 0,
        }}
      >
        الرابط الذي وصلت إليه غير موجود أو تم تغييره.
      </p>
      <button
        type="button"
        className="button-secondary"
        onClick={() => navigate('/')}
        style={{ marginTop: '8px' }}
      >
        ← العودة إلى الرئيسية
      </button>
    </div>
  )
}
