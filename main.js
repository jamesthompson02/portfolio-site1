// This first block of code relates to the toggle switch in my navbar which is used to alernate between light mode 
// and dark mode. It also relates to the dropdown menu I have created for the mobile version of my site.

let elements = [...document.querySelectorAll('*')];
const toggleSlider = document.getElementById('toggle-slider');
const toggleButton = document.getElementById('toggle-button');
const modeIcon = document.getElementById('mode-icon')
let screenDetector = window.matchMedia('(min-width: 935px)');
const projectButtons = [...document.querySelectorAll('.card-button')];
const projectLinks = [...document.querySelectorAll('.project-link')];
let toggleClickCounter = 0;
let dropdownMenuClickCounter = 0;



function sliderTransition() {
    if (toggleClickCounter % 2 !== 0) {
        toggleSlider.style.backgroundColor = 'rgb(0,0,139)';
    } else {
        toggleSlider.style.backgroundColor= 'rgb(211,211,211)';
    }   
}

function colorChanger() {
    if (toggleClickCounter % 2 !== 0) {
        elements.forEach(each => {
            if (each.classList.contains('font-cyan')) {
                each.classList.add('font-dark-blue');
            }
            if (each.classList.contains('background-white')) {
                each.classList.add('background-gray');
            }
            if (each.classList.contains('background-cyan')) {
                each.classList.add('background-dark-blue');
            }
            if (each.classList.contains('font-white')) {
                each.classList.add('font-gray');
            }
            if (each.classList.contains('border-bottom-cyan')) {
                each.classList.add('border-bottom-dark-blue');
            }
        })
    } else {
        elements.forEach(each => {
            if (each.classList.contains('font-dark-blue')) {
                each.classList.remove('font-dark-blue');
            }
            if (each.classList.contains('background-gray')) {
                each.classList.remove('background-gray');
            }
            if (each.classList.contains('background-dark-blue')) {
                each.classList.remove('background-dark-blue');
            }
            if (each.classList.contains('font-gray')) {
                each.classList.remove('font-gray');
            }
            if (each.classList.contains('border-bottom-dark-blue')) {
                each.classList.remove('border-bottom-dark-blue');
            }
        })
    
    }

}


function darkMode() {
    toggleClickCounter += 1;
    if (toggleClickCounter % 2 !== 0) {
        sliderTransition();
        toggleButton.classList.toggle('toggle-button-transition'); 
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');


        projectButtons.forEach(each => {
            each.addEventListener('mouseenter', () => {
                if (each.classList.contains('background-dark-blue')) {
                    each.classList.remove('background-dark-blue');
                    each.classList.add('background-gray');
                    each.classList.add('border-dark-blue');
                }
            })
        })
        
        projectLinks.forEach(each => {
            each.addEventListener('mouseenter', () => {
                if (each.classList.contains('font-gray')) {
                    each.classList.remove('font-gray');
                    each.classList.add('font-dark-blue');
                }
            })
        })

        projectButtons.forEach(each => {
            each.addEventListener('mouseleave', () => {
                if (each.classList.contains('background-gray') && each.classList.contains('border-dark-blue')) {
                    each.classList.remove('background-gray');
                    each.classList.remove('border-dark-blue');
                    each.classList.add('background-dark-blue');
                }
            })
        })
        
        projectLinks.forEach(each => {
            each.addEventListener('mouseleave', () => {
                if (each.classList.contains('font-dark-blue')) {
                    each.classList.remove('font-dark-blue');
                    each.classList.add('font-gray');
                }
            })
        })


        colorChanger();
    } else {
        sliderTransition();
        toggleButton.classList.toggle('toggle-button-transition'); 
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');

        colorChanger();
    }
}


if (toggleClickCounter % 2 === 0) {
    projectButtons.forEach(each => {
        each.addEventListener('mouseenter', () => {
            if (each.classList.contains('background-cyan')) {
                each.classList.remove('background-cyan');
                each.classList.add('background-white');
                each.classList.add('border-cyan');
            }
        })
    })
    
    projectLinks.forEach(each => {
        each.addEventListener('mouseenter', () => {
            if (each.classList.contains('font-white')) {
                each.classList.remove('font-white');
                each.classList.add('font-cyan');
            }
        })
    })

    projectButtons.forEach(each => {
        each.addEventListener('mouseleave', () => {
            if (each.classList.contains('background-white') && each.classList.contains('border-cyan')) {
                each.classList.remove('border-cyan');
                each.classList.remove('background-white');
                each.classList.add('background-cyan');
            }
        })
    })
    
    projectLinks.forEach(each => {
        each.addEventListener('mouseleave', () => {
            if (each.classList.contains('font-cyan')) {
                each.classList.remove('font-cyan');
                each.classList.add('font-white');
            }
        })
    })

}

toggleSlider.addEventListener('click', () => {
    darkMode();
})

toggleButton.addEventListener('click', () => {
    darkMode();
})




function dropDownMenuOpener() {
    dropdownMenuClickCounter += 1;
    if (dropdownMenuClickCounter % 2 !== 0) {
        document.getElementById("links-list").classList.remove("hide");
        // document.getElementById("myDropdown").classList.add("show");
    } else {
        // document.getElementById("myDropdown").classList.remove("show");
        document.getElementById("links-list").classList.add("hide");
    }
}


document.querySelector('#dropdown-menu').addEventListener('click', () => {
    dropDownMenuOpener();
})


function hideDropdown() {
    dropdownMenuClickCounter += 1;
    document.getElementById("links-list").classList.add("hide");
}

document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('identifier')) {
        setTimeout(hideDropdown, 100);
    } else if (e.target.classList.contains('fa-bars') == false && e.target.classList.contains('identifier2') == true) {
        if (document.getElementById("links-list").classList.contains("hide") == false) {
            hideDropdown();
        }
    } else if (e.target.classList.contains('fa-bars') == false) {
        if (document.getElementById("links-list").classList.contains("hide") == false) {
            hideDropdown();
        }
    }

})


screenDetector.onchange = (e) => {
    if (document.getElementById("links-list").classList.contains('hide') == false) {
        dropdownMenuClickCounter += 1;
        document.getElementById("links-list").classList.add("hide");
    }
}


// The next block of code relates to ensuring hover classes are consistent
// when dark mode is applied.

const dropdownMenu = document.getElementById('dropdown-menu');
const downloadbtn = document.getElementById('cv-btn');
const contactBtn = document.getElementById('contact-btn');




let blueBackgroundBtns = [dropdownMenu, downloadbtn];

blueBackgroundBtns.forEach(each => {
    each.addEventListener('mouseenter', () => {
        if (toggleClickCounter % 2 !== 0) {
            each.classList.remove('background-dark-blue');
            each.classList.remove('font-gray');
            each.classList.add('background-gray');
            each.classList.add('font-dark-blue');
            each.classList.add('border-dark-blue');
        } else {
            each.classList.remove('background-cyan');
            each.classList.remove('font-white');
            each.classList.add('background-white');
            each.classList.add('border-cyan');
            each.classList.add('font-cyan');
        }
    })
    each.addEventListener('mouseleave', () => {
        if (toggleClickCounter % 2 !== 0) {
            each.classList.remove('background-gray');
            each.classList.remove('font-dark-blue');
            each.classList.remove('border-dark-blue');
            each.classList.add('background-dark-blue');
            each.classList.add('font-gray');     
        } else {
            each.classList.remove('background-white');
            each.classList.remove('font-cyan');
            each.classList.remove('border-cyan');
            each.classList.add('background-cyan');
            each.classList.add('font-white');

        }

    })
})

contactBtn.addEventListener('mouseenter', () => {
    if (toggleClickCounter % 2 !== 0) {
        contactBtn.classList.remove('font-dark-blue');
        contactBtn.classList.remove('background-gray');
        contactBtn.classList.add('font-gray');
        contactBtn.classList.add('background-dark-blue');
        contactBtn.classList.add('border-dark-gray1');
    } else {
        contactBtn.classList.remove('background-white');
        contactBtn.classList.remove('font-cyan');
        contactBtn.classList.add('background-cyan');
        contactBtn.classList.add('font-white');
        contactBtn.classList.add('border-white');


    }
})

contactBtn.addEventListener('mouseleave', () => {
    if (toggleClickCounter % 2 !== 0) {
        contactBtn.classList.remove('font-gray');
        contactBtn.classList.remove('background-dark-blue');
        contactBtn.classList.remove('border-dark-gray1');
        contactBtn.classList.add('font-dark-blue');
        contactBtn.classList.add('background-gray');
    } else {
        contactBtn.classList.remove('background-cyan');
        contactBtn.classList.remove('font-white');
        contactBtn.classList.remove('border-white');
        contactBtn.classList.add('background-white');
        contactBtn.classList.add('font-cyan');
        

    }

})


// The next few blocks of code relate to form validation in the contact section. This uses regular expression for
// the name and email inputs and checks that the content inside the textarea is at least 100 words long but
// no more than 400 words long.

const nameInput = document.getElementById('full-name-input');
const emailInput = document.getElementById('email-input');
const proposalInput = document.getElementById('project-input');
const listOfInputs = [nameInput, emailInput, proposalInput];
const ticks = [...document.querySelectorAll('.fa-circle-check')];
const exclamationMarks = [...document.querySelectorAll('.fa-circle-exclamation')];
const invalidResponses = [...document.querySelectorAll('.invalid-response')];
const nameValidation = /^[a-zA-Z '-]+$/ 
const emailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const capitalValidation = /[A-Z]/
const spaceValidation = /\ /
const dotValidation = /\./

// The next (approximately) 50  lines of code relate to validating the full name input.

function regExName(x) {
    return nameValidation.test(x);
}

function regExSpace(x) {
    if (spaceValidation.test(x) == false) {
        return false
    }
    const testString = x;
    let testString2 = testString.split(' ');
    testString2 = testString2.filter(word => word !== '');
    if (testString2.length < 2) {
        return false;
    }
    testString2 = testString2.filter(word => capitalValidation.test(word[0]));
    if (testString2.length < 2) {
        return false;
    } else {
        return true;
    }   
}


function checkName() {
    ticks[listOfInputs.indexOf(nameInput)].classList.add('hide');
    exclamationMarks[listOfInputs.indexOf(nameInput)].classList.add('hide');
    invalidResponses[listOfInputs.indexOf(nameInput)].classList.add('hide');

    let testResult1 = regExName(nameInput.value);
    let testResult2 = regExSpace(nameInput.value);
    if (testResult1 == false || testResult2 == false) {
        exclamationMarks[listOfInputs.indexOf(nameInput)].classList.remove('hide');
        invalidResponses[listOfInputs.indexOf(nameInput)].innerText = 'Invalid name. For a name to be valid, a number of criteria have to be satisfied. Your name must be at least two words. Each name must have a capital letter at the beginning. Each name must have at least two letters. Numbers and most special characters are not permitted.'
        invalidResponses[listOfInputs.indexOf(nameInput)].classList.remove('hide');
    } else {
        ticks[listOfInputs.indexOf(nameInput)].classList.remove('hide');
    }
}



nameInput.addEventListener('change', () => {
    checkName();
})

// The next (approximately) 40 lines of code relate to validating the email input.

function regExEmail(x) {
    return emailValidation.test(x);
}


function regExDot(x) {
    const parameterValue = x.split('@');
    const parameterValue2 = parameterValue[parameterValue.length - 1];
    const numberOfDots = (parameterValue2.match(/\./g) || []).length;
    if (dotValidation.test(parameterValue2) == true && numberOfDots >= 1 && parameterValue2[parameterValue2.length - 1] != '.') {
        return true;
    } else {
        return false;
    }
}

function checkEmail() {
    ticks[listOfInputs.indexOf(emailInput)].classList.add('hide');
    exclamationMarks[listOfInputs.indexOf(emailInput)].classList.add('hide');
    invalidResponses[listOfInputs.indexOf(emailInput)].classList.add('hide');

    let testResult1 = regExEmail(emailInput.value);
    let testResult2 = regExDot(emailInput.value);

    if (testResult1 == false || testResult2 == false) {
        exclamationMarks[listOfInputs.indexOf(emailInput)].classList.remove('hide');
        invalidResponses[listOfInputs.indexOf(emailInput)].innerText = 'Invalid email. For an email to be valid, there must be an "@" character. Also, there must be some characters after the "@" symbol, with at least one "." - although the "." cannot be the very last character.'
        invalidResponses[listOfInputs.indexOf(emailInput)].classList.remove('hide');
    } else {
        ticks[listOfInputs.indexOf(emailInput)].classList.remove('hide');
    }

}

emailInput.addEventListener('change', () => {
    checkEmail();
})

// The next (approximately) 20 lines of code relate to verifying that the user has proposed a project
// which is at least 100 words long but no longer than 400 words long.

proposalInput.addEventListener('change', () => {
    ticks[listOfInputs.indexOf(proposalInput)].classList.add('hide');
    exclamationMarks[listOfInputs.indexOf(proposalInput)].classList.add('hide');
    invalidResponses[listOfInputs.indexOf(proposalInput)].classList.add('hide');

    const testString = proposalInput.value;
    let testString2 = testString.split(' ');
    testString2 = testString2.filter(word => word !== '');

    console.log(testString2);

    if (testString2.length < 100) {
        exclamationMarks[listOfInputs.indexOf(proposalInput)].classList.remove('hide');
        invalidResponses[listOfInputs.indexOf(proposalInput)].innerText = 'This proposal is too short (less than 100 words). Please give more detail about your proposed project.';
        invalidResponses[listOfInputs.indexOf(proposalInput)].classList.remove('hide');
    } else if (testString2.length > 400) {
        exclamationMarks[listOfInputs.indexOf(proposalInput)].classList.remove('hide');
        invalidResponses[listOfInputs.indexOf(proposalInput)].innerText = 'This proposal is too long (more than 400 words). Try to simplify and summarise your project proposal.';
        invalidResponses[listOfInputs.indexOf(proposalInput)].classList.remove('hide');
    } else {
        ticks[listOfInputs.indexOf(proposalInput)].classList.remove('hide');
    }
})

// The next 20 lines of code verify that the form has been filled out properly. It simulates how a webpage
// would behave if the form details had been successfully submitted.

contactBtn.addEventListener('click', (e) => {
    e.preventDefault;
    let errorChecks = exclamationMarks.filter(each => {
        return each.classList.contains('hide');
    })
    let correctChecks = ticks.filter(each => {
        return each.classList.contains('hide');
    })
    
    if (errorChecks.length == exclamationMarks.length && correctChecks.length == 0) {
        nameInput.value = '';
        emailInput.value = '';
        proposalInput.value = '';
        ticks.forEach(each => {
            each.classList.add('hide');
        })
        alert('Message sent');
    } else {
        alert('You have failed to properly fill out the form. Please try again.');
    }
})



// This next batch of code relates to the Swiper tool for my projects section. 

var swiper = new Swiper(".card-carousel", {
    observer: true,
    observeParents: true,
    spaceBetween: 25,
    rewind: true,
    slideToClickedSlide: true,
    dragCursor: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            
        },
        900: {
            slidesPerView: 2,
            
        },
        1350: {
            slidesPerView:3,
        },
    }
});











    







