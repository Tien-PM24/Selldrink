function myfuction(){

    var N=document.getElementById("loai_nuoc");
    var valueN=N[N.selectedIndex].value;
    var T=document.getElementById("trai_cay");
    var valueT=T[T.selectedIndex].value;
    var mymoney=parseInt(document.getElementById("tiền").value);
    var ketqua;
    var tiennuoc;
    var tientrai;
    //loại nước
    if(valueN=="nước_lọc"){
        tiennuoc=10.000;
    }
    else if(valueN=="coffee"){
        tiennuoc=17.000;
    }
    else if(valueN=="trà_sữa"){
        tiennuoc=20.000;
    }
    else if(valueN=="trà_xanh"){
        tiennuoc=15.000;
    //trái cây
    }
    else{
        tiennuoc=0;
    };

    if(valueT=="cam"){
        tientrai=50.000;
    }
    else if(valueT=="chuối"){
        tientrai=30.000;
    }
    else if(valueT=="bưởi"){
        tientrai=70.000;
    }
    else{
        tientrai=0;
    };
    
    ketqua=(tiennuoc+tientrai);
    if(mymoney==ketqua){
        document.getElementById("kq").innerHTML="Đây là"+" "+valueN+" "+"của bạn"+"    "+"$ Số tiền thanh toán là:"+" "+ketqua;
    }
    else if(mymoney>ketqua){
        document.getElementById("kq").innerHTML="Đây là"+" "+valueN+" "+"của bạn"+"   " +"$ Số tiền thanh toán là:"+" "+ketqua+" "+"Số tiền dư là:"+" "+(mymoney-ketqua);
    }
    else{
        document.getElementById("kq").innerHTML="Số tiền bạn không đủ!!!"+"  "+"Số tiền bạn cần phải thanh toán là:"+" "+ketqua;
    };
};