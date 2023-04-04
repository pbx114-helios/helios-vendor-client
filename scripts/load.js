const api_url = "http://localhost:3000/orders";
getData()
let data
async function getData() {
    const response = await fetch(api_url);
    temp = await response.json();
    data = temp['products']
    display()
}

function display() {
    for (i = 0; i <= data.length - 1; i++) {
        div = document.createElement("div");
        div.id = `product${i}`;
        div.classList.add("existing-products");
        (function (i) {
            div.addEventListener("click", function () {
                localStorage.clickedElement = i;
                window.location.href = './prod.html'
            });
        })(i)

        div.innerHTML = `<img src="./src/merch-sample.png" alt="sample" class="prod-img"><div class="prod-name">${data[i]['name']}</div>`
        document.getElementById('container').appendChild(div)
    }
}
