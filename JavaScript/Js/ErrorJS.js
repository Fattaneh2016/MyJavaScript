
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
