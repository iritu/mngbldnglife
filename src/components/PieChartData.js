import { Pie } from 'react-chartjs-2';
import React from 'react';


function PieChartData({entity}){

    //get labels : "options": ["yes" , "no"]
    let arrLabels = entity.options; 
    let arrVotes = entity.votes; 
    let arrDataPie = [0];

    let noOfVotes = arrVotes.length; 

    let backgroundColor= [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ]; 

    let  borderColor= [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ] ; 
      

     let setBgColor=[];
     let setBorderColor = []; 
     
     
     for (let index = 0; index < arrLabels.length; index++) {
        setBgColor.push(backgroundColor[index]); 
        setBorderColor.push(borderColor[index]); 
     }



    //get data from votes:
    // "votes":[  {"userid":1001, "result":0  }, {"userid":1002, "result":0 }  ]

    for (const vote of entity.votes) {
        if (vote.result === 0 ){
            
        }
    }


    //how to build the data dynamically??
    for (let index = 0; index < arrLabels.length; index++) {
        
        for (let Innerindex = 0; Innerindex < arrVotes.length; Innerindex++) {
            
                if (arrLabels[index++] === arrVotes[Innerindex].result )
                {
                    arrDataPie[index] =+ 1;       
                }
        }
        
    }

    console.log("arrDataPie"); 
    console.log(arrDataPie); 

    const data = {
        labels: arrLabels,  //['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: noOfVotes + '# of Votes', //not showing
            data: [12, 19, 3, 5, 2, 3], //arrDataPie
            backgroundColor:setBgColor,
            borderColor: setBorderColor,
            borderWidth: 1,
          },
        ],
      };

     return  (
        <>
         <strong>Voting Percentage</strong>
          <Pie data={data} />
        </>
      );





}


export default PieChartData; 