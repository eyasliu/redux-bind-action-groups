bind redux action to group, avoid action generate function name conflict
[![Build Status](https://secure.travis-ci.org/eyasliu/redux-bind-action-groups.png)
# install 

```
npm i -S redux-action-creator-groups
```


my two action creator files

```
// post.js
export function getList(){
    return {
        type: 'POST_GETLIST'
    }
}


// photo.js
export function getList(){
    return {
        type: 'PHOTO_GETLIST'
    }
}
```

bind action creator

```
import * as postActions from './post';
import * as photoActions from './photo';
import {bindActionCreators} from 'redux';

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        ...postActions,
        ...photoActions
    }, dispatch)
}

// in React Component
this.props.getList();  // which getList will exec in post and photo
```

### useage

```
import bindActionGroups from 'redux-bind-action-groups';

function mapDispatchToProps(dispatch){
    return bindActionGroups({
        post: postActions,
        photo: photoActions
    }, dispatch)
}

// in React Component
this.props.post.getList();
this.props.photo.getList();
```
