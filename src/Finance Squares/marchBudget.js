import { fireEvent } from "@testing-library/react";
import { GiNoodleBall } from "react-icons/gi";

const marchBudget={
    startDate:"01.03/2025",
    dailyUse:[
        {
            day:1,
            expenses:{
                transportCost:{
                    total:0,
                    firstPart:0,
                    secondPart:0,
                    comment:"Deducted from the transport account"
                },
                drink:{
                    amount:20,
                    comment:"Deducted from the food account"
                },
                popCorn:{
                    amount:40,
                    comment:"Deducted from the food account"
                }
            }
        },
        {
            day:2,
            expenses:{
                transportCost:{
                    total:0,
                    firstPart:0,
                    secondPart:0,
                    comment:"Deducted from the transport account"
                },
                chicken:{
                    amount:450,
                    quantity:"2,25kg",
                    comment:"Deducted from the food account"
                },
                sadzaCost:{
                    amount:105,
                    quantity:"3- packets",
                    comment:"Deducted from the food account"
                },
                drink:{
                    amount:20,
                    comment:"Deducted from the food account"
                }
            }
        },
        {
            day:3,
            expenses:{
                transportCost:{
                    total:70,
                    firstPart:40,
                    secondPart:30,
                    comment:"Deducted from the transport account"
                },
                drink:{
                    amount:20,
                    comment:"Deducted from the transport account"
                }
            }
        },{
            day:4,
            expenses:{  
                transportCost:{
                    total:80,
                    firstPart:40,
                    secondPart:40,
                    comment:"Deducted from the transport account"
                },
                shakes:{
                    amount:50,
                    comment:"Deducted from the food account"
                },
                lollipops:{
                    amount:20,
                    comment:"Deducted from the food account"
                }
            }
        },
        {
            day:5,
            expenses:{
                transportCost:{
                    total:30,
                    firstPart:30,
                    secondPart:0,
                    comment:"Deducted from the transport account"
                },
                biscuits:{
                    amount:40,
                    comment:"Deducted from the food account"
                },
                lays:{
                    amount:40,
                    comment:"Deducted from the food account"
                }
            }
        },
        {
            day:6,
            expenses:{
                transportCost:{
                    total:70,
                    firstPart:40,
                    secondPart:30,
                    comment:"Deducted from the transport account"
                },
                shakes:{
                    amount:50,
                    comment:"Deducted from the food account"
                },
                rice:{
                    amount:90,
                    quantity:"2 kg",
                    comment:"Deducted from the food account"
                },
                eggs:{
                    amount:40,
                    quantity:"6 pieces",
                    comment:"Deducted from the food account"
                },
                coffee:{
                    amount:20,
                    comment:"Deducted from the food account"
                }
                
            }
        },
        {
            day:7,
            expenses:{
                transportCost:{
                    total:40,
                    firstPart:20,
                    secondPart:20,
                    comment:"Deducted from the transport account"
                },
                drink:{
                    amount:20,
                    comment:"Deducted from the food account"
                },
                
            }
        },
        {
            day:8,
            expenses:{
                transportCost:{
                    total:70,
                    firstPart:30,
                    secondPart:40,
                    comment:"Deducted from the transport account"
                } ,
                cookingOil:{
                amount:100,
                quantity:"1 litre",
                comment:"Deducted from the food account"
                }          

             }
        },
        {
            day:9,
            expenses:{
                transportCost:{
                    total:0,
                    firstPart:0,
                    secondPart:0,
                    comment:"Deducted from the transport account"
                },

                drink:{
                    amount:20,
                    comment:"Deducted from the food account"
                },
                
            }
        },
        {
            day:10,
            expenses:{
                transportCost:{
                    total:80,
                    firstPart:40,
                    secondPart:40,
                    comment:"Deducted from the transport account"
                },
                coffee:{
                    amount:25,
                    comment:"Deducted from the food account"
                },
                drink:{
                    amount:20,
                    comment:"Deducted from the food account"
                },
                lays:{
                    amount:60,
                    comment:"Deducted from the food account"
                }
            }
        },
        {
            day:14,
            transportCost:{
                total:0,
                firstPart:0,
                secondPart:0,
                comment:"Deducted from the transport account"
            },
            sauce:{
                amount:20,
                comment:"Deducted from the food account"
            },
            rice:{
                amount:95,
                quantity:"2 kg",
                comment:"Deducted from the food account"
            },
            drink:{
                amount:20,
                comment:"Deducted from the food account"
            }
        },
        {
            day:15,
            expenses:{
                transportCost:{
                    total:0,
                    firstPart:0,
                    secondPart:0,
                    comment:"Deducted from the transport account"
                },
                chicken:{
                    amount:500,
                    quantity:"2.5 kg",
                    comment:"Deducted from the food account"
                },
                tomatoes:{
                    amount:50,
                    quantity:"1 kg",
                    comment:"Deducted from the food account"
                }

            }
        },
        {
            day:16,
            expenses:{
                transportCost:{
                    total:0,
                    firstPart:0,
                    secondPart:0,
                    comment:"Deducted from the transport account"
                },
                sweetLassi:{
                    amount:20,
                    comment:"Deducted from the food account"
                },
                drink:{
                    amount:20,
                    comment:"Deducted from the food account"
                },
                coffee:{
                    amount:30,
                    comment:"Deducted from the food account"
                },
                onions:{
                    amount:50,
                    quantity:"1 kg",
                    comment:"Deducetd from the food account"
                },
                fruits:{
                    amount:90,
                    comment:"Deducted from the food account"
                }
            }
        },
        {
            dy:17,
            expenses:{
                transportCost:{
                    total:70,
                    firstPart:40,
                    secondPart:30,
                    comment:"Deducted from the transport account"
                },
                tomatoes:{
                    amount:40,
                    quantity:"1 kg",
                    comment:"Deducted from the food account"
                },
                fruit:{
                    amount:20,
                    comment:"Deducted from the foiod account"
                }
            }
        },
        {
            day:18,
            expenses:{
                transportCost:{
                    total:80,
                    firstPart:40,
                    secondPart:40,
                    comment:"Deducted from the transport account"
                },
                drink:{
                    amount:20,
                    comment:"Deducted from the food account"
                },
                noodles:{
                    amount:20,
                    comment:"Deducted from the food account"
                }

            }
        },
        {
            day:19,
            expenses:{
                transportCost:{
                    total:0,
                    firstPart:0,
                    secondPart:0,
                    comment:"Deducted from the transport account"
                },
                drink:{
                    amount:20,
                    comment:"Deducted from the food account"
                },
                bread:{
                    amount:70,
                    comment:"Deducted from the food account"
                },
                eggs:{
                    amount:35,
                    quantity:"6 pieces",
                    comment:"Deducted from the food account"
                }
            }
        },
        {
            day:20,
            expenses:{
                transportCost:{
                    total:60,
                    firstPart:30,
                    secondPart:30,
                    comment:"Deducted from the transport account"
                },
                sweetLassi:{
                    amount:20,
                    comment:"Deducted from the food account"
                },
                rice:{
                    amount:95,
                    quantity:"2 kg",
                    comment:"Deducted from the food account"
                },
                drink:{
                    amount:20,
                    comment:"Deducted from the food account"
                },

            }
        },{
            day:21,
            expenses:{
                transportCost:{
                    total:80,
                    firstPart:40,
                    secondPart:40,
                    comment:"Deducted from the transport account"
                },
                neo_fries:{
                    amount:25,
                    comment:"Deducted from the lunch account"
                },
                drink:{
                    amount:20,
                    comment:"Deducted from the food account"
                }
            }
        },
        {
            day:22,
            expenses:{
                transportCost:{
                    total:0,
                    firstPart:0,
                    secondPart:0,
                    comment:"Deducted from the transport account"
                },
                popCorn:{
                    amount:40,
                    comment:"Deducted from the food account"
                },
                drink:{
                    amount:20,
                    comment:"Deducted from the food account"
                }
            }
        },
        {
            day:23,
            expenses:{
                transportCost:{
                    total:0,
                    firstPart:0,
                    secondPart:0,
                    comment:"Deducted from the food account"
                },
                sweetLassi:{
                    amount:20,
                    comment:"Deducted from the food account"
                },
                salt:{
                    amount:30,
                    comment:"Deducted from the food account "
                },
                coffee:{
                    amount:24,
                    comment:"Deducted from the food account"
                },
                bread:{
                    amount:70,
                    comment:"Deducted from the food account"
                },
                eggs:{
                    amount:40,
                    quantity:"6-pieces",
                    comment:"Deducted from the food axccount"
                }
            }
        },
        {
            day:24,
            expenses:{
                transportCost:{
                    total:70,
                    firstPart:40,
                    secondPart:30,
                    comment:"Deducted from the transport account"
                },
                rice:{
                    amount:70,
                    quantity:"1 kg",
                    comment:"Deducted from the food account"
                },
                sweetLassi:{
                    amount:20,
                    comment:"Deducted from the food account"
                },
                drink:{
                    amount:20,
                    comment:"Deducted from the food account"
                },
                neo_fries:{
                    amount:25,
                    comment:"Deducted from the lunch account"
                },
                cookingOil:{
                    amount:100,
                    quantity:"1 litre",
                    comment:"Deducted from the food account"
                }
            }
        },

        {
            day:25,
            expenses:{
                transportCost:{
                    total:70,
                    firstPart:40,
                    secondPart:30,
                    comment:"Deducted from the transport account"
                },
                neo_fries:{
                    amount:50,
                    comment:"Deducted from the lunch account"
                },


            }
        }
    ]
}






//100 rupees owing from the lunch account (shakes) to the food account