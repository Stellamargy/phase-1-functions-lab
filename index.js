// Code your solution in this file!
function distanceFromHqInBlocks (passengerPickUp){
    const hqBlock=42;
    let distanceInBlock;
   if (passengerPickUp<42){
    distanceInBlock=hqBlock-passengerPickUp

   }else{
    distanceInBlock=passengerPickUp-hqBlock
   }
   return distanceInBlock;
}


function distanceFromHqInFeet(block){
    const distanceInBlock=distanceFromHqInBlocks(block);
    const distanceInFeet=distanceInBlock*264;
    return distanceInFeet;
    

}

function distanceTravelledInFeet(start , destination){
    let distanceInFeet;
    if (start<destination){
        distanceInFeet=(destination-start)*264
        
    }else{
        distanceInFeet=(start-destination)*264
    }
  
    return distanceInFeet;
}

function calculatesFarePrice(start,destination){
   const distanceInFeet=distanceTravelledInFeet(start ,destination);
   let fare;
    if(distanceInFeet<2500){
        if(distanceInFeet<=400){
            fare=0;
        }else if(distanceInFeet>400 && distanceInFeet <2000){
            fare=0.02*(distanceInFeet-400);
        }else if(distanceInFeet>=2000){
            fare=25;
        }
    }else{
        fare="cannot travel that far"
    }
    return fare;

}