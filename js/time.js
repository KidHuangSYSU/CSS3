var Timeline = function() {
  this.order = [];

  this.add = function(timeout, fn) {
    this.order.push({"timeout": timeout, "fn": fn});
  }

  this.start = function( ff ) {
  	ff = ff | 0;
  	for (s in this.order) {
  	  (function(cur){
  	    setTimeout(cur.fn, Math.max(cur.timeout-ff, 0));
  	  })(this.order[s]);
  	}
  }
}