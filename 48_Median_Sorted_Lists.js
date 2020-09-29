/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    let merged = [];

    let length = nums1.length + nums2.length;

    let left;
    let right;

    if(length % 2 === 0) {
        // Even number, we need 2 points
        left = Math.floor(length / 2) - 1;
        right = Math.floor(length / 2);
    } else {
        left = Math.floor(length / 2);
        right = left;
    }
    
    while(nums1.length || nums2.length) {
        if(nums1[0] > nums2[0]) {
            merged.push(nums2[0]);
            nums2.splice(0,1);
        } else if (nums1[0] === nums2[0]) {
            merged.push(nums1[0], nums2[0]);
            nums1.splice(0,1);
            nums2.splice(0,1);
        } else if (nums1[0] < nums2[0]) {
            merged.push(nums1[0]);
            nums1.splice(0,1);
        } else if (nums1[0] && !nums2[0]) {
            merged.push(nums1[0]);
            nums1.splice(0, 1);
        } else if (nums2[0] && !nums1[0]) {
            merged.push(nums2[0]);
            nums2.splice(0, 1);
        }

        if(merged.length > right) {

            merged.length = right + 1;

            if(left != right) {
                return ((merged.pop() + merged.pop()) / 2);
            } else {
                return merged.pop();
            }
        }
    }
    
};


// console.log(findMedianSortedArrays([1,3], [2])); // 2.0000
// console.log(findMedianSortedArrays([1,2], [3,4])); // 2.5000
// console.log(findMedianSortedArrays([0,0],[0,0])); // 0.0000
// console.log(findMedianSortedArrays([],[1])); // 1.0000
// console.log(findMedianSortedArrays([2],[])); // 2.0000
// console.log(findMedianSortedArrays([1,2,3,4], [3,4,5,6]));

console.log(findMedianSortedArrays([1,2],[1,2])); // 1.5000
