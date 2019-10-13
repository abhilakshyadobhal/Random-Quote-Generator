import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";
import quoteLeft from "./quote-left.svg";

function App() {
  const quotes = [
    {
      quote:
        "Life isn’t about getting and having, it’s about giving and being.",
      author: "Kevin Kruse"
    },
    {
      quote:
        "Whatever the mind of man can conceive and believe, it can achieve.",
      author: "Napoleon Hill"
    },
    {
      quote: "Strive not to be a success, but rather to be of value.",
      author: "Albert Einstein"
    },
    {
      quote:
        "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
      author: "Robert Frost"
    },
    {
      quote: "I attribute my success to this: I never gave or took any excuse.",
      author: "Florence Nightingale"
    },
    {
      quote: "You miss 100% of the shots you don’t take.",
      author: "Wayne Gretzky"
    },
    {
      quote:
        "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
      author: "Michael Jordan"
    },
    {
      quote:
        "The most difficult thing is the decision to act, the rest is merely tenacity.",
      author: "Amelia Earhart"
    },
    {
      quote: "Every strike brings me closer to the next home run.",
      author: "Babe Ruth"
    },
    {
      quote:
        "Definiteness of purpose is the starting point of all achievement.",
      author: "W. Clement Stone"
    },
    {
      quote:
        "We must balance conspicuous consumption with conscious capitalism.",
      author: "Kevin Kruse"
    }
  ];

  var colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857"
  ];

  const [showQuote, setShowQuote] = useState({
    quote: "",
    author: ""
  });

  const [color,setColor] = useState('');

  const handleClick = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    setShowQuote(randomQuote);
    setColor(randomColor);
    document.body.style.backgroundColor = randomColor;
  };

  useEffect(() => handleClick(), []);

  return (
    <>
    <div className="wrapper">
      <div className={styles.box} style={{color: color}}>
        <div className={styles.quote}>
          <div className={styles.quote_text}>
            <img src={quoteLeft} alt="" width={20} style={{color: color}} />{" "}
            {showQuote.quote}
          </div>
          <div className={styles.quote_author}>
            - <span style={styles.author}>{showQuote.author}</span>{" "}
          </div>
        </div>
        <br />
        <div className={styles.buttons}>
          <button className={styles.button} onClick={handleClick} style={{backgroundColor: color}}>
            New Quote
          </button>
        </div>
      </div>
      <div className="footer">
        - Abhilakshya
      </div>
      </div>
    </>
  );
}

export default App;
