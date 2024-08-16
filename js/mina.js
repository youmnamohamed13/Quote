
  var quotes = [
    { quote: "Life is short, so don't waste it on trivial things.", author: "~ Anis Mansour" },
    { quote: "The mind is an adornment.", author: "~ Arabic Proverb" },
    { quote: "Optimism is the faith that leads to achievement.", author: "~ Helen Keller" },
    { quote: "Smile at life for it has beauty.", author: "~ Ali ibn Abi Talib" },
    { quote: "Knowledge is light.", author: "~ Arabic Proverb" },
    { quote: "The only way to do great work is to love what you do.", author: "~ Steve Jobs" },
    { quote:  "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "~ Brian Tracy" }
];

function allQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var selectedQuote = quotes[randomIndex];
    document.getElementById('quote').innerHTML = selectedQuote.quote;
    document.getElementById('author').innerHTML = selectedQuote.author;
  
}
