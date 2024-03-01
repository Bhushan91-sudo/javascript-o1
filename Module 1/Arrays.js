//Arrays provides you an orderd collection of data

var arr =  [12 , 'Ferrari' , true , 12.4]

//console.log(arr)
//accesing the element

var a = arr[1]

console.log(arr[3])

//replacing element of an array by using index
arr[1] = 'Bentley'

console.log(arr)

console.log('The length of the array is' , arr.length)


//inbuilt js array method

var arr2 = [12 , 14 , 56 , 57]

//pop method
arr2.pop()

console.log('popped array' ,arr2)

//push method

arr2.push(100)

console.log('Push array' , arr2)

// shift method

var d = arr2.shift()
console.log(d)

console.log(arr2)