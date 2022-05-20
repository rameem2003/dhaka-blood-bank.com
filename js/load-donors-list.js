const donors = [
    {
        id : "olid2019",
        name : "Sarfaraz Ahmed Olid",
        blood : "A+",
        location : "Mirpur, Dhaka",
        lastDonate : "08 May 2022",
        email : "olid1936@gmail.com",
        phone : "01779121156",
    },

    {
        id : "rabbi01",
        name : "Mohammad Rabbi",
        blood : "O-",
        location : "Badda, Dhaka",
        lastDonate : "15 April 2022",
        email : "bipulhasanrabbi@gmail.com",
        phone : "01837234904",
    },


    {
        id : "december2001",
        name : "Mohammad Sumon",
        blood : "O+",
        location : "Uttara, Dhaka",
        lastDonate : "12 July 2021",
        email : "ahamedsumon406@gmail.com",
        phone : "01635344750"
    },

    {
        id : "nazmulislam101112",
        name : "Nazmul Islam",
        blood : "A+",
        location : "Mirpur, Dhaka",
        lastDonate : "28 April 2022",
        email : "nazmulislam101112@gmail.com",
        phone : "01959061063"
    },

    {
        id : "BarfiHridoy",
        name : "Mohammad Hridoy Khandaker ",
        blood : "O+",
        location : "Faridpur, Dhaka",
        lastDonate : "06 April 2022",
        email : "fzhridoykhondokerraj@gmail.com",
        phone : "01841036108"
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
                        <p class="text-center text-white card-info">Last Donate: ${card.lastDonate}</p>
                        <p class="text-center text-white card-info">Location: ${card.location}</p>
                        <p class="text-center text-white card-info">Email: ${card.email}</p>
                        <a class="btn btn-success text-center d-block coustom_btn ml-auto" href="tel:+88${card.phone}"><i class="fa-solid fa-phone"></i> Call</a>
                    </div>
                </div>
        `;


        members.appendChild(cards);
    })
}


load();