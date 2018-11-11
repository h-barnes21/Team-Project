
       
        
        // pos is position of where the user in the test or which question they're up to
        var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
        // this is a multidimensional array with 4 inner array elements with 5 elements inside them
        // if you don't want answers viewable in the code, then you should use PHP and mySQL database
        var questions = [
            ["Are you abusive?", "Yes", "No", "Only when I am drunk", "B"],
            ["How often are dogs fed?", "Once a month", "Once a week", "Twice a day", "C"],
            ["Do you have a fenced backyard?", "Yes", "No", "A"],
            ["Dogs can not eat which of these?", "Chicken", "Pasta", "Chocolate", "C"]
            ];
        // this get function is short for the getElementById function  
        function get(x){
        return document.getElementById(x);
        }
        function renderQuestion(){
        test = get("test");
        if(pos >= questions.length){
            if(correct == 4){
                test.innerHTML = "<h2>You are Qualified to adopt!! Fill out an application for adoption below</h2>";
            }else{
                test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct which means you are not qualified to adopt</h2>" ;
            }
            get("test_status").innerHTML = "Test completed";
            // resets the variable to allow users to restart the test
            pos = 0;
            correct = 0;
            // stops rest of renderQuestion function running when test is completed
            return false;
        }
        get("test_status").innerHTML = "Qualification Quiz: Question "+(pos+1)+" of "+questions.length;
        question = questions[pos][0];
        if(pos == 2){
            chA = questions[pos][1];
            chB = questions[pos][2];
            chC = "";
            test.innerHTML = "<h3>"+question+"</h3>";
        // the += appends to the data we started on the line above
        test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
        test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br><br>";
        test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
        }
        else{
        chA = questions[pos][1];
        chB = questions[pos][2];
        chC = questions[pos][3];
        test.innerHTML = "<h3>"+question+"</h3>";
        // the += appends to the data we started on the line above
        test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
        test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
        test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
        test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
        }
    }
        function checkAnswer(){
        // use getElementsByName because we have an array which it will loop through
        choices = document.getElementsByName("choices");
        for(var i=0; i<choices.length; i++){
            if(choices[i].checked){
            choice = choices[i].value;
            }
        }
        // checks if answer matches the correct choice
        if(choice == questions[pos][4]){
            //each time there is a correct answer this value increases
            correct++;
        }
        // changes position of which character user is on
        pos++;
        // then the renderQuestion function runs again to go to next question
        renderQuestion();
        }
        window.addEventListener("load", renderQuestion, false);
        