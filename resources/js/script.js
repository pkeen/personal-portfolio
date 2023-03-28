/* Make extra text appear onclick */


const displayMoreInfo = event => {
    if (event.currentTarget.style.height === '300px') {
        moreInfo = event.currentTarget.getElementsByClassName('more-info');
        event.currentTarget.style.height = '450px';
        event.currentTarget.style.gridTemplateRows = '2fr 3fr 3fr 2fr 1fr;'
        for (let i of moreInfo) {
            i.style.display = 'block';
        }
    } else {
        moreInfo = event.currentTarget.getElementsByClassName('more-info');
        event.currentTarget.style.height = '300px';
        event.currentTarget.style.gridTemplateRows = '2fr 3fr 2fr 1fr;'
        for (let i of moreInfo) {
            i.style.display = 'none';
        }
    }
}

function turnYellow(event) {
    event.currentTarget.style.backgroundColor = 'yellow';
}

let portfolio = document.getElementById('portfolio');

const projectCards = portfolio.children;

for (let p of projectCards) {
    p.addEventListener('click', displayMoreInfo);
}