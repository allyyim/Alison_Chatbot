$(document).ready(function() {

  alert("Welcome to Alison's ChatBot! Type in the textbox to talk with the ChatBot. Try saying hi, asking for the time, book recs based on the genre, food recs in NYC (dining neighborhood, cuisine, meal type, type) fun facts/trivia, or for a joke.");

  var greetings = ["hello", "hey", "howdy", "hi", "yo", "hola", "bonjour", "salut"];
  var questionStart = ["how", "what", "what's", "where", "why", "?"];
  var ask = ["are", "you", "it", "going", "is", "happening"];
  var badWords = ["stupid", "dumb", "hate"];
  
  function createText(text, type) {
          if(text != "") {
              if(type == "textme") {
                  let newRow = document.createElement("div");
                  newRow.className = "row" + type;
                  let newText = document.createElement("div");
                  newText.className = type;
                  newRow.appendChild(newText);
                  newText.append(document.createTextNode(text));
                  document.getElementById("container").appendChild(newRow);
                  newRow.appendChild(newText);
                  newText.append(document.getElementById("textAlign"));
                  scroller();
              }
              else {
                setTimeout(function() {
                  let newRow = document.createElement("div");
                  newRow.className = "row" + type;
                  let newText = document.createElement("div");
                  newText.className = type;
                  newRow.appendChild(newText);
                  newText.append(document.createTextNode(text));
                  document.getElementById("container").appendChild(newRow);
                  newRow.appendChild(newText);
                  newText.append(document.getElementById("textAlign"));
                  scroller();
                }, 600);
              }
          }
  }
  
  function scroller() {
      container.scrollBy({ 
        top: 1000,
        left: 0, 
        behavior: 'smooth' 
      });
  }

  
  // If click enter, textBox submits
      $(".textBox").keyup(function(event) {
        if (event.keyCode == 13) {
            let txt = $(".textBox");
            txt.val(txt.val().slice(0, -1));
            $(".submitButton").click()
        }
      });

  
  $(".submitButton").click(function() {
  
  	let userText = $(".textBox").val().toLowerCase().split(" ");
  	let userTextString = $(".textBox").val().toLowerCase();
  	let textIsThere = userTextString.trim().length;
  	
  	let lastTextMe = $(".textme").last();
  	let lastTextYou = $(".textyou").last();
    
    let arrVal = userText.length - 1;
    
    let randomNum5 = Math.round(Math.random() * 5);
    let randomNum7 = Math.round(Math.random() * 7);
    let randomNum50 = Math.round(Math.random() * 50);
    let randomNum20 = Math.round(Math.random() * 20);
    let randomNum25 = Math.round(Math.random() * 25);
    let randomNum30 = Math.round(Math.random() * 30);
    
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    
    if(h > 12) {
      h -= 12;
    }
    
    if(h < 10) {
        h = "0" + h;
    }
    if(m < 10) {
        m = "0" + m;
    }
    if(s < 10) {
        s = "0" + s;
    }
    
    let currentTime = h + ":" +m + ":" + s;
    
    let x = 1;
    let y = 1;
    let cond = 1;
    let computerResponse = 0;
    
    if(arrVal != -1 && textIsThere != 0) {
        createText(userTextString, "textme");
    }
        
    while(arrVal != -1 && textIsThere != 0) {

        if(jQuery.inArray(userText[arrVal], badWords) != -1) {
            createText("Don't curse!!!", "textyou");
            arrVal = -1;
            computerResponse = 1;
        }
        
        else if(userTextString.includes("i hate you")) {
            createText("Hey, that's mean!", "textyou");
            arrVal = -1;
            computerResponse = 1;
        }
        
        else if(userTextString.includes("i love you")) {
            createText("Why thank you!", "textyou");
            arrVal = -1;
            computerResponse = 1;
        }
        
        else if((userTextString.includes("what") || userTextString.includes("what's")) && (userTextString.includes("up") || userTextString.includes("happening"))) {
            createText("Nothing much man", "textyou");
            arrVal = -1;
            computerResponse = 1;
        }
        
        else if((jQuery.inArray(userText[arrVal], questionStart) != -1) && userTextString.includes("time")) {
            createText("The time right now is " + currentTime, "textyou");
            arrVal = -1;
            computerResponse = 1;
        }
        else if(userTextString.includes("comic")|| userTextString.includes("comics")|| userTextString.includes("comic book")|| userTextString.includes("graphic")) {
          switch(randomNum20) {
                case 0:
                  createText("Watchmen by DC Comics", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
                case 1:
                  createText("The Walking Dead: Compendium One by Robert Kirkman", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 2:
                  createText("The Boy, the Mole, the Fox and the Horse by Charlie Mackesy", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 3:
                  createText("Kingdom Come by DC Comics", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 4:
                createText("Fables: The Deluxe Edition Book One by Bill Willingham", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 5:
                createText("Y the Last Man by Brian K. Vaughan and Pia Guerra", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 6:
                createText("Absolute Preacher Vol. 1 by Garth Ennis", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 7:
                createText("Batman: Year One by Frank Miller", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 8:
                createText("Lore Olympus: Volume Two by Rachel Smythe", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 9:
                createText("Monster by Barry Windsor-Smith", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 10:
                createText("Invincible Compendium Volume 1 by Robert Kirkman", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 11:
                createText("Sapiens: A Graphic History: Birth of Humankind (Vol. 1) by Yuval Noah Harai", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 12:
                createText("Saga of the Swamp Thing (Alan Moore era) (DC comics)", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 13:
                createText("Marvels (Marvel Comics)", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 14:
                createText("The Complete Maus by Art Spiegelman", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 15:
                createText("Uncanny X-Men (Chris Claremont 94-279) (Marvel Comics)", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 16:
                createText("Bone: The Complete Cartoon Epic in One Volume by Jeff Smith", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 17:
                createText("Astro City by Kurt Busiek", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 18:
                createText("New Teen Titans (Wolfan & Perez era) (DC Comics)", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 19:
                createText("Miracleman Book 1: A Dream of Flying by Alan Moore", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 20:
                createText("Hellblazer(Vertigo)", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
          }
        } 
        else if(userTextString.includes("mystery")|| userTextString.includes("detective")) {
          switch(randomNum20) {
                case 0:
                  createText("The Night Fire by Michael Connelly", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
                case 1:
                  createText("And Then There Were None by Agatha Christie", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 2:
                  createText("Murder on the Orient Express by Agatha Christie", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 3:
                  createText("The Adventure of Sherlock Holmes by Sir Arthur Conan Doyle", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 4:
                createText("The Man Who Died Twice by Richard Osman", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 5:
                createText("Velvet was the Night by Silvia Moreno-Garcia", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 6:
                createText("The Big Sleep by Raymond Chandler", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 7:
                createText("In Cold Blood by Truman Capote", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 8:
                createText("The Woman in White by Wilkie Collins", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 9:
                createText("Anatomy of a Murder by Robert Traver", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 10:
                createText("Tinker, Tailor, Soldier, Spy by John le Carre", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 11:
                createText("The Da Vinci Code by Dan Brown", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 12:
                createText("The Daughter of Time by Josephine Tey", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 13:
                createText("The Maltese Falcon by Dashiell Hammett", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 14:
                createText("Big Little Lies by Liane Moriarty", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 15:
                createText("The Silence of the Lambs by Thomas Harris", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 16:
                createText("The Hound of the Baskervilles by Sir Arthur Conan Doyle", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 17:
                createText("The Sweetness at the Bottom of the Pie by Alan Bradley", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 18:
                createText("An Unsuitable Job for a Woman by Stefan Zweig", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 19:
                createText("Murders in the Rue Morgue by Edgar Allan Poe", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 20:
                createText("Killing Floor by Lee Child", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
          }
        } 
        else if(userTextString.includes("sci fi")|| userTextString.includes("sci-fi")||userTextString.includes("science fiction")) {
          switch(randomNum20) {
                case 0:
                  createText("The Testaments by Margaret Atwood", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
                case 1:
                  createText("The Hunger Games Trilogy by Suzanne Collins", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 2:
                  createText("1984 by George Orwell", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 3:
                  createText("The Blazing World by Margaret Cavendish", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 4:
                createText("Foundation by Isaac Asimov", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 5:
                createText("Solaris by Stanislaw Lem", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 6:
                createText("Dune by Frank Herbert", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 7:
                createText("The Moon is a Harsh Mistress by Robert Heinlein", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 8:
                createText("Ice by Anna Kavan", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 9:
                createText("Neuromancer by William Gibson", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 10:
                createText("Hyperion by Dan Simmons", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 11:
                createText("Jurassic Park by Michael Crichton", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 12:
                createText("Under the Skin by Michel Faber", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 13:
                createText("The Martian by Andy Weir", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 14:
                createText("The Power by Naomi Alderman", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 15:
                createText("Borne by Jeff VanderMeer", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 16:
                createText("Moonrise: The Golden Age of Lunar Adventures by Mike Ashley", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 17:
                createText("We by Yevgeny Zamyatin", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 18:
                createText("Metropolis by Thea Von Harbou", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 19:
                createText("Starship Troopers by Robert A. Heinlein", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 20:
                createText("Babel-17 by Samuel R. Delany", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
          }
        } 
        else if(userTextString.includes("non-fiction")|| userTextString.includes("non fiction")||userTextString.includes("non fic")||userTextString.includes("non-fic")) {
          switch(randomNum20) {
                case 0:
                  createText("Scary Smart by Mo Gawdat", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
                case 1:
                  createText("A Bigger Picture by Vanessa Nakate", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 2:
                  createText("Seven and a Half Lesson About the Brain by Lisa Feldman Barrett", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 3:
                  createText("Bad Blood by John Carreyrou", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 4:
                createText("The Sleeping Beauties by Suzanne O’Sullivan", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 5:
                createText("Everybody by Olivia Laing", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 6:
                createText("How Stella Learned to Talk by Christina Hunger", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 7:
                createText("Maybe I Don’t Belong Here by David Harewood", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 8:
                createText("Stronger by Poorna Bell", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 9:
                createText("Hope Not Fear by Hassan Akkad", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 10:
                createText("Hyperion by Dan Simmons", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 11:
                createText("Fuzz by Mary Roach", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 12:
                createText("Under the Skin by Michel Faber", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 13:
                createText("Citizen: An American Lyric by Claudia Rakine", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 14:
                createText("The Sixth Extinction: An Unnatural History by Elizabeth Kolbert", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 15:
                createText("Quiet: The Power of Introverts in a World That Can’t Stop Talking", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 16:
                createText("The Emperor of All Maladies: A Biography of Cancer by Siddhartha Mukherjee", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 17:
                createText("The Immortal Life of Henrietta Lacks by Rebecca Skloot", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 18:
                createText("How to Do Nothing: Resisting the Attention Economy by Jenny Odell", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 19:
                createText("Three Women by Lisa Taddeo", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 20:
                createText("The Library Book by Susan Orlean", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
          }
        } 
        else if(userTextString.includes("fantasy")) {
          switch(randomNum25) {
                case 0:
                  createText("The Water Dancer by Ta-Nehisi Coates", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
                case 1:
                  createText("Circe by Madeline Miller", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 2:
                  createText("Ninth House by Leigh Bardugo", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 3:
                  createText("The Voyage of the Dawn Treader by C.S. Lewis", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 4:
                createText("The Once & Future Kind by T.H. White", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 5:
                createText("The Last Unicorn by Peter S. Beagle", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 6:
                createText("The Night Circus by Erin Morgenstern", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 7:
                createText("Maybe I Don’t Belong Here by David Harewood", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 8:
                createText("Haroun and the Sea of Stories by Salman Rushdie", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 9:
                createText("American Gods by Neil Gaiman", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 10:
                createText("A Swiftly Tilting Planet by Madeleine L’Engles", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 11:
                createText("The Crystal Cave by Mary Stewart", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 12:
                createText("The Wandering Unicorn by Manuel Mujica Lainez", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 13:
                createText("Dragonflight by Anne McCaffrey", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 14:
                createText("The Bone Clocks by David Mitchell", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 15:
                createText("The Buried Giant by Kazuo Ishiguro", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 16:
                createText("The Black Tides of Heaven by Neon Yang", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 17:
                createText("The Wrath & The Dawn by Renee Ahdieh", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 18:
                createText("Witchmark by C.L. Polk", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 19:
                createText("Gods of Jade and Shadow by Silvia Moreo-Garcia", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 20:
                createText("Black Leopard, Red Wolf by Marlon James", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 21:
                createText("His Dark Materials by Philip Pullman", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 22:
                createText("Black Leopard, Red Wolf by Marlon James", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break; 
              case 23:
                createText("Neverwhere by Neil Gaiman", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;  
              case 24:
                createText("Elatsoe by Darcie Little Badger", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 25:
                createText("Earthsea Cycle by Ursula K. LeGuin", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
          }
        } 
        else if(userTextString.includes("horror")) {
          switch(randomNum25) {
                case 0:
                  createText("Carrie by Stephen King", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
                case 1:
                  createText("The Haunting of Hill House by Shirley Jackson", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 2:
                  createText("Ring by Koji Suzuki", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 3:
                  createText("A Head Full of Ghosts by Paul Tremblay", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 4:
                createText("The Women in Black by Susan Hill", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 5:
                createText("The Damnation Game by Clive Barker", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 6:
                createText("Audition by Ryu Murakami", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 7:
                createText("The Devil in Silver by Victor LaValle", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 8:
                createText("Burnt Offering by Robert Marasco", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 9:
                createText("John Dies at the End by David Wong", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 10:
                createText("Rebecca by Daphne du Maurier", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 11:
                createText("Geek Love by Katherine Dunn", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 12:
                createText("The Other by Thomas Tryon", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 13:
                createText("Little Star by John Ajvide Lindqvist", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 14:
                createText("The Shining Girls by Lauren Beukes", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 15:
                createText("Girl Next Door by Jack Ketchum", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 16:
                createText("At the Mountains of Madness by H.P. Lovecraft", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 17:
                createText("The Ceremonies by T.E.D. Klein", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 18:
                createText("Something Wicked This Way Comes by Ray Bradbury", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 19:
                createText("American Psycho by Bret Easton Ellis", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 20:
                createText("Swan Song by Robert R. McCammon", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 21:
                createText("Ghost Story by Peter Straub", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 22:
                createText("Broken Monsters by Lauren Beukes", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break; 
              case 23:
                createText("Rosemary’s Baby by Ira Levin", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;  
              case 24:
                createText("House of Leaves by Mark Z. Danielewski", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 25:
                createText("The Only Good Indians by Stephen Graham Jones", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
          }
        }
        else if(userTextString.includes("historical fiction")) {
          switch(randomNum25) {
                case 0:
                  createText("The Help by Kathyrn Stockett", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
                case 1:
                  createText("One Hundred Years of Solitude by Gabriel Garcia Marquez", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 2:
                  createText("Memoirs of a Geisha by Arthur Golden", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 3:
                  createText("The Children of Jocasta by Natalie Haynes", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 4:
                createText("The Land Beyond the Sea by Sharon Penman", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 5:
                createText("She Who Became the Sun by Shelley Parker-Chan", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 6:
                createText("The Sin Eater by Megan Campisi", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 7:
                createText("City of Vengeance by D.V. Bishop", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 8:
                createText("Tombland by C.J. Sansom", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 9:
                createText("The City of Tears by Kate Mosse", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 10:
                createText("The Mercies by Kiran Millwood Hargave", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 11:
                createText("Daughters of Night by Laura Shepherd-Robinson", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 12:
                createText("The Doll Factory by Elizabeth Macneal", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 13:
                createText("A Marvellous Light by Freya Marske", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 14:
                createText("Sunset Swing by Ray Celestin", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 15:
                createText("The Prince of the Skies by Antonio Iturbe", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 16:
                createText("The Secrets of the Lake by Liz Trenow", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 17:
                createText("The Pull of the Stars by Emma Donoghue", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 18:
                createText("The Muse by Jessie Burton", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 19:
                createText("Kololo Hill by Neema Shah", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 20:
                createText("All the Light We Cannot See by Anthony Doerr", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 21:
                createText("Outlander by Diana Gabaldon", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 22:
                createText("The White Queen by Philippa Gregory", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break; 
              case 23:
                createText("Girl with a Pearl Earring by Tracy Chevalier", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;  
              case 24:
                createText("Alias Grace by Margaret Atwood", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 25:
                createText("Number the Stars by Lois Lowry", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
          }
        }  
        else if(userTextString.includes("dystopian")) {
          switch(randomNum25) {
                case 0:
                  createText("A Clockwork Orange by Anthony Burgess", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
                case 1:
                  createText("Blindness by Jose Saramago", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 2:
                  createText("The Road by Cormac McCarthy", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 3:
                  createText("The Children of Men by P.D. James", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 4:
                createText("Do Androids Dream of Electric Sheep? by Philip K. Dick", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 5:
                createText("The Drowned World by J.G. Ballard", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 6:
                createText("Station Eleven Emily St. John Mandel", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 7:
                createText("The Time Machine by H.G. Wells", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 8:
                createText("Oryx and Crake by Margaret Atwood", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 9:
                createText("Parable of the Sower by Octavia E. Butler", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 10:
                createText("The Chrysalids by John Wyndham", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 11:
                createText("The Power by Naomi Alderman", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 12:
                createText("The Dispossessed by Ursula K. Le Guin", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 13:
                createText("Borne by Jeff VanderMeer", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 14:
                createText("The Iron Heel by Jack London", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 15:
                createText("The Day of the Triffids by John Wyndham", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 16:
                createText("Slaughterhouse-Five by Kurt Vonnegut", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 17:
                createText("The Wall by John Lanchester", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 18:
                createText("Future Home of the Living God by Louise Erdric", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 19:
                createText("Kololo Hill by Neema Shah", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 20:
                createText("V for Vendetta by Alan Moore and David Lloyd", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 21:
                createText("Severance by Ling Ma", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 22:
                createText("The Dreamers by Karen Thompson Walker", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break; 
              case 23:
                createText("Uglies by Scott Westerfield", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;  
              case 24:
                createText("The Leftovers by Tom Perrotta", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 25:
                createText("The Fifth Season by N.K. Jemisin", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
          }
        }  
        else if(userTextString.includes("classic")||userTextString.includes("classics")) {
          switch(randomNum25) {
                case 0:
                  createText("Wide Sargasso Sea by Jean Rhys", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
                case 1:
                  createText("I Capture The Castle by Dodie Smith", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 2:
                  createText("Jane Eyre by Charlotte Bronte", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 3:
                  createText("Crime and Punishment by Fyodor Dostoevsky", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 4:
                createText("Persuasion by Jane Austen", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 5:
                createText("To the Lighthouse by Virginia Woolf", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 6:
                createText("The Death of the Heart by Elizabeth Bowen", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 7:
                createText("Buddenbrooks by Thomas Mann", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 8:
                createText("Tess of the d'Urbervilles by Thomas Hardy", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 9:
                createText("The Master and Margarita by Mikhail Bulgakov", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 10:
                createText("The Go-Between by L.P. Hartley", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 11:
                createText("The Code of the Woosters by P.G. Wodehouse", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 12:
                createText("The Age of Innocence by Edith Warton", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 13:
                createText("Vanity Fair by William Makepeace Thackeray", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 14:
                createText("Midnight’s Children by Salman Rushdie", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 15:
                createText("Middlemarch by George Eliot", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 16:
                createText("Brideshead Revisited by Evelyn Waugh", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 17:
                createText("Another Country by James Baldwin", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 18:
                createText("The Count of Monte Cristo by Alexandre Dumas", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 19:
                createText("Ulysses by James Joyce", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 20:
                createText("Diary of a Nobody by George Grossmith and Weedon Grossmith", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 21:
                createText("Anna Karenina by Leo Tolstoy", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 22:
                createText("Lost Illusions by Honore de Balzac", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break; 
              case 23:
                createText("The Secret Garden by Frances Hodgson Burnett", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;  
              case 24:
                createText("Silas Marner by George Eliot", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 25:
                createText("The Sea, The Sea by Iris Murdoch", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
          }
        }  
        else if(userTextString.includes("ya")||userTextString.includes("young adult")) {
          switch(randomNum25) {
                case 0:
                  createText("They Wish They Were Us by Jessica Goodman", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
                case 1:
                  createText("The Hate U Give by Angie Thomas", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 2:
                  createText("Jane Eyre by Charlotte Bronte", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 3:
                  createText("Anna K by Jenny Lee", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 4:
                createText("With the Fire on High by Elizabeth Acevedo", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 5:
                createText("Tokyo Ever After by Emiko Jean", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 6:
                createText("Laura Dean Keeps Breaking With Me by Mariko Tamaki", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 7:
                createText("It’s Kind of a Funny Story by Ned Vizzini", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 8:
                createText("The Perks of Being a Wallflower by Stephen Chbosky", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 9:
                createText("One of Us Is Lying by Karen M. McManus", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 10:
                createText("A Separate Peace by John Knowles", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 11:
                createText("Cinder by Marissa Meyer", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 12:
                createText("Every Day by David Levithan", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 13:
                createText("Illuminae by Amie Kaufman", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 14:
                createText("Legend by Marie Lu", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 15:
                createText("Monster by Walter Dean Myers", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 16:
                createText("Sadie by Courtney Summers", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 17:
                createText("Scythe by Neal Shusterman", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 18:
                createText("The Astonishing Color of After by Emily X.R. Pan", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 19:
                createText("The Wind in the Willows by Kenneth Grahame", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 20:
                createText("This Savage Song by Victoria Schwab", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 21:
                createText("We Were Liars by E. Lockhart", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 22:
                createText("Junk by Melvin Burgess", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break; 
              case 23:
                createText("Homecoming by Cynthia Voight", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;  
              case 24:
                createText("Fangirl by Rainbow Rowell", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 25:
                createText("How I Live Now by Meg Rosoff", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
          }
        }
        else if(userTextString.includes("romance")|| userTextString.includes("love")) {
          switch(randomNum20) {
                case 0:
                  createText("Brazen and the Beast by Sarah MacLean", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
                case 1:
                  createText("Royal Holiday by Jasmine Guillory", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 2:
                  createText("The Savior by J.R. Ward", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 3:
                  createText("Seven Days in June by Tia Williams", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 4:
                createText("The Wedding Date by Jasmine Guillory", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 5:
                createText("Crazy Rich Asians by Kevin Kwan", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 6:
                createText("Me Before You by Jojo Moyes", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 7:
                createText("Eleanor & Park by Rainbow Rowell", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 8:
                createText("In Her Shoes by Jennifer Weiner", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 9:
                createText("Matchmaking for Beginners by Maddie Dawson", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 10:
                createText("Wuthering Heights by Emily Bronte", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 11:
                createText("Because of Miss Bridgerton by Julia Quinn", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 12:
                createText("The Remains of the Day by Kazuo Ishiguro", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 13:
                createText("Love in the Time of Cholera by Gabriel Garcia Marquez", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 14:
                createText("The Hating Game by Sally Thorne", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 15:
                createText("Indigo by Beverly Jenkins", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 16:
                createText("The Captive by Grace Burrowes", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 17:
                createText("A Lady Awakened by Cecilia Grant", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 18:
                createText("The Far Pavilions by M. M. Kaye", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 19:
                createText("Anna and the French Kiss by Stephanie Perkins", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 20:
                createText("Perfect Chemistry by Simone Elkeles", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
          }
        }
        else if(userTextString.includes("short story")|| userTextString.includes("short stories")) {
          switch(randomNum20) {
                case 0:
                  createText("This Is How You Lose Her by Junot Diaz", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
                case 1:
                  createText("Florida by Lauren Groff", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 2:
                  createText("How Long ‘til Black Future Month by N.K. Jemisin", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 3:
                  createText("What We Talk About When We Talk About Love by Raymond Carver", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 4:
                createText("The Outing by Lydia Davis", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 5:
                createText("Private Tuition by Mr Bose by Anita Desai", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 6:
                createText("Glittering City by Cyprian Ekwensi", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 7:
                createText("The Midnight Zone by Lauren Groff", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 8:
                createText("The Superstition of Albatross by Daisy Johnson", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 9:
                createText("Araby by James Joyce", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 10:
                createText("What, of this Goldfish, Would You Wish? by Etgar Keret ", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 11:
                createText("The Elephant by Sławomir Mrożek", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 12:
                createText("The Elephant Vanishes by Haruki Murakami", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 13:
                createText("Symbols and Signs by Vladimir Nabokov", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 14:
                createText("And I Awoke and Found Me Here on the Cold Hill's Side by James Tiptree Jr.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 15:
                createText("Vampires in the Lemon Grove by Karen Russell", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 16:
                createText("The Happy Prince by Oscar Wilde", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 17:
                createText("Bee Honey by Banana Yoshimoto", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 18:
                createText("The Metamorphosis by Franz Kafka", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 19:
                createText("Stories of Your Life by Ted Chiang", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 20:
                createText("The Swimmer by John Cheever", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
          }
        }  
        else if(userTextString.includes("suspense")|| userTextString.includes("thriller")||userTextString.includes("thrillers")) {
          switch(randomNum20) {
                case 0:
                  createText("Gone Girl by Gillian Flynn", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
                case 1:
                  createText("The 19th Christmas by James Patterson", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 2:
                  createText("The Guardians by John Grisham", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 3:
                  createText("The Firm by John Grisham", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 4:
                createText("Baby Teeth: A Novel by Zoje Stage", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 5:
                createText("The Dinner by Herman Koch", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 6:
                createText("Intensity by Dean Koontz", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 7:
                createText("Wolf in White Van by John Darnielle", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 8:
                createText("Behind Closed Doors by B.A. Paris", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 9:
                createText("The Maidens by Alex Michaelides", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 10:
                createText("Strangers on a Train by Patricia Highsmith", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 11:
                createText("Shutter Island by Dennis Lehane", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 12:
                createText("The Last Mrs. Parrish by Liv Constantine", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 13:
                createText("Final Girls by Riley Sager", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 14:
                createText("The Thursday Murder Club by Richard Osman", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 15:
                createText("Watch Her Fall by Erin Kelly", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 16:
                createText("Moonflower Murders by Anthony Horowitz", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 17:
                createText("Talented Mr Ripley by Patricia Highsmith", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 18:
                createText("Your House Will Pay by Steph Cha", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 19:
                createText("The Silent Patient by Alex Michaelides", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 20:
                createText("An Absolutely Remarkable Thing by Hank Green", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
          }
        }    
        else if(userTextString.includes("true crime")) {
          switch(randomNum20) {
                case 0:
                  createText("Catch and Kill by Ronan Farrow", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
                case 1:
                  createText("I’ll Be Gone in the Dark by Michelle McNamara", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 2:
                  createText("Helter Skelter by Vincent Bugliosi", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 3:
                  createText("Last Call by Elon Green", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 4:
                createText("Savage Appetites by Rachel Monroe", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 5:
                createText("The Fact of a Body by Alexandria Marzano-Lesnevich", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 6:
                createText("Justice: Crimes, Trials, and Punishments by Dominick Dunne", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 7:
                createText("My Dark Places by James Ellroy", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 8:
                createText("Midnight in the Garden of Good and Evil by John Berendt", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 9:
                createText("Killers of the Flower Moon by David Grann", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 10:
                createText("Devil's Knot by Mara Leveritt", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 11:
                createText("The Brothers by Masha Gessen", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 12:
                createText("The Devil in the White City by Erik Larson", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 13:
                createText("People Who Eat Darkness by Richard Lloyd Parry", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 14:
                createText("The Red Parts by Maggie Nelson", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 15:
                createText("The Journalist and the Murderer by Janet Malcolm", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 16:
                createText("The Stranger Beside Me by Ann Rule", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 17:
                createText("The Executioners Song by Norman Mailer", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 18:
                createText("Evidence of Love: A True Story of Passion and Death in the Suburbs by Jim Atkinson and John Bloom", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 19:
                createText("Lost Girls: An Unsolved American Mystery by Robert Kolker", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 20:
                createText("The Grim Sleeper: The Lost Women of South Central by Christine Pelisek", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
          }
        }
        else if(userTextString.includes("literary fiction")) {
          switch(randomNum20) {
                case 0:
                  createText("Where the Crawdads Sing by Delia Owens", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
                case 1:
                  createText("Olive, Again by Elizabeth Strout", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 2:
                  createText("The Dutch House by Ann Patchett", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 3:
                  createText("Normal People by Sally Rooney", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 4:
                createText("Cloud Cuckoo Land by Anthony Doerr", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 5:
                createText("Before the Fall by Noah Hawley", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 6:
                createText("The Sweetness of Water by Nathan Harris", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 7:
                createText("Nothing to See Here by Kevin Wilson", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 8:
                createText("No Longer Human bu Osamu Dazai", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 9:
                createText("The Five Wounds by Kirstin Valdez Quade", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 10:
                createText("Fault Lines by Emily Itami", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 11:
                createText("Tender Is the Flesh by Agustina Bazterrica", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 12:
                createText("The Sentence by Louise Erdrich", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 13:
                createText("The Alchemist by Paulo Coelho", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 14:
                createText("The Book of Form and Emptiness", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 15:
                createText("Matrix by Lauren Groff", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 16:
                createText("The Secret History by Donna Tartt", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 17:
                createText("Great Circle by Maggie Shipstead", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 18:
                createText("The Anomaly by Herve Le Tellier", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 19:
                createText("Crossings by Alex Landragin", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 20:
                createText("Play It As It Lays by Joan Didion", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
          }
        }
        else if(userTextString.includes("brunch")|| userTextString.includes("breakfast")) {
          switch(randomNum20) {
                case 0:
                  createText("Archer & Goat - This Harlem brunch favorite channels its owners’ Ecuadorian-, Puerto Rican-, and Bangladeshi-American heritages.", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
                case 1:
                  createText("Dagon - The space is pulsating with Israeli pop. It makes for a lively brunch with dishes like spicy tomato shakshuka, an impressive mezze spread (get the labneh), and a Levantine spin on the Caesar salad dotted with fried chickpeas.", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 2:
                  createText("2nd Ave Deli - A classic Jewish deli is one of the most comforting places to spend brunch, whether noshing on indulgent challah French toast, lighter matzah brei, or a classic whitefish salad sandwich.", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 3:
                  createText("Comfortland - Brunch knows no time limits here, as diners can order brunch items all day long.", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 4:
                createText("Yellow Rose - Offers a weekend-only brunch menu stacked with egg-stuffed breakfast tacos, golden kolaches, and a selection of brioche doughnuts with flavors and fillings that change on weekly basis.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 5:
                createText("Chez Ma Tante - Greenpoint’s popular neighborhood bistro takes its French Canadian-ish bent at brunch and executes it into simple but flavorful dishes like a ham and cheese sandwich, kale and cheddar quiche, and country pate with pistachio and foie gras.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 6:
                createText("Jack’s Wife Freda - Jack’s Wife Freda’s menu melds the cuisines of their childhood homes, as well as New York’s Jewish food traditions.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 7:
                createText("Golden Diner - Expect egg sandwiches on sesame scallion milk buns, omelettes, and green tea coffee cake.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 8:
                createText("B&H Dairy - B&H Dairy is a 400-square-foot lunch counter that still serves sunny-side-up eggs and pierogi with a side of on-the-house challah.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 9:
                createText("Egg Shop - Capitalizing on the versatility of eggs, this eatery fries, scrambles, poaches and pickles its organic, locally sourced main ingredient, which tops sandwiches and anchors bowls of miso-soaked quinoa and farm greens.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 10:
                createText("Poco - The restaurant serves a boozy brunch and a menu chock full of organic ingredients.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 11:
                createText("Sweet Chick - They are most known for their fried chicken and waffles, so skip the boring egg dishes and avocado toast in favor of grits with your fried chicken.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 12:
                createText("The Wild Son - This place has perfected fish dishes for breakfast in addition to pancakes, so you know they’re good.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 13:
                createText("Banter - Cozy Brunch Place in the Village.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 14:
                createText("Jacob’s Pickles - There’s nothing quite like the comfort of a Southern meal in a chill dining room.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 15:
                createText("Buvette - Buvette’s more famous dishes include the jambon cru, which is an egg served on top of toast with prosciutto and freshly grated parmesan on top. They also serve a waffle sandwich, which is precisely what it sounds like.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 16:
                createText("Queen’s Comfort -  Queens Comfort has 11 varieties on the weekend brunch menu for people of all taste palettes and they serve lots of egg dishes in their dining room too. This neighborhood spot is best if you’re super hungry or super hungover, or both.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 17:
                createText("Buttermilk Channel - A neighborhood spot in good company and a great choice for brunch dishes (eggs, french toast, etc) this weekend.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 18:
                createText("La Tarte Flambee - La Tarte Flambee will open up the casual bruncher’s mind to what’s possible beyond french toast and eggs for brunch this weekend.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 19:
                createText("C. Lo Cafe - Aims to celebrate Guatemalan roots while serving a tasty brunch meal.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 20:
                createText("La Cafette - There is truly nothing like a French brunch. If you want the quality croissant you deserve or the pain au chocolat you desperately need, then you can have it at La Cafette in Williamsburg.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
          }
        } 
        else if(userTextString.includes("lunch")) {
          switch(randomNum20) {
                case 0:
                  createText("Davelle - Sit at the bar and chat with the chef while you eat a bowl of intensely rich and smoky pork curry.", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
                case 1:
                  createText("Frenchette", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 2:
                  createText("Kiki’s - The menu of traditional Greek dishes has options for everyone, ranging from a Greek salad topped with a brick of feta to charred, juicy lamb chops with housemade mustard.", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 3:
                  createText("Comfortland - Brunch knows no time limits here, as diners can order brunch items all day long.", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 4:
                createText("Sugarfish", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 5:
                createText("City Vineyard", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 6:
                createText("Di Fara Pizza.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 7:
                createText("Upland - You’ll likely end up stumbling out of here, but only after you get some excellent food. So share the beef tartare, have a midday martini, and dive into a plate of pasta.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 8:
                createText("Tanoreen - They serve some of the best Middle Eastern food in the city, and you’ll want a big group so you can order as many dishes as possible. Two things that need to be on your table are the ridiculously creamy hummus and the lamb kafta with housemade tahini.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 9:
                createText("Totonno Pizzeria Napolitana", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 10:
                createText("Casa Mono - When it comes to the best lunch in New York, Casa Mono is the place for diners who love small plates, giving them the option to sample a number of dishes.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 11:
                createText("Claudy's Kitchen - The menu showcases Peruvian specialties like lomo saltado and pollo a la brasa, but best of all are the empanadas.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 12:
                createText("Native Noodles -  New to the brick-and-mortar storefront is the roti john sandwich, a toasted baguette sandwich made from from cumin-spiced beef, caramelized onion, and egg.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 13:
                createText("Hudson Smokehouse - From the southern tip of the Bronx, Hudson Smokehouse is serving Texas-style barbecue that ranks among the city’s best. Brisket is the top seller.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 14:
                createText("Chick Chick - At Chick Chick, chef Jun Park is putting an East Asian spin on Nashville hot chicken, resulting in tenders and wings that are not to be missed.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 15:
                createText("Bilao - The restaurant’s breakfast platters — composed of rice, egg, and sausage or fried fish — are especially good, and thankfully can be ordered for lunch, as well.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 16:
                createText("Three Roosters -  The newly opened restaurant specializes in chicken over rice, served three ways: grilled and fatty with lemongrass, fried and coated in zab seasoning, and prepared in the style of Hainanese chicken.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 17:
                createText("Ruta Oaxaca Mexican Cuisine - One of the best entry points to the Mexican staple is the restaurant’s mole Oaxaca, similar in style to mole poblano and served atop bunuelos and chicken enchiladas.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 18:
                createText("Followsoshi - Order the crepe-like dish with a variety of fillings — spicy ramen, Peking duck, and chopped crawfish, among a half-dozen others — and wait a few minutes for it to come off the grill.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 19:
                createText("Porcelain -  The restaurant serves an arsenal of Korean, Sichuanese, and Taiwanese staples, including rolled omelettes, fishcake katsu sandwiches, and butter bean crepes.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 20:
                createText("Ayat - Here chicken and beef shawarma are shaved from towers of spinning meat all day long.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
          }
        } 
        else if(userTextString.includes("dinner")||userTextString.includes("supper")) {
          switch(randomNum20) {
                case 0:
                  createText("Dame - All of the quirks - along with masterfully conceptualized seafood dishes, like the fish and chips, cucumber salad with smoked mussels and dill, and tuna tartare and bottarga on toast - make Dame exactly the kind of restaurant where we want to have a big night out.", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
                case 1:
                  createText("Sushi On Me - If there was a Venn diagram with sushi omakase restaurants on one side and “I can’t-believe-this-exists” debaucherous party hubs on the other, Sushi On Me would exist in the tiny middle zone.", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 2:
                  createText("Dhamaka - Try their version of chicken pulao served directly in a pressure cooker, or the tender lamb kidneys and testicles in a fragrant onion-tomato stew and pao shimmering with ghee on the side, and finish your meal with a rich, souffle-like chhena poda for dessert.", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 3:
                  createText("Aldama - It’s a sultry, cave-like spot by the bridge in Williamsburg that specializes in craft mezcal, handmade corn tortillas, and wicker as an entire aesthetic.", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 4:
                createText("Nat’s on Bank", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 5:
                createText("Contento -  Beyond the delicious mahi mahi ceviche swimming in a wildly citrusy leche de tigre and a jenga tower of crispy pork katsu with vinegary slaw, the service here is excellent.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 6:
                createText("Fradei - Beyond drinks, there are no options when ordering, and the food is seasonal, with an emphasis on local ingredients. The chefs are both American, but met while working in France, and you can feel and taste that influence in the dishes.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 7:
                createText("Francie - Francie is perfect for a special night out involving dishes like a whole roasted duck with crispy skin or lobster ravioli.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 8:
                createText("Rezdora - At Rezdôra, chef Stefano Secchi offers up a stealthily breathtaking array of pastas, using the highest quality cheeses and seasonal ingredients from farmers’ markets.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 9:
                createText("Petite Crevette - Peak-form, somewhat simple seafood served across two cramped, eclecticity fashioned dining rooms bursting with charisma.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 10:
                createText("Claro -  The house made tortillas are the perfect vehicle for complex moles that feel traditional and modern at once.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 11:
                createText("Casa Enrique", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 12:
                createText("Fish Cheeks - Most of Fish Cheeks’ Thai dishes are served family-style, and the room always has a good energy (bamboo fish traps repurposed as light fixtures, furniture painted in bright primary colors, and a busy bar during Happy Hour).", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 13:
                createText("Shuka - Mediterranean in Greenwich Village, SoHo", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 14:
                createText("Elio’s - Italian in Upper East Side", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 15:
                createText("Telly’s Taverna - Greek in Astoria, Queens", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 16:
                createText("Mari Vanna - Russian in Flatiron", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 17:
                createText("Kang Ho Dong Baekjeong - Korean in Midtown", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 18:
                createText("TLK - The food here is inspired by the cooking of the owner’s mother (who’s from Hong Kong), and the menu is mostly vegetarian. It includes items such as celery root steak, spicy grilled Japanese eggplant, and curry fish steamed in banana leaf.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 19:
                createText("Malii Gramercy - A sister restaurant to Malii in East Harlem has opened in Gramercy with a very large menu that includes a “Must Try” section with a few clay pot and stewed beef items.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 20:
                createText("Double Zero - A plant-based pizza concept from Matthew Kenney in New York City’s East Village. Serving small plates, organic pizza prepared in a wood burning oven and vegan ice cream.", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
          }
        } 
        else if(userTextString.includes("gift")||userTextString.includes("present")||userTextString.includes("general")||userTextString.includes("fam")) {
          switch(randomNum30) {
                case 0:
                  createText("Electric S'mores Maker", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
                case 1:
                  createText("Fro-Yo and Ice Cream Maker", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 2:
                  createText("Personalized Family Mugs", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 3:
                  createText("Mini Projector", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 4:
                createText("Robot Mop", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 5:
                createText("Giant Inflatable Bowling Set", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 6:
                createText("Custom Matte Photo Puzzles", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 7:
                createText("Letterboard Photo Collage", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 8:
                createText("Wooden Hanging Family Celebration Calendar", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 9:
                createText("Shaved Ice and Snow Cone Machine", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 10:
                createText("GPS 4K Camera Drone", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 11:
                createText("Handmade Dumpling Making Set", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 12:
                createText("Artisan Pizza Oven", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 13:
                createText("SoundLink Flex Bluetooth Portable Speaker", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 14:
                createText("Tic Tac Toe and Giant Checkers", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 15:
                createText("Gold Splash Fine Dinnerware Set", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 16:
                createText("Split Pie Pan", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 17:
                createText("DIY Candle Kit", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 18:
                createText("Wooden Crafted Cat Coasters, Set of 6", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 19:
                createText("Round Flip Belgian Waffle Maker", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 20:
                createText("Custom Family Name Sign", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 21:
                createText("Daily Flip Calendar with Inspirational Quotes", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 22:
                createText("Family Charades", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break; 
              case 23:
                createText("Curry In A Hurry Indian Sauces Combo", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;  
              case 24:
                createText("Korean Sauce Variety 3-Pack", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 25:
                createText("Family Saying Throw Pillow Cover Set", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 26:
                createText("Zephyr Flyer from Tupelo Goods", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 27:
                createText("Custom Illustrated Family Print", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 28:
                createText("Personalized Family Constellation Map", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 29:
                createText("Grilled Cheese Toaster", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 30:
                createText("Echo Glow Smart Lamp", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
          }
        } 
        else if(userTextString.includes("fun fact")|| userTextString.includes("trivia")|| userTextString.includes("fact")) {
          switch(randomNum20) {
                case 0:
                  createText("Canada is south of Detroit!", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
                case 1:
                  createText("The Four Corners is the only spot in the US where you can stand in four states at once: Utah, Colorado, Arizona and New Mexico!", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 2:
                  createText("Octopuses have three hearts!", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 3:
                  createText("Psycho was the first movie to show a toilet flushing!", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 4:
                createText("The word “strengths” is the longest word in the English language with only one vowel!", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 5:
                createText("There are parts of Africa in all four hemispheres!", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 6:
                createText("People started wearing pajamas, originally spelled “pyjamas,” instead of nightgowns so they’d be prepared to run outside in public during World War I air raids in England!", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 7:
                createText("Q: People started wearing pajamas, originally spelled “pyjamas,” instead of nightgowns so they’d be prepared to run outside in public during World War I air raids in England!", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 8:
                createText("There’s enough gold inside Earth to coat the planet!", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 9:
                createText("The brand name Spam is a combination of “spice” and “ham”!", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 10:
                createText("Lemons float, but limes sink!", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 11:
                createText("McDonald’s once made bubblegum-flavored broccoli!", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 12:
                createText("Scotland has 421 words for snow!", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 13:
                createText("Armadillo shells are bulletproof!", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 14:
                createText("Cats have fewer toes on their back paws!", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 15:
                createText("Kleenex tissues were originally intended for gas masks!", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 16:
                createText("That tiny pocket in jeans was designed to store pocket watches!", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 17:
                createText("Cows don’t have upper front teeth!", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 18:
                createText("No number before 1,000 contains the letter A!", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 19:
                createText("The Eiffel Tower can grow more than six inches during the summer!", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 20:
                createText("Bees can fly higher than Mount Everest!", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
          }
        } 
        else if(userTextString.includes("bucket list")||userTextString.includes("activity")||userTextString.includes("activities")||userTextString.includes("fun")) {
          switch(randomNum30) {
                case 0:
                  createText("Bathe in the Blue Lagoon Geothermal Spa, Iceland", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
                case 1:
                  createText("Fly in a hot air balloon over the Loire Valley", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 2:
                  createText("Go volcano boarding in Nicaragua", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 3:
                  createText("See the Northern Lights (Aurora Borealis)", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 4:
                createText("Swim inside cenotes in Yucatán Peninsula, Mexico", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 5:
                createText("Do the Sydney zombie walk", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 6:
                createText("Cycle down the Danube Bike Trail", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 7:
                createText("Dive on the Great Barrier Reef in Australia", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 8:
                createText("Go sailing on Halong Bay in northern Vietnam", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 9:
                createText("Go bungee jumping", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 10:
                createText("Ride an elephant", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 11:
                createText("Go Zorbing in New Zealand", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 12:
                createText("Ride Horses Through the Mongolian Steeps", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 13:
                createText("Abseil down a waterfall", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 14:
                createText("Motor Bike Around Cebu Islands in the Philippines", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 15:
                createText("Take a Cruise Through the Fiordlands of Milford Sound", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 16:
                createText("Sand board", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 17:
                createText("Take a road trip along Iceland's Ring Road", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 18:
                createText("Gaze at the stars in Chile’s Elqui Valley", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 19:
                createText("Visit the Galapagos Archipelago", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 20:
                createText("Go Rappelling in Dalat, Vietnam", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 21:
                createText("See the fire fly squid glow in Japan", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 22:
                createText("Visit Stonehenge on Summer Solstice", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break; 
              case 23:
                createText("Hit all seven continents", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;  
              case 24:
                createText("Bathe in the ultimate natural infinity pools at Pamukkale, Turkey", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 25:
                createText("Go dog sledding in Alaska or Scandinavia", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 26:
                createText("Release a lantern at the Yi Peng Lantern Festival in Chiang Mai", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 27:
                createText("Go dog sledding in Alaska or Scandinavia", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 28:
                createText("See the Monarch butterfly migration", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 29:
                createText("Cage dive with great white sharks", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 30:
                createText("Get soaked at Skogafoss", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
          }
        } 
        else if(userTextString.includes("record")||userTextString.includes("records")) {
          switch(randomNum25) {
                case 0:
                  createText("The furthest distance to squirt milk from an eye socket was 9′ 2″", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
                case 1:
                  createText("Farthest arrow shot using feet: 40 feet, 4.64 inches", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 2:
                  createText("Most tricks performed by a pig in one minute: 13", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 3:
                  createText("Highest jump on a pogo stick: 11.15 feet", "textyou");
                  arrVal = -1;
                  computerResponse = 1;
                  break;
              case 4:
                createText("Smallest bull: 26.6 inches tall", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 5:
                createText("Most drumbeats in one minute using a drumstick prosthetic: 2,400", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 6:
                createText("Tallest hat: 15 feet, 9 inches", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 7:
                createText("Most consecutive pinky pull-ups: 36", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 8:
                createText("Fastest time to eat a bowl of pasta: 26.69 seconds", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 9:
                createText("The world’s largest pizza had an area of 13,580.28 squared feet", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 10:
                createText("The largest object removed from a human skull was a drill bit", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 11:
                createText("The world’s fastest bathtub reached an average speed of 116.08 miles per hour", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 12:
                createText("The greatest distance catching a grape in the mouth was over 350 feet", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 13:
                createText("The world record for the most amount of meatballs eaten in a minute with chopsticks is 27", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 14:
                createText("Most powdered doughnuts eaten in three minutes — nine doughnuts", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 15:
                createText("Most dice stacked on a cat’s paw — 10", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 16:
                createText("Most consecutive one-handed back handsprings — 34", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 17:
                createText("The world's deepest underground concert occurred at 6,213 feet below sea level", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 18:
                createText("The world's largest flip book is the size of a tennis court", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 19:
                createText("The most Big Mac burgers consumed in a lifetime is nearly 30,000", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 20:
                createText("The record for the longest time spent running in a film by one character is 1 hr 14 min 10 sec", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 21:
                createText("Largest humanoid vehicle: 27 feet, 9 inches tall; 14 feet long; and 13 feet, 1 inch wide", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 22:
                createText("The largest gathering of people wearing false moustaches is 6,471", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break; 
              case 23:
                createText("Neverwhere by Neil Gaiman", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;  
              case 24:
                createText("The world's largest popcorn ball weighs a whopping 9,370 pounds", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
              case 25:
                createText("The record for the most people making snow angels simultaneously is 8,962", "textyou");
                arrVal = -1;
                computerResponse = 1;
                break;
          }
        } 
        else if(userTextString.includes("joke")) {
            switch(randomNum50) {
                  case 0:
                  	createText("Q: Where do snowmen keep their savings? A: In the snowbank!", "textyou");
                  	arrVal = -1;
                  	computerResponse = 1;
                    break;
                  case 1:
                  	createText("Q: What's really fast, loud, and tastes good with salsa? A: A rocket chip!", "textyou");
                  	arrVal = -1;
                  	computerResponse = 1;
                    break;
                  case 2:
                  	createText("Q: What did one pickle say to the other pickle who wouldn't stop complaining? A: Dill with it.", "textyou");
                  	arrVal = -1;
                  	computerResponse = 1;
                    break;
                  case 3:
                  	createText("Q: What did the finger say to the thumb? A: I'm in glove with you!", "textyou");
                  	arrVal = -1;
                  	computerResponse = 1;
                    break;
                  case 4:
                  	createText("Q: What do you call a duck that loves making jokes? A: A wise-quacker!", "textyou");
                  	arrVal = -1;
                  	computerResponse = 1;
                    break;
                  case 5:
                  	createText("Q: Why did the dinosaur cross the road? A: Because chickens didn't exist yet!", "textyou");
                  	arrVal = -1;
                  	computerResponse = 1;
                    break;
                  case 6:
                  	createText("Q: Did you hear about the first restaurant to open on the moon? A: It had great food, but no atmosphere!", "textyou");
                  	arrVal = -1;
                  	computerResponse = 1;
                    break;
                  case 7:
                  	createText("Q: Do you want to hear a construction joke? A: Sorry, I’m still working on it!", "textyou");
                  	arrVal = -1;
                  	computerResponse = 1;
                    break;
                  case 8:
                    createText("Q: Why should you never trust stairs? A: They’re always up to something!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 9:
                    createText("Q: When does a joke become a ‘dad’ joke? A: When it becomes apparent!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 10:
                    createText("Q: Why did the bullet end up losing his job? A: He got fired!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 11:
                    createText("Q: What does a house wear? A: Address!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 12:
                    createText("Q: Why are toilets always so good at poker? A: They always get a flush!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 13:
                    createText("Q: What do you get from a pampered cow? A: Spoiled milk!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 14:
                    createText("Q: How does NASA organize a party? A: They planet!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 15:
                    createText("Q: How much teddy bears never want to eat anything? A: Because they're always stuffed!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 16:
                    createText("Q: Did you hear about the cheese factory that exploded in France? A:There was nothing left but de Brie!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 17:
                    createText("Q: Where should you go in the room if you’re feeling cold? A: The corner—they’re usually 90 degrees!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 18:
                    createText("Q: What did the duck say when it bought some lipstick? A: “Put it on my bill!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 18:
                    createText("Q: Did you hear about the painter who was hospitalized? A: The doctors say it was due to too many strokes!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 19:
                    createText("Q: Why are crabs so bad at sharing? A: Because they’re all shellfish!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 20:
                    createText("Q: How do you make a tissue dance? A: Put a little boogie in it!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 21:
                    createText("Q: What do you call a fake noodle? A: An impasta!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 22:
                    createText("Q: What do you call a musician with problems? A: A trebled man!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 23:
                    createText("Q:  What washes up on very small beaches? A: Microwaves!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 24:
                    createText("Q: What did one elevator say to the other? A: I think I’m coming down with something.", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 25:
                    createText("Q: What do you call a belt with a watch on it? A: A waist of time!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 26:
                    createText("Q: What did the grape do when it got stepped on? A: It let out a little wine.", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 27:
                    createText("Q: Why didn’t the skeleton go to the dance? A: Because he had no body to go with!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 28:
                    createText("Q: What kind of car runs on leaves? A: An autumn-mobile!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 29:
                    createText("Q: What types of streets do ghost haunt? A: Dead ends!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 30:
                    createText("Q: Where did the computer go dancing? A: The disc-o!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 31:
                    createText("Q: Ever tried to eat a clock? A: It's time-consuming!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 32:
                    createText("Q: How many bugs do you need to rent out an apartment?  A: Ten-ants!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 33:
                    createText("Q: What sound does a nut make when it sneezes? A: Cashew!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 34:
                    createText("Q: What's the best way to carve wood? A:  Whittle by whittle!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 35:
                    createText("Q: Why do ghosts love elevators? A: Because it lifts their spirits!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 36:
                    createText("Q: What did the clock do when it was hungry? A: It went back four seconds!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 37:
                    createText("Q: Why did the teacher love the whiteboard? A: She just thought it was remarkable!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 38:
                    createText("Q: What to hear a joke about paper? A: Never mind, it's tearable.", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 39:
                    createText("Q: What do you call an alligator in a vest? A: An in-vest-igator!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 40:
                    createText("Q: Why don’t big cats play poker in the safari? A: Too many cheetahs!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 41:
                    createText("Q: How do you catch a whole school of fish? A: With bookworms!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 42:
                    createText("Q: What do you call an illegally parked frog? A: Toad!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 43:
                    createText("Q: Why can’t you play hockey with pigs? A: They always hog the puck!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 44:
                    createText("Q: Why do melons have weddings? A: Because they cantaloupe!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 45:
                    createText("Q: Why did the man get fired from the orange juice factory? A: Lack of concentration!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 46:
                    createText("Q: Why do bananas have to put on sunscreen before they go to the beach? A: Because they might peel!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 47:
                    createText("Q: How do you make an egg laugh? A: Crack it up!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 48:
                    createText("Q: How do you turn soup into jewelry? A: Add 24 carrots!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 49:
                    createText("Q: How do billboards communicate? A: Sign language!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 50:
                    createText("Q: Which school subject was the witch’s favorite? A: Spelling!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                }
        }
        
        else if(jQuery.inArray(userText[arrVal], questionStart) != -1) {
            
            arrVal = userText.length - 1;
            
            while(arrVal > -1) {
                if(jQuery.inArray(userText[arrVal], ask) != -1) {
                    switch(randomNum5) {
                      case 0:
                      	createText("I'm doing great!", "textyou");
                      	arrVal = 0;
                      	cond = 0;
                      	computerResponse = 1;
                        break;
                      case 1:
                      	createText("I'm doing good!", "textyou");
                      	arrVal = 0;
                      	cond = 0;
                      	computerResponse = 1;
                        break;
                      case 2:
                      	createText("I'm having an awesome day today!", "textyou");
                      	arrVal = 0;
                      	cond = 0;
                      	computerResponse = 1;
                        break;
                      case 3:
                        createText("I'm doing excellent!", "textyou");
                        arrVal = 0;
                        cond = 0;
                        computerResponse = 1;
                        break;
                      case 4:
                        createText("Sunshine all day long!", "textyou");
                        arrVal = 0;
                        cond = 0;
                        computerResponse = 1;
                        break;
                      case 5:
                        createText("Very well thanks!", "textyou");
                        arrVal = 0;
                        cond = 0;
                        computerResponse = 1;
                        break;
                    }
                }
                arrVal--;
            }
        }

        else if(jQuery.inArray(userText[arrVal], greetings) != -1) {
            
            if(cond != 0) {
              	switch(randomNum7) {
                  case 0:
                  	createText("Hello!", "textyou");
                  	arrVal = -1;
                  	computerResponse = 1;
                    break;
                  case 1:
                  	createText("Hey!", "textyou");
                  	arrVal = -1;
                  	computerResponse = 1;
                    break;
                  case 2:
                  	createText("Good Day!", "textyou");
                  	arrVal = -1;
                  	computerResponse = 1;
                    break;
                  case 3:
                  	createText("Howdy!", "textyou");
                  	arrVal = -1;
                  	computerResponse = 1;
                    break;
                  case 4:
                  	createText("Hi!", "textyou");
                  	arrVal = -1;
                  	computerResponse = 1;
                    break;
                  case 5:
                  	createText("Top of the Morning to you!", "textyou");
                  	arrVal = -1;
                  	computerResponse = 1;
                    break;
                  case 6:
                    createText("Greetings!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                  case 7:
                    createText("It's nice to meet you!", "textyou");
                    arrVal = -1;
                    computerResponse = 1;
                    break;
                }
            }
        }
            
        else {
            if(arrVal > -1) {
                arrVal--;
            }
            else {
                arrVal = -1;
            }    
                
        }
      
      $(".textBox").val("");
           
              
    }
    
           if(computerResponse == 0 && textIsThere != 0) {
             createText("Sorry, I could not understand you", "textyou");
           }
    
    // Child Text Message inherits height from adult row
    let = textHeightMe = $(".textme").last().outerHeight();
    $(".rowtextme").last().outerHeight(textHeightMe);
    
    let = textHeightYou = $(".textyou").last().outerHeight();
    $(".rowtextyou").last().outerHeight(textHeightYou);
    
  });
    
});
