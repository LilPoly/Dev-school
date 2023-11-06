function groupAnagrams(words){
    let groups = {};
    words.forEach(function(w){
    let s = w.split('').sort().join('');
    groups[s] = (groups[s] || []).concat(w);
    });
    return Object.keys(groups).map(function(k) {return groups[k];});
}
console.log(groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]));