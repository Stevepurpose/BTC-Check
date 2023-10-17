let div=document.querySelector("#dollar")   
let p=document.querySelector("p")   
let stirling=document.getElementById("stirling")
let footer=document.querySelector("footer")
let euro=document.getElementById("euro")
  setInterval(()=>{
    async function getPrice(){
let respObj=await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")    
let json=await respObj.json()  
 
   
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
           <p id="discl"> Disclaimer: </P>
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
        
