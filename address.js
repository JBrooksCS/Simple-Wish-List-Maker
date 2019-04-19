const container = document.querySelector("#list")

document.querySelector("#saveEntry").addEventListener("click", event => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
    console.log("button clicked!")

    const itemName = document.querySelector("#fullName").value
    const storeName = document.querySelector("#address").value


    // Once you have collected all the values, update the DOM
    // with some HTML
    if (itemName === "" || storeName === "") {
        alert("You didn't enter anything!")
    }
    else {

        container.innerHTML += `
        <section>
            <h1> I can purchase ${itemName} at ${storeName}</h1>
        </section> `;
        document.querySelector("#fullName").focus();
        document.querySelector("#fullName").value = ""
        document.querySelector("#address").value = ""
    }
})

//console.log(document.querySelector("#fullName").value)