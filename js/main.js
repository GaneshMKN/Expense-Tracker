const form=document.getElementsByTagName("form");
const source=document.getElementById("new-source");
const amount=document.getElementById("new-amount");
const dateTime=document.getElementById("dateTime");
let transaction_list=document.getElementById("trans-list")
function handleFormSubmit(event) {
    event.preventDefault();

    let newDate=new Date(dateTime.value);
    let textDate=newDate.getDate()+"-"+newDate.getMonth()+"-"+newDate.getFullYear()+", "+newDate.getHours()+"-"+ newDate.getMinutes();
    

    transaction_list.appendChild(newTransaction(source.value, amount.value, textDate))
}
 
function newTransaction(tname, tamt, textDate) {
    // empty transaction item
    const TransactionItem=document.createElement("div");
    TransactionItem.className="trans-item";
    // p element inside item
    const newTransaction=document.createElement("div");
    newTransaction.className="item-name";
    const nameTextNode=document.createTextNode(tname);
    newTransaction.appendChild(nameTextNode);
    // amount element span
    const amount=document.createElement("div");
    amount.className="amount debit";
    const amountTextNode=document.createTextNode(tamt);
    amount.appendChild(amountTextNode);
    
    // date element span
    const TDate=document.createElement("div");
    TDate.className="trans-date";
    const dateTextNode=document.createTextNode(textDate);
    TDate.appendChild(dateTextNode);

    newTransaction.appendChild(amount);
    newTransaction.appendChild(TDate);


    TransactionItem.appendChild(newTransaction);
    return TransactionItem;


    /*  
        <div class="trans-item">
            <p class="item-name">tname 
                <span class="amount debit">tamt</span>
                <span class="trans-date">textDate</span>
            </p>
        </div> 
    */
}
