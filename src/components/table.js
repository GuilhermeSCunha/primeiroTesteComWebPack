
const body = document.querySelector ('body');

export  function createTable (EstudantsData) {
    
    function giveTagAndClassForData (Data) {
    return Data.map((element) => {
            const name = document.createElement("p");    
            const average = document.createElement("p");  
            const status = document.createElement("p");
            name.setAttribute("class", "name");
            average.setAttribute("class", "average");
            if (element.average < 7) {
                status.setAttribute("class", "status-bad");
            }else {
                status.setAttribute("class", "status-good");
            }
            name.textContent = element.name;
            average.textContent = element.average;  
            status.textContent = element.status;

            return {
                name: name,
                average: average,
                status: status
            }   
        });
    }

    const dataReadyToGoToDocument = giveTagAndClassForData (EstudantsData);

    function putDataInDocument (data) {
        const descriptionContainer = document.createElement ("div");
        descriptionContainer.setAttribute("class", "description-container");
        const tableName = document.createElement ("p");
        const tableAverage = document.createElement ("p");
        const tableStatus = document.createElement ("p");
        tableName.setAttribute("class", "name");
        tableAverage.setAttribute("class", "average");
        tableStatus.setAttribute("class", "status");
        tableName.textContent = "NOME";
        tableAverage.textContent = "MÉDIA";
        tableStatus.textContent = "STATUS";
        descriptionContainer.appendChild (tableName);
        descriptionContainer.appendChild (tableAverage);
        descriptionContainer.appendChild (tableStatus);
        body.appendChild (descriptionContainer);

        data.forEach((element) => {
            const dataContainer = document.createElement ("div");
            dataContainer.setAttribute("class", "data-container");
            dataContainer.appendChild (element.name);
            dataContainer.appendChild (element.average);
            dataContainer.appendChild (element.status);
            body.appendChild (dataContainer);
        });
    }

    putDataInDocument(dataReadyToGoToDocument);
}

