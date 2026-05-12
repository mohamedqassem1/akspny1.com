/* ===== CHAT SYSTEM ===== */

function getChat(){
return JSON.parse(localStorage.getItem('chat') || '[]');
}

function saveChat(data){
localStorage.setItem('chat', JSON.stringify(data));
}

function sendMsg(){

const msg =
document.getElementById('chat-input').value.trim();

if(!msg) return;

let chat = getChat();

chat.push({
user: currentUser,
text: msg,
time: new Date().toLocaleTimeString()
});

saveChat(chat);

document.getElementById('chat-input').value = '';

renderChat();

}

function renderChat(){

const box =
document.getElementById('chat-box');

if(!box) return;

let chat = getChat();

box.innerHTML = '';

chat.slice(-50).forEach(m => {

box.innerHTML += `
<div style="
margin-bottom:10px;
padding:8px;
border-bottom:1px solid rgba(255,255,255,0.05);
">

<b style="color:#818cf8">${m.user}</b>
<span style="color:#94a3b8;font-size:12px;">
${m.time}
</span>

<br>

<span>${m.text}</span>

</div>
`;

});

box.scrollTop = box.scrollHeight;

}

/* تحديث عند فتح تبويب */

function openTab(id, el){

document.querySelectorAll('.section')
.forEach(s => s.classList.remove('active'));

document.getElementById(id)
.classList.add('active');

document.querySelectorAll('.menu-item')
.forEach(m => m.classList.remove('active'));

el.classList.add('active');

if(id === 'chat'){
renderChat();
}

}