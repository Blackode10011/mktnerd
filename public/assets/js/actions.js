// Opens Modal Agenda
$("#openAgenda").click(function(){
 $(".dv").show({})
})
// Opens aside bar
$(".open-aside-settings").click(function(){
    $("#aside-settings").show({})
 
})
// Closes aside bar
$(".close-aside-settings").click(function(){
    $("#aside-settings").hide({})
 
})
// Open novaconsulta modal
$(".open-novaconsulta").click(function(){
    $(".novaconsulta").show({})
 
})
// Closes novaconsulta modal
$(".close-novaconsulta").click(function(){
    $(".novaconsulta").hide({})
 
})
// Closes dv modal
$("#close-dv").click(function(){
    $(".dv").hide({})
 
})
// Open custom modal
$("#openCustomSelect").click(function(){
    $("#categoryModal").show({})
 
})
// Closes category modal
$(".closeCategoryModal").click(function(){
    $("#categoryModal").hide({})
 
})
// Open removeCategoryList through array list
$(".i-delete").click(function(e){
    console.log(e.delegateTarget.id)
    $(".removeCategoryList").show({})

})
// Closes i-closeDeleteCategory
$(".i-closeDeleteCategory").click(function(){
    $(".removeCategoryList").hide({})
 
})
// Closes i-closeDeleteCategory
$(".close-removeCategoryList").click(function(){
    $(".removeCategoryList").hide({})

})
// Open removeCategoryList to create new category
$(".open-createNewCategory").click(function(){
    $(".add-newColorCategoryList").show({})

})
// Open new category list
$(".i-openNewColorCategoryList").click(function(){
    $(".add-newColorCategoryList").show({})

})
// Close new category list
$(".i-closeNewColorCategoryList").click(function(){
    $(".add-newColorCategoryList").hide({})

})

// Open new category list through array list
$(".i-edit").click(function(e){
    console.log(e.delegateTarget.id)
    $("#add-newColorCategoryList").show({})
   $("#desc-Color").val(e.delegateTarget.id)
})
// Closes new category list
$(".close-newColorCategoryList").click(function(){
    $(".add-newColorCategoryList").hide({})

})
// Open color list
$("#open-ColorList").click(function(){
    $("#category-Color-List").show({})

})

