import app from 'app';
import path from 'path';
const settings = {
  port: process.env.PORT || 8052,
  root: path.resolve(process.cwd())
};

app.connect.use((error, request, response, next) => {
  console.error('[ERROR]', error);
  next();
});

app.connect.use(require('morgan')('dev'));

app.send('/test', {
  id: 1,
  posts: [
    {id: 0, msg: 'a'},
    {id: 1, msg: 'b'},
    {id: 2, msg: 'c'},
    {id: 3, msg: 'd'}
  ]
});

app.send('/test2', {
  id: 2,
  posts: [
    {id: 4, msg: 'e'}
  ]
});

app.connect.use(require('serve-static')(settings.root)).listen(settings.port, () => {
  console.log('Server running at ' + settings.port);
});
