// Laregst element in an array
function largestElement(arr) {
    let largest = arr[0]
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
                // console.log(arr[i])
        }
    }
    // return largest;
    console.log(largest)
}
let arr1 = [3, 2, 1, 4, 5]
largestElement(arr1)

// Second Laregst element in an array
function secondLargest(arr) {

    let sortedArray = arr.sort()
    let largest = sortedArray[arr.length - 1]

    for (let i = sortedArray.length - 2; i >= 0; i--) {
        if (sortedArray[i] != largest) {
            secondLargest = sortedArray[i];
            break;
        }
    }
    console.log(secondLargest)
}

let arr = [2, 3, 4, 1, 4, 7, 7]
secondLargest(arr)