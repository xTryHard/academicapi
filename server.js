const express = require('express');
const bodyParser = require('body-parser');
const studentRoutes = require('./src/routes/student.router');
const academicTermRoutes = require('./src/routes/academicTerm.router');
const dayRoutes = require('./src/routes/day.router');
const groupRoutes = require('./src/routes/group.router');
const groupScheduleRoutes = require('./src/routes/groupSchedule.router');
const inscriptionRoutes = require('./src/routes/inscription.router');
const subjectRoutes = require('./src/routes/subject.router');
const path = require('path');
const morgan = require('morgan');

//Create express app
const app = express();

//Set up port
const port = process.env.port || 3000;

//parse application/x-www-form-urlencoded requests
app.use(bodyParser.urlencoded({
  extended: true
}));

//parse JSON requests
app.use(bodyParser.json());

//Setting up morgan - HTTP Requests logger
app.use(morgan('tiny'));

//Setting Static Files
app.use(express.static(path.join(__dirname, '/client')));

//home/root route
app.get('/', (req, res) => {
  res.sendFile('client/index.html', {
    root: __dirname
  });
});

app.get('/termView', (req, res) => {
  res.sendFile('client/academicTerm.html', {
    root: __dirname
  });
});

//Students middleware
app.use('/api/v1', studentRoutes);

//AcademicTerm middleware
app.use('/api/v1', academicTermRoutes);

//Day middleware
app.use('/api/v1', dayRoutes);

//Group middleware
app.use('/api/v1', groupRoutes);

//GroupSchedule middleware
app.use('/api/v1', groupScheduleRoutes);

//Inscription middleware
app.use('/api/v1', inscriptionRoutes);

//Subject middleware
app.use('/api/v1', subjectRoutes);

//Listen for HTTP requests
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});