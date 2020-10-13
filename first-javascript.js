const greeting = "Hello world!";
let changingNumber = 5;

console.log(`result: ${greeting} ${changingNumber}` );

function add5(number){
    return number + 5;
}

const blogArticle = [
    {
        headline: "10 reasons I' m unhappy as a goat",
        subtitle: "another subtitle",
        articleText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,\n" +
            "                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,\n" +
            "                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\n" +
            "                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n" +
            "                Lorem ipsum dolor sit amet, consetetur sadipscing elitr," ,
        button: "this is a button",
        image: "http://placegoat.com/200/200"
    },
    {
        headline: "10 reasons I' m unhappy as a goat",
        subtitle: "another subtitle",
        articleText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,\n" +
            "                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,\n" +
            "                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\n" +
            "                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n" +
            "                Lorem ipsum dolor sit amet, consetetur sadipscing elitr," ,
        button: "this is a button",
        image: "http://placegoat.com/200/200"
    }
]

function createArticle(article){
    const newArticleContainer = document.createElement("article");
    const newDivContainer = document.createElement("div");
    newArticleContainer.appendChild(newDivContainer)
    newDivContainer.appendChild(createHeadline(article.headline));
    newDivContainer.appendChild(createBlogText(article.articleText));
    return newArticleContainer;
}

function createHeadline(headline){
    const newHeadline = document.createElement("h2");
    const headlineText = document.createTextNode(headline);
    newHeadline.appendChild(headlineText);
    return newHeadline;
}

function createBlogText(articleText){
    const newText = document.createElement("p");
    const subtitleText = document.createTextNode(articleText);
    newText.appendChild(subtitleText);
    return newText;
}


function addArticleElement() {
    const rootElement = document.getElementById("root-article");
    for (const element of blogArticle) {
        rootElement.appendChild(createArticle(element));
    }
}

addArticleElement();

/* newDivContainer.setAttribute("class", "article-text");
    newArticleContainer.appendChild(newDivContainer);
    const newHeadline = document.createElement("h2");
    const headlineText = document.createTextNode(blogArticle[0].headline)
    newHeadline.appendChild(headlineText);
    newDivContainer.appendChild(newHeadline);
    const newText = document.createElement("p")
    const subtitleText = document.createTextNode(blogArticle[0].subtitle)
        .appendChild(subtitleText);
    newDivContainer.appendChild(newText);
    // const textElement = document.createTextNode("Hello world!")
    // newText.appendChild(textElement);
    const breakContainer = document.createElement("br");
    newDivContainer.appendChild(breakContainer);
     */