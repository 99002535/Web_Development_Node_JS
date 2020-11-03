var mobile ={
    brand: 'OnePlus',
    price:40000,
    display:function(){
    console.log('The mobile specs are as follows:')
    },
    specs:{
    processor:'Qualcomm',
    processormodel:'Snapdragon',
    ram:'8GB',
    screensize: '5.5 inch',
    camera:'108MP'
    }
   }
//    console.log(mobile.brand);
//    console.log(mobile.specs);
for(const spec in mobile){
    var mob = mobile[spec];
    
    if(mob instanceof Array){
        for(const i in mob)
        console.log('brand:' +mob[i]);
    }
    else if(typeof mob=='object'){
        for(const key in mob){
            console.log(key+' : '+mob[key]);
        }
    }
    else if(typeof mob == 'function'){
        mob();
    }
    else
    console.log(mob);
}
