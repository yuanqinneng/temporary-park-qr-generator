export default {
    SetRem:function(px) {
        console.log(px);
        
       var clientWidth = document.documentElement.clientWidth
       if (clientWidth < 750) {
         return px * (100 * (clientWidth / 750))
       } else {
        return px * 100;
       }
    }
}
