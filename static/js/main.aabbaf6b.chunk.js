(this["webpackJsonptomato-tasker"]=this["webpackJsonptomato-tasker"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(7),s=a.n(r),u=(a(13),a(1)),c=a(2),o=a(4),l=a(3),m=a(5),f=(a(14),a(15),function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"task-item"},i.a.createElement("textarea",{className:"before",placeholder:"Before",defaultValue:this.props.before}),i.a.createElement("textarea",{className:"after",placeholder:"After",defaultValue:this.props.after}))}}]),t}(i.a.Component)),h=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).timer=null,a.state={timerValue:1500,timerRunning:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.timerRunning?"Pause":"Start";return i.a.createElement("div",{className:"timer"},i.a.createElement("div",{className:"timerText"},Math.floor(this.state.timerValue/60),":",this.state.timerValue%60),i.a.createElement("button",{onClick:this.toggleRunning.bind(this)},e),i.a.createElement("button",{onClick:this.reset.bind(this)},"+ New"))}},{key:"toggleRunning",value:function(){this.setState((function(e){return{timerRunning:!e.timerRunning}}))}},{key:"componentDidUpdate",value:function(e,t){this.state.timerRunning&&!t.timerRunning?this.kickOffTimer():!this.state.timerRunning&&t.timerRunning&&null!==this.timer&&clearTimeout(this.timer),0===this.state.timerValue&&0!==t.timerValue&&new Notification("Pomo Timer Finished!")}},{key:"reset",value:function(){this.setState({timerRunning:!1,timerValue:1500}),this.props.resetHandler()}},{key:"kickOffTimer",value:function(){var e=this;0!==this.state.timerValue&&(this.timer=setTimeout((function(){e.setState((function(e){return{timerValue:e.timerValue-1}})),e.kickOffTimer()}),1e3))}}]),t}(i.a.Component),b=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={taskItems:[{before:"",after:""}]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.taskItems.flatMap((function(e,t){return i.a.createElement(f,{before:e.before,after:e.after,key:t+e.before+e.after})})).reverse();return i.a.createElement("div",{className:"app"},i.a.createElement(h,{resetHandler:this.handleReset.bind(this)}),i.a.createElement("div",{className:"items"},e),'"')}},{key:"handleReset",value:function(){var e={before:"",after:""};this.setState((function(t){return{taskItems:[e].concat(t.taskItems)}}))}}]),t}(i.a.Component);s.a.render(i.a.createElement(b,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.aabbaf6b.chunk.js.map