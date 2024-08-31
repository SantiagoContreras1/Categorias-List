const requestCategorias = fetch('http://localhost:8088/categorias').then((resp) =>{
    resp.json().then(data => {
        //for(Object object : objects)
        const listaCategorias = document.getElementById('listaCategorias')
        
        data.map(({id, nombreCategoria}) =>{
            

            const categoria = document.createElement('li')
            categoria.innerHTML = `ID: ${id} Nombre: ${nombreCategoria}`

            listaCategorias.appendChild(categoria)
            //console.log('ID : ${id} Nombre: ${nombreCategoria}')
        })

        
    })
}).catch(console.warn)