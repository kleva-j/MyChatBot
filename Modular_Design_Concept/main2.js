

(function(){

    var chat = {

        ChatMsg: [],

        init: () => {
            this.cacheDom();
        },

        cacheDom: () => {
            var top_header = document.querySelector('.top_header'),
            display = document.querySelector('.display'),
            sendButton = document.querySelector('.box'),
            input = document.querySelector('#input');
        },

        render: () => {
            
        }

    };

    chat.init();


})()