document.addEventListener('DOMContentLoaded', function() {


    
    const contentWrapper = document.querySelector('.content-wrapper');
    const div = document.createElement('div');
    const span = document.createElement('span');
    const img = document.createElement('img');
    const h1 = document.createElement('h1');
    const flexBaseClass = "flex-base";

    clearContent()
    firstFrame()

    const circleSvgDesktop = `<svg class="svg-line circle-svg-desktop" xmlns="http://www.w3.org/2000/svg" width="1167" height="601" viewBox="0 0 1167 601" fill="none">
    <path id="motionPath" d="M46.1814 28.9321C90.0342 3.98495 217.821 -28.5323 304.264 69.0694C412.317 191.071 236.245 261.186 169.238 256.743C102.231 252.301 108.545 138.5 188.533 147.044C268.52 155.588 301.147 239.314 301.147 294.335C301.147 349.356 321.972 726.942 47.8533 553.376C-29.3276 504.507 -46.8687 324.067 331.318 376.695C709.505 429.323 725.292 169.599 612.326 147.044C435.148 111.668 250.979 362 644.602 416.679C1038.22 471.358 1212.93 120.73 956.132 105.01C855.313 98.8381 685.999 296.727 956.132 391.39C1172.24 467.12 1172.59 505.874 1159.26 572.172" stroke="#C6181F" stroke-width="4.11119"/>
  </svg>`;
    const rectangleSvgDesktop = `<svg class="svg-line rectangle-svg-desktop" xmlns="http://www.w3.org/2000/svg" width="1169" height="586" viewBox="0 0 1169 586" fill="none">
    <path id="motionPath" d="M56.134 31.975H258.797V583.605H2L2 391.689H544.838V147.076H367.701V280.442H762.645V2H636.263V107.392H1066.16V391.689H842.306V244.661H1167V568.642" stroke="#C6181F" stroke-width="3.89338"/>
  </svg>`;
    const triangleSvgDesktop = `<svg class="svg-line triangle-svg-desktop" xmlns="http://www.w3.org/2000/svg" width="1186" height="583" viewBox="0 0 1186 583" fill="none">
    <path id="motionPath" d="M70.5463 22.8083H308.108V580.472H5L603.24 64.0782H353.193L603.24 423.716H376.082L1095.01 2H668.439L1095.01 433.426L820.687 423.716L1183.45 150.78V569.156" stroke="#C6181F" stroke-width="3.46806"/>
  </svg>`;
    const circleSvgMobile = `<svg class="svg-line circle-svg-mobile" xmlns="http://www.w3.org/2000/svg" width="310" height="379" viewBox="0 0 310 379" fill="none">
    <path id="motionPath" d="M18.5627 18.1967C29.2899 1.65318 61.4998 -6.50067 81.6939 15.0462C139.897 77.1482 74.4998 193.697 33.4998 164C20.0124 154.231 17.2391 102.5 39.9998 96.5218C101 80.5 80.9315 157.71 80.9315 194.197C80.9315 230.683 125.5 417 18.9717 365.978C-14.8544 349.777 -3.50009 233.5 88.3119 248.813C185.84 265.08 172.084 182.746 142 177C97.4998 168.5 68.6597 239.069 164.946 275.328C261.233 311.588 385.733 96.5218 246 96.5218C180.348 96.5218 175.073 195.783 241.152 258.558C294.015 308.778 294.101 334.477 290.84 378.443" stroke="#C6181F" stroke-width="2.11"/>
  </svg>`;
    const rectangleSvgMobile = `<svg class="svg-line rectangle-svg-mobile" xmlns="http://www.w3.org/2000/svg" width="287" height="389" viewBox="0 0 287 389" fill="none">
    <path id="motionPath" d="M15.1502 12.3577H64.3808V387H2V282.5H149.5V90.5291H76.5V181.105H198V2H137.5V63.5772H268.5V256.659H206.126V190H285V376.838" stroke="#C6181F" stroke-width="2.10878"/>
  </svg>`;
    const triangleSvgMobile = `<svg class="svg-line triangle-svg-mobile" xmlns="http://www.w3.org/2000/svg" width="295" height="391" viewBox="0 0 295 391" fill="none">
    <path id="motionPath" d="M29.5183 16.2086H85.7617V389.273H2.36523L175 63.5H91L175 289.962H101.855L272.063 2H171.071L278 289.962H207.116L293 103.592V389.273" stroke="#C6181F" stroke-width="2.11"/>
  </svg>`;

    const svgCodes = {
        circleSvgDesktop,
        rectangleSvgDesktop,
        triangleSvgDesktop,
        circleSvgMobile,
        rectangleSvgMobile,
        triangleSvgMobile
    }



    const figureList = {
        circle : {
            figure: 'circle',
            url : 'img/circle.svg',
            class : '.form-circle'
        },
        rectangle : {
            url : 'img/rectangle.svg',
            class : '.form-rectangle'
        },
        triangle : {
            url : 'img/triangle.svg',
            class : '.form-triangle'
        }
    }

    const vegList = {
        tomato : {
            side: 'left',
            name: 'tomato',
            path : 'img/tomato.svg'
        },
        grinlist : {
            side: 'left',
            name: 'grin-list',
            path : 'img/grin-list.svg'
        },
        olive : {
            side: 'left',
            name: 'olive',
            path : 'img/olive.svg'
        },
        mushrooms : {
            side: 'left',
            name: 'mushrooms',
            path : 'img/mushrooms.svg'
        },
        pepper : {
            side: 'right',
            name: 'pepper',
            path : 'img/pepper.svg'
        },
        chees : {
            side: 'right',
            name: 'chees',
            path : 'img/chees.svg'
        },
        onion : {
            side: 'right',
            name: 'onion',
            path : 'img/onion.svg'
        },
        maslines : {
            side: 'right',
            name: 'maslines',
            path : 'img/maslines.svg'
        }
    }

    function firstFrame () {
        createBlock (contentWrapper, div.cloneNode() , ["content-window", flexBaseClass] );
        const contentWindowBlock = document.querySelector('.content-window');
        createBlock (contentWindowBlock, div.cloneNode(), ["window-ready", flexBaseClass]);
        const contentReadyBlock = document.querySelector('.window-ready');
        createBlock (contentReadyBlock, img.cloneNode(), ["cutlery"], "img/cutlery-left.svg" );
        createBlock (contentReadyBlock, div.cloneNode(), ["window-ready__wrapper", "plate", flexBaseClass]);
        const contentReadyBlockWrapper = document.querySelector('.window-ready__wrapper');
        createBlock (contentReadyBlockWrapper, div.cloneNode(), ["plate-circle", flexBaseClass]);
        const plateCircleContainer = document.querySelector('.plate-circle');
        createBlock (plateCircleContainer, h1.cloneNode(), null, null , 'ГОТОВЫ?');
        createBlock (contentReadyBlock, img.cloneNode(), ["cutlery"], "img/cutlery-right.svg" );
        createBlock (contentWindowBlock, div.cloneNode(), ["window-ready__buttons", flexBaseClass]);
        const windowReadyButtons = document.querySelector('.window-ready__buttons');
        createBlock (windowReadyButtons, span.cloneNode(), ["button"], null, 'ДА');
        createBlock (windowReadyButtons, span.cloneNode(), ["button"], null, 'ДА');   
    }


    function pizzaFrame () {
        createBlock (contentWrapper, div.cloneNode() , ["pizza-form"] );
        const pizzaForm = document.querySelector('.pizza-form')

        createBlock (pizzaForm, div.cloneNode() , ["pizza-form__wrapper", flexBaseClass] );
        const pizzaFormWrapper = document.querySelector('.pizza-form__wrapper')
        createBlock (pizzaFormWrapper, h1.cloneNode(), null, null , 'Форма пиццы?');
        createBlock (pizzaFormWrapper, div.cloneNode() , ["pizza-form__choice", flexBaseClass] );
        const pizzaFormChoice = document.querySelector('.pizza-form__choice')
        createBlock (pizzaFormChoice, div.cloneNode() , ["form-circle", "form-element-size", "figure"] );
        const formCircle = document.querySelector(figureList.circle.class)
        addAttr(formCircle, 'circle')
        createBlock (formCircle, img.cloneNode() , ['single-figure']); 
        const formCircleImg = document.querySelector('.form-circle img')
        formCircleImg.src = figureList.circle.url
        createBlock (pizzaFormChoice, div.cloneNode() , ["form-rectangle", "form-element-size", "figure"] );
        const formRectangle = document.querySelector('.form-rectangle')
        createBlock (formRectangle, img.cloneNode() , ['single-figure']); 
        const formRectangleImg = document.querySelector('.form-rectangle img')
        formRectangleImg.src = figureList.rectangle.url
        addAttr(formRectangle, 'rectangle')
        createBlock (pizzaFormChoice, div.cloneNode() , ["form-triangle", "form-element-size", "figure"] );
        const formTriangle = document.querySelector('.form-triangle')
        addAttr(formTriangle, 'triangle')
        createBlock (formTriangle, img.cloneNode() , ['single-figure']); 
        const formTriangleImg = document.querySelector('.form-triangle img')
        formTriangleImg.src = figureList.triangle.url
         figures = document.querySelectorAll('.figure');
         figuresEvent();
    }

    function makePizzaFrame (figure) {
        clearContent()
        createBlock (contentWrapper, h1.cloneNode(), null, null , 'Собери свою пиццу?');
        createBlock (contentWrapper, div.cloneNode() , ["pizza-make__wrapper", flexBaseClass] );
        const pizzaMakeWrapper = document.querySelector('.pizza-make__wrapper');
        createBlock (pizzaMakeWrapper, div.cloneNode() , ["left-items", flexBaseClass] );
        renderVeggies('left');
        createBlock (pizzaMakeWrapper, div.cloneNode() , ["figure-wrapper", "bg-" + figure, flexBaseClass] );
        createBlock (pizzaMakeWrapper, div.cloneNode() , ["right-items", flexBaseClass] );
        renderVeggies('right');
        createBlock (contentWrapper, span.cloneNode(), ["collect"], null, 'Собрать');
        dragAndDrop();
        collect (figure)
    }


    function collect(figure) {
        const btnCollect = document.querySelector('.collect');
        btnCollect.addEventListener("click", function() {
            const figureWrapperClone = document.querySelector('.figure-wrapper').cloneNode(true);
            figureWrapperClone.classList.add('orders');
                clearContent();
                createBlock(contentWrapper, h1.cloneNode(), null, null, 'Готово!');
                contentWrapper.appendChild(figureWrapperClone);
                createBlock(contentWrapper, span.cloneNode(), ["order"], null, 'Оформляем');
            order(figure)
        });
    }
    
    
    
    function order(figure) {
        const btnCollect = document.querySelector('.order');
        btnCollect.addEventListener("click", function() {
          clearContent();
      
          let windowSize = window.innerWidth < 400 ? 'Mobile' : 'Desktop'; 
          console.log(windowSize);

          createBlock(contentWrapper, h1.cloneNode(), ['order-title'], null, 'Курьер выехал!');
      
          createBlock(contentWrapper, img.cloneNode(), ["finish-image", "animation-item"], ("img/pizza-" +  figure + "-single.svg"));
      
          let svgCode = figure + 'Svg' + windowSize;
          console.log(svgCode)
          contentWrapper.insertAdjacentHTML('beforeend', svgCodes[svgCode]);

      
          createBlock(contentWrapper, span.cloneNode(), ["thanks"], null, 'Спасибо за заказ');
      

          moveAlongPath();
        });
      }
      



const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener("click",function() {
        clearContent()
        pizzaFrame ()
       
    });
    
});

function figuresEvent () { 
    figures.forEach(figure => {
        figure.addEventListener("click", function(event) {
            const containerAttr = event.currentTarget.getAttribute('data-attr');
            makePizzaFrame(containerAttr);
           
        });
    });
}

    function clearContent() {
        contentWrapper.innerHTML = ''; 
    }
    
    function addAttr (variable, value) {
        variable.dataset.attr = value;
    }

    function createBlock (container, child, classes, src, title) {
         container.appendChild(child);
    if (classes) child.classList.add(...classes);
    if (src) child.src = src;
    if (title) child.textContent = title;
}

function dragAndDrop() {
document.querySelectorAll('.dragabble').forEach(function(img) {
    let isDragging = false; 
    img.addEventListener('mousedown', function(event) {
        if (isDragging) return; 
        isDragging = true; 
        let activeElement = event.target;
        event.preventDefault();
        const rect = activeElement.getBoundingClientRect();
        const shiftX = event.clientX - rect.left;
        const shiftY = event.clientY - rect.top;
        activeElement.style.position = 'absolute';
        activeElement.style.zIndex = 1000;
        const initialLeft = -150; 
        const initialTop = -150; 
        activeElement.style.position = 'absolute';
        activeElement.style.left = initialLeft + '%';
        activeElement.style.top = initialTop + '%';
        activeElement.style.zIndex = 2;
        const initialContainer = contentWrapper; 
        initialContainer.appendChild(activeElement);

        function moveAt(pageX, pageY) {
            activeElement.style.left = pageX - shiftX + 'px';
            activeElement.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }
        document.addEventListener('mousemove', onMouseMove);
        activeElement.onmouseup = function(event) {
            isDragging = false; 
            document.removeEventListener('mousemove', onMouseMove);
            const figureWrapper = document.querySelector('.figure-wrapper');
            if (!activeElement.closest('.figure-wrapper')) {
                const contain = figureWrapper;
                if (contain) { 
                    const containerRect = contain.getBoundingClientRect();
                    const imgRect = activeElement.getBoundingClientRect();
                    if (
                        imgRect.left >= containerRect.left &&
                        imgRect.right <= containerRect.right &&
                        imgRect.top >= containerRect.top &&
                        imgRect.bottom <= containerRect.bottom
                    ) {
                        contain.appendChild(activeElement);
                        activeElement.style.position = 'absolute';
                        const newLeft = imgRect.left - containerRect.left;
                        const newTop = imgRect.top - containerRect.top;
                        activeElement.style.left = newLeft + 'px';
                        activeElement.style.top = newTop + 'px';
                        ensureThreeImagesInWrappers();
                    }
                }
            }
            activeElement.style.zIndex = '';
            activeElement.onmouseup = null;
        };
    });
});

function ensureThreeImagesInWrappers() {
    document.querySelectorAll('.img-wrapper').forEach(wrapper => {
      const images = wrapper.getElementsByTagName('img');
      const currentCount = images.length;
      const neededCopies = 3 - currentCount;
      for (let i = 0; i < neededCopies; i++) {
        if (images[0]) { 
          const clone = images[0].cloneNode(); 
          wrapper.appendChild(clone); 
        }
      }
    });
  }
}

  function renderVeggies(side) {
    const container = document.querySelector(side === 'left' ? '.left-items' : '.right-items');
    const filteredVegList = Object.values(vegList).filter(veg => veg.side === side);
    filteredVegList.forEach(veg => {
        const wrapperDiv = document.createElement('div');
        wrapperDiv.classList.add('img-wrapper');
        for (let i = 0; i < 3; i++) {
            const img = document.createElement('img');
            img.src = veg.path;
            img.alt = '';
            img.classList.add('left-img', 'dragabble'); 
            img.setAttribute('data-img', 'drag');
            img.setAttribute('data-name', veg.name);
            wrapperDiv.appendChild(img);
        }
        container.appendChild(wrapperDiv);
    });
}








function moveAlongPath() {
    const path = document.getElementById('motionPath');
    const animationItem = document.querySelector('.animation-item');
    
    const pathLength = path.getTotalLength();
    
    const start = path.getPointAtLength(0);
    animationItem.style.transformOrigin = 'center';
    animationItem.style.transform = `translate(${start.x}px, ${start.y}px)`;
    
  const startTime = performance.now();

  requestAnimationFrame(function animate(currentTime) {
    const elapsedTime = currentTime - startTime;
    const duration = 15000; 
    const progress = elapsedTime / duration;

    const point = path.getPointAtLength(progress * pathLength);
    animationItem.style.transform = `translate(${point.x}px, ${point.y}px)`;

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  });
}




 
});
