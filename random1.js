var qoutes = ["I love you the more in that I believe you had liked me for my own sake and for nothing else.",
              "But man is not made for defeat. A man can be destroyed but not defeated.",
              "When you reach the end of your rope, tie a knot in it and hang on.",
              "Work like you don't need the money. Love like you've never been hurt. Dance like nobody's watching.",
              "It is far better to be alone, than to be in bad company.",
              "Love cures people - both the ones who give it and the ones who receive it.",
              "If you cannot do great things, do small things in a great way.",
              "The supreme art of war is to subdue the enemy without fighting.",
              "Being entirely honest with oneself is a good exercise.",
              "Happiness can exist only in acceptance.",
              "Honesty is the first chapter in the book of wisdom.",
              "The journey of a thousand miles begins with one step.",
              "The best preparation for tomorrow is doing your best today.",
              "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
              "There are two ways of spreading light: to be the candle or the mirror that reflects it.",
              "I have not failed. I've just found 10,000 ways that won't work.",
              "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
              "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
              "There is nothing on this earth more to be prized than true friendship.",
              "Honesty is the first chapter in the book of wisdom."]
              function newQuote() {
              	var ran = Math.floor(Math.random()*(qoutes.length));
              	document.getElementById('display').innerHTML = qoutes[ran];
              }