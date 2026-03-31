import{i as e,n as t,t as n}from"./jsx-runtime-BnxRlLMJ.js";var r=e(t(),1),i=n(),a=[`/2024/09/21.jpg`,`/2024/08/medical_camp.jpg`];function o(){let e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t=e.current;if(!t)return;let n=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`is-visible`),n.unobserve(e.target))})},{threshold:.14,rootMargin:`0px 0px -40px 0px`});return n.observe(t),()=>n.disconnect()},[]),e}function s({children:e,delay:t=0,className:n=``}){return(0,i.jsx)(`div`,{ref:o(),className:`reveal ${n}`.trim(),style:{"--reveal-delay":`${t}ms`},children:e})}var c=()=>(0,i.jsxs)(`div`,{className:`outreach-detail`,children:[(0,i.jsxs)(`section`,{className:`detail-hero detail-hero--medical`,children:[(0,i.jsx)(`div`,{className:`detail-hero__bg`}),(0,i.jsx)(`div`,{className:`detail-hero__overlay`}),(0,i.jsx)(`div`,{className:`container detail-hero__content`,children:(0,i.jsxs)(s,{children:[(0,i.jsx)(`span`,{className:`eyebrow`,children:`FREE MEDICAL OUTREACHES`}),(0,i.jsx)(`h1`,{children:`FREE MEDICAL OUTREACHES`})]})})]}),(0,i.jsx)(`section`,{className:`section`,children:(0,i.jsxs)(`div`,{className:`container detail-stack`,children:[(0,i.jsx)(s,{children:(0,i.jsxs)(`section`,{className:`detail-split surface-card`,children:[(0,i.jsxs)(`div`,{className:`detail-copy`,children:[(0,i.jsx)(`h2`,{children:`FREE MEDICAL OUTREACHES`}),(0,i.jsx)(`blockquote`,{children:`‘…this is especially to children.’`}),(0,i.jsx)(`p`,{children:`There have been camps where we would provide free medical care for up to 1400 Children.`}),(0,i.jsx)(`p`,{children:`Twice every year, we do organize a free medical camp with our major focus on children below 12 years. There have been camps where we would provide free medical care for up to 1400 Children.`})]}),(0,i.jsx)(`figure`,{className:`detail-media`,children:(0,i.jsx)(`img`,{src:a[0],alt:`Free medical outreach`})})]})}),(0,i.jsx)(s,{delay:90,children:(0,i.jsxs)(`section`,{className:`detail-split detail-split--reverse surface-card`,children:[(0,i.jsx)(`figure`,{className:`detail-media`,children:(0,i.jsx)(`img`,{src:a[1],alt:`Free medical outreach`})}),(0,i.jsxs)(`div`,{className:`detail-copy`,children:[(0,i.jsx)(`p`,{children:`Our target is children and women because of the immense need due to the many sicknesses and infections prevalent amongst them.`}),(0,i.jsx)(`p`,{children:`We have often treated sicknesses like; Skin and Nail Fungal Diseases, Dental Problems (Teeth Decay), Malaria (with symptoms such as High temperature, Fever, Joint Pains, Loss of Appetite etc.), Intestinal Worms, Eye Diseases (Especially Bacterial infections & Allergies that bring about Pus-discharge and much itching of the eyes.)`})]})]})})]})}),(0,i.jsx)(`style`,{children:`
        .outreach-detail {
          background:
            radial-gradient(circle at top left, rgba(181, 214, 58, 0.08), transparent 24%),
            linear-gradient(180deg, #fbfcff 0%, #f6f8fc 100%);
        }

        .detail-hero {
          position: relative;
          min-height: calc(74vh - 7rem);
          display: grid;
          align-items: center;
          overflow: clip;
          background: #081d39;
        }

        .detail-hero__bg,
        .detail-hero__overlay {
          position: absolute;
          inset: 0;
        }

        .detail-hero--medical .detail-hero__bg {
          background: linear-gradient(0deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.06)), url('/2024/08/medical_camp.jpg') center/cover no-repeat;
          transform: scale(1.06);
          animation: heroBackdropZoom 16s ease-out forwards;
        }

        .detail-hero__overlay {
          background:
            radial-gradient(circle at 20% 20%, rgba(181, 214, 58, 0.2), transparent 18%),
            linear-gradient(115deg, rgba(3, 12, 28, 0.82), rgba(8, 29, 57, 0.36) 48%, rgba(8, 29, 57, 0.82));
        }

        .detail-hero__content {
          position: relative;
          z-index: 1;
          padding: 7rem 0 6rem;
          color: white;
        }

        .detail-hero .eyebrow {
          color: rgba(255, 255, 255, 0.92);
        }

        .detail-hero .eyebrow::before {
          background: linear-gradient(90deg, rgba(181, 214, 58, 0.92), transparent);
        }

        .detail-hero h1 {
          margin: 1.05rem 0 0;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(3.3rem, 7vw, 6rem);
          line-height: 0.92;
          letter-spacing: -0.06em;
          color: white;
        }

        .detail-stack {
          display: grid;
          gap: 1.5rem;
        }

        .detail-split {
          display: grid;
          grid-template-columns: minmax(0, 1.02fr) minmax(0, 0.98fr);
          overflow: hidden;
          border: 1px solid rgba(16, 58, 113, 0.08);
          background:
            radial-gradient(circle at top right, rgba(181, 214, 58, 0.12), transparent 22%),
            rgba(255, 255, 255, 0.96);
          box-shadow: 0 24px 60px rgba(8, 29, 57, 0.08);
        }

        .detail-split--reverse {
          grid-template-columns: minmax(0, 0.98fr) minmax(0, 1.02fr);
        }

        .detail-copy {
          padding: 2.25rem;
        }

        .detail-copy h2 {
          margin: 0 0 1rem;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2.1rem, 4vw, 3.4rem);
          line-height: 0.96;
          color: var(--color-blue-deep);
        }

        .detail-copy p {
          margin: 0 0 1rem;
          font-size: 1.03rem;
          line-height: 1.95;
          color: var(--color-text);
        }

        .detail-copy blockquote {
          margin: 0 0 1.25rem;
          padding: 1.25rem 1.35rem;
          border-left: 4px solid var(--color-lemon);
          border-radius: 0 1rem 1rem 0;
          background: rgba(16, 58, 113, 0.04);
          font-family: 'Outfit', sans-serif;
          font-size: 1.14rem;
          line-height: 1.75;
          color: var(--color-blue-deep);
        }

        .detail-media {
          margin: 0;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.98);
        }

        .detail-media img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 1rem;
        }

        @media (max-width: 980px) {
          .detail-split,
          .detail-split--reverse {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .detail-hero__content {
            padding: 5.6rem 0 4.8rem;
          }

          .detail-copy {
            padding: 1.35rem;
          }

          .detail-media {
            padding: 0.65rem;
          }

          .detail-media img {
            border-radius: 0.8rem;
          }
        }
      `})]});export{c as default};