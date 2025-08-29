let coins = 100; 
let counter = 0; 
let copyCount = 0; 

function updateCoinDisplay() {
    const coinDisplay = document.querySelector('.flex.items-center.gap-3.p-5 p');
    coinDisplay.textContent = coins;
}
function updateCounterDisplay() {
    const counterDisplay = document.getElementById('counter'); 
    counterDisplay.textContent = counter;
}
function updateCopyCountDisplay() {
    const copyButton = document.querySelector('nav button:last-child');
    copyButton.textContent = `${copyCount} Copy`;
}





function makeCall(serviceName, phoneNumber) {
    if (coins < 20) {
        alert('অপর্যাপ্ত কয়েন! কল করার জন্য ২০ কয়েন প্রয়োজন।');
        return;
    }
    
    
    coins -= 20;
    updateCoinDisplay();
    

    addToCallHistory(serviceName, phoneNumber);
    
    
    alert(`${serviceName} (${phoneNumber}) এ কল করা হচ্ছে...`);
    
    
    console.log(`Calling ${serviceName} at ${phoneNumber}`);
}


function addToCallHistory(serviceName, phoneNumber) {
    const historyList = document.querySelector('.list');
    const historyItem = document.createElement('div');
    historyItem.className = 'p-3 border-b border-gray-200 flex gap-5';

    const currentTime = new Date().toLocaleTimeString('bn-BD', {

        hour: '2-digit',
        minute: '2-digit'
    });
    
    historyItem.innerHTML = `
        <div class="text-sm font-semibold">${serviceName}</div>
        <div class="text-xs text-gray-500">${phoneNumber}</div>
        <div class="text-xs text-gray-400">${currentTime}</div>
    `;
    
    historyList.insertBefore(historyItem, historyList.firstChild);
}


function clearCallHistory() {
    const historyList = document.querySelector('.list');
    historyList.innerHTML = '';
}

function toggleHeart(heartIcon) {
    if (heartIcon.classList.contains('fa-regular')) {
        heartIcon.classList.remove('fa-regular');
        heartIcon.classList.add('fa-solid');
        heartIcon.style.color = 'red';
        counter++;
    } else {
        heartIcon.classList.remove('fa-solid');
        heartIcon.classList.add('fa-regular');
        heartIcon.style.color = '';
        counter--;
    }
    updateCounterDisplay();
}


function copyToClipboard(serviceName, phoneNumber) {
    
    navigator.clipboard.writeText(phoneNumber).then(() => {
        
        copyCount++;
        updateCopyCountDisplay();
        
        
        alert(`${serviceName} এর নম্বর (${phoneNumber}) কপি করা হয়েছে!`);
    }).catch(err => {
        
        const textArea = document.createElement('textarea');
        textArea.value = phoneNumber;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        copyCount++;
        updateCopyCountDisplay();
        alert(`${serviceName} এর নম্বর (${phoneNumber}) কপি করা হয়েছে!`);
    });
}


document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('emergency-call').addEventListener('click', () => makeCall('📞জাতীয় জরুরি সেবা', '999'));
    document.getElementById('police-call').addEventListener('click', () => makeCall('📞পুলিশ', '999'));
    document.getElementById('fire-service').addEventListener('click', () => makeCall('📞ফায়ার সার্ভিস', '999'));
    document.getElementById('ambulance-call').addEventListener('click', () => makeCall('📞অ্যাম্বুলেন্স', '1994-999999'));
    document.getElementById('Women-Child-Helpline').addEventListener('click', () => makeCall('📞নারী ও শিশু সহায়তা', '109'));
    document.getElementById('Anti-Corruption').addEventListener('click', () => makeCall('📞দুদক', '106'));
    document.getElementById('Electricity').addEventListener('click', () => makeCall('📞 বিদ্যুৎ বিভ্রাট', '16216'));
    document.getElementById('Brac').addEventListener('click', () => makeCall('📞 ব্র্যাক', '16445'));
    document.getElementById('Bangladesh-Railway').addEventListener('click', () => makeCall('📞 বাংলাদেশ রেলওয়ে', '163'));

    const copyButtons = document.querySelectorAll('button:has(.fa-copy)');
    copyButtons.forEach((button, index) => {
        const services = [
            { name: 'জাতীয় জরুরি সেবা', number: '999' },
            { name: 'পুলিশ', number: '999' },
            { name: 'ফায়ার সার্ভিস', number: '999' },
            { name: 'অ্যাম্বুলেন্স', number: '1994-999999' },
            { name: 'নারী ও শিশু সহায়তা', number: '109' },
            { name: 'দুদক', number: '106' },
            { name: 'বিদ্যুৎ বিভ্রাট', number: '16216' },
            { name: 'ব্র্যাক', number: '16445' },
            { name: 'বাংলাদেশ রেলওয়ে', number: '163' }
        ];
        
        if (services[index]) {
            button.addEventListener('click', () => copyToClipboard(services[index].name, services[index].number));
        }
    });
    
    const heartIcons = document.querySelectorAll('.clicker');
    heartIcons.forEach(icon => {
        icon.addEventListener('click', () => toggleHeart(icon));
    });
    
    const clearButton = document.querySelector('aside button:last-child ');
    clearButton.addEventListener('click', clearCallHistory);
    
    updateCoinDisplay();
    updateCounterDisplay();
    updateCopyCountDisplay();
});
