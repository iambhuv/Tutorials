const subs = document.getElementById("subs");
const channelID = "UC690azwC4J2tl0Hojk02HsA";
const apiKey = "AIzaSyB8YrOZgnw125OjXRggFEAjbuMYQZDHEtg";
const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelID}&key=${apiKey}`

const fetchData = async () => {
    const data = await fetch(url)
    const actualData = await data.json();
    const subsCount = await actualData["items"][0].statistics["subscriberCount"]

    subs.innerHTML = subsCount;
}

fetchData();