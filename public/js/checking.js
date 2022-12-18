
const  transactionForm =async (e)=>{
    e.preventDefault()
    
    const notes = document.querySelector('#t-notes').value.trim();
    const payment_destintation = document.querySelector('#t-destination').value.trim();
    const amount = document.querySelector('#t-amount').value.trim();
    
    if (notes && payment_destintation && amount) {
      
    
        const response = await fetch('/api/transaction', {
          method: 'POST',
          body: JSON.stringify({ notes, payment_destintation, amount }),
          headers: { 'Content-Type': 'application/json' },
        });
        
      if (response.ok) {
        // If successful, redirect the browser to the account page
        document.location.replace('/checking');
      } else {
        alert(response.statusText);
      }
    
      }
    
    }
    
    document.querySelector(".transaction-form").addEventListener("submit", transactionForm )