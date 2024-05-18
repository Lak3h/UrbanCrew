import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./Aboutpage.scss";

const App = () => {
  const carouselItems = [
    {
      image: 'slide-2.jpg',
      text: 'Factory 1',
    },
    {
      image: 'slide-2.jpg',
      text: 'Factory 2',
    },
    {
      image: 'slide-2.jpg',
      text: 'Factory 3',
    },
  ];

  return (
    <div className="App">
     
      <section className="Carousel-section">
        <Carousel infiniteLoop autoPlay interval={3000} showArrows={false} showThumbs={false}>
          {carouselItems.map((item, index) => (
            <div key={index}>
             
              <p className="legend">{item.text}</p>
            </div>
          ))}
        </Carousel>
      </section>
      <section className="About-section">
        <h2>Our Story</h2>
        <p>
           We manufacture our products from superior quality material which is sourced from the most trusted and reliable vendors of the market. We cover a large market area across nationwide with a long and strong list of clients. Our products are light weighted and flawlessly finished. They are smooth in performance and have excellent efficiency. Our product’s precise manufacturing and cost effective solution makes them more reliable.

 

We are headed by Mr. P. Muruganantham, who is the Managing Partner of the company. He regularly visits our production departments so as have frequent checks over the manufacturing procurement. He is confident, straight forward and innovative in nature. Under his only presence, our company has created several benchmarks in the industry with desired eminent verticals. He timely updates our manpower’s knowledge so as keep them all in pave with markets renovating policies and changes.

 

Being efficient and remorse in nature is our manpower’s most productive feature. They have created a healthy environment within the company campus. Our team’s result orienting practices always let us accomplish heavy assignments within remaining deadline. They timely receive motivational seminars in order to get their production capability enhanced. Our manpower has acted as a vital part in enabling us lean ahead of the winning edge with prominence in the industry.

 

We practice latest techniques to get the supreme quality of final product which we offer to the chief market. Our product ranges are robust and sturdy in construction. Our vendors provide us desired quality material for the manufacturing of the products. We make every possible effort to make our clients happy and indemnified with our offerings.
        </p>
      </section>
     
   
    </div>
  );
};

export default App;
