webpackJsonp([0],Array(20).concat([function(e,t,n){n(27);var o=n(1)(n(22),n(32),null,null);e.exports=o.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"hot-comment",props:["comment-detail"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(30),s=n.n(o),A=n(31),a=n.n(A);t.default={data:function(){return{summaryAvatars:[1,2,3]}},components:{"hot-comment":s.a,"recommendation-chunk":a.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},function(e,t,n){t=e.exports=n(18)(!0),t.push([e.i,".post-share{box-sizing:border-box;background-color:#eee}.post-share .post-detail,.post-share .post-hot-comment,.post-share .post-user{background-color:#fff}.post-share .post-user{padding:.19rem 0 .19rem .3rem;line-height:1;height:1.12rem}.post-share .post-user .avatar{bottom:.21rem}.post-share .post-user .user{display:inline-block;margin-left:.32rem}.post-share .post-user .user-name{display:inline-block;height:.28rem;max-width:4rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.28rem;font-weight:500;line-height:1;color:#1a1a1a}.post-share .post-user .user-detail{margin-top:.16rem;font-size:.22rem;line-height:1;color:#bbb}.post-share .post-user .user-detail .user-place{display:inline-block;max-width:3rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.post-share .avatar{position:relative;display:inline-block;width:.72rem}.post-share .avatar-img{display:inline-block;width:.72rem;height:.72rem;border-radius:50%}.post-share .avatar-icon{position:absolute;top:.44rem;right:0}.post-share .post-detail{margin:.01rem 0 .24rem}.post-share .post-detail .comment-summary{position:relative;height:1rem;width:100%;padding:.22rem .32rem;line-height:1.4}.post-share .post-detail .summary-avatar-container{display:inline-block}.post-share .post-detail .summary-avatar-container .icon-ellipsis{margin-left:-.35rem}.post-share .post-detail .summary-avatar{display:inline-block;width:.54rem;height:.54rem;border:none;border-radius:50%;background-color:#ddd}.post-share .post-detail .summary-avatar.avatar-move{margin-left:-.25rem}.post-share .post-detail .summary-num{display:inline-block;margin-left:.05rem;font-size:.24rem;color:#1a1a1a}.post-share .post-detail .summary-love{display:inline-block;position:absolute;right:1.75rem}.post-share .post-detail .summary-chat{display:inline-block;position:absolute;right:.32rem}.post-share .post-detail .summary-font{font-size:.24rem;color:gray}.post-share .module-title{height:.88rem;padding:0 .32rem;line-height:.88rem;font-size:.28rem;font-weight:500;color:#1a1a1a}.post-share .module-title>span{margin-right:.1rem}.post-share .post-hot-comment{padding-bottom:.32rem}.post-share .post-hot-comment .comment-split{width:6.84rem;margin:.32rem auto;margin-top:0;outline:none;border-top:1px solid #eee}.post-share .post-hot-comment .more-hot-comment{width:6.86rem;margin:0 auto;border-radius:.04rem;background-color:#e0f0ff;border:.01rem solid #348feb}.post-share .post-hot-comment .more-hot-comment>span{color:#378ce3}.post-share .post-recommendation{margin-top:.32rem;padding-bottom:.94rem}.post-share .post-recommendation .module-title{background-color:#fff}.post-share .go-more{position:fixed;bottom:0;left:0;width:100%;background-color:#046fdb}.post-share .go-more>span{color:#fff}.post-share .more{height:.96rem;text-align:center;line-height:.85rem}.post-share .more>span{letter-spacing:2px;font-size:.32rem}","",{version:3,sources:["D:/WorkSpace/h5_vue/h5_jjb/src/components/circleOfWork/modules/Post.vue"],names:[],mappings:"AAEA,YACE,sBAAuB,AACvB,qBAAuB,CAOxB,AAID,8EACI,qBAAuB,CAC1B,AACD,uBACI,8BAA+B,AAC/B,cAAe,AACf,cAAgB,CACnB,AACD,+BACM,aAAe,CACpB,AACD,6BAEM,qBAAsB,AACtB,kBAAoB,CACzB,AACD,kCACQ,qBAAsB,AACtB,cAAe,AACf,eAAgB,AAChB,gBAAiB,AACjB,uBAAwB,AACxB,mBAAoB,AACpB,iBAAkB,AAClB,gBAAiB,AACjB,cAAe,AACf,aAAe,CACtB,AACD,oCACQ,kBAAmB,AACnB,iBAAkB,AAClB,cAAe,AACf,UAAY,CACnB,AACD,gDACU,qBAAsB,AACtB,eAAgB,AAChB,gBAAiB,AACjB,uBAAwB,AACxB,kBAAoB,CAC7B,AACD,oBACI,kBAAmB,AACnB,qBAAsB,AACtB,YAAc,CACjB,AACD,wBACM,qBAAsB,AACtB,aAAc,AACd,cAAe,AACf,iBAAmB,CACxB,AACD,yBACM,kBAAmB,AACnB,WAAY,AACZ,OAAS,CACd,AACD,yBACI,sBAAwB,CAC3B,AACD,0CACM,kBAAmB,AACnB,YAAa,AACb,WAAY,AACZ,sBAAuB,AACvB,eAAiB,CACtB,AACD,mDACM,oBAAsB,CAC3B,AACD,kEACQ,mBAAqB,CAC5B,AACD,yCACM,qBAAsB,AACtB,aAAc,AACd,cAAe,AACf,YAAa,AACb,kBAAmB,AACnB,qBAAuB,CAC5B,AACD,qDACQ,mBAAsB,CAC7B,AACD,sCACM,qBAAsB,AACtB,mBAAoB,AACpB,iBAAkB,AAClB,aAAe,CACpB,AACD,uCACM,qBAAsB,AACtB,kBAAmB,AACnB,aAAe,CACpB,AACD,uCACM,qBAAsB,AACtB,kBAAmB,AACnB,YAAc,CACnB,AACD,uCACM,iBAAkB,AAClB,UAAe,CACpB,AACD,0BACI,cAAe,AACf,iBAAkB,AAClB,mBAAoB,AACpB,iBAAkB,AAClB,gBAAiB,AACjB,aAAe,CAClB,AACD,+BACM,kBAAoB,CACzB,AACD,8BACI,qBAAuB,CAC1B,AACD,6CACM,cAAe,AACf,mBAAoB,AACpB,aAAc,AACd,aAAc,AACd,yBAA2B,CAChC,AACD,gDACM,cAAe,AACf,cAAe,AACf,qBAAsB,AACtB,yBAA0B,AAC1B,2BAA6B,CAClC,AACD,qDACQ,aAAe,CACtB,AACD,iCACI,kBAAmB,AACnB,qBAAuB,CAC1B,AACD,+CACM,qBAAuB,CAC5B,AACD,qBACI,eAAgB,AAChB,SAAU,AACV,OAAQ,AACR,WAAY,AACZ,wBAA0B,CAC7B,AACD,0BACM,UAAY,CACjB,AACD,kBACI,cAAe,AACf,kBAAmB,AACnB,kBAAoB,CACvB,AACD,uBACM,mBAAoB,AACpB,gBAAkB,CACvB",file:"Post.vue",sourcesContent:['\n@charset "UTF-8";\n.post-share {\n  box-sizing: border-box;\n  background-color: #EEE;\n  /*顶部发帖人信息*/\n  /*头像 带性别显示*/\n  /*帖子详情*/\n  /*热门评论*/\n  /*精彩推荐*/\n  /*看更多*/\n}\n.post-share .post-user, .post-share .post-detail, .post-share .post-hot-comment {\n    background-color: #FFF;\n}\n.post-share .post-detail, .post-share .post-hot-comment {\n    background-color: #FFF;\n}\n.post-share .post-user {\n    padding: .19rem 0 .19rem .3rem;\n    line-height: 1;\n    height: 1.12rem;\n}\n.post-share .post-user .avatar {\n      bottom: .21rem;\n}\n.post-share .post-user .user {\n      /*长度限制*/\n      display: inline-block;\n      margin-left: .32rem;\n}\n.post-share .post-user .user-name {\n        display: inline-block;\n        height: .28rem;\n        max-width: 4rem;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        font-size: .28rem;\n        font-weight: 500;\n        line-height: 1;\n        color: #1a1a1a;\n}\n.post-share .post-user .user-detail {\n        margin-top: .16rem;\n        font-size: .22rem;\n        line-height: 1;\n        color: #BBB;\n}\n.post-share .post-user .user-detail .user-place {\n          display: inline-block;\n          max-width: 3rem;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n}\n.post-share .avatar {\n    position: relative;\n    display: inline-block;\n    width: .72rem;\n}\n.post-share .avatar-img {\n      display: inline-block;\n      width: .72rem;\n      height: .72rem;\n      border-radius: 50%;\n}\n.post-share .avatar-icon {\n      position: absolute;\n      top: .44rem;\n      right: 0;\n}\n.post-share .post-detail {\n    margin: .01rem 0 .24rem;\n}\n.post-share .post-detail .comment-summary {\n      position: relative;\n      height: 1rem;\n      width: 100%;\n      padding: .22rem .32rem;\n      line-height: 1.4;\n}\n.post-share .post-detail .summary-avatar-container {\n      display: inline-block;\n}\n.post-share .post-detail .summary-avatar-container .icon-ellipsis {\n        margin-left: -.35rem;\n}\n.post-share .post-detail .summary-avatar {\n      display: inline-block;\n      width: .54rem;\n      height: .54rem;\n      border: none;\n      border-radius: 50%;\n      background-color: #DDD;\n}\n.post-share .post-detail .summary-avatar.avatar-move {\n        margin-left: -0.25rem;\n}\n.post-share .post-detail .summary-num {\n      display: inline-block;\n      margin-left: .05rem;\n      font-size: .24rem;\n      color: #1a1a1a;\n}\n.post-share .post-detail .summary-love {\n      display: inline-block;\n      position: absolute;\n      right: 1.75rem;\n}\n.post-share .post-detail .summary-chat {\n      display: inline-block;\n      position: absolute;\n      right: .32rem;\n}\n.post-share .post-detail .summary-font {\n      font-size: .24rem;\n      color: #808080;\n}\n.post-share .module-title {\n    height: .88rem;\n    padding: 0 .32rem;\n    line-height: .88rem;\n    font-size: .28rem;\n    font-weight: 500;\n    color: #1a1a1a;\n}\n.post-share .module-title > span {\n      margin-right: .1rem;\n}\n.post-share .post-hot-comment {\n    padding-bottom: .32rem;\n}\n.post-share .post-hot-comment .comment-split {\n      width: 6.84rem;\n      margin: .32rem auto;\n      margin-top: 0;\n      outline: none;\n      border-top: 1px solid #EEE;\n}\n.post-share .post-hot-comment .more-hot-comment {\n      width: 6.86rem;\n      margin: 0 auto;\n      border-radius: .04rem;\n      background-color: #e0f0ff;\n      border: solid .01rem #348feb;\n}\n.post-share .post-hot-comment .more-hot-comment > span {\n        color: #378ce3;\n}\n.post-share .post-recommendation {\n    margin-top: .32rem;\n    padding-bottom: .94rem;\n}\n.post-share .post-recommendation .module-title {\n      background-color: #FFF;\n}\n.post-share .go-more {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    background-color: #046fdb;\n}\n.post-share .go-more > span {\n      color: #FFF;\n}\n.post-share .more {\n    height: .96rem;\n    text-align: center;\n    line-height: .85rem;\n}\n.post-share .more > span {\n      letter-spacing: 2px;\n      font-size: .32rem;\n}\n'],sourceRoot:""}])},function(e,t,n){t=e.exports=n(18)(!0),t.push([e.i,".rec-chunk{display:inline-block;width:3.28rem;height:5.2rem;background-color:#fff;margin:.32rem 0 0 .32rem}.rec-chunk .post-user .user{margin-left:0;padding-left:.15rem}.rec-chunk .post-user .user .user-name{max-width:1.7rem;line-height:1.5;font-size:.24rem}.rec-chunk .post-user .chunk-place{display:inline-block;max-width:.85rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rec-chunk .chunk-img-con{width:2.7rem;height:2.44rem;margin:0 auto}.rec-chunk .chunk-img-con>img{width:100%;height:100%}.rec-chunk .chunk-detail{width:2.8rem;margin:.24rem auto}.rec-chunk .chunk-detail>p{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;font-size:.24rem;line-height:1.5;color:#1a1a1a}","",{version:3,sources:["D:/WorkSpace/h5_vue/h5_jjb/src/components/circleOfWork/modules/RecommendationChunk.vue"],names:[],mappings:"AAEA,WACE,qBAAsB,AACtB,cAAe,AACf,cAAe,AACf,sBAAuB,AACvB,wBAA0B,CAC3B,AACD,4BACI,cAAe,AACf,mBAAqB,CACxB,AACD,uCACM,iBAAkB,AAClB,gBAAiB,AACjB,gBAAkB,CACvB,AACD,mCACI,qBAAsB,AACtB,iBAAkB,AAClB,gBAAiB,AACjB,uBAAwB,AACxB,kBAAoB,CACvB,AACD,0BACI,aAAc,AACd,eAAgB,AAChB,aAAe,CAClB,AACD,8BACM,WAAY,AACZ,WAAa,CAClB,AACD,yBACI,aAAc,AACd,kBAAoB,CACvB,AACD,2BACM,oBAAqB,AACrB,qBAAsB,AAEtB,4BAA6B,AAC7B,gBAAiB,AACjB,iBAAkB,AAClB,gBAAiB,AACjB,aAAe,CACpB",file:"RecommendationChunk.vue",sourcesContent:['\n@charset "UTF-8";\n.rec-chunk {\n  display: inline-block;\n  width: 3.28rem;\n  height: 5.2rem;\n  background-color: #FFF;\n  margin: .32rem 0 0 .32rem;\n}\n.rec-chunk .post-user .user {\n    margin-left: 0;\n    padding-left: .15rem;\n}\n.rec-chunk .post-user .user .user-name {\n      max-width: 1.7rem;\n      line-height: 1.5;\n      font-size: .24rem;\n}\n.rec-chunk .post-user .chunk-place {\n    display: inline-block;\n    max-width: .85rem;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.rec-chunk .chunk-img-con {\n    width: 2.7rem;\n    height: 2.44rem;\n    margin: 0 auto;\n}\n.rec-chunk .chunk-img-con > img {\n      width: 100%;\n      height: 100%;\n}\n.rec-chunk .chunk-detail {\n    width: 2.8rem;\n    margin: .24rem auto;\n}\n.rec-chunk .chunk-detail > p {\n      display: -webkit-box;\n      -webkit-line-clamp: 3;\n      /*超出第$lines行截断*/\n      -webkit-box-orient: vertical;\n      overflow: hidden;\n      font-size: .24rem;\n      line-height: 1.5;\n      color: #1a1a1a;\n}\n'],sourceRoot:""}])},function(e,t,n){t=e.exports=n(18)(!0),t.push([e.i,".post-hot-comment-com{position:relative;border-top:1px solid #eee;padding:.24rem .3rem}.post-hot-comment-com .avatar{display:inline-block;position:absolute}.post-hot-comment-com .comment-container{display:inline-block;max-width:5.8rem;width:5.8rem;margin-left:1.11rem;padding-top:.14rem}.post-hot-comment-com .comment-top{position:relative;padding-bottom:.05rem}.post-hot-comment-com .comment-top-name{display:inline-block;max-width:3.5rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.28rem;color:#1a5da1}.post-hot-comment-com .comment-top-hold{position:absolute;right:0;top:0;line-height:.24rem}.post-hot-comment-com .comment-top-num{margin-top:.1rem;font-size:.24rem;color:#979797}.post-hot-comment-com .comment-detail{padding-right:.3rem;margin-top:.18rem}.post-hot-comment-com .comment-detail>p{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;font-size:.32rem;color:#1a1a1a}.post-hot-comment-com .comment-reply{margin-top:.24rem}.post-hot-comment-com .comment-reply>span{font-size:.28rem;color:#bbb}.post-hot-comment-com .comment-reply .color-r{color:#eb4332}","",{version:3,sources:["D:/WorkSpace/h5_vue/h5_jjb/src/components/circleOfWork/modules/HotComment.vue"],names:[],mappings:"AAEA,sBACE,kBAAmB,AACnB,0BAA2B,AAC3B,oBAAsB,CACvB,AACD,8BACI,qBAAsB,AACtB,iBAAmB,CACtB,AACD,yCACI,qBAAsB,AACtB,iBAAkB,AAClB,aAAc,AACd,oBAAqB,AACrB,kBAAoB,CACvB,AACD,mCACI,kBAAmB,AACnB,qBAAuB,CAC1B,AACD,wCACM,qBAAsB,AACtB,iBAAkB,AAClB,gBAAiB,AACjB,uBAAwB,AACxB,mBAAoB,AACpB,iBAAkB,AAClB,aAAe,CACpB,AACD,wCACM,kBAAmB,AACnB,QAAS,AACT,MAAO,AACP,kBAAoB,CACzB,AACD,uCACM,iBAAkB,AAClB,iBAAkB,AAClB,aAAe,CACpB,AACD,sCACI,oBAAqB,AACrB,iBAAmB,CACtB,AACD,wCACM,oBAAqB,AACrB,qBAAsB,AAEtB,4BAA6B,AAC7B,gBAAiB,AACjB,iBAAkB,AAClB,aAAe,CACpB,AACD,qCACI,iBAAmB,CACtB,AACD,0CACM,iBAAkB,AAClB,UAAe,CACpB,AACD,8CACM,aAAe,CACpB",file:"HotComment.vue",sourcesContent:['\n@charset "UTF-8";\n.post-hot-comment-com {\n  position: relative;\n  border-top: 1px solid #EEE;\n  padding: .24rem .3rem;\n}\n.post-hot-comment-com .avatar {\n    display: inline-block;\n    position: absolute;\n}\n.post-hot-comment-com .comment-container {\n    display: inline-block;\n    max-width: 5.8rem;\n    width: 5.8rem;\n    margin-left: 1.11rem;\n    padding-top: .14rem;\n}\n.post-hot-comment-com .comment-top {\n    position: relative;\n    padding-bottom: .05rem;\n}\n.post-hot-comment-com .comment-top-name {\n      display: inline-block;\n      max-width: 3.5rem;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      font-size: .28rem;\n      color: #1a5da1;\n}\n.post-hot-comment-com .comment-top-hold {\n      position: absolute;\n      right: 0;\n      top: 0;\n      line-height: .24rem;\n}\n.post-hot-comment-com .comment-top-num {\n      margin-top: .1rem;\n      font-size: .24rem;\n      color: #979797;\n}\n.post-hot-comment-com .comment-detail {\n    padding-right: .3rem;\n    margin-top: .18rem;\n}\n.post-hot-comment-com .comment-detail > p {\n      display: -webkit-box;\n      -webkit-line-clamp: 3;\n      /*超出第$lines行截断*/\n      -webkit-box-orient: vertical;\n      overflow: hidden;\n      font-size: .32rem;\n      color: #1a1a1a;\n}\n.post-hot-comment-com .comment-reply {\n    margin-top: .24rem;\n}\n.post-hot-comment-com .comment-reply > span {\n      font-size: .28rem;\n      color: #bbbbbb;\n}\n.post-hot-comment-com .comment-reply .color-r {\n      color: #eb4332;\n}\n'],sourceRoot:""}])},function(e,t,n){var o=n(24);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(19)("6baf781a",o,!0)},function(e,t,n){var o=n(25);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(19)("fc1123bc",o,!0)},function(e,t,n){var o=n(26);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(19)("2c30f327",o,!0)},function(e,t,n){n(29);var o=n(1)(n(21),n(34),null,null);e.exports=o.exports},function(e,t,n){n(28);var o=n(1)(n(23),n(33),null,null);e.exports=o.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"post-share"},[e._m(0),e._v(" "),n("div",{staticClass:"post-detail"},[n("div",{staticClass:"content"}),e._v(" "),n("div",{staticClass:"content-img"}),e._v(" "),n("div",{staticClass:"comment-summary"},[e.summaryAvatars.length?n("div",{staticClass:"summary-avatar-container"},[e._l(e.summaryAvatars,function(e,t){return[n("img",{staticClass:"summary-avatar",class:{"avatar-move":0!=t},attrs:{src:e.avatarSrc,alt:""}})]}),e._v(" "),e.summaryAvatars.length>2?n("span",{staticClass:"icon-ellipsis"}):e._e()],2):e._e(),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3)])]),e._v(" "),n("div",{staticClass:"post-hot-comment"},[e._m(4),e._v(" "),n("hot-comment"),e._v(" "),n("div",{staticClass:"comment-split"}),e._v(" "),e._m(5)],1),e._v(" "),n("div",{staticClass:"post-recommendation"},[e._m(6),e._v(" "),n("div",{staticClass:"chunk-container"},[e._l(4,function(e){return[n("recommendation-chunk",{attrs:{recommendation:e}})]})],2)]),e._v(" "),e._m(7)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"post-user"},[n("div",{staticClass:"avatar"},[n("img",{staticClass:"avatar-img",attrs:{src:"",alt:""}}),e._v(" "),n("span",{staticClass:"avatar-icon icon-man"})]),e._v(" "),n("div",{staticClass:"user"},[n("span",{staticClass:"user-name"},[e._v("测试用户名")]),e._v(" "),n("div",{staticClass:"user-detail"},[n("span",{staticClass:"icon-position"}),e._v(" "),n("span",{staticClass:"user-place"},[e._v("深圳")]),e._v(" "),n("span",[e._v("15:31")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"summary-num"},[n("span",[e._v("245578人评论过")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"summary-love"},[n("span",{staticClass:"icon-love"}),e._v(" "),n("span",{staticClass:"summary-font"},[e._v("128")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"summary-chat"},[n("span",{staticClass:"icon-chat"}),e._v(" "),n("span",{staticClass:"summary-font"},[e._v("1280")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"module-title"},[n("span",[e._v("热门评论")]),e._v(" "),n("span",[e._v("(20)")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"more more-hot-comment"},[n("span",[e._v("查看更多评论")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"module-title"},[n("span",[e._v("精彩内容")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"more go-more"},[n("span",[e._v("我想看更多")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rec-chunk"},[n("div",{staticClass:"post-user"},[n("div",{staticClass:"avatar"},[n("img",{staticClass:"avatar-img",attrs:{src:"",alt:""}}),e._v(" "),n("span",{staticClass:"avatar-icon icon-woman"})]),e._v(" "),n("div",{staticClass:"user"},[n("span",{staticClass:"user-name"},[e._v("测试用户名")]),e._v(" "),n("div",{staticClass:"user-detail"},[n("span",{staticClass:"icon-position"}),e._v(" "),n("span",{staticClass:"chunk-place"},[e._v("深圳")]),e._v(" "),n("span",[e._v("15:31")])])])]),e._v(" "),n("div",{staticClass:"chunk-img-con"},[n("img",{attrs:{src:"",alt:""}})]),e._v(" "),n("div",{staticClass:"chunk-detail"},[n("p",[e._v("曾经我们也是好朋友，从哪以后就没再有联系了，不过无论过多久，那段记忆都没有忘")])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"post-hot-comment-com"},[n("div",{staticClass:"avatar"},[n("img",{staticClass:"avatar-img",attrs:{src:"",alt:""}})]),e._v(" "),n("div",{staticClass:"comment-container"},[n("div",{staticClass:"comment-top"},[n("p",{staticClass:"comment-top-name"},[e._v("快乐的小绵羊")]),e._v(" "),n("div",{staticClass:"comment-top-hold"},[n("span",{staticClass:"icon-hold"}),e._v(" "),n("span",{staticClass:"comment-top-num"},[e._v("10")])])]),e._v(" "),n("div",{staticClass:"comment-detail"},[n("p",[e._v("或者是移民的做法，其背后隐藏诸多风险，法律尚不存在。或者是移民的做法，其背后隐藏诸多风险，法律尚不存在。")])]),e._v(" "),n("div",{staticClass:"comment-reply"},[n("span",[e._v("查看"),n("span",{staticClass:"color-r"},[e._v("18000")]),e._v("条回复 >>")])])])])}]}}]));
//# sourceMappingURL=0.94fb021ce202c6ffc1d5.js.map