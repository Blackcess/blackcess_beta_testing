let foodInventory=[
    "1-Crate eggs","1.5kg Chicken","1kg goat meat","1kg sadza"
]
let pendingAccruals= {
    debtsPaid:[{
        name:"Aaron Bizumuremyi",
        amount:5000,
        due:"12/09/24",
        status:"paid",
    },
{
    name:"Covanent Muriwo",
    amount:50,
    due:"10/09/24",
    status: "paid",
},
{
    name:"Ngaakudzwe Njaluke",
    amount:200,
    due:"10/09/24",
    comment:"Paid 100 rupees on 12/09/2024 and only 100 rupees are left. This money was deducted from the electric expenses.",
    status:"paid",
}
]
}
let pendingDebtors={
    debtsReceived:[{
        name:"Tafadzwa Mahanga",
        amount:1150,
        due:"15/09/24",
        status:"pending",
    },
    {
        name:"Aaron Bizumiremyi",
        amount:5000,
        due:"12/09/24",
        status:"recieved",
    }]
}

let unexpectedExpenses = {
    expenses:[
        {
            electricRepairs:{
                amaount:100,
                fowardedTo:"ElectricBill A/C",
                date:"07/09/2024",
                comment:" expected faulty electric wiring plus electric fan repair"
            }
        }
    ]
}

let  dailyUseExp={
    startDate: "06/09/2024",
    dailyUse:[
        {day: 1,
        expenses:{
            eggs:{
                crate: true,
                amount: 190,
                quantity:" 1-crate",
                estimateEndDate: "28/09/2024",

            },
            sugar:{
                quantity: "1-kg",
                amount: 30,
                estimateEndDate:"20/09/2024",

            },
           tomato:{
                amount:80,
                quantity:"1-kg",
                estimateEndDate:"11/09/2024",
            },
            pepper:{
                amount:40,
                quantity:"0.5-kg",
                estimateEndDate:"11/09/2024",
            },
            popCorn:{
                amount:40,
                quantity:"4-packets",
                estimateEndDate:"06/09/2024"
            },
            transportCost:{
                total: 0
            }

        }
        },
        {
            day:2,
            expenses:{
                chicken:{
                    amount:300,
                    quantity:"1.5-KG",
                    estimateEndDate:"21/09/2024",

                },
                sadzaCosts:{
                    amount:70,
                    quantity:"2-packets",
                    estimateEndDate:"10/09/2024",
                    
                },
                electricityRepairs:{
                    amount:100,
                    comment:"no electricity for 2 days",
                }
            }
        },

        {
            day:3,
            expenses:0,
        },
        {day:4,
            expenses:{
                transportCost:{
                total:180,
                firstPart:90,
                secondPart:90,
                },
                goatMeat:{
                    amount:500,
                    quantity:"1-kg",
                    estimateEndDate:"26/09/2024"
                },
                bathingSoap:{
                   amount:80,
                   quantity:"unavailable" ,
                   estimateEndDate:"unavailable"
                },
                debtPaid:{
                    to:"Desire Masafure",
                    amount:100,
                    status: "paid",
                },
                lunch:{
                    amount:20,
                    comment:"lays",
                },
                
            }
        },
        {day:5,
            expenses:{
                transportCost:{
                    firstPart:30,
                    secondPart:30,
                    total:60,
                },
                sadzaCosts:{
                    amount:50,
                    quantity:"5-packets",
                },

            }
        },
        {day:6,
            expenses:{
                transportCost:{
                    firstPart:30,
                    secondPart:30,
                    total:60,
                },
                simCard:{
                    amount:500,
                    package:"new sim card payment with a package of 1.5GB per day.",
                    estimateEndDate:"10/10/2024",
                }
                
            }
        },
        {day:7,
            expenses:{
                transportCost:{
                    firstPart:30,
                    secondPart:30,
                    total:60,
                },

            }
        },{
            day:8,
            expenses:{
                transportCost:{
                    total:0,
                    firstPart:0,
                    secondPart:0,
                },
                sadzaCosts:{
                    amount:35,
                    quantity:"500g",
                    estimateEndDate:"15/09/2024" },
                tomato:{
                    amount:60,
                    quantity:"1kg",
                    estimateEndDate:"17/09/24",

                },
                pepper:{
                    amount:60,
                    quantity:"0.5kg",
                    estimateEndDate:"18/09/24"
                }
            },

        },
        {
            day:9,
            expenses:{
                transportCost:{
                    total:0,
                    firstPart:0,
                    secondPart:0,
                },
                sadzaCosts:{
                    amount:70,
                    quantity:"1Kg",
                    estimateEndDate:"19/09/2024"
                }
            }
        },
        {
            day:10,
           expenses: {
            transportCost:{
                total:0,
                firstPart:0,
                secondPart:0,
            },
            AAronBirthday:{
                date:"15/09/24",
                amount:140,
                comment:"UnIntetional Costs Not Countable In The Main Budget Plan."
            }

            }
        },
        {

        
            day:11,
            expenses:{
                transportCost:{
                    total:60,
                    firstPart:30,
                    secondPart:30,
                },
            }
        },
        {
            day:12,
            expenses:{
                transportCost:{
                    total:60,
                    firstPart:30,
                    secondPart:30,
                }
            }
        },
        {day:13,
            expenses:{
                transportCost:{
                    total:80,
                    firstPart:40,
                    secondPart:40,
                },
            }
        },
        {

        
        day: 14,
        expenses:{
            transportCost:{
                total:80,
                firstPart:40,
                secondPart:40,
            },

        }
    },
    {
        day:15,
       expenses: {
        transportCost:{
            total:80,
            firstPart:40,
            secondPart:40,
        },
        pen:{
            amount:20,
            color:"blue",
        },
        tomatoes:{
            amount:70,
            quantity:"1kg",
            estimateEndDate:"24/09/2024",
     }  
     }
    },
    {
        day:16,
       expenses: {
        sweetLassi:{
            amount:20,
            quantity:"2-packets",
        },
        bread:{
            amount:40,
            estimateEndDate:"24/09/2024",
        },
        lollipops:{
            amount:20,
            quantity:"2 sticks"
        },
        coffee:{
            amount:20,
            quantity:"10 satchets",
            estimateEndDate:"26/09/2024"
        },
        fanta:{
            amount:40,
            quantity:"750 ml",
        },
        biscuits:{
            amount:20,
            quantity:"2 packets",
            comment:"oreo",
        }
        }
    },
    {
        day:17,
       expenses: {
        simCard:{
            amount:33,
            comment:"For watching a football match Arsenal vs Man City"
        },
        mountainDew:{
            amount:20,
            quantity:"500ml",
        },
        sweetLassi:{
            amount:10,
            quantity:"1 packet"
        },
        }
    },
    {day:18,
        expenses:{
            transportCost:{
                total:70,
                firstPart:30,
                secondPart:40,
            },
            sweetLassi:{
                amount:40,
                quantity:"4 packets"
            },
            stingEnergyDrink:{
                amount:20,
                quantity:"1-packet",
            },
        }

    },
    {
        day:19,
       expenses: {
        transportCost:{
            total:30,
            firstPart:30,
            secondPart:0,
        },
        spices:{
            amount:20,
            quantity:"2 packets"
        },
        sweetLassi:{
            amount:20,
            quantity:"2 packets"
        },
        cigarretes:{
            amount:20,
            quantity:"2 cigars"
        },
        bread:{
            amount:40,
            quantity:"1-loaf",
            estimateEndDate:"27/09/2024",
        },
        eggs:{
            amount:50,
            quantity:"5 eggs"
        },
        maggiNoodles:{
            amount:20,
            quantity:"2-packets",
        },
        mountainDew:{
            amount:20,
            quantity:"500ml"
        }
       }
    },
    {
        day:20,
        expenses:{
            transportCost:{
                total:70,
                firstPart:30,
                secondPart:40,
            } ,
            plasticFile:{
               amount:10,
               quantity:"1 plastic flat file" ,
            },
            assignmentSheet:{
                amount:20,

            },
            water:{
                amount:20,
                quantity:"1 bottle",
            },
            lunch:{
                amount:60,
                comment: "1-water bottle, 1 pepsi, 1 lays"
            }
        }
    },
    {
        day:21,
        expenses:{
            transportCost:{
                total:70,
                firstPart:30,
                secondPart:40,
            },
            sting:{
                amount:20,
                quantity:"500ml"
            },
            oreo:{
                amount:10,
                quantity:"1 packet",
            },
            pepsi:{
                amount:20,
                quantity:"500ml",
            },
            sweetLassi:{
                amount:20,
                quantity:"2 packets",
            },
        }
    },
    {
        day:22,
        expenses:{
            transportCost:{
                total:0,
                firstPart:0,
                secondPart:0,
            },
            bread:{
                amount:20,
                estimateEndDate:"23/09/2024",
            },
            sweetLassi:{
                amount:10,
                quantity:"1 packet",
            },
            biscuits:{
                amaount:20,
                quantity:"2 packet",
            },
            milk:{
                amount:35,
                quantity:"1 packet",
            },
        }
    },
    {
        day:23,
        expenses:{
            transportCost:{
                total:0,
                firstPart:0,
                secondPart:0,
            },
            washingPowder:{
                amount:20,
                quantity:"2 packet",
            },
            rice:{
                amount:40,
                quantity:"1-kg",
            },
            mountainDew:{
                amount:20,
                quantity:"500ml",
            },
            popCorn:{
                amount:40,
                quantity:"4 packet",
            },
        }
    },
    {
        day:24,
        expenses:{
            popCorn:{
                amount:40,
                quantity:"4 packet",
            },
            cookingOil:{
                amount:50,
                quantity:"1 packet",
                comment:" contribute 50 rupees each with 3 people to buy 1 packet of oil for 130 rupees"
            },

        }
    },
    {
        day:25,
        expenses:{
            transportCost:{
                total:60,
                firstPart:30,
                secondPart:30,
            },
            biscuits:{
                amount:10,
                quantity:"1 packet"
            },
            generalGrocery:{
                amount:340,
                comment:  "mixed ass foods to lastr through the week"
            },
        }
    }

        
    ]

    
}


const day5=dailyUseExp.dailyUse[4].expenses;
const day6=dailyUseExp.dailyUse[5].expenses;
const day7=dailyUseExp.dailyUse[6].expenses;
const day8=dailyUseExp.dailyUse[7].expenses;
const day9=dailyUseExp.dailyUse[8].expenses;
const day10=dailyUseExp.dailyUse[9].expenses;
const day11=dailyUseExp.dailyUse[10].expenses;
const day12=dailyUseExp.dailyUse[11].expenses;

const day2=dailyUseExp.dailyUse[1].expenses;
const useExpensesRoot= dailyUseExp.dailyUse[0].expenses;
const day1Expenses= (useExpensesRoot.eggs.amount) + (useExpensesRoot.sugar.amount) + (useExpensesRoot.tomato.amount) + (useExpensesRoot.pepper.amount) + (useExpensesRoot.popCorn.amount)  ;
const day2Expenses= (day2.chicken.amount) + (day2.sadza.amount) + (day2.electricityRepairs.amount);
const day3Expenses=0;
const day4root= dailyUseExp.dailyUse[3].expenses;
const day4Expenses= (day4root.transportCost) + (day4root.goatMeat) + (day4root.bathingSoap) + (day4root.debtPaid.amount) + (day4root.lunch);
const day5Expense= (day5.transportCost) + (day5.sadzaCosts);
const day6Expense= (day6.transportCost) + (day6.simCard);
const day7Expense= (day7.transportCost);
const day8Expense= (day8.transportCost)+ (day8.sadzaCosts) + (day8.tomato.amount) + (day8.pepper.amount);
const day9Expense= (day9.sadzaCosts);
const day10Expense=0;
const day11Expense= (day11.transportCost);
const day12Expense= (day12.transportCost);
console.log(`Day 1 Expenses: ${day1Expenses}`);
console.log(`Day2 Expenses: ${day2Expenses}`);
console.log(`Day3  Expense:${day3Expenses}`);
console.log(`Day4  Expense:${day4Expenses}`);
// console.log(useExpensesRoot.eggs.amount  + (useExpensesRoot.popCorn.amount) );
let SeptemberPlan= [
    {
        totalBudget: 4000,
        budgetDivision:{
            transportCosts: 1000,
            meatCosts:400,
            sadzaCosts:400,
            riceCosts:200,
            eggCosts:190,
            oilCosts:260,
            tomatoCosts:150,
        }

    }
]
let initial= SeptemberPlan[0].budgetDivision;

let total= initial.transportCosts + initial.meatCosts + initial.sadzaCosts + initial.riceCosts + initial.eggCosts + initial.oilCosts + initial.tomatoCosts;
let balance= SeptemberPlan[0].totalBudget - total;
if(total< SeptemberPlan[0].totalBudget){
    console.log(`Budget is currently looking good : ${total}/${SeptemberPlan[0].totalBudget}`);
    console.log(`Balance : ${balance}`);
}
else{
    console.log(`Budget not looking good : ${total}/ ${SeptemberPlan[0].totalBudget}`);
}
const SeptExpensesArray= [day1Expenses,day2Expenses,day3Expenses,day4Expenses,day5Expense,day6Expense,day7Expense,day8Expense,day9Expense,day10Expense,day11Expense];
// console.log(SeptExpensesArray);

SeptExpensesArray.push(day12Expense);


function compoundExpenses(){
    let combined=0;
    for(let i=0;i<SeptExpensesArray.length;i++){
  
        combined += SeptExpensesArray[i]
        
       
    }
    return combined;
}
let result= compoundExpenses();
const bal = 4000- result;
console.log(`you have used ${result} rupees on total expenses . Balance: ${bal}`);
const balanceSheet = bal-200-110 + 100;
console.log(`balance after acruals:${balanceSheet}`);



/*
1. Create seperates accounts for all categories(food, transport,electricity,clothes,lunch,unexpected expenses,college accesories)
2.Create day3 expenses.
3.Collect all data and keep it organised.
*/






// export default SeptemberPlan;
