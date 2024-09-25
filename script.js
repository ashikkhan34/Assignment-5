
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

    document.getElementById('donate-button').addEventListener("click", function () {
    const inputValue = parseFloat(document.getElementById('input-value').value);
    const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
    const balance = parseFloat(document.getElementById('account-balance').innerText);

    if (isNaN(inputValue) || inputValue <= 0) {
        alert('Invalid Amount💸💵 try again❌👎⚠️');
        return;
    }

    if (inputValue > balance) {
        alert('Insufficient balance ❌👎⚠️');
        return;
    }

    document.getElementById('main-balance').innerText = (inputValue + mainBalance).toFixed(2);
    document.getElementById('account-balance').innerText = (balance - inputValue).toFixed(2);

    function historyOfTheYear() {
        const historyItem = document.createElement('div');
        historyItem.className = 'lg:w-[1200px] h-32 border border-gray-300 p-10 m-auto rounded-xl mb-4';

        historyItem.innerHTML = `
            <h1>${inputValue.toFixed(2)} taka donated for Flood at Noakhali, Bangladesh</h1>
            <p>Date: ${new Date().toLocaleDateString()}</p>
        `;

        const historyContainer = document.getElementById('history-list');
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);
    }

    return historyOfTheYear();
});


                        // second section dom 

  document.getElementById('donate-button-2').addEventListener('click', function () {
    const inputValueTow = parseFloat(document.getElementById('input-value-2').value);
    const mainBalanceTow = parseFloat(document.getElementById('main-balance-2').innerText);
    const Balance = parseFloat(document.getElementById("account-balance").innerText);

    if (isNaN(inputValueTow) || inputValueTow <= 0) {
        alert('Invalid Amount💸💵 try again❌👎⚠️');
        return;
    }

    if (inputValueTow > Balance) {
        alert('Insufficient balance ❌👎⚠️');
        return;
    }

    document.getElementById('main-balance-2').innerText = (inputValueTow + mainBalanceTow).toFixed(2);
    document.getElementById('account-balance').innerText = (Balance - inputValueTow).toFixed(2);

    const historyItem = document.createElement('div');
    historyItem.className = 'lg:w-[1200px] h-32 border border-gray-300 p-10 m-auto rounded-xl mb-4';

    historyItem.innerHTML = `
        <h1>${inputValueTow.toFixed(2)} taka Donated for Flood Relief in Feni, Bangladesh</h1>
        <p>Date: ${new Date().toLocaleDateString()}</p>
    `;

    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);

    alert('Congratulations! You have successfully donated for Flood Relief in Feni, Bangladesh.');
});


                    //  third section dom using function

   function donateMoney() {
    const inputValueThree = parseFloat(document.getElementById('input-value-3').value);
    const mainBalanceThree = parseFloat(document.getElementById('main-balance-3').innerText);
    const balance = parseFloat(document.getElementById('account-balance').innerText);

    if (isNaN(inputValueThree) || inputValueThree <= 0) {
        alert('Invalid Amount💸💵 try again❌👎⚠️');
        return;
    }

    if (inputValueThree > balance) {
        alert('Insufficient balance ❌👎⚠️');
        return;
    }

    document.getElementById('main-balance-3').innerText = (inputValueThree + mainBalanceThree).toFixed(2);
    document.getElementById('account-balance').innerText = (balance - inputValueThree).toFixed(2);

    const historyItem = document.createElement('div');
    historyItem.className = 'lg:w-[1200px] h-32 border border-gray-300 p-10 m-auto rounded-xl mb-4';

    historyItem.innerHTML = `
        <h1>${inputValueThree.toFixed(2)} taka donated Aid for Injured in the Quota Movement</h1>
        <p>Date: ${new Date().toLocaleDateString()}</p>
    `;

    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);

    alert('Congratulations! Aid for Injured in the Quota Movement has been successfully donated.');
}








    
