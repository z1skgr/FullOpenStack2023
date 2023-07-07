interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

interface Training {
  dailyHours: Array<number>;
  target: number;
}

export const parseTRAINArguments = (target: number,  dailyHours: number[]): Training => {
  
  for(let i=0;i<dailyHours.length;i++){
    if(isNaN(Number(dailyHours[i]))){
      throw new Error('Provided values were not numbers!');
    }

  }
  console.log(`Working Days`);
  dailyHours.forEach((element,i) => {
    switch(i % 7){
      case 0 :
        console.log(`Monday: ${element}h`);
        break;
      case 1 :
        console.log(`Tuesday: ${element}h`);
        break;
      case 2:
        console.log(`Wednesday: ${element}h`);
        break;
      case 3:
        console.log(`Thursday: ${element}h`);
        break;
      case 4:
        console.log(`Friday: ${element}h`);
        break;
      case 5: 
        console.log(`Saturday: ${element}h`);
        break;
      case 6:
        console.log(`Sunday: ${element}h`);
        break;
      default: console.log('error');
    }

  });
  return {
    dailyHours : dailyHours,
    target : target
  };


};

export const calculateExercises = (dailyHours: number[], target: number): Result => {
  const periodLength = dailyHours.length;
  const trainingDays = dailyHours.filter((dailyHours) => dailyHours > 0).length;

  const average = dailyHours.reduce((prev, curr) => prev + curr) / dailyHours.length;
  const success = average >= target;
  const getRating = (average: number, target: number): number => {
    if (average < target * 0.8) return 1;
    else if (average < target) return 2;
    else if (average >= target) return 3;
    return 0;
  };

  const getRatingDescription = (rating: number): string => {
    if (rating === 1) 
      return "You need more practice. Don't give up!";
    
    if (rating === 2) 
      return "Not bad but could be better!";
    
    if (rating === 3) 
      return "Great work! Keep up!";
    return "Rating out of range";
  };

  const rating = getRating(average, target);
  const ratingDescription = getRatingDescription(rating);

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
};


/*
try {
  const { dailyHours, target } = parseTRAINArguments(process.argv);
  console.log(calculateExercises(dailyHours, target));
}catch (error: unknown) {
  let errorMessage = 'Error happened.';
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}
*/

