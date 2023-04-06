async function getAllOrders() {
    const token = sessionStorage.getItem("token");
    const url = "http://localhost:3000/orders/";
    const res = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            // We gotta provide the token for every request we make
            "Access-Token": token,
        },
    });

    let data = await res.json()
    return data
}
