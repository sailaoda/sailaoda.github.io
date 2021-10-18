//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
    // "url(/img/bg/2.png)",
    // "url(/img/bg/3.png)",
    // "url(/img/bg/4.png)",
    // "url(https://cdn.jsdelivr.net/gh/sailaoda/sai_img//img/3/7.png)",
    // "url(https://cdn.jsdelivr.net/gh/sailaoda/sai_img//img/3/wallhaven-ymqkyk_2560x1440.png)",
    "url(/img/bg/1.png)",
    "url(/img/bg/7.png)",
    //"url(/img/bg/10.png)",
    // "url(/img/bg/12.png)",
    // "url(/img/bg/13.png)",
    //"url(/img/bg/14.png)",
  ];
  //获取背景图片总数，生成随机数
  var bgindex =Math.ceil(Math.random() * (backimg.length-1));
  //重设背景图片
  document.getElementById("web_bg").style.backgroundImage = backimg[bgindex]; 
 
 
 
 
   //随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
  // var bannerimg =[
  //   // "url(/img/bg/(1).jpg)",
  //   // "url(/img/bg/(2).png)",
  //   // "url(/img/bg/(3).png)",
  //   // "url(/img/bg/(6).png)",
  //   // "url(/img/bg/(7).png)",
  //   // "url(/img/bg/(9).png)",
  //   "url(/img/bg/10.png)",
  //   "url(/img/bg/12.png)",
  //   "url(/img/bg/13.png)",
  //   "url(/img/4.png)"
  // ];
  // //获取banner图片总数，生成随机数
  // var bannerindex =Math.ceil(Math.random() * (bannerimg.length-1));
  // //重设banner图片
  // document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];