
    let pic3 = document.getElementById('pic3');
    let text = document.getElementById('text');
    let btn = document.getElementById('btn');
    let pic1 = document.getElementById('pic1');
    let header = document.querySelector('header');

    window.addEventListener('scroll', function(){
      let value = window.scrollY;
      pic3.style.top = value * 0.5 + 'px';
      pic1.style.top = value * 0 + 'px';
      text.style.marginTop = value * 1 + 'px';
      btn.style.marginTop  = value * 1 + 'px';
      header.style.top  = value * 0.5 + 'px';
    })
