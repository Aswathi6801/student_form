
var btn = document.getElementById("btn1")
var tableBody = document.querySelector(".container2 table tbody");

btn.addEventListener("click", function (e) {
    e.preventDefault(); 

    var name = document.getElementById("sname").value;
    var age = document.getElementById("sage").value;
    var email = document.getElementById("smail").value;
    var course = document.getElementById("scourse").value;
    var gender = document.querySelector('input[name="gender"]:checked')?.value || "Not specified";

    var row = document.createElement("tr");

    row.innerHTML =
        "<td>" + name + "</td>" +
        "<td>" + age + "</td>" +
        "<td>" + course + "</td>" +
        "<td>" + gender + "</td>" +
        "<td>" + email + "</td>" +
        "<td><button onclick='deleteItem(event)'>Delete</button></td>";

    tableBody.append(row);

    // Clearing fields
    document.getElementById("sname").value = "";
    document.getElementById("sage").value = "";
    document.getElementById("smail").value = "";
    document.getElementById("scourse").selectedIndex = 0;
    document.querySelectorAll('input[name="gender"]').forEach(r => r.checked = false);
});

function deleteItem(event) {
    event.target.parentElement.parentElement.remove();
}
