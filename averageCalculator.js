const classOne = [
    {
      nome: "Jonas",
      notas: [1, 4, 10, 8],
    },
    {
      nome: "Adam",
      notas: [10, 5, 6, 9],
    },
    {
      nome: "Marta",
      notas: [7, 0, 1, 10],
    },
    {
        nome: "pedro",
        notas: [7, 7, 6.9],
    },

    {
        nome: "joão",
        notas: [7, 10, 1, 10],
    }
  ];

 

function createEstudantsWithAverageAndStatus (estudantsList) {

    function sum (arrayOfNumbers = [0]) {
        return arrayOfNumbers.reduce((total, currentNumber) => total + currentNumber)
    }


    function average (estudantsList = []) {
    return estudantsList.map((item) => {
        const grade = item.notas;
        const divisor = grade.length;
        const averageDone = (sum(grade) / divisor).toFixed(2); 
        return averageDone;
    })
    }


    const averageResult = average (estudantsList);



    function verifyStatus (averageResult) {
        return averageResult.map ((item) => {
            if(item < 7) {
                return "reprovado";
            } else {
                return "aprovado"
            }
        })
    }

    const Status = verifyStatus (averageResult);

    function createStudantsWithAverageAndStatus (estudants, average, status, index = 0) {
        return estudants.map((item) => {
            const estudant = new Object ();
            estudant.name = estudants.map((item) => item.nome)[index];
            estudant.average = average[index];
            estudant.status = status[index];
            index += 1;
            
            return estudant
        }) 
    }

    const estudantsResults = createStudantsWithAverageAndStatus (estudantsList, averageResult, Status);

    return estudantsResults
}

const gradeAndStatusOfEstudants = createEstudantsWithAverageAndStatus (classOne);

console.log ('class one: ', gradeAndStatusOfEstudants);


