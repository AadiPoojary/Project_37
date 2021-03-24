class Question {

    constructor() {
      this.title = createElement('h1')
      this.input1 = createInput("Name");
      this.input2 = createInput("Correct Option No");
      this.button = createButton('Submit');
      this.question = createElement('h3');
      this.option1 = createElement('h4');
      this.option2 = createElement('h4');
      this.option3 = createElement('h4');
      this.option4 = createElement('h4');
    }
  
    hide(){
      this.title.hide();
      this.input1.hide();
      this.button.hide();
      this.input2.hide();
    }
  
    display(){
      this.title.html("My Quiz ");
      this.title.position(350, 0);
  
      this.question.html("Question: What begins with T, ends with T, and has T in it? " );
      this.question.position(150, 80);
      this.option1.html("1 - Taught" );
      this.option1.position(150, 100);
      this.option2.html("2 - Teapot" );
      this.option2.position(150, 120);
      this.option3.html("3 - Taunt" );
      this.option3.position(150, 140);
      this.option4.html("4 - Torrent" );
      this.option4.position(150, 160);
  
      this.input1.position(150, 230);
      this.input2.position(350, 230);
      this.button.position(290, 300);
  
      this.button.mousePressed(()=>{
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        player.name = this.input1.value();
        player.answer = this.input2.value();
        player.index = playerCount;
        playerCount+=1;        
        player.update();
        player.updateCount(playerCount);
      });
    }
  }