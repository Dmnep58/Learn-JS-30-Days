/*2.b use of useCapture

if we call the inner div event then automatically outer div event is called.

to manage that we use the useCapture field in the addEventListener method.

and depanding on the values of the true or false the message alret can be set like which will be shown first.

and by default the value of useCapture is set to false.

*/

document.querySelector("#outer").addEventListener('click', function() {
    alert('outer div');
}, true);

document.querySelector("#inner").addEventListener('click', function() {
    alert('inner div');
}, false);