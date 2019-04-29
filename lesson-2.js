/* 1.

В данном примере результат зависит от положения оператора инкремента относительно операнда. В положении слева инкреметипрование
происходит до вычисления правой части в операции присваивания, справа - после.

 */

/* 2.

x = 3. Так как оператор присваивания с операцией имеет меньший приоритет.

 */

// 3.

var a = -2;
var b = -4;

if (a >= 0 && b >= 0) {
    alert(a - b);
}
else if  (a < 0 && b < 0) {
    alert(a * b);
}
else {
    alert(a + b);
}

// 4.

var a = Math.round(Math.random()*15);
switch (a) {
    case 1:
        alert(1);
    case 2:
        alert(2);
    case 3:
        alert(3);
    case 4:
        alert(4);
    case 5:
        alert(5);
    case 6:
        alert(6);
    case 7:
        alert(7);
    case 8:
        alert(8);
    case 9:
        alert(9);
    case 10:
        alert(10);
    case 11:
        alert(11);
    case 12:
        alert(12);
    case 13:
        alert(13);
    case 14:
        alert(14);
    case 15:
        alert(15);
}

// 5.

function sum(x, y) {
    return x + y;
}

function diff(x, y) {
    return x - y;
}

function mult(x, y) {
    return x * y;
}

function div(x, y) {
    return x / y;
}

// 6.

function mathOperation(x, y, operation) {
    switch (operation) {
        case "sum":
            return sum(x, y);
            break;
        case "difference":
            return diff(x, y);
            break;
        case "multiplication":
            return mult(x, y);
            break;
        case "division":
            return div(x, y);
            break;
        default:
            alert("Такой операции не существует");
    }
}

/* 7.

Null не равен 0. Все остальные сравнения выдают результат false. 0 - это значение, null - отсутствие значения. Поэтому их сравнение не имеет смысла.

 */

// 8.

function power(val, pow) {
    if (pow > 1) {
        return val = val * power(val, pow - 1);
    }
    else {
        return val;
    }
}

alert(power(2, 3));