// Fix the code below

// Current output: 5,5,5,5,5
// Expected output: 0,1,2,3,4

// NOTE: You cannot remove the setTimeout function.

// LEVEL: INTERMEDIATE

for(var i = 0; i < 5; i ++){
	setTimeout(() => console.log(i))
}

// CODE YOUR SOLUTION BELOW
for(var i = 0; i < 5; i ++){
    let value = i;
	setTimeout(() => console.log(value))
}