// Assign positive or negative weight
// to allow random sorting of array elements
export default function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
