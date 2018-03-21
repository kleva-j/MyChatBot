/*
User Utilities.
generate chat bubble at the keypress of enter button
    append chat_bubble to the right side of the screen.
    store every chat message push content to an array future reference.

    chat_bot functionalilties
    listen for click and keypress event on the input box
    interpolate value to a corresponding result or answer and append chat_card to the left side of the screen.

    */

function speak(string){
    var utterance = new SpeechSynthesisUtterance();
    utterance.voice = speechSynthesis.getVoices().filter(function(voice){return voice.name == "Microsoft Hazel Desktop - English (Great Britain)";})[0];
    utterance.text = string;
    utterance.lang = "en-US";
    utterance.volume = 1; //0-1 interval
    utterance.rate = 1;
    utterance.pitch = 2; //0-2 interval
    speechSynthesis.speak(utterance);
}


var Chat = {

    init: () => {
        var display = document.querySelector('.display');
        document.querySelector('.box').addEventListener('click', clickPress);
        document.querySelector('#input').addEventListener('keypress', keyPress);

        function clickPress(){
            if(input.value) print();
        };
        function keyPress(e){
            if(e.keyCode === 13){
                if(input.value) print();
            }
        }

        function print(){
            var blog = document.createElement('li');
            var chat_bubble = document.createElement("div");
            blog.setAttribute('class', 'blog');
            chat_bubble.setAttribute('class', 'right');
            chat_bubble.innerText = input.value;
            blog.appendChild(chat_bubble);
            display.appendChild(blog);
            output(input.value);
            input.value = "";

        }

        const output = (input) => {
            try{
                var product = input + "=" + eval(input);
            } catch(e){
                var text = (input.toLowerCase()).replace(/[^\w\s\d]/gi, ""); //remove all chars except words, space and
                text = text.replace(/ a /g, " ").replace(/i feel /g, "").replace(/whats/g, "what is").replace(/please /g, "").replace(/ please/g, "");
                if(compare(trigger, reply, text)) var product = compare(trigger, reply, text);
                else var product = alternative[Math.floor(Math.random()*alternative.length)];
            }

            finally{
                var vblog = document.createElement('li');
                var chat_bubble = document.createElement('div');
                vblog.setAttribute('class', 'blog');
                chat_bubble.setAttribute('class', 'left');
                setTimeout(function(){
                    chat_bubble.innerText = product;
                    vblog.appendChild(chat_bubble);
                    display.appendChild(vblog);
                    speak(product);
                }, 800)
            }

        }

        const compare = (arr, array, string) => {

            var item;
            for(var x=0; x<arr.length; x++){
                for(var y=0; y<array.length; y++){
                    if(arr[x][y] == string){
                        items = array[x];
                        item =  items[Math.floor(Math.random()*items.length)];
                    }
                }
            }
            return item;

        }
    }

}

window.onload = Chat.init();

var trigger = [
	["hi","hey","hello", 'what is your name', 'May i know you'],
	["how are you", "how is life", "how are things"],
	["what are you doing", "what is going on"],
	["how old are you"],
	["who are you", "are you human", "are you bot", "are you human or bot"],
	["who created you", "who made you"],
	["your name please",  "your name", "may i know your name", "what is your name"],
	["i love you"],
	["happy", "good"],
	["bad", "bored", "tired"],
	["help me", "tell me story", "tell me joke"],
	["ah", "yes", "ok", "okay", "nice", "thanks", "thank you"],
    ["bye", "good bye", "goodbye", "see you later"],
    ["hey do you smoke weed"]
];
var reply = [
	["Hi","Hey","Hello"],
	["Fine", "Pretty well", "Fantastic"],
	["Nothing much", "Can you guess?", "I don't know actually"],
	["I am 1 day old"],
	["I am just a bot", "I am a bot. What are you?"],
	["Michael", "My God"],
	["I am nameless", "I don't have a name", "would you please give me one", "can you guess"],
	["I love you too", "Me too", "that's so sweet"],
	["Have you ever felt bad?", "Glad to hear it"],
	["Why?", "Why? You shouldn't!", "Try watching TV"],
	["I will", "What about?"],
	["Tell me a story", "Tell me a joke", "Tell me about yourself", "You are welcome", "Yeah"],
    ["Bye", "Goodbye", "See you later"],
    ["weed is bad for my health"]
];

var alternative = ["What...", "Eh...", "Yeah", "ok", "Sorry, I do not understand what you are saying"];
