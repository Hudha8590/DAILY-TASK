
//QS:find THE SUM OF TWO NUMBERS FROM AN ARRAY:
function targets(nums,target){
    for(i=0;i<=nums.length;i++){
        for(j=i+1;j<=nums.length;j++)
            if(nums[i]+nums[j]===target){
console.log(i,j) 
            }
    }

}
targets([2,7,11,15],9)