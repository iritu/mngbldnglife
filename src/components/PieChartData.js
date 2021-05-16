import { Pie } from 'react-chartjs-2';
import React from 'react';


function PieChartData({entity}){

    //get labels : "options": ["yes" , "no"]
    let arrLabels = entity.options; 
    let arrVotes = entity.votes; 
    let arrDataPie = [];

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
    
    /**
     * 
     * @param {*} label 
     * @param {*} arrVotes 
     * @returns : count (int) 
     */
    function countResults(label, arrVotes){
      const count = arrVotes.reduce((counter, obj) => obj.result === label ? counter += 1 : counter, 0); // 6
      //console.log(count);
      return count; 
    }

 
    /**
     * 
     * for each label ( like: yes/no etc)
     * count ( func countResults() ) how many occurance are found in votes array.
     * arrVotes is obj array and use reduce to preserve the orige array.
     * each time the counting come back with result > 0 
     * it is placed in the new created dynamically array - arrDataPie and it's index is incremented-
     * which is the data for the pie.
     * 
     */
    if ( Array.isArray(arrLabels)  )  {
      let i=0; 
      arrLabels.forEach(label => {
      let result=0; 
      result = countResults(label, arrVotes); 
      if (result > 0 )
      {
        arrDataPie[i] = result; 
        i++; 
      }
    });
  } 

    const data = {
        labels: arrLabels,  //['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: noOfVotes + '# of Votes', //not showing
            data: arrDataPie, //[12, 19, 3, 5, 2, 3], //arrDataPie
            backgroundColor:setBgColor,
            borderColor: setBorderColor,
            borderWidth: 1
          },
        ],
        options: {
          //Customize chart options
          responsive: true,
        }
      
      };

     return  (
        <>
         <strong>Voting Percentage</strong>
          <Pie data={data} />
        </>
      );

}


export default PieChartData; 