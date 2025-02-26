const formatTweet = text => text.length > 280 ? text.slice(0, 277) + "..." : text;
const formatPost = text => text.length > 2000 ? text.slice(0, 1997) + "..." : text;
const formatCombo = text => `${formatTweet(text)}\n\n${formatPost(text)}`;

const formatText = () => {
    const inputText = document.getElementById("inputText").value;
    document.getElementById("tweetOutput").innerText = formatTweet(inputText);
    document.getElementById("postOutput").innerText = formatPost(inputText);
    document.getElementById("comboOutput").innerText = formatCombo(inputText);
};
