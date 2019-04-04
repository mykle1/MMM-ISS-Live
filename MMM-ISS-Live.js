/* Magic Mirror
 * Module: MMM-ISS-Live
 *
 * By Mykle1 - MIT Licensed
 *
 */

Module.register("MMM-ISS-Live",{

	defaults: {
			height:"270px",
			width:"480px",
            animationSpeed: "0",
            updateInterval: 60 * 60 * 1000,
	},

    start: function () {
		self = this;

    setInterval(function() {
    self.updateDom(self.config.animationSpeed || 0);
    }, this.config.updateInterval);

	},

	getStyles: function() {
        return ["MMM-ISS-Live.css"];
    },

	getDom: function() {

		var iframe = document.createElement("IFRAME");
		iframe.classList.add("iframe");
		iframe.style = "border: 0 none transparent";
		iframe.width = this.config.width;
		iframe.height = this.config.height;
		type="text/javascript";
    iframe.src="https://www.ustream.tv/embed/9408562?html5ui?autoplay=1";

		return iframe;
	},

	 /////  Add this function to the modules you want to control with voice //////

    notificationReceived: function(notification, payload) {
        if (notification === 'HIDE_STATION') {
            this.hide(1000);
        }  else if (notification === 'SHOW_STATION') {
            this.show(1000);
        }

    },

});
