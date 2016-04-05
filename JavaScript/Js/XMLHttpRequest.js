var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        // Action to be performed when the document is read;
    }
};
xhttp.open("GET", "filename", true);
xhttp.send();

//Status Values for readyState

//0. request not initialized
//1. server connection established
//2. request received
//3. processing request
//4. request finished and response is ready
