$(document).ready(function(){


 var questions = [
        // question 1
        {
            "q": "How big is New York?",
            "c": ["407 square miles", "390 square miles", "305 square miles"],
            "answer": 2
        },
        // question 2
        {
            "q": "How many people live in New York City?",
            "c": ["11.6 million people", "8.4 million people", "7.2 million people"],
            "answer": 1
        },
        // question 3
        {
            "q": "How big is The Empire State Building (to the top floor)?",
            "c": ["1450 feet", "1365 feet", "1250 feet"],
            "answer": 2
        },
        // question 4
        {
            "q": " How tall is the Chrysler Building?",
            "c": ["1046 feet", "992 feet", "967 feet"],
            "answer": 0
        },
        // question 5
        {
            "q": "Whos the richest person living in New York?",
            "c": [" Michael Bloomberg", "David Koch", "Carl Icahn"],
            "answer": 0
        },
        // question 6
        {
            "q": "Whats the biggest park in New York?",
            "c": ["Bronx Park", "Pelham bay park", "Central Park"],
            "answer": 1
        },
        // question 7
        {
            "q": "How long is long beach?",
            "c": ["3 1/2 miles", "2 1/4 miles", "1 2/3 miles long"],
            "answer": 1
        },
        // question 8
        {
            "q": "What the largest borough in New York?",
            "c": ["Brooklyn", "Manhatten", "Queens"],
            "answer": 2
        },
        // question 9
        {
            "q": "How tall is the 432 park avenue building?",
            "c": ["1396 feet", "1230 feet", "1145 feet"],
            "answer": 0
        },
        // question 10
        {
            "q": "When was New York City established",
            "c": ["1610", "1624", "1654"],
            "answer": 1
        }
    ];
    $("#startGame").click(function(){
        $("#introSection").empty()
 console.log("clicking")
 displayquestion()

    });
     function displayquestion(){
        $("#Questions").text(questions[0].q);
        for (var i=0; i<questions[0].c.length;i++){
            var p= $("<div>")
            p.text(questions[0].c[i])
            p.append("<button> answer </button>")
            $("#choices").append(p)
        }
      
        
     }
});