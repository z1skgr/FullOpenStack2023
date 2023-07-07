import express from 'express'
import calculateBmi from "./bmiCalculator"
const app = express()


app.use(express.json());


app.get('/hello', (_req,res) => {
  res.send('Hello Full Stack!')
})


app.get("/bmi", (req, res) => {
  const result = Object.values(req.query)
  console.log(result)
  const height = result[0]
  const weight = result[1]


  var bmi=""
  if(!isNaN(Number(height)) && !isNaN(Number(weight))){
    bmi = calculateBmi.calculateBmi(Number(height), Number(weight))
  }else{
    res.status(400).send({ error: "malformatted parameters" })
  }
  

  if (!weight || !height) {
    res.status(400).send({ error: "malformatted parameters - no content" })
  }

  res.send({ height, weight, bmi })
});

const PORT = 3003

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})