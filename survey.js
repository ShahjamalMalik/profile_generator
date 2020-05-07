'use strict'

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})



rl.question('What is your name? Nicknames are also acceptable :) ', (name) => {
  console.log(`${name}`);

  rl.question('What is an activity you like doing? ', (activity) => {
    console.log(`${activity}`);
    
    rl.question('What do you listen to while doing that? ', (song) => {
      console.log(`${song}`);

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (meal) => {
        console.log(`${meal}`)

        rl.question('Whats your favorite thing to eat for that meal?) ', (food) => {
          console.log(`${food}`)

          rl.question('Which sport is your absolute favorite?) ', (sport) => {
            console.log(`${sport}`)

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {
              console.log(`${superpower}`)

              console.log(`${name} loves listening to this ${song} when doing this ${activity} that they enjoy. Their favorite meal is ${meal} and they really enjoy eating ${food} during that meal. ${name}'s favorite sport is ${sport}. One thing that they feel they are great at is ${superpower}.`)
              rl.close()
            })
          })
        })
      })
    })
  })
  
})