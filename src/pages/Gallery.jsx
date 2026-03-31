import { useEffect, useRef } from 'react'

const galleryImages = [
  '/2024/11/AM5A2063-150x150.jpg',
  '/2024/11/DSC_0120-1024x680.jpg',
  '/2024/11/DSC_0120-150x150.jpg',
  '/2024/11/DSC_0120-300x300.jpg',
  '/2024/11/FB_IMG_1711443462905-1024x681.jpg',
  '/2024/11/FB_IMG_1711443462905-150x150.jpg',
  '/2024/11/img_3j4-300x199.jpg',
  '/2024/11/_MG_0212.jpg.jpeg',
  '/2024/11/_MG_0227.jpg.jpeg',
  '/2024/11/_MG_0283.jpg.jpeg',
  '/2024/11/_MG_0360.jpg.jpeg',
  '/2024/11/_MG_0488.jpg.jpeg',
  '/2024/11/_MG_0498.jpg.jpeg',
  '/2024/11/_MG_0759.jpg.jpeg',
  '/2024/11/_MG_0761.jpg.jpeg',
  '/2024/11/_MG_0776.jpg.jpeg',
  '/2024/11/_MG_0789.jpg.jpeg',
  '/2024/11/_MG_0790.jpg.jpeg',
  '/2024/11/_MG_0793.jpg.jpeg',
  '/2024/11/_MG_0795.jpg.jpeg',
  '/2024/11/_MG_0811.jpg.jpeg',
  '/2024/11/_MG_0855.jpg.jpeg',
  '/2024/11/_MG_0859.jpg.jpeg',
  '/2024/11/_MG_0890.jpg.jpeg',
  '/2024/11/_MG_0894.jpg.jpeg',
  '/2024/11/_MG_0901.jpg.jpeg',
  '/2024/11/_MG_0904.jpg.jpeg',
  '/2024/11/_MG_0910.jpg.jpeg',
  '/2024/11/_MG_0921.jpg.jpeg',
  '/2024/11/_MG_0924.jpg.jpeg',
  '/2024/11/_MG_0928.jpg.jpeg',
  '/2024/11/_MG_0933.jpg.jpeg',
  '/2024/11/_MG_0939.jpg.jpeg',
  '/2024/11/_MG_0940.jpg.jpeg',
  '/2024/11/_MG_0948.jpg.jpeg',
  '/2024/11/_MG_0949.jpg.jpeg',
  '/2024/11/_MG_0952.jpg.jpeg',
  '/2024/11/_MG_0967.jpg.jpeg',
  '/2024/11/_MG_1001.jpg.jpeg',
  '/2024/11/_MG_1003.jpg.jpeg',
  '/2024/11/_MG_1007.jpg.jpeg',
  '/2024/11/_MG_1010.jpg.jpeg',
  '/2024/11/_MG_1017.jpg.jpeg',
  '/2024/11/_MG_1019.jpg.jpeg',
  '/2024/11/_MG_1025.jpg.jpeg',
  '/2024/11/_MG_1029.jpg.jpeg',
  '/2024/11/_MG_1030.jpg.jpeg',
  '/2024/11/_MG_1032.jpg.jpeg',
  '/2024/11/_MG_1035.jpg.jpeg',
  '/2024/11/_MG_1037.jpg.jpeg',
  '/2024/11/_MG_1038.jpg.jpeg',
  '/2024/11/_MG_1038g (1).jpg.jpeg',
  '/2024/11/_MG_1038g (3).jpg.jpeg',
  '/2024/11/_MG_1039.jpg.jpeg',
  '/2024/11/_MG_1040.jpg.jpeg',
  '/2024/11/_MG_1041.jpg.jpeg',
  '/2024/11/_MG_1042.jpg.jpeg',
  '/2024/11/_MG_1046.jpg.jpeg',
  '/2024/11/_MG_1048.jpg.jpeg',
  '/2024/11/_MG_1053.jpg.jpeg',
  '/2024/11/_MG_1054.jpg.jpeg',
  '/2024/11/_MG_1063.jpg.jpeg',
  '/2024/11/_MG_1068.jpg.jpeg',
  '/2024/11/_MG_1072.jpg.jpeg',
  '/2024/11/_MG_1074.jpg.jpeg',
  '/2024/11/_MG_1077.jpg.jpeg',
  '/2024/11/_MG_1079.jpg.jpeg',
  '/2024/11/_MG_1082.jpg.jpeg',
  '/2024/11/_MG_1084.jpg.jpeg',
  '/2024/11/_MG_1086.jpg.jpeg',
  '/2024/11/_MG_1090.jpg.jpeg',
  '/2024/11/_MG_1096.jpg.jpeg',
  '/2024/11/_MG_1098.jpg.jpeg',
  '/2024/11/_MG_1099.jpg.jpeg',
  '/2024/11/_MG_1112.jpg.jpeg',
  '/2024/11/_MG_1113.jpg.jpeg',
  '/2024/11/_MG_1122.jpg.jpeg',
  '/2024/11/_MG_1126.jpg.jpeg',
]

function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useReveal()

  return (
    <div ref={ref} className={`reveal ${className}`.trim()} style={{ '--reveal-delay': `${delay}ms` }}>
      {children}
    </div>
  )
}

const Gallery = () => {
  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <div className="gallery-hero__bg" />
        <div className="gallery-hero__overlay" />
        <div className="container gallery-hero__content">
          <Reveal className="gallery-hero__copy">
            <span className="eyebrow">Gallery</span>
            <h1>Gallery</h1>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <Reveal key={image} delay={(index % 4) * 70}>
                <figure className={`gallery-card surface-card ${index % 9 === 0 ? 'gallery-card--featured' : ''}`}>
                  <img src={image} alt={`Gallery ${index + 1}`} loading="lazy" decoding="async" />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .gallery-page {
          background:
            radial-gradient(circle at top left, rgba(181, 214, 58, 0.08), transparent 24%),
            linear-gradient(180deg, #fbfcff 0%, #f6f8fc 100%);
        }

        .gallery-hero {
          position: relative;
          overflow: clip;
          background: #081d39;
        }

        .gallery-hero__bg,
        .gallery-hero__overlay {
          position: absolute;
          inset: 0;
        }

        .gallery-hero__bg {
          background:
            radial-gradient(circle at 18% 18%, rgba(181, 214, 58, 0.24), transparent 18%),
            radial-gradient(circle at 78% 24%, rgba(255, 255, 255, 0.08), transparent 16%),
            linear-gradient(135deg, #06162c 0%, #0a2142 50%, #143c74 100%);
          transform: scale(1.04);
          animation: heroBackdropZoom 16s ease-out forwards;
        }

        .gallery-hero__overlay {
          background:
            radial-gradient(circle at 22% 22%, rgba(181, 214, 58, 0.18), transparent 18%),
            linear-gradient(115deg, rgba(3, 12, 28, 0.84), rgba(8, 29, 57, 0.4) 48%, rgba(8, 29, 57, 0.82));
        }

        .gallery-hero__content {
          position: relative;
          z-index: 1;
          padding: 5.25rem 0 4.5rem;
        }

        .gallery-hero__copy {
          max-width: 42rem;
          color: white;
        }

        .gallery-hero .eyebrow {
          color: rgba(255, 255, 255, 0.92);
        }

        .gallery-hero .eyebrow::before {
          background: linear-gradient(90deg, rgba(181, 214, 58, 0.92), transparent);
        }

        .gallery-hero__copy h1 {
          margin: 1rem 0 0;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(3rem, 6vw, 5.4rem);
          line-height: 0.94;
          letter-spacing: -0.06em;
          color: white;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        .gallery-card {
          margin: 0;
          overflow: hidden;
          padding: 0.65rem;
          border-radius: 1.1rem;
          border: 1px solid rgba(16, 58, 113, 0.08);
          background:
            radial-gradient(circle at top right, rgba(181, 214, 58, 0.12), transparent 22%),
            rgba(255, 255, 255, 0.97);
          box-shadow: 0 24px 60px rgba(8, 29, 57, 0.08);
          transition: transform var(--transition), box-shadow var(--transition);
        }

        .gallery-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 80px rgba(8, 29, 57, 0.12);
        }

        .gallery-card--featured {
          grid-column: auto;
        }

        .gallery-card img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 1rem;
          object-fit: contain;
          background: rgba(255, 255, 255, 0.94);
          aspect-ratio: 4 / 3;
        }

        @media (min-width: 481px) {
          .gallery-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .gallery-card--featured {
            grid-column: span 2;
          }
        }

        @media (min-width: 1025px) {
          .gallery-hero__content {
            padding: 7rem 0 5.5rem;
          }

          .gallery-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 1.15rem;
          }

          .gallery-card {
            padding: 0.8rem;
            border-radius: 1.45rem;
          }

          .gallery-card--featured {
            padding: 1rem;
          }
        }

        @media (max-width: 640px) {
          .gallery-card img {
            border-radius: 0.8rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Gallery
