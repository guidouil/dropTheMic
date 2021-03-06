Router.configure({
  layoutTemplate: 'main',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading',
  templateNameConverter: 'camelCase',
  routeControllerNameConverter: 'camelCase'
});

Router.route('/microphone', {
  name: 'microphone',
  title: 'Microphone'
});

Router.route('/dropped', {
  name: 'dropped',
  title: 'Dropped'
});

Router.route('/failed', {
  name: 'failed',
  title: 'Failed'
});

Router.route('/404', {
  name: 'notFound',
  title: '404'
});

Router.route('/', {
  name: 'home',
  title: 'Home'
});
