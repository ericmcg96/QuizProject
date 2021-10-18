let incorrectmessage = document.getElementById('incorrect-message');
let correctmessage = document.getElementById('correct-message');
let score = document.getElementById('score');
let answered = document.getElementById('answered');
let index = document.getElementById('main-body');
let endMessage = document.getElementById('end-message');
let endScore = document.getElementById('end-score');
endScore.value = endScore.innerHTML;
endScore.innerHTML = 0;

document.querySelectorAll('.correct').forEach(item => { 
    item.addEventListener('click', function(event) {
        correctmessage.innerHTML = 'Correct!';
        incorrectmessage.style.display = 'none'
        correctmessage.style.display = 'inline-block';
        score.innerHTML++;
        endScore.innerHTML++;
        answered.innerHTML++;

        if (answered.innerHTML ==  6) {
            index.style.display = 'none';
            endMessage.style.display = 'inline-block';
            
        }

        if(true) {
            setTimeout( function() {
                correctmessage.style.display = 'none';
            }, 1000) 
        }

        
    })
  
});

document.querySelectorAll('.wrong').forEach(item => { 
    item.addEventListener('click', function(event) {
        incorrectmessage.innerHTML = 'Wrong Answer!';
        incorrectmessage.style.display = 'inline-block';
        correctmessage.style.display = 'none';
        answered.innerHTML++;
      

        if (answered.innerHTML ==  6) {
            index.style.display = 'none';
            endMessage.style.display = 'inline-block';
        }

        if(true) {
            setTimeout( function() {
                incorrectmessage.style.display = 'none';
            }, 1000) 
        }

        

    })
   
});