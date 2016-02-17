export default {
  request: function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r !== null) return unescape(r[2]);
    return null;
  },
  encryptMobile: function(mobile) {
    var frontLen = 3,
      endLen = 3;
    var len = mobile.length - frontLen - endLen;
    var xing = '';
    for (var i = 0; i < len; i++) {
      xing += '*';
    }
    return mobile.substr(0, frontLen) + xing + mobile.substr(mobile.length - endLen);
  },

  getParameterByName: function(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  },

  stringLength: function(str) {
    return str.replace(/[^\x00-\xff]/g, "rr").length;
  },

  stringSub: function(str, n) {
    var r = /[^\x00-\xff]/g;
    if (str.replace(r, "mm").length <= n) return str;
    // n = n - 3;
    var m = Math.floor(n / 2);
    for (var i = m; i < str.length; i++) {
      if (str.substr(0, i).replace(r, "mm").length >= n) {
        return str.substr(0, i);
      }
    }
    return str;
  }
}
