function addingEventListener() {
    const input = document.getElementById('input');
    input.addEventListener('click', function() {
        alert('I was clicked!');
    });
}
//if you read this, this function above is inoperable the instructions for this lab 
//state to paste the function inside of the addingEventListener function,
//however including the input.addEventListener inside any function no matter how I've
//tried to configure is does not pass the test even if the correct function 
//occurs in the browser...