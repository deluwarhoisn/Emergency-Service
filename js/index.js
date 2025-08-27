

function emergencyCall(id){
    alert('জাতীয় জরুরি সেবা ' + id + ' ');
}

document.getElementById('emergency-call').addEventListener('click',function(){
    emergencyCall('জাতীয় জরুরি সেবা ,999');
})

document.getElementById('police-call').addEventListener('click',function(){
    alert('পুলিশ,999');
})

document.getElementById('fire-service').addEventListener('click',function(){
    alert('ফায়ার সার্ভিস,999');
})

document.getElementById('ambulance-call').addEventListener('click',function(){
    alert('অ্যাম্বুলেন্স,1994-999999');
})
document.getElementById('Women-Child-Helpline').addEventListener('click',function(){
    alert('নারী ও শিশু সহায়তা,109')
})
document.getElementById('Anti-Corruption').addEventListener('click',function(){
    alert('দুর্নীতি দমন কমিশন,106')
})

document.getElementById('Electricity').addEventListener('click',function(){
    alert('বিদ্যুৎ বিভ্রাট,16216')
})
document.getElementById('Brac').addEventListener('click',function(){
    alert('ব্র্যাক,16445')
})
document.getElementById('Bangladesh-Railway').addEventListener('click',function(){
    alert('বাংলাদেশ রেলওয়ে,163')
})


let count = 0;
const buttons = document.querySelectorAll('.clicker');
const counter = document.getElementById('counter');
buttons.forEach(button =>{
    button.addEventListener('click',function(){
        count++;
        counter.innerText = count;
    })
})
