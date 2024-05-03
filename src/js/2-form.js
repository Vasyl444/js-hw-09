let formData = {
    email: "",
    message: "",
};
const form = document.querySelector(".feedback-form");
const localStorageKey = JSON.parse(localStorage.getItem("feedback-form-state"));
formData = localStorageKey ?? formData;

const allert = '<div class="allert">Fill please all fields</div>';
form.insertAdjacentHTML("afterend", allert);
const allertDiv = document.querySelector(".allert");
form.addEventListener("click", () => { allertDiv.classList.remove("open-allert") });

form.addEventListener("input", (event) => {
    if (event.target === form.elements.email) {
        formData.email = event.target.value.trim();
    } else {
        formData.message = event.target.value;
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));   
});
form.elements.email.value = formData.email;
form.elements.message.value = formData.message;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const validMessage = Array.from(form.elements.message.value);
    const isValidMessage = [];
    for (let elem of validMessage) {
        if (elem !== " ") {
            isValidMessage.push(elem);
        } 
    };
    const validEmail = Array.from(form.elements.email.value);
    const isValidEmail = [];
    for (let elem of validEmail) {
        if (elem !== " ") {
            isValidEmail.push(elem);
        } 
    }
    if (form.elements.email.value === "" || form.elements.message.value === "") {
        allertDiv.classList.add("open-allert");
    } else if (isValidMessage.length === 0 || isValidEmail.length === 0) {
        return;
    } else {
        console.log(formData);
        formData.email = "";
        formData.message = "";
        localStorage.removeItem("feedback-form-state");
        form.reset();
    }
})