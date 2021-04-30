const express = require('express')
const app = express();
app.use(express.json())

const meals = [

{id: 1, name: 'pizza'},
{id: 2, name: 'tea'},
{id: 3, name: 'cocktail'},
{id: 4, name: 'chicken'}

]


app.post('/api/meal',(req,res)=> {

const meal = {
		id: meals.length + 1,
		name : req.body.name 
	};

	meals.push(meal)
	res.send(meal)

});



app.get("/api/meal", (req, res) => {
 res.send(meals)
});

const port = process.env.PORT || 3000

app.listen(port, ()=> console.log(`running on port ${port}`))