import Validator from 'validator';
import isEmpty from './isEmpty';

function validateLoginInput (data) {
  const errors = {};
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email is empty';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email field is required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required'
  }

  return {
    isValid: isEmpty(errors),
    errors
  }
}

export { validateLoginInput };
