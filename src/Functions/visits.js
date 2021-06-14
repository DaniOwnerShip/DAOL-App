const axios = require('axios').default;


export function read() {

    let payload = {
        action: 'readDDBB'
    };
     axios.post('https://daol.es/dbmanager.php', payload) 

        .then(function (response) {
            let data = response.data;
            proccesData(data);
        })
        .catch(function (error) {
            console.error(error);
        });

}


export function WriteComent(_comment) {

    let payload = {
        action: 'writeDDBB',
        nombre: _comment.name,
        mensaje: _comment.message
    };


   axios.post('https://daol.es/dbmanager.php', payload) 

        .then(function () {
            let newData = [{
                NameUser: _comment.name,
                DateStamp: new Date().toISOString().substring(0, 10),
                TextUser: _comment.message
            }]
            proccesData(newData);

        })
        .catch(function (error) {
            console.error(error);
        });
}



function proccesData(data) {

    let countKey = Object.keys(data).length;

    let ComentsContainer, DivName, DivText;
    ComentsContainer = document.getElementById("boxComents");

    for (let i = 0; i < countKey; i++) {

        DivName = document.createElement("DIV");
        DivName.setAttribute("class", "Postit");
        ComentsContainer.appendChild(DivName);
        DivName.innerHTML = "<h3>" + data[i].NameUser + "</h3>" + data[i].DateStamp;

        DivText = document.createElement("DIV");
        DivName.appendChild(DivText);
        DivText.innerHTML = data[i].TextUser;
    }
}