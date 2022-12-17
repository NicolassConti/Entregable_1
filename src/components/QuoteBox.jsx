import React, {useState} from "react";
import quotes from '../quotes.json'

    
const QuoteBox = () => {
  console.log(quotes);

  const random = Math.floor(Math.random() * quotes.length);
  const [index, setIndex] = useState(random);

  const changeQuote = () => {
    const newRandom = Math.floor(Math.random() * quotes.length);
    setIndex(newRandom);
  };

  const colors = [
    "#845EC2",
    "#D65DB1",
    "#FF6F91",
    "#FF9671",
    "#FFC75F",
    "#F9F871"
  ];
  const randomColor = Math.floor(Math.random() * colors.length);
  document.body.style = `background: ${colors[randomColor]}`;

  return (
    <div className="quotes-box" style={{ color: colors[randomColor] }}>
      <div>
      <i className="fa-sharp fa-solid fa-quote-left quote-icon"></i>
      <div className="quotes-text">{quotes[index].quote}
         <div className="quotes-author">{quotes[index].author} 
         <i className="fa-solid fa-check quote-check"></i>
          </div>
          <button className="quotes-button" onClick={changeQuote} style ={{color : colors[randomColor]}}>
          <i class="fa-solid fa-hand-point-right"></i>
          </button>         
        </div>
      </div>
    </div>
  );
};
        


  
  export default QuoteBox;
  