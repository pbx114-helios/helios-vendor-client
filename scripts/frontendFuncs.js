function createOrderCard(order) {
    // Remove the span.info... Makes it difficult on our side... Think of some other detail to fill there
    let template = `<div class="order">
        <span class="info">Name:</span>
        <span>${order.name}</span> 
        <span class="info">Order</span>
        <span>${order.products[0].qty}x ${order.products[0].name}</span><br>
        <a class="view-more" href = "/order.html?ref_id=${order.ref_id}">View More</a>
</div>`
    let $element = $(template)
    $(".container").append($element)   
}
