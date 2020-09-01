/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    if(!n) {
        return nums1;
    }
    
    
    let i = 0;
    let j = 0;

    for(let a = nums1.length - 1; a >= m; a--) {
        nums1[a] = null;
    }
    
    while(i < m + n && j < n) {
        let num1 = nums1[i];
        
        let num2 = nums2[j];

        if(num1 === null) {
            nums1[i] = nums2[j];
            i++;
            j++;
        } else if(num1 === num2) {
            
            nums1 = shiftArray(nums1, i);
            nums1[i] = nums2[j];
            
            i += 2;
            j++;
            
        } else if (num1 < num2) { 
            i++;
        } else {
            nums1 = shiftArray(nums1, i);
            nums1[i] = nums2[j];
            j++;
            i++;
        }
    }
    
};

function shiftArray(array, index) {
    for(let i = array.length - 1; i > index; i--) {
        array[i] = array[i-1];
        array[i-1] = 0;
    }
    return array;
}

// Use this implementation.
//  Starting at the back removes the shifting step
//  and allows this to be done in linear time with no extra space
var linear = function(nums1, m, nums2, n) {
    let idx1 = m - 1, idx2 = n - 1, idx3 = m + n - 1;
    while (idx2 >= 0) {
      nums1[idx3--] = nums1[idx1] > nums2[idx2]
        ? nums1[idx1--]
        : nums2[idx2--];
    }
  };

let num1 = [-1,0,0,3,3,3,0,0,0];
let num2 = [1,2,2]

linear(num1, num1.length, num2, num2.length);

console.log(num1);