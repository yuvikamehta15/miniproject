const toggleForm = () => {
    const container = document.querySelector(".container");
    container.classList.toggle("active");

const handleLogin = () => {
    // console.log("login");
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(username, password);
    axios
        .post("http://localhost:3000/login", { username, password })
        .then((res) => {
            if (res.status === 200) console.log("Login successfull");
            else console.log(res);
        });
};
const handleSignup = () => {
    console.log("signup");
    const username = document.getElementById("username-signup").value;
    const password = document.getElementById("password-signup").value;
    const email = document.getElementById("email").value;

    axios
        .post("http://localhost:3000/signup", { username, email, password })
        .then((res) => {
            console.log(res);
        });
};
};