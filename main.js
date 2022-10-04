$(".main").animate(
  {
    width: "100%",
  },
  2000,
  function () {
    $(".main").animate(
      {
        height: "100vh",
      },
      1000,
      function () {
        $("h1").slideDown(1000, function () {
          $(".card")
            .eq(0)
            .slideDown(1000, function () {
              $(".card")
                .eq(1)
                .slideDown(1000, function () {
                  $(".card").eq(2).slideDown(1000);
                });
            });
        });
      }
    );
  }
);
