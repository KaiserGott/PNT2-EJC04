function esperar(tiempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(`Esperado ${tiempo} ms`);
        }, tiempo);
        });
    }

esperar(2000)
    .then((resultado) => {
        console.log(resultado);
        })
    .catch((error) => {
        console.error('Error:', error);
    });