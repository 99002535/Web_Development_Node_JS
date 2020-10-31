var mobileList = [
    {
        brand:'Oneplus',
        price: 40000,
        specs:{
            processor:'Qualcomm',
            processormodel:'Snapdragon',
            ram:'8GB',
            screensize: '5.5 inch',
            camera:'108MP'
        }
        
    },
    {
        brand:'Samsung',
        price: 50000,
        specs:{
            processor:'Qualcomm',
            processormodel:'Snapdragon',
            ram:'12GB',
            screensize: '6 inch',
            camera:'64MP'
        }
        
    },
    {
        brand:'Xiaomi ',
        price: 40000,
        specs:{
            processor:'Qualcomm',
            processormodel:'Snapdragon',
            ram:'8GB',
            screensize: '5.5 inch',
            camera:'64MP'
        }
        
    },
    
]
mobileList.forEach(mobile=>{
    for(const key in mobile){
        var mob=mobile[key];
        if(mob instanceof Array){
            mob.forEach(elem=>console.log('brand: '+elem))
        }
        else if(typeof mob == 'object'){
            for(const key in mob){
                console.log(key+' : '+mob[key]);
            }
        }
        else
        console.log(mob);
    }
});
// for(const spec in mobileList){
//     var mob = mobileList[spec];
//     // for(const feature in specs){
//     // var feat = specs[feature];
//     if(mob instanceof Array){
//         for(const i in mob)
//         console.log('Brand:' +mob[i]);
//     }
//     else if(typeof mob=='object'){
//         for(const key in mob){
//             console.log(key+' : '+mob[key]);
//         }
//     }
//     else if(typeof mob == 'function'){
//         mob();
//     }
//     else
//     console.log(mob);
// }
// //}
