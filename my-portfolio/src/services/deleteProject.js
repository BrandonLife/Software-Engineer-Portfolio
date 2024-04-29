let options = {
	method: "DELETE",
};

export default function DeleteProject(data) {
	console.log(data, "DElETEPOST DATA");
	let url = "http://localhost:9999/api/Project/" + data;
	console.log(url);
	return fetch(url, options)
		.then((response) => {
			//console.log(response)
			return response.json();
		})
		.catch((error) => {
			return error;
		});
}
