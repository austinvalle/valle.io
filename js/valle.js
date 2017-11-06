$(function() {

  var routes = {
    "/": () => {},
    "/about": () => {},
    "/projects": () => {},
    "/contact": () => {}
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
