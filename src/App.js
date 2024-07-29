import Form from './Classes/Form';

class App {
    start() {
        console.log("App Started");
        const form = new Form();
        form.init();
        this.loadFormData(); // Charge les données du formulaire lors du démarrage
    }

    loadFormData() {
        // Récupère les données du localStorage
        const storedData = localStorage.getItem('formData');
        if (storedData) {
            const data = JSON.parse(storedData);
            document.getElementById('name').value = data.name || '';
            document.getElementById('email').value = data.email || '';
            document.getElementById('password').value = data.password || '';
        }
    }
}

const app = new App();

document.addEventListener("DOMContentLoaded", () => {
    app.start();
});

export default app;
