import messenger from './messenger';
import holymass from './holymass';
import confession from './confession';
import churchmember from './churchmember';
import phase from './phase';

const routes = function (app) {
  app.use('/messenger', messenger);
  app.use('/holymass', holymass);
  app.use('/confession', confession);
  app.use('/churchmember', churchmember);
  app.use('/phase', phase);

};

export default routes; 
