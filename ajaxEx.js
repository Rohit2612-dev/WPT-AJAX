console.log("performin Ajax program..")

let fetchData = document.getElementById('Fetchbtn');
fetchData.addEventListener = ('click', buttonClickHandler);

function buttonClickHandler() {
    window.alert('You click the Fetch button');

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'rohit.txt', true);

    xhr.onprogress = function() {
        window.alert('On progress');
    }
    xhr.onload = function() {
        if (this.status === 200) {
            window.alert(this.responseText);
        } else {
            window.alert('error');
        }

    }
    xhr.send();
}