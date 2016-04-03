function startLogic() {
    var newHtml = '<header>New Header</header>';
    document.getElementById('headerItem').innerHTML = newHtml;
}

function clickHandler() {
    alert('You clicked me!');
}

function Mytest() {
    var $elem = document.getElementById('output');
    $elem.innerHTML = 'hello fati  ';
    $elem.innerHTML += 4 + 5 ;
}

function myArrayTwo() {
    var Cars = ["volovo", "benz", "Nissan"];

    var fruits = new array("apple", "banana", "orange");
}


function myFunc() {

};

function myArrayOne() {

    myArray[0] = Date.now;
    myArray[1] = myFunc;
    myArray[2] = new array("rose", "narges");

}


function myTestVariable() {

    var testVariable;

    var isUndefined = (testVariable === undefined);
    var isNull = (testVariable === null);
    var isEmpty = (testVariable === '');


    document.getElementById('isUndefined').innerHTML = isUndefined;
    document.getElementById('isNull').innerHTML = isNull;
    document.getElementById('isEmpty').innerHTML = isEmpty;

}

function saveToCookie(key, value, onCompletion) {
    var cookieValue = key + ';' + value;
    document.cookie += cookieValue;
    onCompletion(cookieValue);
}

function saveTextValue() {
    var textValue = document.getElementsByName('position')[0].value;
    saveToCookie('Position', textValue, showTextSuccess);
}

function showTextSuccess(result) {
    window.alert('You successfully saved [' + result + '] from the text input to your cookie.');
}

function saveRadioValue() {
    var radioValue;
    var radioOptions = document.getElementsByName('department');
    for (var index = 0; index < radioOptions.length; index++) {
        if (radioOptions[index].checked) {
            radioValue = radioOptions[index].value;
            break;
        }
    }
    
    saveToCookie('Department', radioValue, function (result) {
        window.alert('You did it! You saved [' + result + ']');
    });   
}

function handleClick(callback) {
    alert('This button has been click');
    if (callback) {
        callback();
    }
}

function doMore() {
    alert('I need to do more logic here')
}
function doSomethingElse() {
    document.writeln('Do something here');
}

document.getElementById('dateButton').onclick = handleClick;
function handleClick() {
    document.getElementById('dateTarget').innerHTML = Date();
    
    
//}

//Named Identifier:
//document.getElementById('dateButton').addEventListener('click', handleClick);
//function handleClick() {
//    document.getElementById('dateTarget').innerHTML = Date();
}

//Anonymous Function:
//document.getElementById('dateButton').addEventListener('click', function handleClick() {
//    document.getElementById('dateTarget').innerHTML = Date();
//});
