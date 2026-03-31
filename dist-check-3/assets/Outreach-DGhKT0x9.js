import{i as e,n as t,t as n}from"./jsx-runtime-BnxRlLMJ.js";var r=e(t(),1),i=n(),a=[`/2024/09/0-1.jpg`,`/2024/09/1-1.jpg`,`/2024/09/2.jpg`,`/2024/09/3.jpg`,`/2024/09/4.jpg`,`/2024/09/5.jpg`,`/2024/09/6.jpg`,`/2024/09/7.jpg`,`/2024/09/8.jpg`,`/2024/09/9.jpg`,`/2024/09/10.jpg`,`/2024/09/11.jpg`,`/2024/09/12.jpg`,`/2024/09/13.jpg`,`/2024/09/14.jpg`,`/2024/09/15.jpg`,`/2024/09/16.jpg`,`/2024/09/17.jpg`,`/2024/09/18.jpg`,`/2024/09/19.jpg`,`/2024/09/20.jpg`,`/2024/09/21.jpg`,`/2024/09/22.jpg`,`/2024/09/23.jpg`];function o(){let e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t=e.current;if(!t)return;let n=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`is-visible`),n.unobserve(e.target))})},{threshold:.12,rootMargin:`0px 0px -40px 0px`});return n.observe(t),()=>n.disconnect()},[]),e}function s({children:e,delay:t=0,className:n=``}){return(0,i.jsx)(`div`,{ref:o(),className:`reveal ${n}`.trim(),style:{"--reveal-delay":`${t}ms`},children:e})}var c=()=>(0,i.jsxs)(`div`,{className:`outreach-page`,children:[(0,i.jsxs)(`section`,{className:`outreach-hero`,children:[(0,i.jsx)(`div`,{className:`outreach-hero__bg`}),(0,i.jsx)(`div`,{className:`outreach-hero__overlay`}),(0,i.jsx)(`div`,{className:`container outreach-hero__content`,children:(0,i.jsxs)(s,{className:`outreach-hero__copy`,children:[(0,i.jsx)(`span`,{className:`eyebrow`,children:`All for One Missions`}),(0,i.jsx)(`h1`,{children:`All for One`})]})})]}),(0,i.jsx)(`section`,{className:`section outreach-gallery-section`,children:(0,i.jsx)(`div`,{className:`container`,children:(0,i.jsx)(`div`,{className:`outreach-gallery`,children:a.map((e,t)=>(0,i.jsx)(s,{delay:t%4*70,children:(0,i.jsx)(`figure`,{className:`outreach-gallery__item ${t%5==0?`is-featured`:``}`,children:(0,i.jsx)(`img`,{src:e,alt:`Ambassadors of Hope ${t+1}`,loading:`lazy`,decoding:`async`})})},e))})})}),(0,i.jsx)(`style`,{children:`
        .outreach-page {
          background:
            radial-gradient(circle at top left, rgba(181, 214, 58, 0.08), transparent 24%),
            linear-gradient(180deg, #fbfcff 0%, #f5f7fb 100%);
        }

        .outreach-hero {
          position: relative;
          min-height: calc(85vh - 7rem);
          display: grid;
          align-items: center;
          overflow: clip;
          background: #081d39;
        }

        .outreach-hero__bg,
        .outreach-hero__overlay {
          position: absolute;
          inset: 0;
        }

        .outreach-hero__bg {
          background: url('/2024/08/img_e4w.jpg') center center / cover no-repeat;
          transform: scale(1.08);
          animation: heroBackdropZoom 16s ease-out forwards;
        }

        .outreach-hero__overlay {
          background:
            radial-gradient(circle at 22% 22%, rgba(181, 214, 58, 0.24), transparent 18%),
            linear-gradient(115deg, rgba(3, 12, 28, 0.84), rgba(8, 29, 57, 0.5) 45%, rgba(8, 29, 57, 0.78));
        }

        .outreach-hero__content {
          position: relative;
          z-index: 1;
          padding: 7rem 0;
        }

        .outreach-hero__copy {
          max-width: 44rem;
          color: white;
        }

        .outreach-hero .eyebrow {
          color: rgba(255, 255, 255, 0.92);
        }

        .outreach-hero .eyebrow::before {
          background: linear-gradient(90deg, rgba(181, 214, 58, 0.95), transparent);
        }

        .outreach-hero h1 {
          margin: 1.1rem 0 0;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(3.6rem, 8vw, 7rem);
          line-height: 0.9;
          letter-spacing: -0.06em;
          color: white;
        }

        .outreach-gallery-section {
          padding-top: 5rem;
        }

        .outreach-gallery {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.5rem;
        }

        .outreach-gallery__item {
          margin: 0;
          padding: 1rem;
          border-radius: 1.75rem;
          border: 1px solid rgba(16, 58, 113, 0.08);
          background:
            radial-gradient(circle at top right, rgba(181, 214, 58, 0.12), transparent 22%),
            rgba(255, 255, 255, 0.96);
          box-shadow: 0 24px 65px rgba(8, 29, 57, 0.08);
          transition: transform var(--transition), box-shadow var(--transition);
        }

        .outreach-gallery__item:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 80px rgba(8, 29, 57, 0.12);
        }

        .outreach-gallery__item.is-featured {
          grid-column: span 2;
          padding: 1.2rem;
        }

        .outreach-gallery__item img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 1.15rem;
          object-fit: contain;
          background: #f4f6fa;
        }

        @media (max-width: 900px) {
          .outreach-hero {
            min-height: 60vh;
          }

          .outreach-gallery {
            grid-template-columns: 1fr;
          }

          .outreach-gallery__item.is-featured {
            grid-column: auto;
          }
        }

        @media (max-width: 640px) {
          .outreach-hero__content {
            padding: 5.5rem 0 4.5rem;
          }

          .outreach-gallery {
            gap: 1rem;
          }

          .outreach-gallery__item,
          .outreach-gallery__item.is-featured {
            padding: 0.75rem;
            border-radius: 1.25rem;
          }

          .outreach-gallery__item img {
            border-radius: 0.9rem;
          }
        }
      `})]});export{c as default};