import React from 'react';
import { handleLegacyClick, handleLegacySubmit } from '../shared/actions.js';

export default function LookbookPage() {
  return (
    <div className="page-content" onClick={handleLegacyClick} onSubmit={handleLegacySubmit}>

<section className={"lookbook-cover"}><div className={"lookbook-cover-image"}></div><div className={"lookbook-cover-type"}><div className={"eyebrow"}>LA CINDERAE / Visual journal No. 01</div><h1>THE<br /><em>ART OF</em><br />BEING.</h1><p>AN EDITORIAL STUDY IN PERSONAL STYLE · AUTUMN / WINTER 2026</p><a className={"lookbook-scroll"} href={"#journal-stories"}>SCROLL TO EXPLORE ↓</a></div><span className={"cover-side-note"}>A CONTEMPORARY FASHION HOUSE — EST. 2026</span></section>
<section className={"lookbook-opening container"} id={"journal-stories"}><div className={"eyebrow"}>The visual journal / 001</div><h2>Not just what<br />you wear. <em>How it feels.</em></h2><p>A collection of moments, moods and unexpected pairings. Move through the story, then shop the pieces that make it yours.</p></section>
<section className={"journal-spread"}>
<article className={"journal-feature"}><div className={"journal-image-wrap"}><a className="lc-lookbook-image-link" href="product-details.html?id=1"><img src={"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=85"} alt={"Editorial fashion look"} /></a></div><div className={"journal-caption"}><span>01 — THE SHAPE OF THINGS</span><h3>A softer<br />structure.</h3><a href={"product-details.html?id=1"}>Discover the look ↗</a></div></article>
<article className={"journal-pair"}><div className={"journal-image-wrap"}><a className="lc-lookbook-image-link" href="product-details.html?id=5"><img src={"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85"} alt={"Model in contemporary styling"} /></a></div><div className={"journal-caption"}><span>02 — THE FINISHING TOUCH</span><h3>Details<br />in focus.</h3><a href={"jewellery.html"}>Shop jewellery ↗</a></div></article>
<article className={"journal-landscape"}><div className={"journal-image-wrap"}><a className="lc-lookbook-image-link" href="product-details.html?id=2"><img src={"https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=85"} alt={"Fashion movement editorial"} /></a></div><div className={"journal-caption"}><span>03 — IN MOTION</span><h3>Made to move<br />with you.</h3><a href={"clothing.html"}>Shop apparel ↗</a></div></article>
<article className={"journal-pair journal-pair-last"}><div className={"journal-image-wrap"}><a className="lc-lookbook-image-link" href="product-details.html?id=6"><img src={"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=950&q=85"} alt={"Portrait and jewellery editorial"} /></a></div><div className={"journal-caption"}><span>04 — A PERSONAL SIGNATURE</span><h3>Your own<br />point of view.</h3><a href={"shop-all.html"}>Shop the story ↗</a></div></article>
</section>
<section className={"lookbook-end"}><div className={"eyebrow"}>The story continues</div><h2>Find your<br />own expression.</h2><a className={"btn light"} href={"shop-all.html"}>Shop all pieces →</a></section>
    </div>
  );
}
