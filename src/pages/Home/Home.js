import React, { Component } from 'react';
import './Home.css';

class ContentBlock extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <h2>WHAT IS WUSHU?</h2>
          <p>
            Wushu means martial arts in Chinese (武 “Wu” = military, 术 “Shu” = art) and encompasses all forms of traditional Chinese martial arts. It was created in 1949 as a way to standardize the practice of Chinese martial arts and essentially make Chinese martial arts a sport. Wushu was often mislabeled as “Kung Fu” when it was introduced in the United States, which actually translates to “skill achieved through hardwork”.
            Wushu has two disciplines: Taolu (套路, forms) and Sanda(散打,sparring).
            Taolu involves wushu techniques that combines strikes, stances, jumps, sweeps, balances, and weaponry into a comprehensive routine performed by the practitioner.
            Sanda involves fighting methods influenced by traditional Chinese boxing and includes striking, grappling, throwing, and sweeping.
          </p>
          
        </div>
      </div>
    );
  }
}

export default ContentBlock;
