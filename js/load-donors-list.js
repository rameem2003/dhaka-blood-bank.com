const donors = [
    {
        name : "jhon",
        blood : "A+",
        address : "weqfhweufhwe",
        lastDonate : "12/12/2022"
    },

    {
        name : "jhon",
        blood : "A+",
        address : "weqfhweufhwe",
        lastDonate : "12/12/2022"
    },


    {
        name : "jhon",
        blood : "A+",
        address : "weqfhweufhwe",
        lastDonate : "12/12/2022"
    },

    {
        name : "jhon",
        blood : "A+",
        address : "weqfhweufhwe",
        lastDonate : "12/12/2022"
    }
]


const members = document.getElementById("members");



const load = () => {
    donors.map(card => {
        const cards = document.createElement("div");
        cards.classList.add("col-md-4");
        cards.classList.add("col-sm-12");
        cards.classList.add("d-block");
        cards.classList.add("d-lg-flex");

        cards.innerHTML = `

                <div class="profile p-3 bg-danger my-3">
                    <div class="pro-img">
                        <img class="img-fluid" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="">
                    </div>
                    <div class="pro-des">
                        <h2 class="text-center text-white name">${card.name}</h2>
                        <p class="text-center text-white blood">Blood group: ${card.blood}</p>
                        <p class="text-center text-white blood">Last Donate: ${card.lastDonate}</p>
                        <p class="text-center text-white">Address: ${card.address}</p>
                        <a class="btn btn-success text-center d-block coustom_btn ml-auto" href=""><i class="fa-solid fa-phone"></i> Call</a>
                    </div>
                </div>
        `;


        members.appendChild(cards);
    })
}


load();