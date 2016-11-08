
import $ from 'jquery';
import 'styles/main.scss';
import dybaHeaderFooter from 'components/dyba-header-footer';
import 'components/jquery.hoverflow.min.js';

$(function() {

  // What page is being loaded?
  var url = window.location.pathname;

  // This is called a router
  switch (url) {
    case '/pages/':
        // homePage.init();
    break;
    default:
        dybaHeaderFooter.init();
  }

  // Fancy console message for developers
  console.log('=================================');
  console.log('=================================');
  console.log('==== I am looking for a job =====');
  console.log('=== as a Front-end Developer ====');
  console.log('=================================');
  console.log('======= Please contact me =======');
  console.log('======= toryrahm at gmail =======');
  console.log('============ Thanks! ============');
  console.log('=================================');
  console.log('=================================');
});
