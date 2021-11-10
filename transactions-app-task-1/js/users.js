import {
    getCurrentUserFromLocalStorage,
    readLocalStaorageData,
    createMyOwnElement,
    transactionProcess,
    addBalancePage,
    withdrawPage,
    showUserPage,
    addUser
} from './myFunctions.js'

const addUserForm = document.querySelector("#addUser"),
    userName = document.querySelector("#profileName"),
    userAdress = document.querySelector("#profileAdress"),
    userAccNumber = document.querySelector("#accNumber"),
    userBalance = document.querySelector("#userBalance"),
    transactions = document.querySelector("#transactions"),
    addedBalanceForm = document.querySelector('#addBalance'),
    withdrawBalanceForm = document.querySelector('#withdrawBalance'),
    allUsersTable = document.querySelector("#users");

const showUsers = () => {
    localStorage.removeItem('user')
    let users = readLocalStaorageData()
    users.forEach((user) => {
        const tr = createMyOwnElement(allUsersTable,"tr")
        createMyOwnElement(tr, "td", user.id)
        createMyOwnElement(tr, "td", user.userName)
        const td = createMyOwnElement(tr, "td", null, 'd-flex justify-content-between')
        const showBtn = createMyOwnElement(td, "button", "Show Details", "btn btn-primary mx-2 showBtn")
        showBtn.addEventListener("click", () => showUserPage(user.id))
        const addBtn = createMyOwnElement(td, "button", "Add Balance", "btn btn-success mx-2")
        addBtn.addEventListener("click", () => addBalancePage(user.id))
        const withdrawBtn = createMyOwnElement(td, "button", "Withdraw Balance", "btn btn-warning mx-2")
        withdrawBtn.addEventListener('click', () => withdrawPage(user.id))
    })
}
//show all users
if (allUsersTable) {
    showUsers()
}
//adding user
if (addUserForm) {
    addUserForm.addEventListener('submit', function (e) {
        e.preventDefault()
        const user = {
            id: Date.now(),
            userName: this.elements.userName.value,
            adress: {
                city: this.elements.city.value,
                street: this.elements.street.value,
                building: this.elements.building.value,
            },
            balance: this.elements.balance.value,
            transactions: []
        }
        addUser(user)  //line 30 in myFunctions
        this.reset()
        window.location.replace("users.html");
    })
}
//showing user
if (userName) {
    try {
        let user = getCurrentUserFromLocalStorage("user") //line 15 in myFunctions
        userName.innerHTML = user.userName
        userAdress.innerHTML = `${user.adress.city} , ${user.adress.street} , Building No ${user.adress.building}`;
        userBalance.innerHTML = ` $ ${user.balance}`
        userAccNumber.innerHTML = user.id;
        user.transactions.forEach(t => {
            const tr = createMyOwnElement(transactions, "tr",null,t.type == 'Add' ? 'greenborder' : 'redborder')
            createMyOwnElement(tr, "td", t.type, t.type == 'Add' ? 'green' : 'red')
            createMyOwnElement(tr, "td", t.amount, 'text-center')  // line 21 in myFunctions
            createMyOwnElement(tr, "td", t.date)
        })
        localStorage.removeItem('user')
    } catch (err) {
        console.error(err)
        alert('faied to show user')
    }
}
//add transaction
if (addedBalanceForm) {
    let user = getCurrentUserFromLocalStorage("user")
    try {
        transactionProcess(addedBalanceForm, 'Add', user.id)  //line 37 in myFunctions
        
    } catch (err) {
        console.error(err)
    }
}
if (withdrawBalanceForm) {
    let user = getCurrentUserFromLocalStorage("user")
    withdrawBalanceForm.elements.balance.setAttribute('max', user.balance)
    try {
        transactionProcess(withdrawBalanceForm,'Withdraw', user.id)
    } catch (err) {
        console.error(err)
    }
}