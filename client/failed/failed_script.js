Template.failed.helpers({
  dropCount: function () {
    return Session.get('dropCount') || 0;
  },
  failCount: function () {
    return Session.get('failCount') || 0;
  }
});

Template.failed.events({
  'click .iWannaDropIt': function () {
    Router.go('microphone');
  },
  'click h1': function () {
    Router.go('/');
  }
});

Template.failed.onRendered(function () {
  $('body').css({'background-color': '#e03997', 'background-image': 'url(\'banana-fail.gif\')', 'background-repeat': 'repeat'});
});

$(window).keyup(function (evt) {
  if (evt.which === 32) {
    $('.iWannaDropIt').click();
  }
});
