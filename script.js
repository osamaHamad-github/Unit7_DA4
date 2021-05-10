document.getElementById('enter').addEventListener('click', pricing)

function validAge (age) {
  // checking to see if age is bewteen 12 and 21
  if (12 <= age && age <= 21) {
    // returning true
    return true
  } else {
    return false
  }
}

function validDay (day) {
  // checking to see if day is tuesday or thursday
  if (day === 'thursday' || day === 'tuesday') {
    // returning true
    return true
  } else {
    return false
  }
}

function pricing () {
  // getting inputted age
  let age = document.getElementById('age').value
  let day = document.getElementById('day').value
  let answer = document.getElementById('answer')

  // parsing age into type int 
  age = parseInt(age)

  // converting day chars to lower so our function detects the day
  day = day.toLowerCase()

  // checking is either of the conditions is true
  if (validAge(age) || validDay(day)) {
    answer.innerText = 'You get a museum discount'
  } else {
    answer.innerText = 'Your entry is not valid for a discount'
  }
}
