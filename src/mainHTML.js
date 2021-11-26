//Employee Card Selections
const createEmployeeCard = function (employee) {
    return `<section class="col-3 text-center border border-1">
                <h2>
                    ${employee.name}
                </h2>
                <b> Employee </b>
                <br>
                    ID: ${employee.ID}
                    <br>
                        Email: ${employee.email}
                        <br>
                            </section>`
};

const createManagerCard = function (manager) {
    return `<section class="col-3 text-center border border-1">
                <h2>
                    ${manager.name}
                </h2>
                <b> Manager </b>
                <br>
                    ID: ${manager.ID}
                    <br>
                        Email: ${manager.email}
                        <br>
                        Office Number: ${manager.office}
                        <br>
                            </section>`
};

const createInternCard = function (intern) {
    return `<section class="col-3 text-center border border-1">
                <h2>
                    ${intern.name}
                </h2>
                <b> Intern </b>
                <br>
                    ID: ${intern.ID}
                    <br>
                        Email: ${intern.email}
                        <br>
                        School: ${intern.school}
                        <br>
                            </section> `
};

const createEngineerCard = function (engineer) {
    return `<section class="col-3 text-center border border-1">
                <h2>
                    ${engineer.name}
                </h2>
                <b> Engineer </b>
                <br>
                    ID: ${engineer.ID}
                    <br>
                        Email: ${engineer.email}
                        <br>
                        Github: ${engineer.github}
                        <br>
                            </section> `
};

//Employee Card Loop Selector
mainHTML = (data) => {
    output = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerDiv = createManagerCard(employee)
            output.push(managerDiv);
        } else if (role === 'Intern') {
            const internDiv = createInternCard(employee)
            output.push(internDiv);
        } else if (role === 'Engineer') {
            const engineerDiv = createEngineerCard(employee)
            output.push(engineerDiv);
        } else {
            const employeeDiv = createEmployeeCard(employee)
            output.push(employeeDiv);
        }
    }
    const allCards = output.join('')
    const finalTeam = finalTeamPage(allCards);
    return finalTeam
    
}

//Final Team Page
const finalTeamPage = function (allCards) {
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Document</title>
</head>

<body>

    <!-- Header -->
    <div class="row">
        <h1 class="col-12 display-1 text-center bg-danger">
            My Team
            </1>
    </div>


    <!-- Team Info -->
<div class="row">
   ${allCards}
</div>
    <!-- Separate Popper and Bootstrap -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
        integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
        crossorigin="anonymous"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
        crossorigin="anonymous"></script>
</body>

</html>`
}

module.exports = mainHTML;

