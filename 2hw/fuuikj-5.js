function getRootProperty(d, v) {
    if (Array.isArray(d)) return d.includes(v);
    for (let x in d) if (getRootProperty(d[x], v)) return x;
    return null;
  }
  const object = {
    "r1n": {
        "mkg": {
            "zma": [21, 45, 66, 111],
            "mii": {
                "ltf": [2, 5, 3, 9, 21]
             },
             "fv": [1, 3, 6, 9]
         },
         "rmk": {
             "amr": [50, 50, 100, 150, 250]
         }
    },
    "fik": {
        "er": [592, 92, 32, 13],
        "gp": [12, 34, 116, 29]
    }
};

console.log(getRootProperty(object, 250)); 
console.log(getRootProperty(object, 116)); 
console.log(getRootProperty(object, 111)); 
console.log(getRootProperty(object, 999)); 