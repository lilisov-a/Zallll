// 1. Функция для генерации диапазона чисел
function getRange(start, end, step = 1) {
    const result = [];
    if (step === 0) {
        console.error("Шаг не может быть равен 0.");
        return [];
    }

    if (start < end) {
        if (step < 0) step = -step;
        for (let i = start; i <= end; i += step) {
            result.push(i);
        }
    } else {
        if (step > 0) step = -step;
        for (let i = start; i >= end; i += step) {
            result.push(i);
        }
    }

    return result;
}

// 2. Функция для переворота строки
function myReverse(str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

// 3. Функция для маскировки номера карты
function maskCard(cardNumber, maskChar = 'X') {
    const cardStr = String(cardNumber);
    const len = cardStr.length;
    
    if (len <= 10) {
        return cardStr;
    }

    const firstSix = cardStr.slice(0, 6);
    const lastFour = cardStr.slice(len - 4);
    const maskedPart = maskChar.repeat(len - 10);
    
    return firstSix + maskedPart + lastFour;
}

// Примеры вызовов, чтобы проверить, что всё работает
console.log(getRange(1, 10));
console.log(myReverse("12345"));
console.log(maskCard("4815154823541789"));