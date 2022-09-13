var hours = ['8:00','8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '15:30', '16:00', '16;30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30']
for(i = 0; i < hours.length; i++){
   // console.log(hours[i])
    document.getElementById('hours-list').innerHTML += `<tr class = "tr-lines" id = "a">
        <td colspan="8" style="line-height: 25px; height: 25px; cursor: pointer;
    border-bottom: 1px solid rgb(204, 204, 204); width: 100%;
    text-align: left; padding-right: 10px; color: #899;">`+hours[i]+`</td>

    <div style = "background-color: cornflowerblue; position: absolute;
            
            width: 150px;
            height: 1px;
            "></div>

        </tr>`
}

var hourLines = document.getElementsByClassName('tr-lines')
for(let i = 0; i< hourLines.length; i++){
  
 
    hourLines[i].addEventListener("mouseover", function( event ) {
      
      //  console.log(cXcY, event.path[1].id)
      var ball = `<div style = "background-color: rgb(252, 103, 61); position: absolute;
            
             width: 500px;
             height: 1px;
             "></div>`
             
           //  ball.style.left = "200px";
     event.path[0].innerHTML += ball
      
      
        
     // console.log(event.x)
    
    })
}