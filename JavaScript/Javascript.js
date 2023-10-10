// Name validation

function validate(){
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var name = document.getElementById('name').value;
    if(!regName.test(name)){
        alert('Please enter your full name (first & last name) to receive updates');
        document.getElementById('name').focus();
        return false;
    }else{
        alert("You have signed up for Wander Japan Updates.");
        return true;
    }
}