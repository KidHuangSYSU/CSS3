window.onload = function() {
  // init scene
  var s1 = new Timeline();
  // open scene
  var s2 = new Timeline();
  // rotate scene
  var s3 = new Timeline();

  s1.add(1, function(){
    document.getElementById("_box").className = "box box_rock";

    document.getElementById("_rope").onclick = function() {
      s2.start();
    }
  });

  s2.add(100, function(){
  	document.getElementById("_box").className = "box";
  	document.getElementById("_text").className = "text text_in";
  });
  s2.add(400, function(){
  	document.getElementById("_rope").className = "rope2";
  });
  s2.add(800, function(){
  	document.getElementById("_rope").className = "rope3";
  });
  s2.add(1200, function(){
  	document.getElementById("_rope").className = "rope4";
  });
  s2.add(1600, function(){
  	document.getElementById("_rope").className = "rope0";
  });
  s2.add(2000, function(){
  	document.getElementById("_zongzi").className = "zongzi zongzi_out";
  	document.getElementById("_meat").className = "meat meat_in";
  	document.getElementById("_left").className = "left left_in";
  	document.getElementById("_right").className = "right right_in";
  	document.getElementById("_t1").className = "t1 t_in t_view_0";
  	document.getElementById("_t2").className = "t2 t_in t_mirror_0";	
  });
  s2.add(3000, function(){
  	document.getElementById("_left").className = "left left_in left_out";
  	document.getElementById("_right").className = "right right_in right_out";
    document.getElementById("_bottom").className = "bottom bottom_in";
    s3.start();
  });

  s3.add(1000, function(){
    document.getElementById("_meat").className = "meat meat_in meat_view_1";
  });
  s3.add(1200, function(){
    document.getElementById("_meat").className = "meat meat_in meat_view_2";
    document.getElementById("_t1").className = "t1 t_in t_view_2";
    document.getElementById("_t2").className = "t2 t_in t_mirror_2";    
  });
  s3.add(1400, function(){
    document.getElementById("_meat").className = "meat meat_in meat_view_3";
    document.getElementById("_t1").className = "t1 t_in t_view_3";
    document.getElementById("_t2").className = "t2 t_in t_mirror_3";  
  });
  s3.add(1600, function(){
    document.getElementById("_meat").className = "meat meat_in meat_view_4";
    document.getElementById("_t1").className = "t1 t_in t_view_4";
    document.getElementById("_t2").className = "t2 t_in t_mirror_4";  
  });
  s3.add(1800, function(){
    document.getElementById("_meat").className = "meat meat_in meat_view_0";
    document.getElementById("_t1").className = "t1 t_in t_mirror_0";
    document.getElementById("_t2").className = "t2 t_in t_view_0";      
  });
  s3.add(3000, function(){
    document.getElementById("_meat").className = "meat meat_in meat_view_4";
    document.getElementById("_t1").className = "t1 t_in t_view_4";
    document.getElementById("_t2").className = "t2 t_in t_mirror_4";  
  });
  s3.add(3000, function(){
    document.getElementById("_meat").className = "meat meat_in meat_view_3";
    document.getElementById("_t1").className = "t1 t_in t_view_3";
    document.getElementById("_t2").className = "t2 t_in t_mirror_3";  
  });
  s3.add(3400, function(){
    document.getElementById("_meat").className = "meat meat_in meat_view_2";
    document.getElementById("_t1").className = "t1 t_in t_view_2";
    document.getElementById("_t2").className = "t2 t_in t_mirror_2";  
  });
  s3.add(3600, function(){
    document.getElementById("_meat").className = "meat meat_in meat_view_1";
    document.getElementById("_t1").className = "t1 t_in t_view_0";
    document.getElementById("_t2").className = "t2 t_in t_mirror_0"; 
  });
  s3.add(5000, function(){
    s3.start();
  });


  s1.start();
}