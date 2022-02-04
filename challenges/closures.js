/**
 * create a function that is called extractText that accepts an object with values of type string
 * the extractText function should return a function that accepts a key and returns the value of the key in the object
 */

// EXAMPLE
/**
 * const obj = {
 *    foo: 'bar',
 *   baz: 'qux',
 * }
 * const getText = extractText(obj);
 * getText('foo'); // => 'bar'
 */

const data = {
    foo: 'bar',
    baz: 'qux',
    quux: 'corge',
}

// CODE YOUR SOLUTION BELOW

function extractText(data){
    return (key)=>{
        return data[key];
    }
}
