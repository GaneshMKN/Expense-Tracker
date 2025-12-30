const form = document.getElementsByTagName("form");
const source = document.getElementById("new-source");
const amount = document.getElementById("new-amount");
const dateTime = document.getElementById("dateTime");
const balance=document.getElementById("balance");
const income=document.getElementById("income");
const expense=document.getElementById("expense");
let transaction_list = document.getElementById("trans-list");
const greetings = document.getElementById("greeting-message");

let hour = new Date().getHours();
let greeting = "Hello";

switch (true) {
    case hour >= 1 && hour <= 5:
        greeting = "early morning";
        break;
    case hour >= 6 && hour <= 12:
        greeting = "Good Morning";
        break;
    case hour >= 13 && hour <= 18:
        greeting = "Good Evening";
        break;
    case hour >= 19 && hour <= 24 || hour===0:
        greeting = "Good Night";
        break;
}
greetings.innerText = greeting;





function handleFormSubmit(event) {
    event.preventDefault();

    let newDate = new Date(dateTime.value);
    let textDate = newDate.getDate() + "-" + newDate.getMonth() + "-" + newDate.getFullYear() + ", " + newDate.getHours() + "-" + newDate.getMinutes();

    const selected = document.querySelector('input[name="ttype"]:checked');

    if(selected.id=="credit"){
        income.innerText=parseInt(income.innerText)+parseInt(amount.value);
        balance.innerText=parseInt(balance.innerText)+parseInt(amount.value);
    }else if(selected.id=="debit") {
        expense.innerText=parseInt(expense.innerText)-parseInt(amount.value);
        balance.innerText=parseInt(balance.innerText)-parseInt(amount.value);
    }


    transaction_list.appendChild(newTransaction(source.value, amount.value, selected.id, textDate))
}

function newTransaction(tname, tamt, ttype, textDate) {
    // empty transaction item
    const TransactionItem = document.createElement("div");
    TransactionItem.className = "trans-item";
    // p element inside item
    const itemName = document.createElement("div");
    itemName.className = "item-name";
    const nameTextNode = document.createTextNode(tname);
    itemName.appendChild(nameTextNode);
    // amount element span
    const amount = document.createElement("div");
    amount.className = "amount" + " " + ttype;
    const amountTextNode = document.createTextNode(tamt);
    amount.appendChild(amountTextNode);
    // date element span
    const TDate = document.createElement("div");
    TDate.className = "trans-date";
    const dateTextNode = document.createTextNode(textDate);
    TDate.appendChild(dateTextNode);
    // adding all elements in item
    TransactionItem.appendChild(itemName);
    TransactionItem.appendChild(amount);
    TransactionItem.appendChild(TDate);


    return TransactionItem;


    /*  
        <div class="trans-item">
            <div class="item-name">tname</div>
            <div class="amount ttype">tamt</div>
            <div class="trans-date">textDate</div>
        </div> 
        
    */
}


