function stringAnagram(dictionary, query) {
  let mapOfDict = {};
  let result = [];

  for (let i = 0; i < dictionary.length; i++) {
    const word = dictionary[i];
    const map = createMapFromWord(word);
    const key = createKeyFromMap(map);
    if (mapOfDict[key]) {
      mapOfDict[key] += 1;
    } else {
      mapOfDict[key] = 1;
    }
  }

  for (let q of query) {
    const qAsMap = createMapFromWord(q);
    const key = createKeyFromMap(qAsMap);
    const count = mapOfDict[key] || 0;
    result.push(count);
  }
  return result;
}

function createKeyFromMap(map) {
  return Object.entries(map).sort(([key1], [key2]) => key1.localeCompare(key2));
}

function createMapFromWord(word) {
  let map = {};
  for (let char of word) {
    if (!map[char]) {
      map[char] = 1;
    } else {
      map[char] += 1;
    }
  }
  return map;
}

function objectsEqual(map1, map2) {
  return (
    Object.keys(map1).length === Object.keys(map2).length &&
    [...Object.entries(map1)].every(([key, val]) => map2[key] === val)
  );
}

console.log(
  stringAnagram(
    ["heater", "cold", "clod", "reheat", "docl"],
    ["codl", "heater", "abcd"]
  )
);
