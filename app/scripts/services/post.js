'use strict';

app.factory('Post', function ($resource) {
  return $resource('https://portfoliohunt.firebaseIO.com/posts/:id.json');
});