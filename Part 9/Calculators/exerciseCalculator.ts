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
  
  if (args.length < 2) throw new Error('Not enough arguments');

  const list = new Array<number>();

  for(let i=2;i<args.length;i++){
    if(isNaN(Number(args[i]))){
      throw new Error('Provided values were not numbers!');
    }
    if(i!=2)   
      list.push(Number(args[i]))
  }
  return {
    dailyHours : list,
    target : Number(args[2])
  }


}

const calculateExercises = (dailyHours: number[], target: number): Result => {
  const periodLength = dailyHours.length
  const trainingDays = dailyHours.filter((dailyHours) => dailyHours > 0).length

  const average = dailyHours.reduce((prev, curr) => prev + curr) / dailyHours.length;
  const success = average >= target

  const getRating = (average: number, target: number): number => {
    if (average < target * 0.9) return 1
    else if (average < target) return 2
    else if (average >= target) return 3
  };

  const getRatingDescription = (rating: number): string => {
    if (rating === 1) 
      return "You need more practice. Don't give up!"
    
    if (rating === 2) 
      return "Not too bad but could be better!"
    
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
  const { dailyHours } = parseTRAINArguments(process.argv);
    console.log(calculateExercises(dailyHours, 2))
}catch (error: unknown) {
  let errorMessage = 'Error happened.'
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message
  }
  console.log(errorMessage)
}


