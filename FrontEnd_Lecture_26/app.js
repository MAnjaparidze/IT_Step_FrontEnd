$("h1").css("color", "red");
$("ul#unordered_list li:first").css("color", "yellow");
$("ul#unordered_list li:last").css("color", "green");
$("ul#unordered_list li:even").css("background-color", "red");
$("ul#unordered_list li:odd").css("background-color", "purple");
$("ul#unordered_list li:nth-child(5)").css("text-decoration", "underline");
$("a[href='https://google.com']").css("color", "brown")

// Hide & Show
$("#hide_btn").css("padding", "5px");
$("#show_btn").css("padding", "5px");

$("#hide_btn").click(function () {
    $(".paragraph_2").hide();
});
$("#show_btn").click(function () {
    $(".paragraph_2").show();
});

// Fade In / Out

$("#fade_in-btn").click(function () {
    // $("#div_1").fadeIn();
    // $("#div_2").fadeIn("slow");
    // $("#div_3").fadeIn(3000);

    $("#div_1").fadeIn(1000);
    $("#div_2").fadeIn(2000);
    $("#div_3").fadeIn(3000);
});

$("#fade_out-btn").click(function () {
    // $("#div_1").fadeOut();
    // $("#div_2").fadeOut("slow");
    // $("#div_3").fadeOut(3000);

    $("#div_1").fadeOut(1000);
    $("#div_2").fadeOut(2000);
    $("#div_3").fadeOut(3000);
});

// Slide Down / Up

$("#toggle-navigation").click(function () {
    let nav_btn = $("#toggle-navigation");
    let btn_type = nav_btn[0].innerText;
    console.log(btn_type)
    if(btn_type === "Show Navigation") {
        $("#main_navigation").slideDown("slow").css("display", "flex");
        nav_btn.text("Hide Navigation");
    } else if (btn_type === "Hide Navigation") {
        $("#main_navigation").slideUp("slow").css("display", "none");
        nav_btn.text("Show Navigation");
    }
})

// Add / Remove HTML Elements

$("#add_box").click(function () {
    console.log("Test")
    $(".sandbox").append("<div id='remove_element-box'>Komo es tas</div>");
})

$("#remove_box").click(function () {
    console.log("Test 2")
    $("#remove_element-box").remove();
})