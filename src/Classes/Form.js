class Form {
    constructor() {
        this.showFormButton = document.getElementById('showFormButton');
        this.formContainer = document.getElementById('formContainer');
    }

    init() {
        this.addEventListeners();
        this.hideForm(); // Assure que le formulaire est caché au début
    }

    addEventListeners() {
        this.showFormButton.addEventListener('click', () => {
            this.showForm();
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
}

export default Form;
