let input = document.querySelector(".inpSearch")
let spinner = document.querySelector(".spinner")
let grid = document.querySelector(".grid")
let btnSubmit = document.querySelector(".btnSubmit")
btnSubmit.addEventListener("click", async function () {
    let api = `https://randomuser.me/api/?results=${input.value}`
    let res = await fetch(api)
    let result = await res.json()
    let data = result.results
    // spinner.classList.add("hidden")
    if (data.length > 0) {
        spinner.classList.remove("hidden")
        setTimeout(function () {
            spinner.classList.add("hidden")
        }, 1000)
    }
    else {
        spinner.classList.add("hidden")
    }
    if (input.value == "") {
        alert("Hechnima kiritmadingiz")
    }
    else {
        data.forEach((aUser) => {
            input.value = ""

            // setTimeout(function () {
            //     spinner.classList.remove("hidden")
            // }, 5000)
            let card = document.createElement("div")
            card.innerHTML = `
                <div class="card">
                <img
                class="avatar"
                src=${aUser.picture.large}
                alt=""
                />
                <h3 class="name">${aUser.name.first}</h3>
                <h4 class="country">${aUser.location.country}</h4>
                <h3 class="email">${aUser.email}</h3>
                </div>
                `
            grid.appendChild(card)
        })

    }

    // console.log(result);
})

