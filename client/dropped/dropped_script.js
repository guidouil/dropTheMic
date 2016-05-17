Template.dropped.helpers({
  dropCount: function () {
    return Session.get('dropCount') || 0;
  },
  failCount: function () {
    return Session.get('failCount') || 0;
  }
});

Template.dropped.events({
  'click .iWannaDropIt': function () {
    Router.go('microphone');
  }
});

Template.dropped.onRendered(function () {
  $('body').css({'background-image': 'url(\'obama-drop.gif\')', 'background-repeat': 'repeat'});
});

$(window).keyup(function (evt) {
  if (evt.which === 32) {
    $('.iWannaDropIt').click();
  }
});
