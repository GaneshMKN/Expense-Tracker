const form=document.getElementsByTagName("form");
const source=document.getElementById("new-source");
const amount=document.getElementById("new-amount");
let transaction_list=document.getElementById("trans-list")
function handleFormSubmit(event) {
    event.preventDefault();
    transaction_list.appendChild(newTransaction(source.value, amount.value))
}
 
function newTransaction(tname, tamt) {
    const TransactionItem=document.createElement("div");
    TransactionItem.className="trans-item";

    const newTransaction=document.createElement("p");
    newTransaction.className="item-name";
    const Tname=document.createTextNode(tname);
    newTransaction.appendChild(Tname);

    const amount=document.createElement("span");
    amount.className="amount debit";
    const Tamount=document.createTextNode(tamt);
    amount.appendChild(Tamount);

    newTransaction.appendChild(amount);


    TransactionItem.appendChild(newTransaction);
    return TransactionItem;


    /*  
        <div class="trans-item">
            <p class="item-name">tname 
                <span class="amount debit">tamt</span>
            </p>
        </div> 
    */
}
