welcomeMessage();

function welcomeMessage() {
    let userResponse = prompt("What is your name?");


    if (userResponse === null || userResponse.trim() === "") {
        userResponse = "Guest";
    }


    document.getElementById("welcome-speech").innerText = `Welcome, ${userResponse}! to labubu Website.`;
}


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const formData = {
        nama: document.getElementById("nama").value,
        jenis_kelamin: document.querySelector('input[name="jenis_kelamin"]:checked')?.value || "",
        umur: document.getElementById("umur").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        komentar: document.getElementById("komentar").value,
        timestamp: new Date().toLocaleString()
    };
   
    let submittedData = JSON.parse(localStorage.getItem("contactFormData")) || [];
    submittedData.push(formData);
    localStorage.setItem("contactFormData", JSON.stringify(submittedData));
    

    alert("Data berhasil disimpan!\n\nNama: " + formData.nama + "\nEmail: " + formData.email);

    document.getElementById("contactForm").reset();
});

function validateForm() { }
