function check() {
    let token = sessionStorage.getItem("token")
    if (!token) {
        alert("You're not logged in")
        window.location.href = "/"
    }
}