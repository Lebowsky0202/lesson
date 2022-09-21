'use srtict';

class Cards{
    constructor(img, alt, title, wrap){
        this.img = img;
        this.alt = alt;
        this.title = title;
        this.wrap = wrap;
    }

    setCard(){
        const card = document.createElement('div');
        card.classList.add('card');

        console.log(card);
        
        card.innerHTML = `
            <img src="${this.img}" alt="${this.alt}" class="card__image">
            <div class="card__title">${this.title}</div>
        `;

        this.wrap.append(card);
    }
}

const wrapper = document.querySelector('.wrap');

const card1 = new Cards('card.jpeg', 'spanchBob', 'spanchBob', wrapper);

card1.setCard();

