const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

var count = 0;
var check;

loginButton.addEventListener("click", (event) => 
{
    event.preventDefault();

    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if(count >= 5)
    {
        setTimeout(function() 
        {
            count = 0;
            check = true;
        }, 300000);
    }
    if(count >= 5)  //로그인 5회 이상 시도시 알림
    {
        alert("5회 이상 틀렸습니다.\n5분후에 다시 시도해주십시오.")
        check = false;
    }

    if(check !== false)
    {

    if (username === "0" && password === "0") 
    {
        count = 0;
        alert("로그인 성공!");
        location.reload();
        let result = confirm("메인 화면으로 들어가시겠습니까?"); //확인을 누르면 true를 반환
        if(result === true) //값이 true면 메인 화면으로 들어감
            window.location.href = "file:///C:/html/loginform_test/login_connect.html";

    } 
    else 
    {
        loginErrorMsg.style.opacity = 0.5;
        alert("아이디나 비밀번호가 틀립니다.")
        count++;
    }
}
});