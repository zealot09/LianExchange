# LianExchange
hybrid mobile app based on react, redux, babel, webpack, migrating from backbone

##get started
development, run
```
npm install &
npm start
```

in production
```
NODE_ENV=production webpack --progress --optimize-minimize
```

##1. add redux middleware

using superagent request server, apiMiddleware is just a redux middleware major on network request, redux using 
`applyMiddleware` to handle some async actions.

```
  const finalCreateStore = compose(
    applyMiddleware(apiMiddleware)
  )(create)
```

each ajax action composed with 3 types `[Pending, Fulfilled, Rejected]`, ajax callback dispatch those three actions when 
request finished.

a simple network action example
```
import ActionTypes from '../constants/ActionTypes'
import {requestBase, baseAPI} from '../app/configs'

export function loadAccount() {
  return {
    types: [
      ActionTypes.ACCOUNT_LOAD,
      ActionTypes.ACCOUNT_LOAD_SUCCESS,
      ActionTypes.ACCOUNT_LOAD_ERROR
    ],
    requestSettings: {
      method: 'GET',
      url: requestBase.lianCoinUrl + baseAPI.me
    },
    requestParams: {Includes:['Accounts','Profile','BankCards']}
  }
}
```

when loading account, 3 action type 'ACCOUNT_LOAD, ACCOUNT_LOAD_SUCCESS, ACCOUNT_LOAD_ERROR' correspond to 
'pending, fulfilled, reject', the action also contains the current account request about info like Method, request url,
addons params...

then dispatcher such actions to request remote sever







