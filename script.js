let quantities = {};
let total = 0;

function increase(id, price) {

    let count = document.getElementById(id).textContent;
    count++;

    document.getElementById(id).textContent = count;

    quantities[id] = count;
    total += price;

    document.getElementById("total").textContent = total;
}

function decrease(id, price) {

    let count = document.getElementById(id).textContent;

    if (count > 0) {
        count--;
        document.getElementById(id).textContent = count;

        quantities[id] = count;
        total -= price;

        document.getElementById("total").textContent = total;
    }
}
