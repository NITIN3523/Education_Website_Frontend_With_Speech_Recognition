if (!annyang) {
    console.log("Speech Recognition is not supported");
}
else if (annyang) {
    var commands = {

        // SCROLL UP AND DOWN
        'scroll *tag': function (val) {
            if (val === 'down') {
                window.scrollBy(0, 500)
            }
            else if (val === 'up') {
                window.scrollBy(0, -500)
            }
        },

        // NAVBAR
        'open *tag': function (val) {
            document.getElementById(`${val}`).click();
        },

        // SLIDER  /* slide imageright or slide image left 
        'slide *tag': function (val) {
            val = val.split(" ").join("")
            document.getElementById(`${val}`).click();
        },

        // FAQ 
        'hide all answer': function () {
            for (let i = 1; i <= 6; i++) {
                document.getElementById(`${i}`).click();
            }
        },

        'all answer': function () {
            for (let i = 1; i <= 6; i++) {
                document.getElementById(`${i}`).click();
            }
        },

        'show answer *tag': function (val) {
            if (val === "to") {
                val = 2;
            }
            document.getElementById(`${val}`).click();
        },

        'hide answer *tag': function (val) {
            if (val === "to") {
                val = 2;
            } 
            document.getElementById(`${val}`).click();
        },


        // LOGIN 
        'enter email *tag': function (val) {
            const email = document.getElementById("email");
            val = val.split(" ").join("")
            email.value = val;
        },

        'enter password *tag': function (val) {
            const password = document.getElementById("password");
            const conemail = document.getElementById("confirmpassword");
            val = val.split(" ").join("")
            password.value = val;
            conemail.value = val;
        },

        // CONTACT 
        'enter name *tag': function (val) {
            const name = document.getElementById("name");
            val = val.split(" ").join("")
            name.value = val;
        },

        'enter phone *tag': function (val) {
            const phone = document.getElementById("phone");
            val = val.split(" ").join("");
            phone.value = val;
        },

        'enter text *tag': function (val) {
            const text = document.getElementById("text");
            val = val.split(" ").join("");
            text.value = val;
        },

        // COURSES
        'search *tag': function(val){
            val = val.split(" ").join("");
            document.getElementById("search").value = val;
        },

        'click *tag': function(val){
            val = val.split(" ").join("");
            console.log(val)
            if(val === "login") document.getElementById("llogin").click();
            else {
            document.getElementById(`${val}`).click();
            }
        }

    };

    annyang.addCommands(commands);
    annyang.start();
}

