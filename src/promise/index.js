const algopasara = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');

        } else {
            reject('Whoops!');
        }
    });
};

algopasara()
    .then(response => console.log(response))
    .catch(err => console.error(err));



const algopasara2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True');
            }, 2000);
        } else {
            const error = new Error('mal ese');
            reject(error);
        }
    });
};



algopasara2()
    .then(response => console.log(response))
    .then(() => console.log('Nomas...'))
    .catch(err => console.error(err));

Promise.all([algopasara(), algopasara2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(err => {
        console.error(err);
    });