function startDictation() {        
    if (window.hasOwnProperty('webkitSpeechRecognition')) {
      
      var recognition = new webkitSpeechRecognition();

      recognition.interimResults = true;

      recognition.lang = "en-US";
      recognition.start();

      recognition.onresult = function(e) {
          const transcript = e.results[0][0].transcript;
          document.getElementById('transcript').value = transcript;                                         
          // recognition.stop();    
      
          if(e.results[0].isFinal) {
              document.getElementById('output').innerText 
              = "'" + transcript + "' submitted to search engine";

              readOut("'" + transcript + "' submitted to search engine"); 
          }
      };

      recognition.onerror = function(e) {
        recognition.stop();
      }  
    }
  }
  
  function readOut(message) {
      const speech = new SpeechSynthesisUtterance();
      speech.text = message;
      speech.pitch = 1;
      speech.volume = 1;
      speech.rate = 1;

      window.speechSynthesis.speak(speech);
  }