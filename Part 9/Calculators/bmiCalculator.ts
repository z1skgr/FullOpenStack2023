/*
interface BMI {
  height: number
  weight: number
}

const parseBMIArguments = (args: string[]): BMI => {
  if (args.length < 4) throw new Error('Not enough arguments')
  if (args.length > 4) throw new Error('Too many arguments')

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      height: Number(args[2]),
      weight: Number(args[3])
    }
  } else {
    throw new Error('Provided values were not numbers!')
  }
}*/

const calculateBmi = (height: number, weight: number): string => {
    const BMI = weight / (height / 100) ** 2
    console.log(`Height ${height} \nWeight ${weight}`)
    if (BMI < 16.0) {
      return "Underweight - Severe"
    }else if(BMI < 16.9){
      return "Underweight - Moderate"
    }else if(BMI < 18.4){
      return "Underweight - Mild"
    }else if(BMI < 24.9){
      return "Normal range"
    }else if(BMI < 29.9){
      return "Overweight"
    }else if(BMI < 34.9){
      return "Obese I"
    }else if(BMI < 39.9){
      return "Obese II"
    }else if(BMI > 40){
      return "Obese III"
    }else{
      return "False"
    }
    
  }
/*
  try {
    const { height, weight } = parseBMIArguments(process.argv)
    console.log(calculateBmi(height, weight))
  } catch (error: unknown) {
    let errorMessage = 'Error happened.'
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message
    }
    console.log(errorMessage)
  }
*/
export default {calculateBmi};
