
export const sort = (prop, arr, asc = true) => {
  prop = prop.split(".");
  let len = prop.length;

  arr.sort((a, b) => {
    let i = 0;
    while (i < len) {
      if (a != -1) {
        a = a[prop[i]] || "";
      }
      if (b != -1) {
        b = b[prop[i]] || "";
      }
      i++;
    }
    if ((asc && a < b) || (!asc && a > b)) {
      return -1;
    } else if ((asc && a > b) || (!asc && a < b)) {
      return 1;
    } else {
      return 0;
    }
  });
  return arr;
};