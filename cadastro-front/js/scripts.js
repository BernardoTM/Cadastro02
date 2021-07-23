function show(users){
    for (const user of users) {
        const table = document.getElementById("tabela-usuarios");
        const tr = document.createElement("tr");
    
        // Coluna senha
        let td = document.createElement("td");
        td.innerHTML = user.senha;
        tr.appendChild(td);
    
        // Coluna Nome
        td = document.createElement("td");
        td.innerHTML = user.name;
        tr.appendChild(td);

        // Coluna Username
        td = document.createElement("td");
        td.innerHTML = user.username;
        tr.appendChild(td);

        // Coluna Email
        td = document.createElement("td");
        td.innerHTML = user.email;
        tr.appendChild(td);
    
        table.appendChild(tr);
      }
      $(document).ready(function() {
        $('#example').DataTable();
    });
}

async function getUsers(){
    try {
        const response = await fetch('http://localhost:3030/')
        const data = await response.json();
        show(data);
    } catch (error) {
       console.log(error); 
    }
}

getUsers();

