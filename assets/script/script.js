const button = document.getElementById("btnRequest");
const container = document.getElementById("container");
let citation = null;

button.addEventListener('click',() => {

    const fetchName = () => fetch("https://thatsthespir.it/api");
    fetchName()
	.then((response) => response.json())
	.then(async (json) => {
        const newCitation = document.createElement("div");
        const div = document.createElement("div");
        const quote = document.createElement("p");
        const author = document.createElement("p");
        const img = document.createElement("img");

        quote.className = "quote";
        author.className = "author";
        newCitation.className = "citation";
        div.className = "quote-container";

        img.src = json.photo;
        img.alt = "Author's photo";
        quote.textContent = json.quote;
        author.textContent = json.author;

        newCitation.appendChild(img);
        div.appendChild(quote);
        newCitation.appendChild(div);
        newCitation.appendChild(author);

        if (citation) {
            container.replaceChild(newCitation, citation);
        } else {
            container.appendChild(newCitation);
        }

        citation = newCitation;

	})
    
	.catch((error) => {
		console.log("There was an error!", error);
	});
})
