export function analyzeArray(arr){
    const stats = {};
    
    stats.average = arr.reduce((acc, cur) => acc + cur) / arr.length
    stats.min = arr.reduce((acc, cur) => acc < cur ? acc : cur);
    stats.max = arr.reduce((acc, cur) => acc > cur ? acc : cur);
    stats.length = arr.length;

    return stats;
}