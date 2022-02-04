const express = require ('express');
const cors = require ('cors');

const dbConnect = require('./config/db')

const app = express();

const path = require ('path')



// Initialize middleware

app.use(express.json({extended:false}))
app.use(cors())

app.use('/posts',  require('./routes/posts'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


dbConnect();

const PORT = process.env.PORT || 5001;

//Serve static assets in Production

//if(process.env.NODE_ENV === 'production') 
{
    app.use(express.static('client/build'))

    app.get('*',(req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(PORT, ()=> console.log(`Server connected on port ${PORT}`));

