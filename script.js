const days = [['today', 'day'], ['tomorrow'], ['day'], ['next week', 'week'],
['next month', 'month'], ['next year', 'year']];
const inThe = ['will be', 'will not be'];
const future = ['the best', 'the worst'];

console.log('Prophet says that ' + prophecy(n1, n2, n3) + ' in your life.');

const n1, n2, n3;
n1 = Math.floor(Math.random() * days.length);
n2 = Math.floor(Math.random() * inThe.length);
n3 = Math.floor(Math.random() * future.length);

function prophecy(n1, n2, n3)
{
    console.log(days[n1, 0] + ' ' + inThe[n2] + ' ' + future[n3] +
    ' ' + days[n1, 1]);
}