
function signup() {

    alert("Signup in ")
    var fullName = document.getElementById('stuname').value
    var email = document.getElementById('stuemail').value
    var password = document.getElementById('stupass').value


    localStorage.setItem('Name', fullName)
    localStorage.setItem('Email', email)
    localStorage.setItem('Password', password)
    alert("Local Storage done ")
    location.href = './signin.html'
    alert("signup done ")

}

function signin() {
    alert("Sign in function ka andar ha")
    var email = document.getElementById('mail').value
    var pass = document.getElementById('pass').value
    alert("down")
    if (localStorage.getItem('Email') == email && localStorage.getItem('Password') == pass) {
        
        alert("Welcome")
       location.href="./index.html"
        alert("After inde fileWelcome")

    }
    else {
        alert("Wrong Person")
    }

}
