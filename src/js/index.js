const popupHtml = `
  <div id="popupLang" class="popupholder">
      <div id="containerLang" class="popupcontainer">
          <div id="closeLang" class="closebtn">X</div>
          <div>
              <div id="langNL" class="langchoice">
                  <img src="/static/img/flag-nl.svg" loading="lazy" alt="" class="flag">
                  <div>Nederlands</div>
              </div>
              <div id="langEN" class="langchoice">
                  <img src="/static/img/flag-en.svg" loading="lazy" alt="" class="flag">
                  <div>English</div>
              </div>
          </div>
      </div>
  </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', popupHtml);

  // Language switcher logic
  const url = window.location.href.toLowerCase();

  const langBtn = document.getElementById('openLang');
  const popupLang = document.getElementById('popupLang');
  const containerLang = document.getElementById('containerLang');
  const closeLang = document.getElementById('closeLang');

  langBtn.addEventListener('click', function() {
    popupLang.style.visibility = "visible";
    popupLang.style.opacity = 1;
    setTimeout(() => {
      containerLang.style.opacity = 1;
    }, 650);
  });

  closeLang.addEventListener('click', function() {
    popupLang.style.opacity = 0;
    popupLang.style.visibility = "hidden";
    containerLang.style.opacity = 0;
  });

  const urlNL = url.replace("/en/", "/");
  const urlEN = url.includes("/en/") ? url : `/en${window.location.pathname}`;

  document.getElementById('langNL').addEventListener('click', function() {
    window.location.href = urlNL;
  });

  document.getElementById('langEN').addEventListener('click', function() {
    window.location.href = urlEN;
  });