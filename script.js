// grab a reference for necessary HTML elements 
// .jokes-text
const jokeText = document.querySelector('.joke-text');

// new-joke-btn 
const newJokeBtn = document.querySelector('.new-joke-btn');

// .share-btn (link )
const shareBtn = document.querySelector('.share-btn');

// add 'click' eventListner to .new-joke-btn 
newJokeBtn.addEventListener('click',getJoke);

// immediately call getJoke()
getJoke();

// getJoke() function definition 
function getJoke() {
    // make an API request to 
    // https://icanhazdadjoke.com/'
    fetch('https://icanhazdadjoke.com/',{
        headers: {
            'Accept':'application/json '
        }
    }).then(function(response) {
        // convert Stringfied JSON response to  JavaScript Object
        return response.json();
    }).then(function(data) {
        // replace innerText of .joke-text with data.joke 
        // extract the joke text 
        const joke = data.joke;
        // do the replacement
        jokeText.innerText = joke;

        // make the .shareBtn(.share-btn link) work by setting href 
        // create share link with joke 
        const shareLink = `https://whatsapp.com?text=${joke}`;
        // set the href
        shareBtn.setAttribute('href', shareLink);
    }).catch(function(error) {
        // if some error occured 
        jokeText.innerText = 'Oops! Some error happened :(';
        // removes the old href from .share-btn if found any 
        shareBtn.remove('href');
        // console.log the error 
        console.log(error); 
    });
}