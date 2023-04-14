$(document).ready(function () {
    $("#mainCol").removeAttr("style");
    $(".container-fluid.pb-2").removeAttr("style");
    if ($(window).width() < 765) {
      setTilesView();
    }
    $('#coursesSearchFilter').prepend('<img src="https://www.litmos.com/wp-content/themes/litmos-theme/imgs/litmos-logo.svg" class="banner-image hidden-sm hidden-xs"><h1>Content Library</h1><p>Browse Topics, Courses, Collections & Learning Paths</p>');
    $('#coursesSearchFilter').append('<div class="banner-buttons"><a class="btn btn-lg btn-primary" href="/home/library">Content Library</a><a class="btn btn-lg btn-default" href="/products/training-courses">Online Catalog</a></div>');
    $('#dashboardHeader').prepend('<div class="banner"><img src="https://www.litmos.com/wp-content/themes/litmos-theme/imgs/litmos-logo.svg" class="banner-image img-responsive hidden-sm hidden-xs"><div class="banner-text"><h1>Welcome to Litmos Content!</h1><p>Check out the Content Library to access all our courses and view curated Collections and Learning Paths.</p></div><div class="banner-buttons"><a class="btn btn-lg btn-primary" href="/home/library">Content Library</a><a class="btn btn-lg btn-default" href="/products/training-courses">Online Catalog</a></div></div>');
  });