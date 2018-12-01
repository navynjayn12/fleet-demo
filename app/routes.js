var Data = require('./models/Data');

module.exports = (app)=> {


	app.get('/test',(req, res)=>  {
		res.send('welcome to fleet');
	});

	app.post('/createData',(req, res, next)=> {

    var create = new Data(
        	{
           	  name: req.body.name,
              description: req.body.description,
              date: req.body.date
        	}
    	)
		create.save((err)=> {
        	if (err) {
            	return next(err);
        	}
        	res.send('Data Created successfully')
    	})

	});

	app.get('getData', (req, res, next)=> {
    	Data.findById(req.params.id, (err, data)=> {
        	if (err) return next(err);
        	res.send(data);
   	 	})
	});

	app.put('updateData', (req, res, next)=> {
    	Data.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, data)=> {
        	if (err) return next(err);
        	res.send('Data udpated.');
    	});
	});

	app.delete('deleteData', (req, res,next)=> {
    	Data.findByIdAndRemove(req.params.id,(err)=> {
        	if (err) return next(err);
        	res.send('Deleted successfully!');
    	})
	});

};