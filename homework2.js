alert("JS loaded");

document.addEventListener("DOMContentLoaded", function () {
    const reviewBtn = document.getElementById("reviewBtn");

    if (reviewBtn) {
        reviewBtn.addEventListener("click", function () {
            let fname = document.getElementById("fname")?.value || "";
            let mi = document.getElementById("mi")?.value || "";
            let lname = document.getElementById("lname")?.value || "";

            let email = document.getElementById("email")?.value || "";
            let phone = document.getElementById("phone")?.value || "";

            let address1 = document.getElementById("address1")?.value || "";
            let city = document.getElementById("city")?.value || "";
            let state = document.getElementById("state")?.value || "";
            let zip = document.getElementById("zip")?.value || "";

            let userid = document.getElementById("userid")?.value || "";

            let output = `
                <h3>PLEASE REVIEW THIS INFORMATION</h3>
                <p><strong>Name:</strong> ${fname} ${mi} ${lname}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Address:</strong><br>
                ${address1}<br>
                ${city}, ${state} ${zip}</p>
                <p><strong>User ID:</strong> ${userid}</p>
            `;

            document.getElementById("reviewContent").innerHTML = output;
        });
    }
});
