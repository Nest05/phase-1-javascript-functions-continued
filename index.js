
// code your solution here
function saturdayFun(activity = 'roller-skate'){

    return `This Saturday, I want to ${activity}!`;

}
activity('bathe my dog');

function mondayWork(activity1 = 'go to the office'){
    return `This Monday, I will ${activity1}.`;

}
activity1('work from home');


function wrapAdjective(star){

    return function(feel = 'special'){
        
        return `You are ${star}${feel}${star}!`;
    }
}
console.log(wrapAdjective('*')('Awesome')('*'));