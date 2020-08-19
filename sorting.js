timeMeasure = (startFunctionTime) => {
   return  (Date.now() - startFunctionTime);
}

class CArray {

	constructor(numElements) {
		this.numElements = numElements;
		this.pos = 0;
		this.data = [];
		this.gaps = [5,3,1];

		for(let i =0; i < numElements; ++i) this.data[i] = i;
	}

	setData() {
		for(let i=0; i < this.numElements; ++i) this.data[i] = Math.floor(Math.random() * this.numElements +1);
	}

	clear() {
		for(let i=0; i < this.numElements; ++i) this.data[i] = 0;
	}

	insert(element) {
		this.data[this.pos++] = element;
	}

	toString() {
		return this.data.join();
	}

	swap(arr, index1, index2) {
		let temp = arr[index1];
		arr[index1] = arr[index2];
		arr[index2] = temp;
	}

	standartSort() {
		let t = this.data.map(x => x);
		return t.sort();
	}

	// sorting algorithms
	bubbleSort() {
		let tmpArray = this.data.map(x => x);
		let numElements = tmpArray.length, temp;
		for(let outer = numElements; outer >= 2; --outer) {
			for(let inner = 0; inner <= outer-1; ++inner) {
				(tmpArray[inner] > tmpArray[inner+1]) ? this.swap(tmpArray, inner, inner+1) : null;
			}
		}
		return tmpArray;
	}

	selectionSort() {
		let min, temp;
		let tmpArray = this.data.map(x => x);
		for(let outer = 0; outer <= tmpArray.length - 2; ++outer) {
			min = outer;
			for(let inner = outer + 1; inner <= tmpArray.length - 1; ++inner) {
				(tmpArray[inner] < tmpArray[min]) ? min = inner : undefined;
			}
			this.swap(tmpArray, outer, min);
		}
		return tmpArray;
	}

	insertionSort() {
		let temp, inner, tmpArray = this.data.map(x => x);
		for(let outer = 1; outer <= tmpArray.length - 1; ++outer) {
			temp = tmpArray[outer], inner = outer;
			while(inner > 0 && (tmpArray[inner-1] >= temp)) {
				tmpArray[inner] = tmpArray[inner-1], --inner;
			}
			tmpArray[inner] = temp;
		}
		return tmpArray;
	}

	// advanced sorting algorithms++
	setGaps(arr) {
		this.gaps = arr;
	}

	shellsort() {
		let tmpArray = this.data.map(x => x);
		let  j;
		for(let g =0; g<this.gaps.length; ++g) {
			for(let i = this.gaps[g]; i<tmpArray.length; ++i) {
				let temp = tmpArray[i];
				for(j = i; j >= this.gaps[g] && tmpArray[j - this.gaps[g]] > temp; j -= this.gaps[g]) {
					tmpArray[j] = tmpArray[j - this.gaps[g]];
				}
				tmpArray[j] = temp;
			}
		}
		return tmpArray;
	}

	mergeSort() {
		if (this.data.length < 2) return this.data;
		let t = this.data.map(x => x),
			step = 1, left, right;

		while(step < t.length) {
			left = 0, right = step;
			while( right + step <= t.length) {
				mergeArrays(t, left, left+step, right, right+step);
				left = right +step;
				right = left + step;
			}

			if(right < t.length) {
				mergeArrays(t, left, left+step, right, t.length);
			}
			step *= 2;
		}

		function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
			let rightArr = new Array(stopRight - startRight +1),
				leftArr = new Array(stopLeft - startLeft +1), 

			k = startRight;
			for(let i = 0; i < (rightArr.length - 1); ++i) {
				rightArr[i] = arr[k];
				++k;
			}

			k = startLeft;
			for(let i = 0; i < (leftArr.length - 1); ++i) {
				leftArr[i] = arr[k];
				++k;
			}

			rightArr[rightArr.length -1] = Infinity; // a sentinel value
			leftArr[leftArr.length - 1] = Infinity; // a sentinel value

			let m = 0, n = 0;

			for(let k = startLeft; k < stopRight; ++k) {
				if(leftArr[m] <= rightArr[n]) {
					arr[k] = leftArr[m];
					m++;
				}
				else {
					arr[k] = rightArr[n];
					n++;
				}
			}
		}

		return t;
	}

	quickSort() {
		let t = this.data.map(x => x);

		function qSort(list) {
			if (list.length == 0) return [];

			let lesser = [], greater = [], pivot = list[0];

			for (let i = 1; i < list.length; i++) 
				(list[i] < pivot) ? lesser.push(list[i]) : greater.push(list[i])
			
			//console.log(`Lesser: ${lesser} [Pivot: ${pivot}] Greater: ${greater}`);
			return qSort(lesser).concat(pivot, qSort(greater));
		}

		return qSort(t);
	}

}


// usage

let arr = new CArray(10);
arr.setData();

console.log(`Before: ${arr.toString()}`);

startTime = Date.now();
arr.quickSort()
console.log(`Quick Sort [${timeMeasure(startTime)} milliseconds]`);

startTime = Date.now();
arr.bubbleSort()
console.log(`Bubble Sort [${timeMeasure(startTime)} milliseconds]`);

startTime = Date.now();
arr.selectionSort()
console.log(`Selection Sort [${timeMeasure(startTime)} milliseconds]`);

startTime = Date.now();
arr.selectionSort()
console.log(`Insertion Sort [${timeMeasure(startTime)} milliseconds]`);

startTime = Date.now();
arr.shellsort()
console.log(`Shell Sort [${timeMeasure(startTime)} milliseconds]`);

startTime = Date.now();
arr.mergeSort();
console.log(`Merge Sort [${timeMeasure(startTime)} milliseconds]`);

startTime = Date.now();
arr.standartSort()
console.log(`Built-in JS Sort [${timeMeasure(startTime)} milliseconds]`);

