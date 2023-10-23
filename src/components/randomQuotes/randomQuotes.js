import React, { useState } from 'react';
import './randomQuotes.css';

const RandomQuotes = () => {

    let quotes = [];

    async function loadQuotes() {
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
    }

    const [quote, setQuote] = useState({
        text : "Difficulties increase the nearer we get to the goal.",
        author : "Johann Wolfang",
    });
    
    const random = () =>{
        const select = quotes[Math.floor(Math.random()*quotes.length)]
        setQuote(select);
    }
    
    const twitter = ()=>{
        window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}`)
    }

    loadQuotes();

  return (
    <div className='container'>
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
            <div className="author">{quote.author.split(',')[0]}</div>
            <div className="icons">
            <i className="fi fi-rs-rotate-right" onClick={()=>{random()}}></i>
            <i className="fi fi-brands-twitter" onClick={()=>{twitter()}}></i>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RandomQuotes;
