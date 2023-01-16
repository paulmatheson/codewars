function deleteNth(arr, n) {
    let indexMap = [] // Track index where the count surpasses n
    let checkedNums = [] // Track which indexes have been checked so duplicates aren't pushed to indexMap

    for (let i = 0; i < arr.length; i++) {
        let count = 0;

        for (let j = 0; j < arr.length; j++) {
            if (!checkedNums.includes(arr[i])) {
                if (arr[i] == arr[j]) {
                    count++
                    if (count > n) {
                        indexMap.push(j) // This shows we have surpassed n
                    }
                }
            }
        }
        checkedNums.push(arr[i])
    }

    // Push values to newArr that aren't in the IndexMap array
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!indexMap.includes(i)) {
            newArr.push(arr[i])
        }
    }

    return newArr
}