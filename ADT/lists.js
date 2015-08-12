function List() {
  this.data = [];
	this.listSize = listSize;
  this.pos = 0;
  this.clear = clear;
  this.find = find;
  this.toString = this.data.toString();
  this.insert = insert;
  this.append = append;
  this.remove = remove;
//  this.front = front;
//  this.end = end;
  this.previous = previous;
  this.next = next;
  this.hasPrevious = hasPrevious;
  this.hasNext = hasNext;
//  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.contains = contains;
}

function clear() {
  return this.data = [];
}

function listSize() {
  return this.data.length;
}

function append(element) {
  return this.data.push(element);
}

function find(element) {
  for (var i = 0; i < this.listSize(); ++i) {
    if (this.data[i] === element) {
      return i;
    }
  }
  return -1;
}

function insert(element, after) {
  var pos = this.find(after);
  if (!this.listSize()) {
    return this.data.push(element);
  }
  if (pos > -1) {
    return this.data.splice(pos + 1, 0, element);
  }
  return false;
}

function remove(element) {
  var pos = this.find(element);
  if (pos > -1) {
    return this.data.splice(pos,1);
  }
  return false;
}

function moveTo(position) {
  return this.pos = position;
}

function getElement(position) {
  return this.data[position - 1];
}

function previous() {
  if (this.pos <= 0) {
    return false;
  }
  return this.data[--this.pos];
}

function next() {
  if (this.pos === this.listSize() - 1) {
    return false;
  }
  return this.data[++this.pos];
}

function hasPrevious() {
  return this.pos > 0;
}

function hasNext() {
  return this.pos <= this.listSize() - 1;
}

function contains(element) {
  return this.find(element) > -1;
}

module.exports = List;
