const mongoose=require('mongoose')

const connectionString=process.env.DATABASE

	const connection=mongoose.connect(connectionString)
    connection.then(()=>{
    	    console.log("Server Connected To MongoDB Database!!");
	}).catch((err)=>{
    	    console.log(err);
	})
