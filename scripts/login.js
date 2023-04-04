function submit() {
    let name = document.getElementById("username").value;
    let pwd = document.getElementById("password").value;
    const form_data = { password: pwd, username: name };
    const url = "http://localhost:3000/vendor/login";
    fetch(url, {
        method: "POST",
        body: JSON.stringify(form_data),
        headers: {
            "Content-Type": "application/json",
            "SameSite": "None"
        },
    })
        .then((res) => {
            return Promise.all([res.json(), res.status]);
        })
        .then(([response, stat]) => {
            if (stat == "200") {
                sessionStorage.setItem("token", response.token)
                window.location.href = "./home.html"
            }
            else {
                alert(response.msg)
            }
        });
}
