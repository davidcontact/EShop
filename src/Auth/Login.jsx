import "./authStyle.css";
export default function Login() {
    const email = document.getElementById("inputUser");
  const password = document.getElementById("inputPassword");
  const error = document.getElementById("Error");
  const error1 = document.getElementById("Error1");

  function Check() {
    const emailValue = email.value.trim();
    if (emailValue === "") {
      document.getElementById("Error").innerHTML =
        "Sorry this email not ready register!";
      error.style.color = "red";
      email.style.borderColor = "red";
      email.style.borderStyle = "solid";
    } else {
      email.style.borderColor = "green";
      email.style.borderStyle = "solid";
      document.getElementById("Error").innerHTML = "";
    }

    const passwordValue = password.value.trim();
    if (passwordValue === "") {
      document.getElementById("Error1").innerHTML = "Sorry this wrong!";
      error1.style.color = "red";
      password.style.borderColor = "red";
      password.style.borderStyle = "solid";
    } else {
      password.style.borderColor = "green";
      password.style.borderStyle = "solid";
      document.getElementById("Error1").innerHTML = "";
    }
  }

  return (
    <>
      <div className="LoginPage">
        <div className="Login1">
          <form action="" className="BoxLogin">
            <h4>LogIn</h4>
            <div className="email">
              <label>Email</label>
              <input
                type="email"
                placeholder="Example@gmail.com"
                className="inputUser"
                id="inputUser"
              />
              <div id="Error" className="Error"></div>
            </div>
            <div className="email">
              <label className="">Password</label>
              <input
                type="password"
                placeholder="1234567"
                className="inputUser"
                id="inputPassword"
              />
              <div id="Error1" className="Error"></div>
            </div>
            {/* <a href="" className="Forgot">
              Forgot Your Password?
            </a> */}
            <a href="/" type="button" className="btn-login" onClick={Check}>
              Log In
            </a>
            <div className="Register1">
              <p>Don't Have Account? </p>
              <a href="/Register" className="Forgot">
                Register Here
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
