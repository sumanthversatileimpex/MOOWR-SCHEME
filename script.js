document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let formData = {
        name: document.getElementById("name").value,
        company: document.getElementById("company").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        location: document.getElementById("location").value,
        activity: document.getElementById("activity").value
    };

    // Send email using EmailJS
    emailjs.send("service_8ltphqq", "template_74eeb9d", formData)
        .then(function(response) {
            showToast("Email sent successfully!", "success");
            document.getElementById("contact-form").reset();
        })
        .catch(function(error) {
            showToast("Failed to send email. Please try again.", "error");
            console.log(error);
        });
});

// Function to Show Toaster
function showToast(message, type) {
    let toaster = document.getElementById("toaster");
    toaster.innerText = message;
    toaster.className = "toaster " + type + " show";

    setTimeout(() => {
        toaster.classList.add("hide");
        setTimeout(() => {
            toaster.className = "toaster"; 
        }, 500);
    }, 3000);
}

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navbarMenu = document.getElementById("navbarMenu");
    
    // Toggle Menu Open/Close
    menuToggle.addEventListener("click", function () {
        navbarMenu.classList.toggle("active");
        menuToggle.innerHTML = navbarMenu.classList.contains("active")
            ? '<i class="fa-solid fa-times"></i>' // Close Icon
            : '<i class="fa-solid fa-bars"></i>'; // Menu Icon
    });

    // Smooth Scrolling & Close Menu on Click
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            let targetId = this.getAttribute("href").substring(1);
            let targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: "smooth"
                });
            }

            navbarMenu.classList.remove("active");
            menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>'; 
        });
    });
});


window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    let movetop = document.getElementById("movetop");

    if (document.documentElement.scrollTop > 100) {
        movetop.classList.add("show");
        movetop.classList.remove("hide");
    } else {
        movetop.classList.add("hide");
        setTimeout(() => movetop.classList.remove("show"), 300); 
    }
}

// Smooth Scroll to Top
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


