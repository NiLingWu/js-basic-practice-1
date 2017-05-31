// Write your cade below:
function caclRemaindar(n,m) {
    var a;
    a = n % m;
    return a;
};

function caclSum(array) {
    var s = 0;
    array.forEach ((a)=>{ s += a; });
    return s;
};

function caclSumInConditon(array , n) {
    var s = 0;
    array.forEach((a)=>{
        if(a < n)
         s += a;
    });
    return s;
};

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}