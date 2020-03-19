import { bindActionCreators } from 'redux';

export default function bindActionGroups(actionGroups, dispatch){
  
  if(typeof actionGroups === 'function' && actionGroups == null){
    return bindActionCreators(actionGroups, dispatch);
  }
  
  if(typeof actionGroups !== 'object' || actionGroups == null){
    throw new Error('bindActionGroups expected an object, key is group name, value is object with actionCreators');
  }  

  var groupActionCreators = {};
  var groupKeys = Object.keys(actionGroups);

  for(var i = 0; i < groupKeys.length; i++){
    var key = groupKeys[i]
    var actionCreators = actionGroups[key]
    if ((typeof actionCreators === 'object' || typeof actionCreators === 'function') && actionCreators) {
      groupActionCreators[key] = bindActionCreators(actionCreators, dispatch)
    }
  }

  return groupActionCreators;
}