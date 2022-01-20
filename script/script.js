function isMultipleOf(multiple, number) {
    if (number % multiple === 0) {
        return true;
    } else {
        return false;
    }
}

function fillTable(lengthOfTable) {
    let list = [];
    for (let i = 1; i <= lengthOfTable; i++) {
        list.push(i);
    }
    return list;
}

function fizzBuzz(list) {

    for (let i = 0; i < list.length; i++) {
        if (isMultipleOf(3, list[i])) {
            if (isMultipleOf(5, list[i])) {
                console.log(`${list[i]} -> FIZZBUZZ !!!`)
            } else {
                console.log(`${list[i]} -> FIZZ`);
            }
        }
        if (isMultipleOf(5, list[i])) {
            console.log(`${list[i]} -> BUZZ !!!`)
        }
    }
}

list = fillTable(100);

fizzBuzz(list);

console.log("coucou")