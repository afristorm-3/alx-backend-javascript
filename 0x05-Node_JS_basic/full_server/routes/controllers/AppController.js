/**
 * Contains the miscellaneous route handlers.
 * @author Temitope Owolabi  <https://github.com/afristorm-3>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
