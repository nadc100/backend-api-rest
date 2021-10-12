connection.on('error', console.error.bind(console, 'connection error:'));

connection.once('open', async()=> {
    await connection.db.collection("propiedades", function(err, collection){
        collection.find({}).toArray(function(err, data){
            console.log(data); // it will print your collection data
        })
    });

});