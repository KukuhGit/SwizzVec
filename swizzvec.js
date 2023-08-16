
  const _C = ['x', 'y', 'z', 'd'];
const _K = [];

for (const _$1 of _C) {
  for (const _$2 of _C) {
        const combination = _$1 + _$2;
        _K.push(combination);
  }
}

for (const _$1 of _C) {
  for (const _$2 of _C) {
    for (const _$3 of _C) {
        const combination = _$1 + _$2 + _$3;
        _K.push(combination);
    }
  }
}
for (const _$1 of _C) {
  for (const _$2 of _C) {
    for (const _$3 of _C) {
      for (const _$4 of _C) {
        const combination = _$1 + _$2 + _$3 + _$4;
        _K.push(combination);
      }
    }
  }
}

function vec(x=[],y=[],z=[],d=[]){
    if(!Array.isArray(x)) x=[x];
    if(!Array.isArray(y)) y=[y];
    if(!Array.isArray(z)) z=[z];
    if(!Array.isArray(d)) d=[d];
    let _$ = [...x,...y,...z,...d];
    let _$o = 'x:_$[0],y:_$[1],z:_$[2],d:_$[3]';
    let ac=`_={`+_$o;
    
    for(let com of _K){
      let ret='[';
      for(let rev of com){
        ret+='this.'+rev+',';
      }
      ret+=']';
      ac+=`,get ${com}(){return ${ret};}`;
    }
    ac+='}';
    return eval(ac);
  
  }
  