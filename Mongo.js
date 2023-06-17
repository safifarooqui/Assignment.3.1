const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mean-tutorial', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected…'))
    .catch(err => console.log(err));
