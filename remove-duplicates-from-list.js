function distinct(a) {
    let uniqueArr = [] // initialize new arr 
    for (let i = 0; i < a.length; i++) { // iterate through passed arr and check if new arr contains
      if (!uniqueArr.includes(a[i])) {
      uniqueArr.push(a[i]) // if not, push to add only unique values
      }
    }
    return uniqueArr;
  }