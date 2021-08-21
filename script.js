const days = [['today', 'day'], ['tomorrow', 'day'], ['next week', 'week'],
['next month', 'month'], ['next year', 'year']];
const inThe = ['will be', 'will not be'];
const future = ['the best', 'the worst'];

const n1 = Math.floor(Math.random() * days.length);
const n2 = Math.floor(Math.random() * inThe.length);
const n3 = Math.floor(Math.random() * future.length);
function prophecy(n1, n2, n3)
{
    let str = (days[n1][0] + ' ' + inThe[n2] + ' ' + future[n3] +
    ' ' + days[n1][1]);
    return str;
}

console.log('Prophet says that ' + prophecy(n1, n2, n3) + ' in your life.');