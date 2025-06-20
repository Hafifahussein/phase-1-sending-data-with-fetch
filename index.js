function submitData(name, email) {
  const formData = {
    name: name,
    email: email,
  };

  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      // Append ID to the DOM
      const body = document.querySelector("body");
      const newId = document.createElement("p");
      newId.textContent = `New ID: ${data.id}`;
      body.appendChild(newId);
    })
    .catch((error) => {
      // Append error message to the DOM
      const body = document.querySelector("body");
      const errorMessage = document.createElement("p");
      errorMessage.textContent = `Error: ${error.message}`;
      body.appendChild(errorMessage);
    });
}




