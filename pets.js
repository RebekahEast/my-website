const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}


////////

const pets = [
    {
        name: "Pheobe",
        age: "beautiful Pheeb is coming up on 8 years old now - reaching golden oldie territory",
        likes: "playing in the park and chasing Leo with the ball. Belly rubs and cuddles",
        dislikes: "getting groomed and not being able to cuddle people who make eye contact with her",
        hobbies: "toys. toys. sleep. cuddle. toys.",
    }, 
    {
        name: "Pheobe",
        age: "beautiful Pheeb is coming up on 8 years old now - reaching golden oldie territory",
        likes: "playing in the park and chasing Leo with the ball. Belly rubs and cuddles",
        dislikes: "getting groomed and not being able to cuddle people who make eye contact with her",
        hobbies: "toys. toys. sleep. cuddle. toys.",
    }
]
