const swap = (array, index1, index2) => {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  };
  
  const shuffle = (array, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) {
      let index1 = Math.floor(Math.random() * array.length);
      let index2 = Math.floor(Math.random() * array.length);
      swap(array, index1, index2);
    }
  };
  
  const bubble_sort = (array) => {
    let len = array.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1; j++) {
        if (array[j] > array[j + 1]) {
          swap(array, j, j + 1);
        }
      }
    }
    return array;
  };
  
  const selection_sort = (array) => {
    let len = array.length;
    for (let i = 0; i < len; i++) {
      let minIndex = i;
      for (let j = i + 1; j < len; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        swap(array, i, minIndex);
      }
    }
    return array;
  };
  
  const quick_sort = (array, low, high) => {
    if (low < high) {
      let pivotIndex = particionamento(array, low, high);
      quick_sort(array, low, pivotIndex - 1);
      quick_sort(array, pivotIndex + 1, high);
    }
    return array;
  };
  
  const particionamento = (array, low, high) => {
    let pivot = array[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (array[j] < pivot) {
        i++;
        swap(array, i, j);
      }
    }
    swap(array, i + 1, high);
    return i + 1;
  };
  