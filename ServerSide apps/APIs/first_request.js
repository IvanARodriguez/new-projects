//const request = require('request');
const rp = require('request-promise');

rp('https://jsonplaceholder.typicode.com/users/1')
.then((body) => {
	const parsedData = JSON.parse(body);
	console.log(`${parsedData.name} lives in ${parsedData.address.city} and the phone number is ${parsedData.phone}`);;
})
.catch((err) => {
	console.log('error!', err);
});