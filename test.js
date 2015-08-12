var label = 'Pushing to Array over 10000 times';
console.time(label);

var arr = [];

for (var i=0; i < 10000; i++)
{
	arr.push(i);
	console.log(i);

}

console.log(arr.length);

console.timeEnd(label);

