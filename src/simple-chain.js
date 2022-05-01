const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number'
    || position % 1 !== 0
    || position < 1
    || position > this.chain.length) {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`)
    }

    this.chain = this.chain.filter((_, index) => index + 1 != position);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let chainString = '';
    for(let i = 0; i < this.chain.length; i++) {
      chainString += `( ${String(this.chain[i])} )~~`
    }
    this.chain = [];
    return chainString.slice(0, -2);
  }
};

module.exports = {
  chainMaker
};
