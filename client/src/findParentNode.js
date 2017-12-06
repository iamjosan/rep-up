function findParentNode(node, attrName, attrVal) {
  if (!node.parentNode[attrName].includes(attrVal)) {
    return findParentNode(node.parentNode, attrName, attrVal);
  }
  return node.parentNode;
}

export default findParentNode;
