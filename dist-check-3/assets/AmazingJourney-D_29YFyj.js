import{i as e,n as t,t as n}from"./jsx-runtime-BnxRlLMJ.js";var r=e(t(),1),i=n(),a=[`/2024/09/CHURCH-IMPRESSION-BANNER.png`,`/2024/09/CHURCH-IMPRESSION-BANNER-100CM-X-180CM-RED-1-768x1382.jpg`,`/2024/09/cb_DSC_0120.jpg`],o=[`A beginning marked by faith before visibility.`,`A ministry identity shaped with boldness and clarity.`,`A journey still growing with every testimony and transformed life.`];function s(){let e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t=e.current;if(!t)return;let n=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`is-visible`),n.unobserve(e.target))})},{threshold:.14,rootMargin:`0px 0px -40px 0px`});return n.observe(t),()=>n.disconnect()},[]),e}function c({children:e,delay:t=0,className:n=``}){return(0,i.jsx)(`div`,{ref:s(),className:`reveal ${n}`.trim(),style:{"--reveal-delay":`${t}ms`},children:e})}var l=()=>(0,i.jsxs)(`div`,{className:`amazing-journey-page`,children:[(0,i.jsxs)(`section`,{className:`amazing-journey-hero`,children:[(0,i.jsx)(`div`,{className:`amazing-journey-hero__bg`}),(0,i.jsx)(`div`,{className:`amazing-journey-hero__overlay`}),(0,i.jsx)(`div`,{className:`amazing-journey-hero__glow amazing-journey-hero__glow--one`}),(0,i.jsx)(`div`,{className:`amazing-journey-hero__glow amazing-journey-hero__glow--two`}),(0,i.jsxs)(`div`,{className:`container amazing-journey-hero__content`,children:[(0,i.jsxs)(c,{className:`amazing-journey-hero__copy`,children:[(0,i.jsx)(`span`,{className:`eyebrow`,children:`The Amazing Journey of WCC`}),(0,i.jsx)(`h1`,{children:`The Amazing Journey of WCC`}),(0,i.jsx)(`p`,{children:`A visual story of how vision, identity, and ministry expression have taken shape over time through faith, persistence, and purpose.`})]}),(0,i.jsx)(c,{delay:120,children:(0,i.jsx)(`div`,{className:`amazing-journey-hero__timeline surface-card`,children:o.map(e=>(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{}),(0,i.jsx)(`p`,{children:e})]},e))})})]})]}),(0,i.jsx)(`section`,{className:`section`,children:(0,i.jsx)(`div`,{className:`container`,children:(0,i.jsxs)(`div`,{className:`amazing-journey-layout`,children:[(0,i.jsx)(c,{className:`amazing-journey-layout__copy`,children:(0,i.jsxs)(`article`,{className:`amazing-journey-story surface-card`,children:[(0,i.jsx)(`span`,{className:`eyebrow`,children:`Visual Identity`}),(0,i.jsx)(`h2`,{children:`From simple beginnings to a ministry presence with character.`}),(0,i.jsx)(`p`,{children:`This journey is more than a gallery. It is a record of growth, of movement, and of how Wonder Christian Centre continues to communicate faith with courage and clarity.`}),(0,i.jsx)(`p`,{children:`The layouts here are designed to feel more like a visual narrative, allowing each image to carry weight instead of competing for attention.`})]})}),(0,i.jsx)(`div`,{className:`amazing-journey-collage`,children:a.map((e,t)=>(0,i.jsx)(c,{delay:t*100,children:(0,i.jsx)(`figure`,{className:`amazing-journey-card surface-card ${t===0?`amazing-journey-card--hero`:t===1?`amazing-journey-card--tall`:`amazing-journey-card--wide`}`,children:(0,i.jsx)(`img`,{src:e,alt:`The amazing journey of WCC ${t+1}`,loading:`lazy`,decoding:`async`})})},e))})]})})}),(0,i.jsx)(`style`,{children:`
        .amazing-journey-page {
          background:
            radial-gradient(circle at top left, rgba(181, 214, 58, 0.08), transparent 24%),
            linear-gradient(180deg, #fbfcff 0%, #f6f8fc 100%);
        }

        .amazing-journey-hero {
          position: relative;
          overflow: clip;
          background: #081d39;
        }

        .amazing-journey-hero__bg,
        .amazing-journey-hero__overlay,
        .amazing-journey-hero__glow {
          position: absolute;
          inset: 0;
        }

        .amazing-journey-hero__bg {
          background:
            radial-gradient(circle at 18% 18%, rgba(181, 214, 58, 0.24), transparent 18%),
            radial-gradient(circle at 78% 24%, rgba(255, 255, 255, 0.08), transparent 16%),
            linear-gradient(135deg, #06162c 0%, #0a2142 50%, #143c74 100%);
          transform: scale(1.04);
          animation: heroBackdropZoom 16s ease-out forwards;
        }

        .amazing-journey-hero__overlay {
          background:
            linear-gradient(115deg, rgba(3, 12, 28, 0.84), rgba(8, 29, 57, 0.38) 48%, rgba(8, 29, 57, 0.82)),
            radial-gradient(circle at 22% 22%, rgba(181, 214, 58, 0.16), transparent 18%);
        }

        .amazing-journey-hero__glow {
          pointer-events: none;
        }

        .amazing-journey-hero__glow--one {
          inset: 14% auto auto 70%;
          width: 13rem;
          height: 13rem;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(181, 214, 58, 0.22), transparent 68%);
          animation: journeyDrift 13s ease-in-out infinite;
        }

        .amazing-journey-hero__glow--two {
          inset: auto auto -8% -8%;
          width: 19rem;
          height: 19rem;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.08), transparent 68%);
          animation: journeyDriftReverse 18s ease-in-out infinite;
        }

        .amazing-journey-hero__content {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 1.2rem;
          padding: 5.4rem 0 4.8rem;
        }

        .amazing-journey-hero__copy {
          max-width: 42rem;
          color: white;
        }

        .amazing-journey-hero .eyebrow {
          color: rgba(255, 255, 255, 0.92);
        }

        .amazing-journey-hero .eyebrow::before {
          background: linear-gradient(90deg, rgba(181, 214, 58, 0.92), transparent);
        }

        .amazing-journey-hero__copy h1 {
          margin: 1rem 0 0.9rem;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2.8rem, 10vw, 5.4rem);
          line-height: 0.94;
          letter-spacing: -0.06em;
          color: white;
        }

        .amazing-journey-hero__copy p {
          margin: 0;
          font-size: 1rem;
          line-height: 1.85;
          color: rgba(255, 255, 255, 0.84);
        }

        .amazing-journey-hero__timeline {
          display: grid;
          gap: 0.9rem;
          padding: 1.25rem;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(14px);
        }

        .amazing-journey-hero__timeline div {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 0.8rem;
          align-items: start;
        }

        .amazing-journey-hero__timeline span {
          width: 0.75rem;
          height: 0.75rem;
          margin-top: 0.38rem;
          border-radius: 50%;
          background: var(--color-lemon);
          box-shadow: 0 0 0 0.32rem rgba(181, 214, 58, 0.14);
        }

        .amazing-journey-hero__timeline p {
          margin: 0;
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.7;
        }

        .amazing-journey-layout {
          display: grid;
          gap: 1.25rem;
        }

        .amazing-journey-story {
          padding: 1.35rem;
          border: 1px solid rgba(16, 58, 113, 0.08);
          background:
            radial-gradient(circle at top right, rgba(181, 214, 58, 0.12), transparent 22%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(248, 242, 231, 0.84));
        }

        .amazing-journey-story h2 {
          margin: 0.9rem 0 1rem;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1.9rem, 6vw, 3.3rem);
          line-height: 0.98;
          color: var(--color-blue-deep);
        }

        .amazing-journey-story p {
          margin: 0 0 1rem;
          font-size: 1rem;
          line-height: 1.85;
          color: var(--color-text);
        }

        .amazing-journey-story p:last-child {
          margin-bottom: 0;
        }

        .amazing-journey-collage {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        .amazing-journey-card {
          position: relative;
          overflow: hidden;
          margin: 0;
          padding: 0.75rem;
          border: 1px solid rgba(16, 58, 113, 0.08);
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(242, 246, 251, 0.94));
          box-shadow: 0 24px 60px rgba(8, 29, 57, 0.08);
          transition: transform var(--transition), box-shadow var(--transition);
        }

        .amazing-journey-card::before {
          content: '';
          position: absolute;
          inset: auto auto -20% -10%;
          width: 8rem;
          height: 8rem;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(181, 214, 58, 0.18), transparent 72%);
          pointer-events: none;
        }

        .amazing-journey-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 80px rgba(8, 29, 57, 0.12);
        }

        .amazing-journey-card img {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 1rem;
          object-fit: cover;
          transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .amazing-journey-card:hover img {
          transform: scale(1.05);
        }

        .amazing-journey-card--hero,
        .amazing-journey-card--wide {
          min-height: 15rem;
        }

        .amazing-journey-card--tall {
          min-height: 20rem;
        }

        @keyframes journeyDrift {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(10px, -16px, 0);
          }
        }

        @keyframes journeyDriftReverse {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(-10px, -12px, 0);
          }
        }

        @media (min-width: 481px) {
          .amazing-journey-collage {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .amazing-journey-card--hero,
          .amazing-journey-card--wide {
            grid-column: span 2;
          }
        }

        @media (min-width: 900px) {
          .amazing-journey-hero__content {
            grid-template-columns: minmax(0, 1fr) minmax(16rem, 0.58fr);
            align-items: end;
            gap: 2rem;
            padding: 7rem 0 5.5rem;
          }

          .amazing-journey-layout {
            grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
            align-items: center;
          }

          .amazing-journey-story {
            padding: 2rem;
          }
        }

        @media (min-width: 1025px) {
          .amazing-journey-collage {
            grid-template-columns: 1.05fr 0.7fr;
            align-items: stretch;
          }

          .amazing-journey-card--hero {
            grid-column: auto;
            grid-row: span 2;
            min-height: 33rem;
          }

          .amazing-journey-card--tall {
            min-height: 20rem;
          }

          .amazing-journey-card--wide {
            grid-column: auto;
            min-height: 12rem;
          }
        }

        @media (max-width: 640px) {
          .amazing-journey-hero__timeline,
          .amazing-journey-story {
            padding: 1.15rem;
          }

          .amazing-journey-card {
            padding: 0.65rem;
          }

          .amazing-journey-card img {
            border-radius: 0.8rem;
          }
        }
      `})]});export{l as default};