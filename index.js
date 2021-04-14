$(function () {
  //ハンバーガー
  $(".menu-container").click(function () {
    $(".nav-wrapper").toggleClass("open");
    $("span").toggleClass("trans");
  });
  $(".nav-wrapper").click(function () {
    $(".nav-wrapper").removeClass("open");
    $("span").removeClass("trans");
  });
  
  //innerメソッド
  $(".revel").on({
    mouseover: function () {
      $(".inner", this).css({
        backgroundColor: "red",
        opacity: 0.6,
        width: "23vw",
      });
    },
    mouseout: function () {
      $(".inner").css({
        width: "0.0001vw",
        color: "black",
      });
    },
  });

  //animation
  const targetelement = document.querySelectorAll(".animation");
  console.log(targetelement);
  document.addEventListener("scroll", function () {
    for (i = 0; i < targetelement.length; i++) {
      const getElement =
        targetelement[i].getBoundingClientRect().top +
        targetelement[i].clientHeight * 0.55;
      if (window.innerHeight > getElement) {
        targetelement[i].classList.add("move");
      }
    }
  });
});
