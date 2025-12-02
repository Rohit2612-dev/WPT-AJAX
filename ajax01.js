document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let uname = document.getElementById("insertText").value.trim();
    let pass = document.getElementById("deleteText").value.trim();

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "ajax01.json", true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let users = JSON.parse(xhr.responseText);

                let isValid = users.some(function(user) {
                    return user.username === uname && user.password === pass;
                });

                if (isValid) {
                    window.alert("User Signed in Successfully!");
                } else {
                    window.alert("Invalid User Details!");
                }
            } else {
                window.alert("Error: Could not load ajax01.json (status " + xhr.status + ")");
            }
        }
    };
    xhr.send();
});