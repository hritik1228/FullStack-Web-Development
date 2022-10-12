const quoteText = document.querySelector(".quote");
const authorName = document.querySelector(".author .name")
const quoteBtn = document.querySelector("button");
const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");

// Random quote function
function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerHTML = "Loading Quote...";
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        // console.log(result);
        quoteText.innerHTML = result.content;
        authorName.innerHTML = result.author;
        quoteBtn.innerHTML = "New Quote";
        quoteBtn.classList.remove("loading");

    })
}
soundBtn.addEventListener("click", () => {
    // Web Speech API interface represents a speech request. It contains the content the speech service should read and information about how to read it
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerHTML} by ${authorName.innerHTML}`);
    speechSynthesis.speak(utterance)
})

copyBtn.addEventListener("click", () => {
    // Copying the quote text on copyBtn click
    // writeText() property writes the specified text string to the system clipboard 
    navigator.clipboard.writeText(quoteText.innerText);
})

twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`
    window.open(tweetUrl, "_blank"); // opening a new twitter tab with passing quote in the URL.
})


quoteBtn.addEventListener("click", randomQuote);