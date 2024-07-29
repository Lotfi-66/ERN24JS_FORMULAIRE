class Form {
    constructor() {
        this.showFormButton = document.getElementById('showFormButton');
        this.formContainer = document.getElementById('formContainer');
        this.form = document.getElementById('myForm');
    }

    init() {
        this.addEventListeners();
        this.hideForm(); // Assure que le formulaire est caché au début
    }

    addEventListeners() {
        this.showFormButton.addEventListener('click', () => {
            this.showForm();
        });
        this.form.addEventListener('submit', (event) => {
            event.preventDefault(); // Empêche la soumission classique du formulaire
            this.saveFormData(); // Enregistre les données dans localStorage
        });
    }

    showForm() {
        this.formContainer.classList.remove('hidden');
        this.showFormButton.classList.add('hidden');
    }

    hideForm() {
        this.formContainer.classList.add('hidden');
        this.showFormButton.classList.remove('hidden');
    }

    saveFormData() {
        // Récupère les données du formulaire
        const formData = new FormData(this.form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Enregistre les données dans localStorage
        localStorage.setItem('formData', JSON.stringify(data));
        console.log('Form data stored in localStorage:', data);
    }
}

export default Form;
