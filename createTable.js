
    function createHeadTable(tbl) {
        var head = document.createElement('thead');

        var row = document.createElement('tr');
        row.className = "row my-2 mx-1"

        var col1 = document.createElement('th');
        col1.className = "col-6 d-flex justify-content-start align-items-center text-regularSF gray-text"

        var col2 = document.createElement('th');
        col1.className = "col-6 d-flex ml-n1 justify-content-center text-center align-items-center text-lightSF gray-text"

        var col1_data = document.createTextNode("Perfis de usuário");
        var col2_data = document.createTextNode("Permitir o acesso");

        col1.appendChild(col1_data);
        col2.appendChild(col2_data);

        row.appendChild(col1);
        row.appendChild(col2);

        head.appendChild(row);
        tbl.appendChild(head);
    }
