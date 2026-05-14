const navToggle = document.getElementById("navToggle")
const navLinks = document.getElementById('navLinks')



// toggle navigation

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active')
    navLinks.classList.toggle('active')
})

// close navitems when clicked

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener("click", () => {
        navToggle.classList.remove('remove')
        navLinks.classList.remove('remove')

    })
})


// navigation Scroling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", () => {
        e.preventDefault()
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        }
    )
    })
})



window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if(this.window.scrolly > 100){
        header.style.backgroundColor = '#000000'
        header.style.transition = 'background-color 0.3s ease'
    } else{
        header.style.backgroundColor = 'transparent'
    }
})