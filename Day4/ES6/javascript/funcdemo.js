function showFinalCost(noOfItems){
    return function(costperunit){
        if(noOfItems>100)
        return (costperunit*noOfItems)*0.9;
        else 
        return costperunit*noOfItems;
    }
}
console.log(showFinalCost(100)(10));