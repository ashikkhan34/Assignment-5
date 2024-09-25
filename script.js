
            //   history button start 

     const historyButton = document.getElementById('History-btn');
     const donateButton = document.getElementById('Donate-btn');

     historyButton.addEventListener('click',function(){
        historyButton.classList.add(
            'bg-[#B4F461]',
            'text-[#111111]',
            'font-semibold',
            'rounded-sm'
        )
        donateButton.classList.remove(
            'bg-[#B4F461]',
            'text-[#111111]',
            'font-semibold',
            'rounded-sm'
        )
        donateButton.classList.add(
            'border',
            'text-black'
        )

        document.getElementById('history-section').classList.remove('hidden')
        document.getElementById('all-section').classList.add('hidden')
     })

        donateButton.addEventListener('click',function(){
            donateButton.classList.add(
                'bg-[#B4F461]',
            'text-[#111111]',
            'font-semibold',
            'rounded-sm'
            )
            // historyButton.addEventListener('click',function(){
                historyButton.classList.remove(
                    'bg-[#B4F461]',
                    'text-[#111111]',
                    'font-semibold',
                    'rounded-sm'
                )

                document.getElementById('history-section').classList.add('hidden')
                document.getElementById('all-section').classList.remove('hidden')
            })

    
    


    

                       //  first section dom 

   document.getElementById('donate-button').addEventListener("click",function(){
    
    const inputValue = parseFloat( document.getElementById('input-value').value)

    const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
    document.getElementById('main-balance').innerText = inputValue + mainBalance;



    const balance = parseFloat(document.getElementById('account-balance').innerText);
    document.getElementById('account-balance').innerText = balance - inputValue;


    function historyOfTheYear(){
        const historyItem = document.createElement('div')
    historyItem.className = 
    'lg:w-[1200px] h-32 border border-gray-300 p-10 m-auto rounded-xl mb-4 '

    historyItem.innerHTML = `
    <h1>${inputValue.toFixed(2)}   taka donated for Flood at Noakhali, Bangladesh</h1>

    <p>Date : ${new Date().toLocaleDateString()}</p>
    `

     
     const historyContainer = document.getElementById('history-list')
    historyContainer.insertBefore(historyItem , historyContainer.firstChild)

    }

    if(isNaN(inputValue) || inputValue <= 0){
        alert('Invalid Amount💸💵 try again❌👎⚠️ ')
        return;
    }
   if(inputValue > balance){
    alert('Insufficient balance ❌👎⚠️')
    return
   }
    

return historyOfTheYear();





    
    })

                        // second section dom 

    document.getElementById('donate-button-2').addEventListener('click',function(){
       const inputValueTow = parseFloat(document.getElementById('input-value-2').value);
       
       const mainBalanceTow = parseFloat(document.getElementById('main-balance-2').innerText);
       document.getElementById('main-balance-2').innerText = inputValueTow + mainBalanceTow;
       
       const Balance = parseFloat(document.getElementById("account-balance").innerText);
       document.getElementById('account-balance').innerText = Balance - inputValueTow;


       const historyItem = document.createElement('div')
    historyItem.className = 
    'lg:w-[1200px] h-32 border border-gray-300 p-10 m-auto rounded-xl mb-4'

    historyItem.innerHTML = `
    <h1>${inputValueTow.toFixed(2)}   taka Donated for Flood Relief in Feni,Bangladesh</h1>

    <p>Date : ${new Date().toLocaleDateString()}</p>
    `
    if(isNaN(inputValueTow) || inputValueTow <= 0){
        alert('Invalid Amount💸💵 try again❌👎⚠️ ')
        return;
    }
    if(inputValueTow > Balance){
        alert('Insufficient balance ❌👎⚠️')
        return
       }
   
     
     const historyContainer = document.getElementById('history-list')
    historyContainer.insertBefore(historyItem , historyContainer.firstChild)

    document.getElementById('donate-button-2').addEventListener('click',function(){
        alert('Congratulation . Donate for Flood Relief in Feni,Bangladesh')
    })
    })



                    //  third section dom using function

    function donateMoney(){
        document.getElementById('donate-button-3')
        
        const inputValueThree = parseFloat(document.getElementById('input-value-3').value)
        
        const mainBalanceThree = parseFloat(document.getElementById('main-balance-3').innerText);
        document.getElementById('main-balance-3').innerText = inputValueThree + mainBalanceThree;

        const balance = parseFloat(document.getElementById('account-balance').innerText);
        document.getElementById('account-balance').innerText = balance - inputValueThree;




        const historyItem = document.createElement('div')
    historyItem.className = 
    'lg:w-[1200px] h-32 border border-gray-300 p-10 m-auto rounded-xl mb-4'

    historyItem.innerHTML = `
    <h1>${inputValueThree.toFixed(2)}   taka donated Aid for Injured in the Quota Movement</h1>

    <p>Date : ${new Date().toLocaleDateString()}</p>
    `

    if(isNaN(inputValueThree) || inputValueThree <= 0){
        alert('Invalid Amount💸💵 try again❌👎⚠️ ')
        return;
    }

    if(inputValueThree > balance){
        alert('Insufficient balance ❌👎⚠️')
        return
       }

    document.getElementById('donate-button-3').addEventListener('click',function(){
        alert('Congratulation . Aid for Injured in the Quota Movement')
    })
     
     const historyContainer = document.getElementById('history-list')
    historyContainer.insertBefore(historyItem , historyContainer.firstChild)

    

    }









    
