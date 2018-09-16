function grow(x){
  return x.sort((a, b) => a - b).reduce((acc, curr) => acc * curr);
}