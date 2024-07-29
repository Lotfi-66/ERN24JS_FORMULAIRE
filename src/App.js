import Form from './Classes/Form';

class App {
    start() {
        console.log("App Started");
        const form = new Form();
        form.init();
    }
}

const app = new App();

document.addEventListener("DOMContentLoaded", () => {
    app.start();
});

export default app;
