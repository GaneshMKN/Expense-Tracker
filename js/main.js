const form=document.getElementsByTagName("form");
const source=document.getElementById("new-source");
const amount=document.getElementById("new-amount");
const dateTime=document.getElementById("dateTime");
let transaction_list=document.getElementById("trans-list")
function handleFormSubmit(event) {
    event.preventDefault();
    
    let newDate=new Date(dateTime.value);
    let textDate=newDate.getDate()+"-"+newDate.getMonth()+"-"+newDate.getFullYear()+", "+newDate.getHours()+"-"+ newDate.getMinutes();
    
    const selected = document.querySelector('input[name="ttype"]:checked');

    transaction_list.appendChild(newTransaction(source.value, amount.value, selected.id, textDate))
}
 
function newTransaction(tname, tamt, ttype, textDate) {
    // empty transaction item
    const TransactionItem=document.createElement("div");
    TransactionItem.className="trans-item";
    // p element inside item
    const itemName=document.createElement("div");
    itemName.className="item-name";
    const nameTextNode=document.createTextNode(tname);
    itemName.appendChild(nameTextNode);
    // amount element span
    const amount=document.createElement("div");
    amount.className="amount"+" "+ttype;
    const amountTextNode=document.createTextNode(tamt);
    amount.appendChild(amountTextNode);
    
    // date element span
    const TDate=document.createElement("div");
    TDate.className="trans-date";
    const dateTextNode=document.createTextNode(textDate);
    TDate.appendChild(dateTextNode);

    TransactionItem.appendChild(itemName);
    TransactionItem.appendChild(amount);
    TransactionItem.appendChild(TDate);


    return TransactionItem;


    /*  
        <div class="trans-item">
            <div class="item-name">tname 
                <div class="amount ttype">tamt</div>
                <div class="trans-date">textDate</div>
            </div>
        </div> 
        
    */
}
