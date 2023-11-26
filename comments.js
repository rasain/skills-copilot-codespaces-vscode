// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

// Create express app
const app = express();
// Allow express to use body-parser
app.use(bodyParser.json());

// Create event handler for post created event
app.post('/events', async (req, res) => {
  // Get type and data from request body
  const { type, data } = req.body;

  // Check if type is comment created
  if (type === 'CommentCreated') {
    // Check if comment includes 'orange'
    const status = data.content.includes('orange') ? 'rejected' : 'approved';

    // Emit comment moderated event
    await axios.post('http://localhost:4005/events', {
      type: 'CommentModerated',
      data: {
        ...data,
        status,
      },
    });
  }

  // Send response
  res.send({});
});

// Listen on port 4003
app.listen(4003, () => {
  console.log('Listening on 4003');
});