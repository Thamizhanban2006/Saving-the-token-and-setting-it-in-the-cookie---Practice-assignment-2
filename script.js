const jwt = require('jsonwebtoken');


const encrypt = (payload, secret) => {
  // your code here and return token
  
  const token = jwt.sign(payload, secret, { expiresIn: '1m' });
  console.log(token);
  return token;
  
};

const payload = {
  username: 'labuser',
  role: 'student'
};

const secret = 'Cat';

encrypt(payload,secret)


module.exports = encrypt;
