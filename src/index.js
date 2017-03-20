import bindActionCreators from 'redux/lib/bindActionCreators';

function makeGroupActionCreators(groups, dispatch){
    var groupActionCreators = {};
    var groupKeys = Object.keys(groups);

    for(var i = 0; i < groupKeys.length; i++){
      var key = groupKeys[i]
      var actionCreators = groups[key]
      if(typeof actionCreators === 'object' && actionCreators ){
          groupActionCreators[key] = makeGroupActionCreators(groups[key], dispatch)
      }else if (typeof actionCreators === 'function' && actionCreators) {
          groupActionCreators[key] = bindActionCreators(actionCreators, dispatch)
      }
  }
  return groupActionCreators;
}
export default function bindActionGroups(actionGroups, dispatch){

  if(typeof actionGroups === 'function' && actionGroups == null){
    return bindActionCreators(actionGroups, dispatch);
  }

  if(typeof actionGroups !== 'object' || actionGroups == null){
    throw new Error('bindActionGroups expected an object, key is group name, value is object with actionCreators');
  }
  return makeGroupActionCreators(actionGroups, dispatch);
}
