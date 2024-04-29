const url = "http://localhost:9999/api/Project/";
let options = {
	method: "Get",
};

export default function getProjects() {
	return fetch(url, options)
		.then((response) => {
			return response.json();
		})
		.catch((error) => {
			return error;
		});
}
