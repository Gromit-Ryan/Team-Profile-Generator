const generateManagerCard = (manager) => {
    return `
    <div class="card employee-card">
        <div class="card-header bg-danger text-white">
            <h3 class="card-title">${manager.name}</h3>
            <h4>Manager</h4>
        </div>
        <div class="card-body">
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="officeNumber">Office Number ${manager.officeNumber}</p>
        </div>
    </div>
    `
}

const generateEngineerCard = (engineer) => {
    return `
    <div class="card employee-card">
        <div class="card-header bg-danger text-white">
            <h3 class="card-title">${engineer.name}</h3>
            <h4>Manager</h4>
        </div>
        <div class="card-body">
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="github"> Github: <a href="https://www.github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
        </div>
    </div>
    `
}

const generateInternCard = (intern) => {
    return `
    <div class="card employee-card">
        <div class="card-header bg-danger text-white">
            <h3 class="card-title">${intern.name}</h3>
            <h4>Manager</h4>
        </div>
        <div class="card-body">
            <p class="id">ID: ${intern.id}</p>
            <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="school">School: ${intern.school}</p>
        </div>
    </div>
    `
}

const generateTeamPage = (employeeCards) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
            <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Team Cards-->
                  ${employeeCards}
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html> `
}

generateHTML = (data) => {
    cardArray = [];

    for(let i = 0; i < data.length; i++) {
        let employee = data[i];
        let role = employee.getRole();

        if(role === 'Manager') {
                const managerCard = generateManagerCard(employee);
                cardArray.push(managerCard);
        } else if(role === 'Engineer') {
                const engineerCard = generateEngineerCard(employee);
                cardArray.push(engineerCard);
        } else if(role === 'Intern') {
                const internCard = generateInternCard(employee);
                cardArray.push(internCard);
        }
    }

    const employeeCards = cardArray.join('');

    const generateTeam = generateTeamPage(employeeCards)
    return generateTeam;
}

module.exports = generateHTML;