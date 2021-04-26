/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("#add_msg").submit(function(event){
    alert("message created successfully!");
})


if(window.location.pathname == "/staff"){
    $ondelete = $(".table-content tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/staff ${id}`,
            "method" : "DELETE"
        }
     
        $.ajax(request).done(function(response){
                location.reload();
        })        
    })
}
