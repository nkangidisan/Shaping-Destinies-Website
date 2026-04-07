import { Link } from 'react-router-dom'

const Cancel = () => {
  return (
    <div className="cancel-page">
      <section className="cancel-hero">
        <div className="container cancel-hero__content">
          <article className="cancel-card surface-card">
            <span className="eyebrow">Checkout Canceled</span>
            <h1>Your donation was not completed.</h1>
            <p>
              No payment was taken. If you still want to support Wonder Christian Centre, you can return to the giving page and try again whenever you are ready.
            </p>
            <div className="cancel-actions">
              <Link to="/give" className="button button-primary">Return to Give</Link>
            </div>
          </article>
        </div>
      </section>

      <style>{`
        .cancel-page {
          background:
            radial-gradient(circle at top left, rgba(181, 214, 58, 0.09), transparent 24%),
            linear-gradient(180deg, #fbfcff 0%, #f6f8fc 100%);
        }

        .cancel-hero {
          padding: 6.5rem 0;
        }

        .cancel-hero__content {
          display: flex;
          justify-content: center;
        }

        .cancel-card {
          width: min(100%, 44rem);
          padding: 2rem;
          border: 1px solid rgba(16, 58, 113, 0.08);
          background:
            radial-gradient(circle at top right, rgba(181, 214, 58, 0.14), transparent 22%),
            rgba(255, 255, 255, 0.97);
          box-shadow: 0 24px 60px rgba(8, 29, 57, 0.08);
        }

        .cancel-card h1 {
          margin: 1rem 0;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2.1rem, 4vw, 3.4rem);
          line-height: 1;
          color: var(--color-blue-deep);
        }

        .cancel-card p {
          margin: 0;
          font-size: 1rem;
          line-height: 1.8;
          color: var(--color-text);
        }

        .cancel-actions {
          margin-top: 1.5rem;
          display: flex;
          justify-content: flex-start;
        }

        @media (max-width: 640px) {
          .cancel-hero {
            padding: 5rem 0;
          }

          .cancel-card {
            padding: 1.4rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Cancel
