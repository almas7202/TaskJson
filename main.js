$(document).ready(()=>{
    const navbar = $('#navbar')
    const sidebaar = $('#sidebaar')
   

    fetch('TaskJson.json')
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
                createSidebar(data[key])
            })
            navbar.append(navItem)
        })
    }

    function createSidebar(data) {
        $(sidebaar).empty();
        Object.keys(data).forEach(module => {
            const moduleContainer = $("<ul>").addClass("module-container");
            const moduleList = $("<li>").text(module).addClass("module-heading");
            const subItemsList = $("<ul>").addClass("sub-items-list");
            
            data[module].forEach(item => {
                Object.keys(item).forEach(subItem => {
                    const subItemLink = $("<a>").text(subItem).addClass("sub-item-link").attr("href", item[subItem]);
                    const subItemListItem = $("<li>").append(subItemLink);
                    subItemsList.append(subItemListItem);
                });
            });
    
            moduleList.click(function() {
                subItemsList.toggle();
            });
    
            moduleContainer.append(moduleList, subItemsList);
            
            sidebaar.append(moduleContainer);
        });
    }
    
    
    
    

   
})
