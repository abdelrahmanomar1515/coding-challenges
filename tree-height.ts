class TreeNode {
  left?: TreeNode;
  right?: TreeNode;
  constructor(public data: number) {}
}

class BinarSearchTree {
  constructor(public root?: TreeNode) {}
  insert(data: number) {
    const newNode = new TreeNode(data);
    if (this.root == null) {
      this.root = newNode;
      return this;
    } else {
      let cur = this.root;
      while (true) {
        if (data < cur.data) {
          if (!cur.left) {
            cur.left = newNode;
            return this;
          } else {
            cur = cur.left;
          }
        } else if (data > cur.data) {
          if (!cur.right) {
            cur.right = newNode;
            return this;
          } else {
            cur = cur.right;
          }
        }
      }
    }
  }
}

function bfs(tree: BinarSearchTree) {
  let qu = [tree.root];
  while (qu.length) {
    const cur = qu.shift();
    if (cur.left) qu.push(cur.left);
    if (cur.right) qu.push(cur.right);
  }
}
const tree = new BinarSearchTree();

const input = "3 5 2 1 4 6 7".split(" ");
input.forEach((item) => tree.insert(parseInt(item)));
console.dir(tree, { depth: 10 });
console.log(bfs(tree));
