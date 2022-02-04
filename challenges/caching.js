/**
 * Write a function called getCachedData that accepts a cache object and a key as arguments.
 * The function should return the value of the key in the cache object and should not make any API calls.
 * If the key does not exist in the cache, the function should call the fakeAPI function (acts like a real API)
 * it should get the result of the API call and store it in the cache object with the key as the key and the result as the value.
 * the value should also be returned.
 *
 * NOTE:
 * - When retrieving a value from the cache you should console.log("Retrieving data from cache")
 * - When you retrieve a value from the API you should console.log("Retrieving data from API")
 */

// Example:
// const cache = { foo: 'bar' };
// getCachedData(cache, 'foo'); // => 'bar' returned because it was found in cache
// getCachedData(cache, 'baz'); // => the value for'baz' not found so the API was called and 'baz' was added to the cache
// cache = { foo: 'bar', baz: 'qux' };

// LEVEL: INTERMEDIATE

const fakeAPI = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
        foo: 'bar',
        baz: 'qux',
    }
}

// CODE YOUR SOLUTION BELOW

async function getCachedData(cache, key){
    let value = cache[key];
    if(value === undefined){
        value = await fakeAPI(key);
        cache[key] = value;
    }
    return value;
}