class TrieNode {
  children: Record<string, TrieNode> = {};
  endOfWord = false;
}

class Trie {
  root = new TrieNode();
  insert(word: string) {
    let cur = this.root;
    for (let char of word) {
      if (!cur.children[char]) cur.children[char] = new TrieNode();
      cur = cur.children[char];
    }
    cur.endOfWord = true;
  }

  search(word: string) {
    let cur = this.root;
    for (let char of word) {
      if (!cur.children[char]) return false;
      cur = cur.children[char];
    }
    return cur.endOfWord;
  }

  startsWith(word: string) {
    let cur = this.root;
    for (let char of word) {
      if (!cur.children[char]) return false;
      cur = cur.children[char];
    }
    return !!cur;
  }

  // find(word: string) {
  //   let results = [];
  //   let cur = this.root;
  //   let search = "";
  //   for (let char of word) {
  //     search += char;
  //     const subtree = cur.children[char];
  //     if (subtree) {
  //       subtree.print().forEach
  //       results.push(search + subtree.print());
  //     }
  //     cur = subtree;
  //   }
  //   return results;
  // }
}
let tr = new Trie();
tr.insert("abdoo");
tr.insert("ahme");
tr.insert("dada");
tr.insert("abdee");
