import React, { Component } from 'react';
import './Home.css';

class ContentBlock extends Component {
  render() {
    return (
      <div className="Home container">

        <div className="row">
          <div className="col-8">
            <h2>WHAT IS WUSHU?</h2>
            <p>
              Wushu means martial arts in Chinese (武 “Wu” = military, 术 “Shu” = art) and encompasses all forms of traditional Chinese martial arts. It was created in 1949 as a way to standardize the practice of Chinese martial arts and essentially make Chinese martial arts a sport. Wushu was often mislabeled as “Kung Fu” when it was introduced in the United States, which actually translates to “skill achieved through hardwork”.
            </p>
            <p>
              Wushu has two disciplines: Taolu (套路, forms) and Sanda (散打,sparring).
              <ul>
                <li><strong>Taolu</strong> involves wushu techniques that combines strikes, stances, jumps, sweeps, balances, and weaponry into a comprehensive routine performed by the practitioner.</li>
                <li><strong>Sanda</strong> involves fighting methods influenced by traditional Chinese boxing and includes striking, grappling, throwing, and sweeping.</li>
              </ul>  
            </p>
          </div>
          <div className="col-4">
            <div className="schedule-block">
              <h3>LOCATION</h3>
              <ul>
                <li>Clackmas</li>
                <li>11525 OR-212<br></br> Clackamas, OR 97015</li>
              </ul>
              <ul>
                <li>Beaverton</li>
                <li>Oregon Dream Team</li>
                <li>11000 SW 11th St #420<br></br> Beaverton, OR 97005</li>
              </ul>
              <ul>
                <li>Contact</li>
                <li>Phone: 555-5555</li>
                <li>Email: email@summitwushu.com</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">

        </div>

      </div>
    );
  }
}

export default ContentBlock;
