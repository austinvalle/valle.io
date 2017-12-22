$(function() {

    $('.v-brand').click(function(){
        $('.v-nav-item').removeClass('v-nav-active');
    });
    
    $('.v-nav-item > a').click(function(){
        $('.v-nav-item').removeClass('v-nav-active');
        $(this).parent().addClass('v-nav-active');
    });

  var routes = {
    "/": () => {},
    "/about": () => {}
  };

  var dispatchRoute = () => {
    var route = window.location.hash.slice(2);
    var oldSection = $("section:visible");
    var newSection =
      route === ""
        ? $("section").filter("[data-route=home]")
        : $("section").filter("[data-route=" + route + "]");

    if (newSection.length) {
      if (oldSection.length) {
        oldSection.fadeOut(250, function() {
          newSection.fadeIn(250);
        });
      } else {
        newSection.fadeIn(250);
      }
    }
  };

  var router = Router(routes);
  router.configure({
    on: dispatchRoute
  });

  router.init("/");
});
