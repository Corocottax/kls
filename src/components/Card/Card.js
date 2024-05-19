import "./Card.css";

export const Card = (card) => {
  return `
        <article class="card">
            <div class="img_wrp"> 
                <img src="${card.img}" alt="${card.alt}"/>
            </div>
            <div class="info">
                <h3>${card.title}</h3>
                <p>${card.text}</p>
            </div>
        </article>
    `;
};
