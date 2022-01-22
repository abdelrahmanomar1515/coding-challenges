import { readFileSync } from "fs";

function substrCount(n: number, s: string) {
  let count = 0;
  for (let start = 0; start < s.length; start++) {
    let prev: StringAsTuple = new StringAsTuple();
    for (let end = start; end < s.length; end++) {
      const char = s[end];
      prev.add(char);
      // console.log(prev);
      if (prev.isSpecial()) {
        count++;
      }
      if (prev.wontBeSpecial()) {
        break;
      }
    }
  }
  return count;
}

class StringAsTuple {
  private last = "";
  value: [string, number][] = [];

  add(char: string) {
    if (this.last === char) {
      this.value[this.value.length - 1][1]++;
    } else {
      this.value.push([char, 1]);
      this.last = char;
    }
    return this;
  }

  isSpecial(): boolean {
    if (this.value.length === 0) return false;
    if (this.value.length === 1) return true;
    if (this.value.length === 2) return false;
    if (
      this.value.length === 3 &&
      this.value[1][1] === 1 &&
      this.value[0][0] === this.value[2][0] &&
      this.value[0][1] === this.value[2][1]
    ) {
      return true;
    }
    return false;
  }

  wontBeSpecial(): boolean {
    if (this.value.length > 3) return true;
    if (this.value[1]?.[1] > 1) return true;
    return false;
  }
}

// console.log(substrCount(5, "aaaa"));
console.log(
  substrCount(5, readFileSync("./special-string-again.txt", "utf-8"))
);
