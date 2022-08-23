
// disable button start 
function disable(x) {
    x.disabled = true;
}
// disbale button end


// select player start

const cartArray = [];

function display(cartProduct) {

    const tableBody = document.getElementById('cart-players');
    tableBody.innerHTML = '';

    for (let i = 0; i < cartProduct.length; i++) {

        console.log(cartArray[i]);
        const name = cartArray[i];

        const tr = document.createElement('tr');

        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        `;
        tableBody.appendChild(tr);
    }

}

function addToCart(element) {
    const playerName = element.parentNode.children[0].innerText;

    if (cartArray.length > 4) {
        alert('you have selected five');
        return;
    }

    else {
        cartArray.push(playerName);

    }

    display(cartArray);

}

// select player end

// total player expense start

document.getElementById('calculate-total-player-expense').addEventListener('click', function () {
    const perPlayer = document.getElementById('per-player-expense');
    const perPlayerValueString = perPlayer.value;
    const perPlayerValue = parseFloat(perPlayerValueString);
    perPlayer.value = '';


    const wantedproperty = cartArray.length;


    const totalPerPlayer = wantedproperty * perPlayerValue;


    const totalPlayerValue = document.getElementById("total-value");

    totalPlayerValue.innerText = totalPerPlayer;

})

// total player expense end


// common - function start 

function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputfieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputfieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

// common-function-end


