Template.notFound.helpers({
});

Template.notFound.events({
  'click .iWannaDropIt': function () {
    Router.go('microphone');
  },
  'click h1': function () {
    Router.go('/');
  }
});

Template.notFound.onRendered(function () {
  $('body').css({'background-image': 'url(\'dharma.gif\')', 'background-repeat': 'repeat'});
});
