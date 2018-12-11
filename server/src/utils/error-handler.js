import fs from 'fs';
import moment from 'moment';

export default (req, res, next) => {
  res.error = (status, message, internMessage = '') => {
    const response = JSON.stringify({ error: message });
    if (internMessage) {
      const time = moment().format('DD-MM-YYYY HH:mm:ss');
      const log = `${time}: errorMessage - ${
        internMessage.message
      }, name - ${internMessage.name} `;
      fs.appendFile('server.log', `${log}\n`, () => { });
    }
    res.status(status).send(response);
  };
  next();
};
