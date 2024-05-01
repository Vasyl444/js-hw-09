let formData = {
    email: "",
    message: "",
};
const form = document.querySelector(".feedback-form");
const localStorageKey = JSON.parse(localStorage.getItem("feedback-form-state"));
formData = localStorageKey ?? formData;

form.addEventListener("input", (event) => {
    if (event.target === form.elements.email) {
        formData.email = event.target.value.trim();
    } else {
        formData.message = event.target.value.trim();
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));   
});

form.elements.email.value = formData.email;
form.elements.message.value = formData.message;
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (form.elements.email.value === "" || form.elements.message.value === "") {
        alert("Fill please all fields");
    } else {
        console.log(formData);
        formData.email = "";
        formData.message = "";
        localStorage.removeItem("feedback-form-state");
        form.reset();
    }
})