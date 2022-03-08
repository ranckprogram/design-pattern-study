const voList = [
  { value: "day", key: "abc" },
  {
    value: "month",
    key: "bcd",
  },
];

function normalizeQuery(list, name) {
  let result = [];

  list.forEach((item, index) => {

    for(key in item) {
      result.push(`${name}[${index}].${key}=${item[key]}`)
    }
  });

  return result.join("&")
}


console.log(normalizeQuery(voList, "voList"));
