function getAge (people) {
    return people.died - people.born;
}

function getPeopleByName (name, data)
{
    return data.find(people => people.name === name);
}
function getAgeDiffBetweenMother (people, data){

const mother = getPeopleByName(people.mother, data);
if (!mother) { return null;}
return getAge(mother) - getAge(people);

}
// сумма элементов массива
function getSum(arr) {
    return arr.reduce (
        (sum, number) => sum + number,
        0 // начинается все с нуля
    );
}
//функция нахождения среднего чмсла в массиве
function getAverage(arr) {
    return getSum(arr) / arr.length;
}
// массив разниц
function task1 (data) {
    const ageDiffs = data
        .map(people => getAgeDiffBetweenMother (people, data))
        .filter(age => age !== null)
        .map (ageDiff => Math.abs(ageDiff));
        return getAverage( ageDiffs );
}
function getParents ( people, data ) { //получаем на вход человека people и массив data, где я буду его искать
    const mother = getPeopleByName(people.mother, data),
         father = getPeopleByName(people.father, data);
    if (!mother || !father) { return null; }
    return {father, mother}
}
function task2 (data) { // для каждого элемента массива выполним поиск родителей 
    const familyDiff= data.map (people => getParents(people, data))
    .filter (parents => parents !== null)
    .reduce (
        (family, {mother, father}) => {
            const familyKey = `${mother.name} - ${mother.born} - ${father.name} - ${father.born}`;
            if (!family[familyKey]) {
            family [familyKey] = Math.abs(getAge(mother) - getAge(father)) }
            return family;
        },
            {}
        );
        return getAverage( Object.values(familyDiff) );
   
}
function getChildren (motherName, fatherName, data) {
    return data.filter (people => people.mother === motherName && people.father === fatherName);
}

function task3 ( data ) {
    const familys = data.map (people => getParents(people, data))
        .filter (parents => parents !== null)
        .map(family => {
            family.children = getChildren(family.mother.name, family.father.name, data);
            return family;
            })
            childrenCounts = familys.map (
                family => family.children.length
            );
            return getAverage( childrenCounts );
    console.log (familys, childrenCounts);   
}
function getCentury ( data ) {
    const century = data.map (people => Math.ceil (people.died / 100));
    console.log (century);
}

function task4 ( data ) {
   const centuryPeople = data.map (people => getCentury(data));
   console.log (centuryPeople);
}
console.log(task1 (ANCESTRY_DATA )); //18.166666666666668
console.log(task2 (ANCESTRY_DATA )); //13.5
console.log(task3(ANCESTRY_DATA)); //1.5555555555555556
getCentury(ANCESTRY_DATA);
task4(ANCESTRY_DATA);
//console.log(getParents(ANCESTRY_DATA[0], ANCESTRY_DATA));
//console.log(getAgeDiffBetweenMother(ANCESTRY_DATA[0], ANCESTRY_DATA ));
//console.log(getAge(ANCESTRY_DATA[0]));
//console.log(getPeopleByName(ANCESTRY_DATA[0].mother, ANCESTRY_DATA ));

