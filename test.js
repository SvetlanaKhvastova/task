fetch("https://ipinfo.io/json?token=625d68b69a156c")
    .then((response) => response.json())
    .then((jsonResponse) => {
        console.log(jsonResponse)
        if (jsonResponse.postal) {
            console.log(jsonResponse)
        }
    })