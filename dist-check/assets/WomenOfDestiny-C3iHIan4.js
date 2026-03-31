import{i as e,n as t,t as n}from"./jsx-runtime-BnxRlLMJ.js";var r=e(t(),1),i=n(),a=[`/2024/09/AM5A2015.jpg`,`/2024/09/15.jpg`,`/2024/09/16.jpg`,`/2024/09/MG_3088-768x512.jpg`,`/2024/09/MG_3295.jpg`];function o(){let e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t=e.current;if(!t)return;let n=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`is-visible`),n.unobserve(e.target))})},{threshold:.14,rootMargin:`0px 0px -40px 0px`});return n.observe(t),()=>n.disconnect()},[]),e}function s({children:e,delay:t=0,className:n=``}){return(0,i.jsx)(`div`,{ref:o(),className:`reveal ${n}`.trim(),style:{"--reveal-delay":`${t}ms`},children:e})}var c=()=>(0,i.jsxs)(`div`,{className:`women-page`,children:[(0,i.jsxs)(`section`,{className:`women-hero`,children:[(0,i.jsx)(`div`,{className:`women-hero__bg`}),(0,i.jsx)(`div`,{className:`women-hero__overlay`}),(0,i.jsx)(`div`,{className:`container women-hero__content`,children:(0,i.jsxs)(s,{className:`women-hero__copy`,children:[(0,i.jsx)(`span`,{className:`eyebrow`,children:`Women of Destiny`}),(0,i.jsx)(`h1`,{children:`Women of Destiny`}),(0,i.jsx)(`p`,{children:`Shaping the destinies of teenage girls by ministering Christ, nurturing identity, building confidence, restoring purpose, and raising a generation of young women grounded in faith, wisdom, purity, courage, and kingdom influence.`})]})})]}),(0,i.jsx)(`section`,{className:`section`,children:(0,i.jsx)(`div`,{className:`container`,children:(0,i.jsxs)(`div`,{className:`women-grid`,children:[(0,i.jsx)(s,{children:(0,i.jsx)(`figure`,{className:`women-card women-card--feature surface-card`,children:(0,i.jsx)(`img`,{src:a[0],alt:`Women of Destiny`,loading:`eager`,decoding:`async`})})}),(0,i.jsx)(s,{delay:90,children:(0,i.jsxs)(`article`,{className:`women-story surface-card`,children:[(0,i.jsx)(`h2`,{children:`Women of Destiny`}),(0,i.jsx)(`p`,{children:`Shaping the destinies of teenage girls by ministering Christ, speaking hope, building godly confidence, and helping young women grow in identity, character, purpose, wisdom, and grace for the future God has prepared for them.`})]})}),a.slice(1).map((e,t)=>(0,i.jsx)(s,{delay:(t+2)*80,children:(0,i.jsx)(`figure`,{className:`women-card surface-card ${t===2?`women-card--wide`:``}`,children:(0,i.jsx)(`img`,{src:e,alt:`Women of Destiny ${t+2}`,loading:`lazy`,decoding:`async`})})},e))]})})}),(0,i.jsx)(`style`,{children:`
        .women-page {
          background:
            radial-gradient(circle at top left, rgba(181, 214, 58, 0.08), transparent 24%),
            linear-gradient(180deg, #fbfcff 0%, #f6f8fc 100%);
        }

        .women-hero {
          position: relative;
          overflow: clip;
          background: #081d39;
        }

        .women-hero__bg,
        .women-hero__overlay {
          position: absolute;
          inset: 0;
        }

        .women-hero__bg {
          background:
            linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),
            url('/2024/09/AM5A2015.jpg') center/cover no-repeat;
          transform: scale(1.05);
          animation: heroBackdropZoom 16s ease-out forwards;
        }

        .women-hero__overlay {
          background:
            radial-gradient(circle at 18% 18%, rgba(181, 214, 58, 0.16), transparent 18%),
            linear-gradient(115deg, rgba(3, 12, 28, 0.82), rgba(8, 29, 57, 0.38) 48%, rgba(8, 29, 57, 0.82));
        }

        .women-hero__content {
          position: relative;
          z-index: 1;
          padding: 7rem 0 5.6rem;
        }

        .women-hero__copy {
          max-width: 48rem;
          color: white;
        }

        .women-hero .eyebrow {
          color: rgba(255, 255, 255, 0.92);
        }

        .women-hero .eyebrow::before {
          background: linear-gradient(90deg, rgba(181, 214, 58, 0.92), transparent);
        }

        .women-hero__copy h1 {
          margin: 1rem 0;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(3rem, 6vw, 5.4rem);
          line-height: 0.94;
          letter-spacing: -0.06em;
          color: white;
        }

        .women-hero__copy p {
          margin: 0;
          font-size: 1.08rem;
          line-height: 1.9;
          color: rgba(255, 255, 255, 0.84);
        }

        .women-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.2rem;
          align-items: start;
        }

        .women-card,
        .women-story {
          margin: 0;
          overflow: hidden;
          padding: 0.9rem;
          border-radius: 1.5rem;
          border: 1px solid rgba(16, 58, 113, 0.08);
          background:
            radial-gradient(circle at top right, rgba(181, 214, 58, 0.12), transparent 22%),
            rgba(255, 255, 255, 0.97);
          box-shadow: 0 24px 60px rgba(8, 29, 57, 0.08);
          transition: transform var(--transition), box-shadow var(--transition);
        }

        .women-card:hover,
        .women-story:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 80px rgba(8, 29, 57, 0.12);
        }

        .women-card--feature {
          grid-row: span 2;
          min-height: 32rem;
        }

        .women-card--wide {
          grid-column: span 2;
        }

        .women-card img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 1rem;
          background: rgba(255, 255, 255, 0.94);
        }

        .women-story {
          padding: 2rem;
        }

        .women-story h2 {
          margin: 0 0 1rem;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2rem, 3vw, 2.8rem);
          line-height: 1;
          color: var(--color-blue-deep);
        }

        .women-story p {
          margin: 0;
          font-size: 1.04rem;
          line-height: 1.95;
          color: var(--color-text);
        }

        @media (max-width: 980px) {
          .women-grid {
            grid-template-columns: 1fr;
          }

          .women-card--feature,
          .women-card--wide {
            grid-row: auto;
            grid-column: auto;
            min-height: auto;
          }
        }

        @media (max-width: 640px) {
          .women-hero__content {
            padding: 5.6rem 0 4.8rem;
          }

          .women-card,
          .women-story {
            padding: 0.7rem;
            border-radius: 1.1rem;
          }

          .women-story {
            padding: 1.35rem;
          }

          .women-card img {
            border-radius: 0.8rem;
          }
        }
      `})]});export{c as default};