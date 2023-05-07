async function esperar(tiempo) {
    const resultado = await new Promise((resolve) => {
    setTimeout(() => {
        resolve(`Esperado ${tiempo} ms`);
        }, tiempo);
    });
    console.log(resultado);
    }

esperar(2000); // Espera 2 segundos antes de mostrar el mensaje    