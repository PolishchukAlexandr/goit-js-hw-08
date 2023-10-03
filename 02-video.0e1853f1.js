!function(){var e=document.querySelector("iframe"),t=new Player(e),r="current time",o=throttle((function(e){var t=e.seconds;localStorage.setItem(r,t)}),1e3);t.setCurrentTime(localStorage.getItem(r)||0),t.on("timeupdate",o)}();
//# sourceMappingURL=02-video.0e1853f1.js.map
