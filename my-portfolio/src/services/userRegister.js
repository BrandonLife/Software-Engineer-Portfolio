const url = "http://localhost:9000/Api/User/register";
let options = {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
		'Access-Control-Allow-Origin':"http://localhost:3000",
		'Access-Control-Allow-Credentials': true
	},
};

export default function userRegister(data) {
	console.log(data, "userRegister data");
	options.body = JSON.stringify(data);
	console.log(options);
	return fetch(url, options)
		.then((response) => {
			console.log(response);
			return response.json();
		})
		.catch((error) => {
			console.log(error);
			return error;
		});
}
