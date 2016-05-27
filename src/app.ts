import '!!file?name=[name].[ext]!./index.html';

async function getData() {
    let result = await simulateNetwork();

    return result;
}

function simulateNetwork() {
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            resolve('some fake data');
        }, 2000);
    });
}

let btn = document.querySelectorAll('button')[0];
let resultDiv = document.querySelector('#result');

btn.addEventListener('click', async (event) => {
    let result = await getData();
    
    resultDiv.innerHTML = result;
});
