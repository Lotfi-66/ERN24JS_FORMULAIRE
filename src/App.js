import Form from "./Classes/Form";



class App{
    start(){
        console.log ("App Started");
        const game = new Game(WORDS);
        game.init();
}
}

const app = new App();

export default app;