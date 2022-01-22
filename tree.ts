class TreeNode {
  left?: TreeNode;
  right?: TreeNode;
  constructor(public value: any) {}
}

class BinarySearchTree {
  root?: TreeNode;
  insert(value: number) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let cur = this.root;
      while (cur) {
        if (value < cur.value) {
          if (!cur.left) {
            cur.left = newNode;
            return this;
          } else {
            cur = cur.left;
          }
        } else {
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
  getHeight(node: TreeNode | undefined = this.root): number {
    if (!node) return 0;
    if (!node.left && !node.right) return 0;
    const leftHeight = node.left ? this.getHeight(node.left) : 0;
    const rightHeight = node.right ? this.getHeight(node.right) : 0;
    return 1 + Math.max(rightHeight, leftHeight);
  }
}

let tree = new BinarySearchTree();
const input = "3 5 2 1 4 6 7".split(" ");
input.forEach((el) => tree.insert(parseInt(el)));
console.log(tree.getHeight());
