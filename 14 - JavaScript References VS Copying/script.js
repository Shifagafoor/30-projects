const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

const team = players;
console.log(players, team);

const team2 = players.slice();

const team3 = [].concat(players);

const team4 = [...players];
team4[3] = 'heee hawwww';
console.log(team4);

const team5 = Array.from(players);

const person = {
    name: 'Was Bos',
    age : 80
};

const cap2 = Object.assign({}, person, {number:99, age:12});
console.log(cap2);

const Wes = {
    name : 'Wes',
    age  : 100,
    social: {
        twitter : '@wesbos',
        facebook: 'wesbos.developer'
    }
};

console.clear();
console.log(Wes);

const dev = Object.assign({}, Wes);
const dev2 = JSON.parse(Json.stringify(Wes));

