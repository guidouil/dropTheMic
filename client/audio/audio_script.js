Template.audio.helpers({
  isSoundMuted: function () {
    return Session.equals('muted', true);
  }
});

Template.audioBtn.helpers({
  audioBtnImg: function () {
    if (Session.equals('muted', true)) {
      return 'unmute.png';
    } else {
      return 'mute.png';
    }
  }
});

Template.audioBtn.events({
  'click .audioBtn': function () {
    if (Session.equals('muted', true)) {
      Session.set('muted', false);
    } else {
      Session.set('muted', true);
    }
  }
});

Template.audioBtn.onRendered(function () {

});
