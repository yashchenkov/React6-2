export default async function connector(method, id = undefined, data = {}) {
	console.log(data);
  if(method === 'GET') {
  	const response = await fetch('http://localhost:7777/notes', {
  	  method: method
    });
    const list = await response.json();
    console.log(list);
    return list;
  } else if(method === 'POST') {
    const response = await fetch('http://localhost:7777/notes', {
  	  method: method,
  	  body: JSON.stringify(data)
    });
    console.log(response);
    //const json = await response.json();
    //return json;
  } else if(method === 'DELETE') {
  	const response = await fetch(`http://localhost:7777/notes/${id}`, {
  		method: method
  	});
    const json = await response.json();
    return json;
  }
}