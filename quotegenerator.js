let quotes = quoteStars.concat(quoteImagination,quotePhilosophy,quoteSystems,quoteVocation,quoteWriting);

let paragraph = document.getElementById("Quote-paragraph");

paragraph.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];

