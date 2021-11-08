const counters = document.querySelector('.counter');

counters.forEach((counter) => {
    // console.log(counter);

    counter.innerHTML = 0;
    
    const updateCounter = () => {
        const targetCount = +counter.getAttribute('data-target')
        console.log(targetCount);
    }
    updateCounter();

})


















































// There are several ways to achieve it:

// using the unary plus operator :
// var n = +str;

// The Number constructor:
// var n = number(str);

// The parseFloat function:
// var n = parseFloat(str)
