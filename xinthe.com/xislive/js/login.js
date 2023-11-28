const passwordEle = document.getElementById('txt_pwd');
const toggleEle = document.getElementById('toggle');

toggleEle.addEventListener('click', function() {
    const type = passwordEle.getAttribute('type');
    const change = toggleEle.getAttribute('class');

    toggleEle.setAttribute(
        'class',
        change === 'fa-regular fa-eye' ? 'fa-solid fa-eye-slash' : 'fa-regular fa-eye'
    );
    passwordEle.setAttribute(
        'type',
        // Switch it to a text field if it's a password field
        // currently, and vice versa
        type === 'password' ? 'text' : 'password'
    );
});

/********************************** Login ***************************************/
function login() {
    if (document.getElementById("txt_uname").value == "" || document.getElementById("txt_pwd").value == "") {
        alert("Both fields are required");
    } else {
        var data = {
                "DataID": "8",
                "UserName": $("#txt_uname").val(),
                "Password": $("#txt_pwd").val()
            },
            data = JSON.stringify(data);
        $.ajax({
            url: 'https://apps.xinthe.com/xisliveapi/datahub/',
            // url: 'http://192.168.10.189/xisTest80/datahub/',
            type: "post",
            async: true,
            crossDomain: true,
            contentType: "application/json",
            processData: false,
            data: data,
            success: function(loginData) {
                var jsonData = JSON.parse(loginData);
                sessionStorage.setItem("BirthDay", loginData);

                // console.log("Birthday", jsonData);
                if (jsonData.Status[0].MessageCode == "S") {
                    // console.log("Logged In")
                        // localStorage.setItem("userName",UserName);
                }
                if (jsonData.Table1[0].Msg == "noEntry") {
                    alert("User does not exist or Incorrect Credentials.");
                } else {
                    sessionStorage.setItem('user', JSON.stringify(jsonData.Table1));
                    // sessionStorage.setItem('ProImg', JSON.stringify(jsonData.Table1[0].EmployePhoto));
                    let da = new Date().getTime()
                    window.location = 'index.html' + '?' + jsonData.Table[0].SessionId
                }
            }
        })
    }

}

/*******************************************************************************/

$('.submit').keypress((e) => {

    // Enter key corresponds to number 13
    if (e.which === 13) {
        document.getElementById("submit").click();
        // console.log('form submitted');
    }
});

function Forgot() {
    alert("Please Contact HR ");
    event.preventDefault();
}


