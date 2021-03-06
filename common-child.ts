function commonChild(s1: string, s2: string): number {
  const s2AsMap: Record<string, number[]> = {};
  for (let i = 0; i < s2.length; i++) {
    const char = s2[i];
    s2AsMap[char] ? s2AsMap[char].push(i) : (s2AsMap[char] = [i]);
  }

  let max = 0;
  for (let i = 0; i < s1.length; i++) {
    let curLength = 0;
    let s2Pointer = -1;
    let child = "";
    const seq = [];
    for (let j = i; j < s1.length; j++) {
      const char = s1[j];
      const indexAtS2 = getCharIndexFromMap(char, s2Pointer, s2AsMap);
      if (indexAtS2 != undefined) {
        s2Pointer = indexAtS2;
        curLength++;
        seq.push(indexAtS2);
        child = child + char;
      }
    }
    console.log(seq);
    max = Math.max(curLength, max);
  }
  return max;
}

function getCharIndexFromMap(
  char: string,
  minIndex: number,
  map: Record<string, number[]>
): number | undefined {
  if (map[char]) {
    return map[char].find((index) => index > minIndex);
  }
  return;
}

// console.log(commonChild("NOHARAAA", "SHINCHAN"));
// console.log(commonChild("ABCD", "ABDC"));
// console.log(commonChild("ABCDEF", "FBDAMN"));
// console.log(commonChild("HARRY", "SALLY"));
// console.log(
//   commonChild(
//     "APMCTKBUKYRGZPAUVZEBVUXRGDVITOYXWQWRVCSXESMEHQLHPDJQWETAWQVSBRRNRRFDLFTRXOTKQHFTYAZSGBORDNAMUAJTPVOKERLVOLEALDQQLUDCUIRXJHQEZBRWYPFJXNTPELEZHNJILIZVZLYQJDFYSYQNRFFAOYXHQBQVRLFDIIOGWKQIZGVELYOUKZBKMHVYGIKIPSEMWSCWYOJTHOQKMLBAIZYNAKYNCXKDTTESODDAEAHKCDHCJYAHERACMLYQHXIRDFUSRTZDNVHSYFKCSPPYSLHOGIBTNUJTZQWVTHKUNDNWZADMATSUXEISCACQNQXIHNTXGCZUGIGBDONYTUXAXFINAYGZJVDCTZCWPGFNQDPERUCNJUXIFDSQHULYPZRNUOKMLMMQAJMLKCHJMEFJVRYZIPFQOBSDPAITHGMNKROCWJEGESCGOIUOQHOYUEQNPJPBMCNRZUHOSQNSUNCSTVQVWFGMUFJZGMEUVUPH",
//     "JUVSDRRSHFGSSLLLZEPJDVAWDPKQBKUHHOZFFXKQMGAACZUYOMNPHWGTYZWQGSMNYXWNFYNOIVVMPZXUNKJQYBYJINBOHXUWIVRTVLEKCOPDMTKTGDBWECDAVPMLHQLERZHDVZJZODPSAPGSRWJXNGFEBQBLTLNDIEGFHEGHJWFOIYXRUJMODSNXUFWBIJJMXTFMUKQEYPNBTZFEJNLDNWCGQLVUQUKGZHJOKZNPMUYEQLEYNNORKJQAMSTHTBCCPQTTCPRZATWNJQJXPODRXKIWDOFUBZVSDTAPFRMXJBJMUGVRZOCDUIPXVEGMRQNKXDKNWXMTNDJSETAKVSYMJISAREEJPLRABMXJSRQNASOJNEEVAMWCFJBCIOCKMHCMYCRCGYFNZKNALDUNPUSTSWGOYHOSWRHWSMFGZDWSBXWXGVKQPHGINRKMDXEVTNNZTBJPXYNAXLWZSBUMVMJXDIKORHBIBECJNKWJJJSRLYQIKKPXSNUT"
//   )
// );
console.log(
  commonChild(
    "FRVIFOVJYQLVZMFBNRUTIYFBMFFFRZVBYINXLDDSVMPWSQGJZYTKMZIPEGMVOUQBKYEWEYVOLSHCMHPAZYTENRNONTJWDANAMFRX",
    "ELGGYJWKTDHLXJRBJLRYEJWVSUFZKYHOIKBGTVUTTOCGMLEXWDSXEBKRZTQUVCJNGKKRMUUBACVOEQKBFFYBUQEMYNENKYYGUZSP"
  )
);
