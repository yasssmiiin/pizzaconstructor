document.addEventListener('DOMContentLoaded', function() {


    
    const contentWrapper = document.querySelector('.content-wrapper');
    const div = document.createElement('div');
    const span = document.createElement('span');
    const img = document.createElement('img');
    const h1 = document.createElement('h1');
    const flexBaseClass = "flex-base";

    clearContent()
    firstFrame()

    const figureList = {
        circle : {
            figure: 'circle',
            url : '/img/circle.svg',
            class : '.form-circle'
        },
        rectangle : {
            url : '/img/rectangle.svg',
            class : '.form-rectangle'
        },
        triangle : {
            url : '/img/triangle.svg',
            class : '.form-triangle'
        }
    }

    const vegList = {
        tomato : {
            side: 'left',
            name: 'tomato',
            path : '/img/tomato.svg'
        },
        grinlist : {
            side: 'left',
            name: 'grin-list',
            path : '/img/grin-list.svg'
        },
        olive : {
            side: 'left',
            name: 'olive',
            path : '/img/olive.svg'
        },
        mushrooms : {
            side: 'left',
            name: 'mushrooms',
            path : '/img/mushrooms.svg'
        },
        pepper : {
            side: 'right',
            name: 'pepper',
            path : '/img/pepper.svg'
        },
        chees : {
            side: 'right',
            name: 'chees',
            path : '/img/chees.svg'
        },
        onion : {
            side: 'right',
            name: 'onion',
            path : '/img/onion.svg'
        },
        maslines : {
            side: 'right',
            name: 'maslines',
            path : '/img/maslines.svg'
        }
    }

    function firstFrame () {
        createBlock (contentWrapper, div.cloneNode() , ["content-window", flexBaseClass] );
        const contentWindowBlock = document.querySelector('.content-window');
        createBlock (contentWindowBlock, div.cloneNode(), ["window-ready", flexBaseClass]);
        const contentReadyBlock = document.querySelector('.window-ready');
        createBlock (contentReadyBlock, img.cloneNode(), ["cutlery"], "/img/cutlery-left.svg" );
        createBlock (contentReadyBlock, div.cloneNode(), ["window-ready__wrapper", "plate", flexBaseClass]);
        const contentReadyBlockWrapper = document.querySelector('.window-ready__wrapper');
        createBlock (contentReadyBlockWrapper, div.cloneNode(), ["plate-circle", flexBaseClass]);
        const plateCircleContainer = document.querySelector('.plate-circle');
        createBlock (plateCircleContainer, h1.cloneNode(), null, null , 'ГОТОВЫ?');
        createBlock (contentReadyBlock, img.cloneNode(), ["cutlery"], "/img/cutlery-right.svg" );
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
            createBlock(contentWrapper, h1.cloneNode(), null, null, 'Курьер выехал!');
            createBlock (contentWrapper, img.cloneNode(), ["finish-image"], ("/img/order-" +  figure + ".svg") );
            createBlock(contentWrapper, span.cloneNode(), ["thanks"], null, 'Спасибо за заказ');
            let image = document.querySelector('img.finish-image'); // Теперь выбираем одно изображение
            updateImageSrc(image); 
            window.addEventListener('resize',  updateImageSrc(image)); 
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




function updateImageSrc(image) {
    const screenWidth = window.innerWidth;
    console.log(screenWidth);
    if (image) { // Проверяем, найден ли элемент
        let src = image.getAttribute('src');
        if (screenWidth < 400) {
            if (!src.includes('-m.')) {
                image.src = src.replace('.', '-m.');
            }
        } else {
            image.src = src.replace('-m.', '.');
        }
    }
}





 
});
