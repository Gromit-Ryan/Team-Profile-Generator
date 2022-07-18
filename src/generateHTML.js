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