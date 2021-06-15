let puntos = document.getElementById('puntos');
        let P = document.getElementById('P');
        let M = document.getElementById('M');
        let text = document.getElementById('text');
        let btn = document.getElementById('btn');
        let MMP = document.getElementById('MMP');
        let header = document.querySelector('header');

        window.addEventListener('scroll', function(){
            let value = window.scrollY;
            puntos.style.left = value * 0.25 + 'px';
            P.style.top = value * 1.05 + 'px';
            MMP.style.top = value * 0.5 + 'px';
            M.style.top = value * 0 + 'px';
            text.style.marginRight = value * 4 + 'px';
            text.style.marginTop = value * 0.5 + 'px';
            btn.style.marginTop = value * 1.5 + 'px';
            header.style.top = value * 0.5 + 'px';
        })