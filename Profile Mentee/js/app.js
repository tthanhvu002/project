/* sub-dropdown click handle */

const checkmarks = document.querySelectorAll('.checkmark')
const checkboxInputs = document.querySelectorAll('.checkbox')
const selectedSkills = document.querySelector('.select-skill-group')
let selected = []
let labelSelected = []
function getParent(element, selector){

    while(element.parentElement){
        if(element.parentElement.matches(selector)){
            return element.parentElement;
        } else{
            element = element.parentElement;
        }
    }
}

const subDropDown = document.querySelectorAll('.sub-dropdown-group')
Array.from(subDropDown).map(item => {
    const checkboxs = item.querySelectorAll('.checkbox')
    const labels = item.querySelectorAll('label')
    Array.from(checkboxs).map((label,index) => {
        label.onclick = () =>{
            dropdowns.forEach(item => {
                item.querySelector('.d-flex').onclick = () => {
                    item.querySelector('.sub-dropdown-group').classList.toggle('active')
                    const selectedSkill = document.querySelectorAll('.select-skill-item')
                    Array.from(selectedSkill).map(element => {
                        element.onclick = () => {
                            const tmps = document.querySelectorAll('.custom-checkbox')
                            tmps.forEach((e) => {
                                if(element.innerText == e.querySelector('label').innerHTML ){
                                    const tmp = getParent(e,'.checkbox-group')
                                    
                                    tmp.classList.remove('active') 
                                    selected = selected.filter( i => i != element.innerText)
                                    tmp.querySelector('.checkmark').classList.remove('active')
                                    tmp.querySelector('.checkbox').classList.remove('active')
                                    element.remove()
                                    const subdown = getParent(tmp, '.sub-dropdown-group')
                                    const count = subdown.querySelectorAll('.checkbox-group.active')
                                    console.log(count.length);
                                    if(count.length > 0){
                                        const parent = getParent(subdown, '.dropdown-group')
                                        const dflex = parent.querySelector('.d-flex')
                                        dflex.classList.add('active')
                                        dflex.querySelector('.checkbox').classList.add('active')
                                        dflex.querySelector('.checkmark').classList.add('active')
                                    } else{
                                        const parent = getParent(subdown, '.dropdown-group')
                                        const dflex = parent.querySelector('.d-flex')
                                        dflex.classList.remove('active')
                                        dflex.querySelector('.checkbox').classList.remove('active')
                                        dflex.querySelector('.checkmark').classList.remove('active')
                                    }
                                }
                            })
                            
                        }
                    })
                    
                }
            })
            const checkbox = getParent(label,'.checkbox-group')
            checkbox.querySelector('.checkmark').classList.toggle('active')
            checkbox.classList.toggle('active')
            checkbox.querySelector('.checkbox').classList.toggle('active')
            if(selected.includes(labels[index].innerHTML)){
                selected = selected.filter(i => i !== labels[index].innerHTML)
                const html = selected.map(e => {
                    return `
                        <div class="select-skill-item">
                            <img srcset="./img/remove.png 2x" alt="">
                            ${e}
                        </div> 
                    `
                } )
                selectedSkills.innerHTML = html
            } else{
                selected.push(labels[index].innerHTML)
                const html = selected.map(e => {
                    return `
                        <div class="select-skill-item">
                            <img srcset="./img/remove.png 2x" alt="">
                            ${e}</div>`
                })
                selectedSkills.innerHTML = html.join('')
            }
            const count = item.querySelectorAll('.checkbox-group.active')
            if(count.length > 0){
                const parent = getParent(item, '.dropdown-group')
                const dflex = parent.querySelector('.d-flex')
                dflex.classList.add('active')
                dflex.querySelector('.checkbox').classList.add('active')
                dflex.querySelector('.checkmark').classList.add('active')
            } else{

                const parent = getParent(item, '.dropdown-group')
                const dflex = parent.querySelector('.d-flex')
                dflex.classList.remove('active')
                dflex.querySelector('.checkbox').classList.remove('active')
                dflex.querySelector('.checkmark').classList.remove('active')
            }
            
        }
    })
})


/* dropdown handle */
let i = 0;
const dropdowns = document.querySelectorAll('.dropdown-group')
dropdowns.forEach(item => {
    const dflex = item.querySelector('.d-flex') 
        dflex.onclick = () =>{
            if(i == 0){
                dflex.querySelector('img').srcset = './img/down.png 2x'
                i++;
            } else{
                dflex.querySelector('img').srcset = './img/up.png 2x'
                i = 0
            }
        }
        
})
dropdowns.forEach(item => {
    item.querySelector('.d-flex').onclick = () => {
        item.querySelector('.sub-dropdown-group').classList.toggle('active')
        const selectedSkillGroup = document.querySelector('.select-skill-group')
        const selectedSkill = selectedSkillGroup.querySelectorAll('.select-skill-item')
        console.log(selectedSkill);
        Array.from(selectedSkill).map(element => {
            element.onclick = () => {
                const tmps = document.querySelectorAll('.custom-checkbox')
                tmps.forEach((e) => {
                    if(element.innerText == e.querySelector('label').innerHTML ){
                        const tmp = getParent(e,'.checkbox-group')
                        
                        tmp.classList.remove('active') 
                        selected = selected.filter( i => i != element.innerText)
                        tmp.querySelector('.checkmark').classList.remove('active')
                        tmp.querySelector('.checkbox').classList.remove('active')
                        element.remove()
                        const subdown = getParent(tmp, '.sub-dropdown-group')
                        const count = subdown.querySelectorAll('.checkbox-group.active')
                        console.log(count.length);
                        if(count.length > 0){
                            const parent = getParent(subdown, '.dropdown-group')
                            const dflex = parent.querySelector('.d-flex')
                            dflex.classList.add('active')
                            dflex.querySelector('.checkbox').classList.add('active')
                            dflex.querySelector('.checkmark').classList.add('active')
                        } else{
                            const parent = getParent(subdown, '.dropdown-group')
                            const dflex = parent.querySelector('.d-flex')
                            dflex.classList.remove('active')
                            dflex.querySelector('.checkbox').classList.remove('active')
                            dflex.querySelector('.checkmark').classList.remove('active')
                        }
                    }
                })
                
            }
        })
        
    }
})

/* header */
const toggle = document.querySelector('.menu-toggle')
const menu = document.querySelector('.menu')
toggle.onclick = () => {
    menu.classList.add('active')
}

window.addEventListener('click', function(e){   
    if (!menu.contains(e.target) && !e.target.matches('.menu-toggle')){
        menu.classList.remove('active')

    } /* else{
        document.querySelector('.menu').classList.remove('active')

    } */
})

const menuItems = document.querySelectorAll('.menu-item')
menuItems.forEach(item => {
    item.onclick = () => {
        document.querySelectorAll('.line').forEach(e => {
            if(e.classList.contains('active')){
                e.classList.remove('active')
            }
        }) 
        item.querySelector('.line').classList.add('active')
    }
})

const selectItems = document.querySelectorAll('.select-item')
Array.from(selectItems).map(item => {
    item.onclick = () =>{
        item.classList.toggle('selected')
    }
})

const optionGroup = document.querySelector('.option-group')
const dropdownSections = document.querySelectorAll('.dropdown-section')
optionGroup.querySelectorAll('.select-item').forEach((item,index) => {
    item.onclick = () => {
        dropdownSections[index].classList.toggle('active')
        item.classList.toggle('selected')
    }
})