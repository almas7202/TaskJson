$(document).ready(()=>{
    const navbar = $('#navbar')
    const sidebaar = $('#sidebaar')
   

    fetch('Task.json')
    .then(response => response.json())
    .then(data => {
     
        createNavbar(data)
    })
    .catch(error => {
        console.error("Error While Fetching the data");
    })

    function createNavbar(data){
        Object.keys(data).forEach(key => {
            const navItem = $('<a> </a>').text(key).attr("href",'#').attr("style","margin-left:25px;").click(()=>{
                // console.log(data[key]);
                createSidebaar(data[key])
            })
            navbar.append(navItem)
        })
    }

    function createSidebaar(data){
        $(sidebaar).empty("")
        console.log(data);
        Object.keys(data).forEach((module) => {
            // console.log(data)
            const moduleItems = $('<a> </a> <br>').text(module).append('module').attr({class:"btn btn-secondary dropdown-toggle"}).click(()=>{
                data[module].forEach(item=>{
                    Object.keys(item).forEach(subItem=>{
                        console.log(subItem);
                        $('<li> </li').text(subItem).attr({class:"dropdown-item"}).append(sidebaar)
                    })
                })
            })
            sidebaar.append(moduleItems)
          
            // data[module].forEach(item=>{
            //     Object.keys(item).forEach(subitem=>{
            //         console.log(subitem);

            //         const subItem = $("<button> </button>").text(Object.keys.subItem).addClass("btn btn-secondary").click(()=>{
            //             console.log(Object.keys.subItem);
            //         }).append(dropdown)
            //         sidebaar.append(subItem)
            //     })
            // })

        })
        
    }

   
})

