import Validator from 'validator';
function validateRegisterInput (data) {
  const errors = {};

  data.name = data.name.length !== 0 ? data.name : '';
  data.email = data.email.length !== 0 ? data.email : '';
  data.password = data.password.length !== 0 ? data.password : '';

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max:30})) {
    console.log('password length is too short or too long');
    errors.password = 'Password must be between 6 and 30 characters';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
}
export default validateRegisterInput;
