import superagent from 'superagent'
import querystring from 'querystring'
import util from '../utils/util'
import * as Actions from '../actions/coins'

import {requestBase, baseAPI} from '../app/configs'

export default function apiMiddleware({getState}) {
  return (next) => {
    return (action) => {
      if(!action.types) {
        next(action);
        return
      }

      const [PENDING, FULFILLED, REJECTED] = action.types

      const state = getState()
      let params = {...action.requestParams}
      let requestSettings = {...action.requestSettings}

      next({
        type: 'show loading'
      })
      // if(!state.handleLoading.isLoading) {
      //   next(Actions.showLoading)
      // }
      //fetching...
      // next({
      //   type: PENDING,
      //   params
      // })

      const requestMethod = requestSettings.method.toUpperCase()
      var { url } = requestSettings

      const sessionId = util.request('sessionId')
      url = url + '?sessionId=' + sessionId;

      switch (requestMethod) {
        case 'GET': {
          return superagent.get(url + '&' + querystring.stringify(params))
            .end((err, res) => {
              if(err || !res.body) {
                next({
                  type: REJECTED,
                  params
                })
              } else {
                console.log({
                  type: FULFILLED,
                  params,
                  data: res.body.data
                })
                next({
                  type: FULFILLED,
                  params,
                  data: res.body.data
                })
              }
            })
        }
        case 'POST':{
          return superagent.post(url)
            .set('Content-Type', 'application/json')
            .send(params)
            .end((err, res) => {
              if(err || !res.body) {
                next({
                  type: REJECTED,
                  params
                })
              } else {
                console.log({
                  type: FULFILLED,
                  params,
                  data: res.body.data
                })
                next({
                  type: FULFILLED,
                  params,
                  data: res.body.data
                })
              }
            })
        }
        case 'PUT':
        return superagent.put(url)
          .set('Content-Type', 'application/json')
          .send(params)
          .end((err, res) => {
            if(err || !res.body) {
              next({
                type: REJECTED,
                params
              })
            } else {
              next({
                type: FULFILLED,
                params,
                data: res.body.data
              })
            }
          })
          break;
        case 'DELETE':
        return superagent.put(url)
          .set('Content-Type', 'application/json')
          .send(params)
          .end((err, res) => {
            if(err || !res.body) {
              next({
                type: REJECTED,
                params
              })
            } else {
              next({
                type: FULFILLED,
                params,
                data: res.body.data
              })
            }
          })
          break;
        default:
          next(action);
          return;
      }

    }
  }
}
