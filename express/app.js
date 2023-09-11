const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express()
const port = 3030
const mysql = require('mysql');
 
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'sql_store'
});
 
connection.connect((error) => {
  if (error) throw error;
  console.log('Connected to MySQL database!');
});



app.use(express.json());  
app.use(express.urlencoded({
  extended: true
}));

app.use(cors({
  origin: '*'
}));


app.get('/', (req, res) => {
  res.send(testArray)
})

app.get('/all', (req, res) => {
  connection.query('SELECT * FROM meals WHERE type = "protein"', (error, results) => {
    if (error) throw error;
    newProteinObj = results
    connection.query('SELECT * FROM meals WHERE type = "carb"', (error, carbResults) => {
      if (error) throw error;

      let newCarbResults = {};
      let newProteinResults = {};
      // looping over the result array and inserting the values into an object
      carbResults.forEach((element, index) => {
        newCarbResults[element.foodKey] = element
      });

      results.forEach((element, index) => {
        newProteinResults[element.foodKey] = element
      });

      console.log(newCarbResults)
      console.log(newProteinResults)
// making our bigObj from the two smaller objects
      let bigObj = {
        proteinObj: newProteinResults,
        carbObj: newCarbResults
      }

      
  res.send(bigObj)

    });
  });
})

app.get('/carbs', (req, res) => {
  res.send(proteinObj)
})

app.put('/pop', (req, res) => {
  testArray.pop();
  res.send(testArray)
})

app.put('/add', (req, res) => {

  console.log(req.body.input)
    const meal = { name: req.body.input.name, foodKey: req.body.input.foodKey, protein: req.body.input?.protein, calorie: req.body.input?.calories, fat: req.body.input?.fat, carb:req.body.input?.carb, type: req.body.input.type };
    connection.query('INSERT INTO meals SET ?', meal, (error, results) => {
      if (error) throw error;
      console.log('User inserted successfully!');
      

    });
})

app.put('/add', (req, res) => {
    testArray.push(req.body.number)
    res.send(testArray)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})