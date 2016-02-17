import superagent from 'superagent'
import querystring from 'querystring'

import {requestBase, baseAPI} from '../app/configs'

export default function queryCoinsMiddleware({getState}) {
  return (next) => {
    return (action) => {
      if(!action.types) {
        next(action);
        return
      }

      // const [PENDING, FULFILLED, REJECTED] = action.types
      //
      // const state = getState()
      // let params = {...action.params}
      //
      // next({
      //   type: PENDING,
      //   params
      // })

      return superagent.get(requestBase.lianCoinUrl + baseAPI.coins + '?Take=100&Skip=0')
            .end((err, res) => {
              if(err || !res.body || res.body.code !== 0) {
                next({
                  type: REJECTED,
                  params
                })
              } else {
                next({
                  type: FULFILLED,
                  params,
                  data: res.data
                })
              }
            })

    }
  }
}
