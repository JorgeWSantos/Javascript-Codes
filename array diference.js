var b1 = [{ id: 0, name: 'john' }, { id: 1, name: 'mary' }, { id: 2, name: 'pablo' }, { id: 3, name: 'escobar' } ]; 
var b2 = [{ id: 0, name: 'joh' }, { id: 1, name: 'mary' }];

var result = b1.filter(o => !b2.some(v => v.id === o.id &&&& o.name===v.name));
