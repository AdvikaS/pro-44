class Security {

    constructor(){
        // Add code to create the input and button elements
        this.acceess1 = createInput("Code1");
        this.acceess1.position(100,90);
        this.acceess1.style('background','white');

        this.button1 = createButton('Check');
        this.button1.position(100,120);
        this.button1.style('background','lightgrey');

        this.acceess2 = createInput("Code2");
        this.acceess2.position(100,290  );
        this.acceess2.style('background','white');

        this.button2 = createButton('Check');
        this.button2.position(100,320);
        this.button2.style('background','lightgrey');

        this.acceess3 = createInput("Code3");
        this.acceess3.position(700,190);
        this.acceess3.style('background','white');

        this.button3 = createButton('Check');
        this.button3.position(700,220);
        this.button3.style('background','lightgrey');




    }

    display(){

        // Add code to make the buttons function as expected
        

        this.button1. mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2. mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });

        this.button3. mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        });
        


    }
}