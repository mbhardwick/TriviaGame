$(document).ready(function() {
    $("#start").on("click", function() {
        game.start();
    });

    $(document).on("click", "#end", function(){
        game.done();
    });

    var questions = [{
        question: "Which of The Girls are related?",
        options: ["Dorothy and Sophia", "Blanche and Rose", "Sophia and Blanche", "Rose and Dorothy"],
        answer: "Dorothy and Sophia"
    }, {
        question: "What do The Girls eat while sitting at the table to gab?",
        options: ["Apple Pie", "Ice Cream", "Cheesecake", "Brownies"],
        answer: "Cheesecake"
    }, {
        question: "Where did Rose and Blanche meet?",
        options: ["The Movies", "The Supermarket", "A Restaurant", "The Fair"],
        answer: "The Supermarket"
    }, {
        question: "Dorothy's ex-husband is named...",
        options: ["Stan", "Dave", "Paul", "Wayne"],
        answer: "Stan"
    }, {
        question: "What is the name of Sophia's retirement home that burned down?",
        options: ["Sunny Willows", "Golden Plains", "Breezy Shores", "Shady Pines"],
        answer: "Shady Pines"
    }, {
        question: "Where do The Girls live?",
        options: ["Boca Raton", "Tampa", "Miami", "Key West"],
        answer: "Miami"
    }, {
        question: "Who owns the house where The Girls live?",
        options: ["Sophia", "Blanche", "Rose", "Dorothy"],
        answer: "Blanche"
    }, {
        question: "How many seasons did The Golden Girls run?",
        options: ["4", "7", "5", "8"],
        answer: "7"
    }];

    var game = {
        correct: 0,
        incorrect: 0,
        counter: 20,
        countdown: function() {
            game.counter--;
            $("#counter").html(game.counter);
            if(game.counter<=0){
                console.log("Time's Up");
                game.done();
            }
        },
        start: function() {
            timer = setInterval(game.countdown,1000);
            $("#subwrapper").prepend("<h2>Time Remaining: <span id='counter'>120</span> Seconds</h2>");
            $("#start").remove();
            for (var i = 0; i < questions.length; i++) {
                $("#subwrapper").append("<h2>" + questions[i].question + "</h2>");
                for (var j = 0; j < questions[i].options.length; j++) {
                    $("#subwrapper").append("<input type= 'radio' name='question-" + i + "' value='" + questions[i].options[j] + "'>" + questions[i].options[j]);
                }
            }
            $("#subwrapper").append("<br><button id='end'>DONE</button>");
        },
        done: function(){
            $.each($("input[name='question-0']:checked"), function() {
                if($(this).val()===questions[0].answer){
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
            $.each($("input[name='question-1']:checked"), function() {
                if($(this).val()===questions[1].answer){
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
            $.each($("input[name='question-2']:checked"), function() {
                if($(this).val()===questions[2].answer){
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
            $.each($("input[name='question-3']:checked"), function() {
                if($(this).val()===questions[3].answer){
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
            $.each($("input[name='question-4']:checked"), function() {
                if($(this).val()===questions[4].answer){
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
            $.each($("input[name='question-5']:checked"), function() {
                if($(this).val()===questions[5].answer){
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
            $.each($("input[name='question-6']:checked"), function() {
                if($(this).val()===questions[6].answer){
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
            $.each($("input[name='question-7']:checked"), function() {
                if($(this).val()===questions[7].answer){
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });

            this.result();
        },

        result: function() {
            clearInterval(timer);
            $("#subwrapper h2").remove()
            $("#subwrapper").html("<h2>All Done! You're a pal and a confidant!</h2>");
            $("#subwrapper").html("<img id='squad' src='assets/images/squad.jpg' alt='The Squad'/>")
            $("#subwrapper").append("<h3>Correct Answers: " + this.correct + "</h3>");
            $("#subwrapper").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
            $("#subwrapper").append("<h3>Unanswered: " + (questions.length-(this.incorrect+this.correct)) + "</h3>")
        },
    };
});