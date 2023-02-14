// Convierte la siguiente promesa para esperar a ejecutar el console usando async-await.

const runTimeOut = async () => {
    const promise = await new Promise(async (resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    }).then(() => {console.log('Time out!')})
};

runTimeOut();

