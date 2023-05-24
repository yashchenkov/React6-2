export default async function connector(method, data = {} ,id = undefined, ) {
	console.log(id, method, data);
  if(method === 'GET') {
  	const response = await fetch('http://localhost:7777/notes', {
  	  method: method
    });
    const list = await response.json();
    console.log(list);
    return list;
  } else if(method === 'POST') {
    console.log(data)
    if(data.content !== ''){ 
    const response = await fetch('http://localhost:7777/notes', {
  	  headers: {
        "Content-Type": "application/JSON"
      },
      method: method,
  	  body: JSON.stringify(data)
    });
    console.log(response);
    //const json = await response.json();
    //return json;
  } else {
    console.error('НЕЛЬЗЯ ВВОДИТЬ ПУСТЫЕ ДАННЫЕ')
  }
  } else if(method === 'DELETE') {
  	const response = await fetch(`http://localhost:7777/notes/${data}`, {
  		method: method
  	});
    const json = await response.json();
    return json;
  }
}