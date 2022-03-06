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
}

function contacts(queries: string[][]): number[] {
  // Write your code here
}
