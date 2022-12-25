  //Show Time in Navigation Bar......
  let time=document.getElementById('container');
  let Dte=document.getElementById('Date');

  setInterval(()=>
  {
      let d= new Date();
      let h=d.getHours();
      let m=d.getMinutes();
      let s=d.getSeconds();
      let day=d.getDay();
      let date=d.getDate();
      let month=d.getMonth();
      let year=d.getFullYear();

      if(h<10)
      {
          h="0"+h;
          if(m<10)
          {
              m="0"+m;
          }
          else
          {
              m=m;
          }

          if(s<10)
          {
              s="0"+s;
          }
          else
          {
              s=s;
          }

          if(date<10)
          {
              date="0"+date;
          }
          else
          {
              date=date;
          }

          
          if(month<10)
          {
              month="0"+month;
          }
          else
          {
              month=month;
          }
      }
      else
      {
          h=h;
          if(m<10)
          {
              m="0"+m;
          }
          else
          {
              m=m;
          }

          if(s<10)
          {
              s="0"+s;
          }
          else
          {
              s=s;
          }

          
          if(date<10)
          {
              date="0"+date;
          }
          else
          {
              date=date;
          }

          if(month<10)
          {
              month="0"+month;
          }
          else
          {
              month=month;
          }
      }

      let Day;

      switch(day)
      {
          case 1:
              Day='Monday';
              break;
          case 2:
              Day='Tuesday';
              break
          case 3:
              Day='Wednesday';
              break;
          case 4:
              Day='Thursday';
              break;
          case 5:
              Day='Friday';
              break;
          case 6:
              Day='Saturday';
              break;
          case 0:
              Day='Sunday';
              break;
      }
      let Time=`${Day}, ${h}:${m}:${s}`;
      let D=`${date}-${month+1}-${year}`
      Dte.innerHTML=D;
      time.innerHTML=Time;

  },1000)