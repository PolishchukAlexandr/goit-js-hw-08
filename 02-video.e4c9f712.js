const e=document.querySelector("iframe"),t=new Player(e),r=throttle((({seconds:e})=>{localStorage.setItem("current time",e)}),1e3);t.setCurrentTime(localStorage.getItem("current time")||0),t.on("timeupdate",r);
//# sourceMappingURL=02-video.e4c9f712.js.map
