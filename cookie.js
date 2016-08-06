	var cookie = {
		set: function(name, value, days, path, domain, secure) {
			var cookieStr = "";
			if (name && value) {
				cookieStr += (encodeURIComponent(name) + "=" + value);
				if (typeof(days) == "number") {
					var date = new Date();
					date.setDate(date.getDate() + days);
					cookieStr += ("; expires=" + date);
				}
				if (path) {
					cookieStr += ("; path=" + path);
				}
				if (domain) {
					cookieStr += ("; domain=" + domain);
				}
				if (secure) {
					cookieStr += "; secure";
				}
				document.cookie = cookieStr;
			}
		},
		get: function(name) {
			var cookieName = encodeURIComponent(name);
			var cookieStart = cookieStr.indexOf(cookieName + "=");
			if (cookieStart > -1) {
				var cookie = cookieStr.split(";")[0];
				return cookie.split("=")[1];
			}
		},
		remove: function(name) {
			this.set(name, " ", -1);
		},
		clear: function() {
			var cookieArr = document.cookie.split("; ");
			for (var i = 0; i < cookieArr.length; i++) {
				this.remove(cookieArr[i].split("=")[0]);
			}
		}
	};