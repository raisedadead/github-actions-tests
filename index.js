require('dotenv').config();
console.log(process.env.HELLO_WORLD);
console.log(process.env.HELLO_SECRET || 'There is no secret');