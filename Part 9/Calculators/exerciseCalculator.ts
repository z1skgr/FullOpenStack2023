interface Result {
  periodLength: number
  trainingDays: number
  success: boolean
  rating: number
  ratingDescription: string  
  target: number
  average: number
}

interface Training {
  dailyHours: Array<number> 
  target: number
}

const parseTRAINArguments = (args: string[]): Training => {
  
  if (args.length < 2) throw new Error('Not enough arguments')

  const list = new Array<number>()

  for(let i=2;i<args.length;i++){
    if(isNaN(Number(args[i]))){
      throw new Error('Provided values were not numbers!')
    }
    if(i!=2)   
      list.push(Number(args[i]))
  }
  list.forEach((element,i) => {
    console.log(`Working Days`)
    switch(i % 7){
      case 0 :
        console.log(`Monday: ${element}h`)
        break
      case 1 :
        console.log(`Tuesday: ${element}h`)
        break
      case 2:
        console.log(`Wednesday: ${element}h`)
        break
      case 3:
        console.log(`Thursday: ${element}h`)
        break
      case 4:
        console.log(`Friday: ${element}h`)
        break
      case 5: 
        console.log(`Saturday: ${element}h`)
        break
      case 6:
        console.log(`Sunday: ${element}h`)
        break
      default: console.log('error')
    }

  })
  return {
    dailyHours : list,
    target : Number(args[2])
  }


}

const calculateExercises = (dailyHours: number[], target: number): Result => {
  const periodLength = dailyHours.length
  const trainingDays = dailyHours.filter((dailyHours) => dailyHours > 0).length

  const average = dailyHours.reduce((prev, curr) => prev + curr) / dailyHours.length
  const success = average >= target

  const getRating = (average: number, target: number): number => {
    if (average < target * 0.8) return 1
    else if (average < target) return 2
    else if (average >= target) return 3
  }

  const getRatingDescription = (rating: number): string => {
    if (rating === 1) 
      return "You need more practice. Don't give up!"
    
    if (rating === 2) 
      return "Not bad but could be better!"
    
    if (rating === 3) 
      return "Great work! Keep up!"
    
  }

  const rating = getRating(average, target)
  const ratingDescription = getRatingDescription(rating)

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  }
}

try {
  const { dailyHours, target } = parseTRAINArguments(process.argv)
  console.log(calculateExercises(dailyHours, target))
}catch (error: unknown) {
  let errorMessage = 'Error happened.'
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message
  }
  console.log(errorMessage)
}


