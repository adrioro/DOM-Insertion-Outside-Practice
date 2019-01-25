//.after
$("#afterId").click(function () {
    $(this).after("<h3>This text is being added after the button.</h3>")
})
//.before
$("#beforeId").click(function () {
    $("p").before("This text was created to be placed before the paragrap")
})
//.insertAfter
//Inserting list element at the end of list.
$("#insertbeforeId").click(function () {
    $("<li>Item 4</li>").insertAfter("li:last");
});

$("#insertbeforeId").click(function () {
    $("li:first").insertAfter("li:last");
});