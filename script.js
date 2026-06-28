const chat=document.getElementById('chat'),e=document.getElementById('entrada'),b=document.getElementById('enviar');
function add(t,u){chat.innerHTML+=`<div class="mensaje"><div class="avatar">${u?'👤':'🌱'}</div><div class="texto"><b>${u?'Tú':'EcoBot'}</b><br>${t}</div></div>`;chat.scrollTop=chat.scrollHeight;}
function r(q){q=q.toLowerCase();
if(q.includes('hola'))return '¡Hola! 😊';
if(q.includes('ayuda'))return 'Pregúntame sobre reciclaje, agua, energía, plástico, animales, bosques, contaminación, calentamiento global, cuidar el planeta, consejos.';
if(q.includes('recicl'))return '♻️ Reciclar ayuda a reducir residuos.';
if(q.includes('agua'))return '💧 Ahorra agua cerrando el grifo.';
if(q.includes('energ'))return '⚡ Apaga las luces que no uses.';
if(q.includes('plast'))return '🥤 Reduce los plásticos de un solo uso.';
if(q.includes('animal'))return '🐼 Protege los animales y sus hábitats.';
if(q.includes('bosque'))return '🌳 Los bosques producen oxígeno.';
if(q.includes('contamin'))return '🌍 Evita tirar basura y recicla.';
if(q.includes('calentamiento'))return '🔥 Reduce emisiones para combatir el calentamiento global.';
if(q.includes('planeta'))return '🌎 Cuidemos el planeta entre todos.';
if(q.includes('consejo'))return '🌱 Reduce, reutiliza y recicla.';
if(q.includes('gracias'))return '¡De nada! 😊';
if(q.includes('adios')||q.includes('adiós'))return '¡Hasta luego! 👋';
return 'No entendí la pregunta. Escribe "ayuda".'}
function enviar(){let q=e.value.trim();if(!q)return;add(q,1);e.value='';setTimeout(()=>add(r(q),0),300);}
b.onclick=enviar;e.addEventListener('keydown',x=>{if(x.key==='Enter')enviar();});