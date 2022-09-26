$(".investment-list").click(function () {
  $(".investment-details").removeClass("show");
  $(this).parent().addClass("show");
  $(".icon-plus").text("+");
  $(this).children(".icon-plus").text("-");
});
