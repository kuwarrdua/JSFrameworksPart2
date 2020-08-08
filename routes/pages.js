const { home, about } = require('../controllers/pagesController');

module.exports = router => {
  router.get('/', home);

  router.get('/about', about);
};