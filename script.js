var div=document.querySelector("#dollar")   
  var p=document.querySelector("p")   
  var stirling=document.getElementById("stirling")
  var footer=document.querySelector("footer")
  var h2=document.querySelector("h2")
  var euro=document.getElementById("euro")
  setInterval(()=>{
    async function getPrice(){
var respObj=await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")    
    var json=await respObj.json()  
 
    h2.classList.add("highlight")
    dollar.classList.add("highlight")
    euro.classList.add("highlight")
    stirling.classList.add("highlight")

    setInterval(()=>{
      stirling.classList.remove("highlight")
    },2000)

    setInterval(()=>{
      h2.classList.remove("highlight")
      dollar.classList.remove("highlight")
    },3000)

    setInterval(()=>{
      euro.classList.remove("highlight")
    },5000)
  
    dollar.innerHTML=`
                   
    
    <p>BTC/USD :${json.bpi.USD.rate}</p>

    
    
       `
       stirling.innerHTML=`
       
       <p>BTC/GBP :${json.bpi.GBP.rate}</p>
       
       `
       euro.innerHTML=`
       
       <p>BTC/EUR :${json.bpi.EUR.rate}</p>
       `
       footer.innerHTML=`
           <p id="discl">   Disclaimer: </P>
       <p>${json.disclaimer}</p>
          `
        }    
        getPrice()
        h2.innerHTML+=""
        dollar.innerHTML+=""
        stirling.innerHTML+=""
        euro.innerHTML+=""
        footer.innerHTML+=""
      },5000)
        
