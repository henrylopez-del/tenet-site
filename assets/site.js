/* TENET — site.js · MMXXVI */

/* console manifesto · view-source reward */
console.log("%c TENET ", "background:#E50914;color:#fff;font-weight:900;font-size:22px;padding:6px 14px;letter-spacing:8px");
console.log("%c El loop está cerrado.", "color:#F5D000;font-family:monospace;font-size:13px;letter-spacing:2px");
console.log("%c ─────────────────────", "color:#444");
console.log("%c MMXXVI · Madrid · Partnership cohort Q2", "color:#888;font-family:monospace");
console.log("%c hola@tenet.partners", "color:#fff;font-family:monospace;text-decoration:underline");
console.log("%c ", "");
console.log("%c Si encontraste este mensaje, escríbenos al correo de arriba\n con la frase 'view-source' en el subject. Te respondemos\n en menos de 24h con propuesta directa, sin formulario.","color:#5fff7e;font-family:monospace;font-size:11px;line-height:1.6");
console.log("%c ", "");
console.log("%c     S A T O R\n     A R E P O\n     T E N E T\n     O P E R A\n     R O T A S","color:#E50914;font-family:monospace;font-size:11px;letter-spacing:4px;line-height:1.6");

/* live counter that ticks */
(function(){
  var seed = 1247;
  try{ var saved = +localStorage.getItem('tenet_loops')||0; if(saved>seed) seed = saved; }catch(e){}
  var n = seed;
  var el = document.getElementById('num');
  if(!el) return;
  function fmt(x){return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
  el.textContent = fmt(n);
  setInterval(function(){
    if(Math.random() < 0.32){
      n += 1; el.textContent = fmt(n);
      try{localStorage.setItem('tenet_loops', n)}catch(e){}
      el.style.color = '#5fff7e';
      setTimeout(function(){el.style.color = '#F5D000'}, 600);
    }
  }, 4200);
})();

/* audio tick gated · ?tick=1 */
(function(){
  if(new URLSearchParams(location.search).get('tick') !== '1') return;
  var ctx = null;
  function tick(){
    try{
      ctx = ctx || new (window.AudioContext||window.webkitAudioContext)();
      var o = ctx.createOscillator(), g = ctx.createGain();
      o.frequency.value = 880; g.gain.value = .03;
      o.connect(g); g.connect(ctx.destination); o.start();
      setTimeout(function(){o.stop()}, 35);
    }catch(e){}
  }
  var io = new IntersectionObserver(function(es){
    es.forEach(function(e){if(e.isIntersecting){tick(); io.unobserve(e.target)}});
  }, {threshold:.6});
  document.querySelectorAll('.btn.red').forEach(function(b){io.observe(b)});
})();

/* ─── Loading tip rotator (Xbox 360 dashboard) ─── */
(function(){
  var el = document.getElementById('loadtip-msg');
  if(!el) return;
  var tips = [
    "El pixel client-side perdió un 47% de eventos tras iOS 14.5.",
    "Sin CRM no sabes quién agendó, quién compró, ni quién volvió.",
    "Server-side endurece la señal — Meta CAPI no usa cookies de navegador.",
    "Cada euro tiene dos direcciones. Tenet la película va y viene. Esta es la idea.",
    "Drop 01 es Q2 2026. Drop 02 traerá integración con HubSpot.",
    "El refund de 60 días no es marketing — es contrato firmado.",
    "GoHighLevel cierra el loop porque ahí marcas la venta cerrada.",
    "EMQ > 7 = la atribución que Meta considera de alta calidad.",
    "Si tu CFO te preguntó por qué Meta y GA4 dicen cosas distintas, esto es para ti.",
    "Cmd+U te enseña cómo está hecho el sitio. Hay un mensaje en la consola."
  ];
  var i = 0;
  setInterval(function(){
    i = (i+1) % tips.length;
    el.style.opacity = '0';
    setTimeout(function(){
      el.textContent = tips[i];
      el.style.opacity = '1';
    }, 240);
  }, 5800);
  el.style.transition = 'opacity .35s ease';
})();

/* smooth-scroll */
document.querySelectorAll('a[href^="#"]').forEach(function(a){
  a.addEventListener('click', function(e){
    var id = this.getAttribute('href');
    if(id.length > 1){
      var t = document.querySelector(id);
      if(t){ e.preventDefault(); t.scrollIntoView({behavior:'smooth', block:'start'}); }
    }
  });
});

/* THPS2 timer (only on producto.html) */
(function(){
  var el = document.getElementById('thps-timer'); if(!el) return;
  var sec = 14*24*60*60; // 14 days in seconds, displayed compressed
  function tick(){
    var d = Math.floor(sec/86400);
    var h = Math.floor((sec%86400)/3600);
    var m = Math.floor((sec%3600)/60);
    var s = sec%60;
    el.textContent = String(d).padStart(2,'0')+'d:'+String(h).padStart(2,'0')+'h:'+String(m).padStart(2,'0')+'m:'+String(s).padStart(2,'0')+'s';
    if(sec>0)sec--;
  }
  tick(); setInterval(tick, 1000);
})();
