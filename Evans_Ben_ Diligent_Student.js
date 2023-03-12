var time = 1741;                                                                                //time is input using military time
var day = 'Wednesday';                                                                          // the day is input depending on which day it is                                                                         
var odd = (time % 2 == 1);                                                                      // this calculates odd numbers
var even = (time % 2 == 0);                                                                     // this calculates even numbers
var evenSelection = ['Ice Cream', 'Cookies', 'Candy'];                                          // selection for even times
var oddSelection = ['Hot Chocolate', 'Tea', 'Cake'];                                            // selection for odd times


if (time<1500){                                                                                  //if time is less than 3pm 
    console.log('I want a latte');                                                               //console output
} else if (time >= 1500 && time <1800 ){                                                         //if time is between 3pm and 6pm
    if(time = odd){                                                                              // if inside the if' if time = and odd number
        var oddChoice = oddSelection[Math.floor(Math.random() * (oddSelection.length-1))];       // odd choice will be a random choice from the oddSelection array
        console.log('I want '+ oddChoice);                                                       //oddchoice output
    } else if (time = even){                                                                      // if time is an even number
        var evenChoice = evenSelection[Math.floor(Math.random() * (evenSelection.length-1))];    // even choice will be a random choice from the evenSelection array
        console.log('I want '+ evenChoice);                                                      // even choice output
    } 
} else if (time >= 1800 && time < 2200){                                                          // if time is greater than 6pm and less than 10pm
    if (day == 'Wednesday'){                                                                      // if the day input is wednesday
        var flavor = 'Strawberry';                                                                //flavor choice
    }else {
        flavor = 'Vanilla';                                                                        // any day besides wednesday flavor choice
    }
    console.log('I want Ice Cream. Im in the mood for '+ flavor);                                  //ice cream output + flavor
} else {
    console.log("I don't want anything other than sleep!")                                         // To late to eat just go to bed.
}


// if I'm up for ice cream, I want strawberry - but only if it's Wednesday. Otherwise, I want vanilla.
//the time is between 3pm - 6pm, I want to have it pick either ice cream or hot chocolate depending on if the time is even or odd.

//I want my options for the 3pm - 6pm slot to be a random selection: if the time is even, I want my selections to be ice cream, cookies,
//or candy. If the time is odd, I want my selections to be hot chocolate, tea, or cake.