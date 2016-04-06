
try {
    var result = methodName(3);
    document.writeln(result);
} catch (error) {

    //document.writeln("An error occured");
    document.writeln('<h3>Error:&nbsp;</h3><p>' + error + "</p>")
}


function methodName() {
    return "Output message  ";
};


function sendDataToCallback(input, callback) {

    var newValue = input + 3;

    callback(newValue);

}

//You call this function using the following lines of JavaScript:

var originalData = 5;

function handleCallback(value) {

    alert(value);

}

sendDataToCallback(originalData, handleCallback);
