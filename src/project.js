window.__require=function e(a,t,c){function n(i,o){if(!t[i]){if(!a[i]){var l=i.split("/");if(l=l[l.length-1],!a[l]){var s="function"==typeof __require&&__require;if(!o&&s)return s(l,!0);if(r)return r(l,!0);throw new Error("Cannot find module '"+i+"'")}}var d=t[i]={exports:{}};a[i][0].call(d.exports,function(e){return n(a[i][1][e]||e)},d,d.exports,e,a,t,c)}return t[i].exports}for(var r="function"==typeof __require&&__require,i=0;i<c.length;i++)n(c[i]);return n}({Balance:[function(e,a,t){"use strict";cc._RF.push(a,"f4a28llbdNIE5Y8mCvsLYmR","Balance");var c=e("../Ws");cc.Class({extends:cc.Component,properties:{nameLabel:cc.Label,balanceLabel:cc.Label},start:function(){var e=this;c.on("Balance",function(a){null!=e.balanceLabel&&(e.balanceLabel.string=(a.balance/100).toFixed(2),e.nameLabel.string=a.username)})}}),cc._RF.pop()},{"../Ws":"Ws"}],BetClick:[function(e,a,t){"use strict";cc._RF.push(a,"21ab3MHnz5DzZXKgCB/79OK","BetClick");var c=e("../Global"),n=e("../Ws");cc.Class({extends:cc.Component,properties:{button1:cc.Button,button2:cc.Button,action:cc.String},onLoad:function(){var e=this;this.button1.node.on("click",function(){e.click(e.action)},this),this.button2.node.on("click",function(){e.click(e.action)},this)},start:function(){},click:function(e){c.TokenIndex<0||n.send({cmd:"Bet",betType:e,tokenIndex:c.TokenIndex})}}),cc._RF.pop()},{"../Global":"Global","../Ws":"Ws"}],Bet:[function(e,a,t){"use strict";cc._RF.push(a,"9ee1b+6RM9ETYFoHuyI5Wja","Bet");var c=e("../Global"),n=e("../Ws");cc.Class({extends:cc.Component,properties:{playerWinLayer:cc.Node,playerWinLayerHit:cc.Node,playerWinLayerBet:cc.Node,bankerWinLayer:cc.Node,bankerWinLayerHit:cc.Node,bankerWinLayerBet:cc.Node,equalLayer:cc.Node,equalLayerBet:cc.Node,equalLayerHit:cc.Node,bigLayer:cc.Node,bigLayerBet:cc.Node,bigLayerHit:cc.Node,smallLayer:cc.Node,smallLayerBet:cc.Node,smallLayerHit:cc.Node,playerOddLayer:cc.Node,playerOddLayerBet:cc.Node,playerOddLayerHit:cc.Node,playerEvenLayer:cc.Node,playerEvenLayerBet:cc.Node,playerEvenLayerHit:cc.Node,bankerOddLayer:cc.Node,bankerOddLayerBet:cc.Node,bankerOddLayerHit:cc.Node,bankerEvenLayer:cc.Node,bankerEvenLayerBet:cc.Node,bankerEvenLayerHit:cc.Node,playerPairLayer:cc.Node,playerPairLayerBet:cc.Node,playerPairLayerHit:cc.Node,bankerPairLayer:cc.Node,bankerPairLayerBet:cc.Node,bankerPairLayerHit:cc.Node,playerWinLabel:cc.Label,bankerWinLabel:cc.Label,equalLabel:cc.Label,bigLabel:cc.Label,smallLabel:cc.Label,playerOddLabel:cc.Label,playerEvenLabel:cc.Label,bankerOddLabel:cc.Label,bankerEvenLabel:cc.Label,playerPairLabel:cc.Label,bankerPairLabel:cc.Label},start:function(){var e=this;c.BetLayerReset=function(){e.reset()},n.on("Result",function(a){e.playerWinLayer.active=!a.player,e.playerWinLayerBet.active=!1,e.playerWinLayerHit.active=a.player,e.bankerWinLayer.active=!a.banker,e.bankerWinLayerBet.active=!1,e.bankerWinLayerHit.active=a.banker,e.equalLayer.active=!a.equal,e.equalLayerBet.active=!1,e.equalLayerHit.active=a.equal,e.bigLayer.active=!a.big,e.bigLayerBet.active=!1,e.bigLayerHit.active=a.big,e.smallLayer.active=!a.small,e.smallLayerBet.active=!1,e.smallLayerHit.active=a.small,e.playerOddLayer.active=!a.playerOdd,e.playerOddLayerBet.active=!1,e.playerOddLayerHit.active=a.playerOdd,e.playerEvenLayer.active=!a.playerEven,e.playerEvenLayerBet.active=!1,e.playerEvenLayerHit.active=a.playerEven,e.bankerOddLayer.active=!a.bankerOdd,e.bankerOddLayerBet.active=!1,e.bankerOddLayerHit.active=a.bankerOdd,e.bankerEvenLayer.active=!a.bankerEven,e.bankerEvenLayerBet.active=!1,e.bankerEvenLayerHit.active=a.bankerEven,e.playerPairLayer.active=!a.playerPair,e.playerPairLayerBet.active=!1,e.playerPairLayerHit.active=a.playerPair,e.bankerPairLayer.active=!a.bankerPair,e.bankerPairLayerBet.active=!1,e.bankerPairLayerHit.active=a.bankerPair}),n.on("Bet",function(a){"End"!=a.playMode&&(e.showLabel(a,"Player",e.playerWinLabel,e.playerWinLayer,e.playerWinLayerBet,e.playerWinLayerHit),e.showLabel(a,"Banker",e.bankerWinLabel,e.bankerWinLayer,e.bankerWinLayerBet,e.bankerWinLayerHit),e.showLabel(a,"Equal",e.equalLabel,e.equalLayer,e.equalLayerBet,e.equalLayerHit),e.showLabel(a,"Big",e.bigLabel,e.bigLayer,e.bigLayerBet,e.bigLayerHit),e.showLabel(a,"Small",e.smallLabel,e.smallLayer,e.smallLayerBet,e.smallLayerHit),e.showLabel(a,"PlayerOdd",e.playerOddLabel,e.playerOddLayer,e.playerOddLayerBet,e.playerOddLayerHit),e.showLabel(a,"PlayerEven",e.playerEvenLabel,e.playerEvenLayer,e.playerEvenLayerBet,e.playerEvenLayerHit),e.showLabel(a,"BankerOdd",e.bankerOddLabel,e.bankerOddLayer,e.bankerOddLayerBet,e.bankerOddLayerHit),e.showLabel(a,"BankerEven",e.bankerEvenLabel,e.bankerEvenLayer,e.bankerEvenLayerBet,e.bankerEvenLayerHit),e.showLabel(a,"PlayerPair",e.playerPairLabel,e.playerPairLayer,e.playerPairLayerBet,e.playerPairLayerHit),e.showLabel(a,"BankerPair",e.bankerPairLabel,e.bankerPairLayer,e.bankerPairLayerBet,e.bankerPairLayerHit))})},reset:function(){null!=this.playerWinLayer&&(this.playerWinLayer.active=!0,this.playerWinLayerHit.active=!1,this.bankerWinLayer.active=!0,this.bankerWinLayerHit.active=!1,this.equalLayer.active=!0,this.equalLayerHit.active=!1,this.bigLayer.active=!0,this.bigLayerHit.active=!1,this.smallLayer.active=!0,this.smallLayerHit.active=!1,this.playerOddLayer.active=!0,this.playerOddLayerHit.active=!1,this.playerEvenLayer.active=!0,this.playerEvenLayerHit.active=!1,this.bankerOddLayer.active=!0,this.bankerOddLayerHit.active=!1,this.bankerEvenLayer.active=!0,this.bankerEvenLayerHit.active=!1,this.playerPairLayer.active=!0,this.playerPairLayerHit.active=!1,this.bankerPairLayer.active=!0,this.bankerPairLayerHit.active=!1)},click:function(e){c.TokenIndex<0||n.send({cmd:"Bet",betType:e,tokenIndex:c.TokenIndex})},showLabel:function(e,a,t,c,n,r){var i=e.playerBet,o=e.allBet;if(i&&o){var l=(i[a]?i[a]/100:0)+" / "+(o[a]?o[a]/100:0);null!=t&&(t.string=l,r.active||(n.active=i[a]>0,c.active=!n.active))}}}),cc._RF.pop()},{"../Global":"Global","../Ws":"Ws"}],ButtonBack:[function(e,a,t){"use strict";cc._RF.push(a,"6c942s6l0RLWKoBsvI0g50m","ButtonBack");var c=e("../Ws");cc.Class({extends:cc.Component,properties:{button:cc.Button},start:function(){this.button.node.on("click",this.click,this)},click:function(e){c.send({cmd:"Lobby"})}}),cc._RF.pop()},{"../Ws":"Ws"}],ButtonScaler:[function(e,a,t){"use strict";cc._RF.push(a,"57afe4iMaVIaIqofpx7dT27","ButtonScaler");e("../Global");cc.Class({extends:cc.Component,properties:{pressedScale:1,transDuration:0},onLoad:function(){self=this,self.initScale=this.node.scale,self.button=self.getComponent(cc.Button),self.scaleDownAction=cc.scaleTo(self.transDuration,self.pressedScale),self.scaleUpAction=cc.scaleTo(self.transDuration,self.initScale)}}),cc._RF.pop()},{"../Global":"Global"}],CardPic:[function(e,a,t){"use strict";cc._RF.push(a,"67eb12L0dRBw4FTpxvrFDI6","CardPic"),cc.Class({extends:cc.Component,properties:{point:cc.Label,suit:cc.Sprite,mainPic:cc.Sprite,cardBG:cc.Sprite,redTextColor:cc.Color.WHITE,blackTextColor:cc.Color.WHITE,texFrontBG:cc.SpriteFrame,texBackBG:cc.SpriteFrame,texFaces:{default:[],type:cc.SpriteFrame},texSuitBig:{default:[],type:cc.SpriteFrame},texSuitSmall:{default:[],type:cc.SpriteFrame}},init:function(e){var a=e.point>10;this.mainPic.spriteFrame=a?this.texFaces[e.point-10-1]:this.texSuitBig[e.suit],this.point.string=e.pointName,e.isRedSuit?this.point.node.color=this.redTextColor:this.point.node.color=this.blackTextColor,this.suit.spriteFrame=this.texSuitSmall[e.suit]},reveal:function(e){this.point.node.active=e,this.suit.node.active=e,this.mainPic.node.active=e,this.cardBG.spriteFrame=e?this.texFrontBG:this.texBackBG}}),cc._RF.pop()},{}],Card:[function(e,a,t){"use strict";cc._RF.push(a,"36a9a0+czVFNKEUVUzcoXE1","Card");e("../Global");var c=e("../Ws"),n={H:1,D:3,S:0,C:2},r=["","A","2","3","4","5","6","7","8","9","10","J","Q","K"];cc.Class({extends:cc.Component,properties:{cardPrefab:cc.Prefab,cardAnchors:{default:[],type:cc.Node},cardsLayer:cc.Node,countDownLayer:cc.Node},start:function(){var e=this;this.cardsLayer.active=!1,c.on("Deal",function(a){e.drawCard(a.cards),e.countDownLayer.active=!1})},drawCard:function(e){this.cardsLayer.active=!0;for(var a=0;a<6;a++)if(this.cardAnchors[a].removeAllChildren(),!(a>=e.length||"*"===e[a])){var t=e[a].substring(0,1),c=parseInt(e[a].substring(1)),i={point:c,pointName:r[c],isRedSuit:n[t]%2==1,suit:n[t]},o=cc.instantiate(this.cardPrefab);this.cardAnchors[a].addChild(o),o.position=cc.v2(0,0),o.getComponent("CardPic").init(i)}},update:function(e){}}),cc._RF.pop()},{"../Global":"Global","../Ws":"Ws"}],Config:[function(e,a,t){"use strict";cc._RF.push(a,"6bf2ays0BdGXITKx8nPWl1q","Config");a.exports={apiUrl:"https://demogameserver.ddns.net/v1/",webSocketUrl:"wss://demogameserver.ddns.net/v1/baccarat"},cc._RF.pop()},{}],CountDown:[function(e,a,t){"use strict";cc._RF.push(a,"e67aaSMx1RBHI5t2WZ5iENo","CountDown");var c=e("../Ws"),n=e("../Global");cc.Class({extends:cc.Component,properties:{countDownLayer:cc.Node,prepareLayer:cc.Node,betLayer:cc.Node,prepareLabel:cc.Label,betLabel:cc.Label,cardsLayer:cc.Node,tableBetLayer:cc.Node},start:function(){var e=this;this.countDownLayer.active=!1,c.on("CmdCountDownPrepare",function(a){n.BetLayerReset(),e.countDownLayer.active=!0,e.cardsLayer.active=!1,e.betLayer.active=!1,e.prepareLayer.active=a.seconds>0,e.prepareLabel.string=a.seconds}),c.on("CountDownBet",function(a){e.countDownLayer.active=!0,e.cardsLayer.active=!1,e.prepareLayer.active=!1,e.betLayer.active=a.seconds>0,e.betLabel.string=a.seconds})}}),cc._RF.pop()},{"../Global":"Global","../Ws":"Ws"}],DotFrame:[function(e,a,t){"use strict";cc._RF.push(a,"1f1c1Y/54lH0p0AGZcDBgwp","DotFrame"),cc.Class({extends:cc.Component,properties:{dotSprite:cc.Sprite},start:function(){},setSpriteFrame:function(e){this.dotSprite.spriteFrame=e}}),cc._RF.pop()},{}],Global:[function(e,a,t){"use strict";cc._RF.push(a,"9f21cf450hHBL8G2YeXaqar","Global"),a.exports={},cc._RF.pop()},{}],Lobby:[function(e,a,t){"use strict";cc._RF.push(a,"036b18cwAFDpZc+/iMRzXuH","Lobby");var c=e("../Ws"),n=e("../Global"),r=[{x:-550,y:320},{x:-550,y:100},{x:-550,y:-120},{x:58,y:320},{x:58,y:100},{x:58,y:-120}];cc.Class({extends:cc.Component,properties:{panelPrefab:cc.Prefab,panelsLayer:cc.Node},onLoad:function(){var e=this;c.on("Join",function(e){1==e.status&&cc.director.loadScene("table")}),c.on("LobbyTable",function(a){if(1==a.status)for(var t=0;t<a.tables.length;t++){var c=a.tables[t];if(null!=e.panels[t])e.panels[t].getComponent("Panel").setData(c)}})},start:function(){n.TableIndex=-1,this.panels=[];for(var e=0;e<6;e++){this.panels[e]=cc.instantiate(this.panelPrefab),this.panelsLayer.addChild(this.panels[e]),this.panels[e].position=cc.v2(r[e].x,r[e].y),this.panels[e].getComponent("Panel").tableNumber(e)}}}),cc._RF.pop()},{"../Global":"Global","../Ws":"Ws"}],Panel:[function(e,a,t){"use strict";cc._RF.push(a,"d4209mQ5mtKBIAtbpnZki6k","Panel");var c=e("../Ws");cc.Class({extends:cc.Component,properties:{numberLabel:cc.Label,playersLabel:cc.Label,waitNode:cc.Node,betNode:cc.Node,countDownLabel:cc.Label,dealNode:cc.Node,button:cc.Button,panelNode:cc.Node,playerDot:cc.SpriteFrame,bankerDot:cc.SpriteFrame,equalDot:cc.SpriteFrame,dotLayer:cc.Node,dotSprite:cc.Sprite},onLoad:function(){var e=this;this.button.node.on("click",function(){e.click()},this)},start:function(){},tableNumber:function(e){this.tableIndex=e,this.numberLabel.string="\u7b2c "+(e+1)+" \u684c"},click:function(e){var a={cmd:"Join",table:this.tableIndex};c.send(a)},setData:function(e){var a=e.playMode,t=e.countDown,c=e.records;this.playersLabel.string=e.players,this.countDownLabel.active="Prepair"==a||"Bet"==a,this.waitNode.active="Prepair"==a,this.betNode.active="Bet"==a,this.dealNode.active="Deal"==a||"End"==a,this.countDownLabel.string=t>0?t:"",this.draw(c)},draw:function(e){var a=this,t=[[]],c={p:this.playerDot,b:this.bankerDot,e:this.equalDot};e.forEach(function(e){var a,c=t[t.length-1],n=c[c.length-1];n&&(a=n[n.length-1]),e===a&&n.length<10?n.push(e):c.push([e])});var n=(t=t[0]).length-15;n<0&&(n=0),t=t.slice(n);var r=-19;this.panelNode.removeAllChildren(),t.forEach(function(e){r+=20;var t=19;e.forEach(function(e){t-=20;var n=cc.instantiate(a.dotLayer);n.active=!0,n.getComponent("DotFrame").setSpriteFrame(c[e]),n.position=cc.v2(r,t),n.parent=a.panelNode})})}}),cc._RF.pop()},{"../Ws":"Ws"}],Table:[function(e,a,t){"use strict";cc._RF.push(a,"a7e86IDbmpGdqs6SAdyjFw2","Table");var c=e("../Global"),n=e("../Ws");cc.Class({extends:cc.Component,onLoad:function(){var e=new URLSearchParams(window.location.search);c.Token=e.get("t"),c.Cards=[],c.TokenIndex=-1},start:function(){n.on("Lobby",function(e){1==e.status&&cc.director.loadScene("lobby")})},update:function(e){}}),cc._RF.pop()},{"../Global":"Global","../Ws":"Ws"}],TokenButton:[function(e,a,t){"use strict";cc._RF.push(a,"53a33+OcXFFErzLD2XjzKDG","TokenButton");var c=e("../Global");cc.Class({extends:cc.Component,properties:{amount:cc.String,label:cc.Label,button:cc.Button,index:cc.Integer},onLoad:function(){this.label.string=this.amount,this.button.node.on("click",this.callback,this)},callback:function(e){c.BetAmount=parseInt(this.amount),c.TokenIndex=parseInt(this.index)},start:function(){}}),cc._RF.pop()},{"../Global":"Global"}],Token:[function(e,a,t){"use strict";cc._RF.push(a,"785a8aUJYVPNoAb7NfT4vlJ","Token");var c=e("../Global");cc.Class({extends:cc.Component,properties:{amount:cc.String,labels:{default:[],type:cc.Label},coinSelectNodes:{default:[],type:cc.Node}},onLoad:function(){c.BetAmount=0,c.TokenIndex=-1},start:function(){},update:function(e){for(var a=0;a<this.labels.length;a++)this.coinSelectNodes[a].active=parseInt(this.labels[a].string)===c.BetAmount}}),cc._RF.pop()},{"../Global":"Global"}],Ws:[function(e,a,t){"use strict";cc._RF.push(a,"5eeeeggaMRLDrN+tbQlJIx9","Ws");var c,n,r=e("Global"),i=e("./config").webSocketUrl,o={};(function e(){(c=new WebSocket(i)).onopen=function(){console.log("connection open"),clearTimeout(n),c.send(JSON.stringify({cmd:"Lobby"}))},c.onclose=function(){console.log("close connection"),clearTimeout(n),n=setTimeout(function(){e()},2e3)};c.onmessage=function(e){try{var a=JSON.parse(e.data);if(a.cmd.status<1)return;if("GameEnd"===a.cmd)return o.Deal&&null!==o.Deal&&o.Deal({cards:a.cards}),void(o.Result&&null!==o.Result&&o.Result(a.result));o[a.cmd]&&null!==o[a.cmd]&&o[a.cmd](a)}catch(e){}}})(),a.exports={on:function(e,a){o[e]=a},send:function(e){e.token=r.token,c.send(JSON.stringify(e))},reset:function(){o={}}},cc._RF.pop()},{"./config":"Config",Global:"Global"}]},{},["Config","Global","DotFrame","Lobby","Panel","Balance","Bet","BetClick","ButtonBack","ButtonScaler","Card","CardPic","CountDown","Table","Token","TokenButton","Ws"]);