import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className="success-page">
      <section className="success-hero">
        <div className="container success-hero__content">
          <article className="success-card surface-card">
            <span className="eyebrow">Thank You</span>
            <h1>Your giving has been received.</h1>
            <p>
              Thank you for supporting Wonder Christian Centre. Your generosity helps us continue ministry, outreach, and community impact with confidence.
            </p>
            <p>
              A confirmation has been sent through Stripe to the email address used during checkout.
            </p>
            <div className="success-actions">
              <Link to="/" className="button button-primary">Back to Homepage</Link>
            </div>
          </article>
        </div>
      </section>

      <style>{`
        .success-page {
          background:
            radial-gradient(circle at top left, rgba(181, 214, 58, 0.09), transparent 24%),
            linear-gradient(180deg, #fbfcff 0%, #f6f8fc 100%);
        }

        .success-hero {
          padding: 6.5rem 0;
        }

        .success-hero__content {
          display: flex;
          justify-content: center;
        }

        .success-card {
          width: min(100%, 44rem);
          padding: 2rem;
          border: 1px solid rgba(16, 58, 113, 0.08);
          background:
            radial-gradient(circle at top right, rgba(181, 214, 58, 0.14), transparent 22%),
            rgba(255, 255, 255, 0.97);
          box-shadow: 0 24px 60px rgba(8, 29, 57, 0.08);
        }

        .success-card h1 {
          margin: 1rem 0;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2.1rem, 4vw, 3.4rem);
          line-height: 1;
          color: var(--color-blue-deep);
        }

        .success-card p {
          margin: 0 0 1rem;
          font-size: 1rem;
          line-height: 1.8;
          color: var(--color-text);
        }

        .success-card p:last-of-type {
          margin-bottom: 0;
        }

        .success-actions {
          margin-top: 1.5rem;
          display: flex;
          justify-content: flex-start;
        }

        @media (max-width: 640px) {
          .success-hero {
            padding: 5rem 0;
          }

          .success-card {
            padding: 1.4rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Success
