const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const AuthRoute = require('./routes/auth')

const uri = 'mongodb+srv://Nitin:downloadapp007@cluster0.9epry.mongodb.net/Ques-Ans-Portal?retryWrites=true&w=majority'
mongoose.connect(uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
.then(() => {
    console.log('Mongodb connected...');
})
.catch(error => {
    console.log(error);
});

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

const PORT = process.env.PORT || 9000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

app.use('/api', AuthRoute)