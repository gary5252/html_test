const nameEL = document.querySelector('#name');
const weightEL = document.querySelector('#weight');
const heightEL = document.querySelector('#height');
const bmibtn = document.querySelector('#bmi-btn');

const tag = document.querySelector('.tag');

function getBmi(height, weight, point = 2) {
    let bmi = (weight / ((height / 100) ** 2)).toFixed(point);
    return bmi;
}

bmibtn.addEventListener('click', () => {
    let bmi = getBmi(heightEL.value, weightEL.value);
    // alert(`${nameEL.value} 's bmi = ${bmi}`)
    if (heightEL.value == '' || weightEL.value == '' || isNaN(bmi)) {
        alert('輸入錯誤');
        return;
    };

    tag.innerHTML = `<h2>${nameEL.value} 's bmi = ${bmi}</h2><br>`;

    if (bmi < 18.5) {
        tag.innerHTML += `體重過低`;
    };
    if (18.5 <= bmi && bmi < 24) {
        tag.innerHTML += `體重正常`;
    };
    if (bmi >= 24) {
        tag.innerHTML += `肥胖`;
    };

});