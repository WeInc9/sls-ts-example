const MongoClient = require('mongodb').MongoClient;

export class AppRepository {

    cachedDb:any = null;
    connectionUrl:string | undefined = undefined;
    database:string | undefined = undefined;

    constructor() {
        this.connectionUrl =  process.env.APP_DB_URL
        this.database =  process.env.APP_DB_NAME;
    }

    connectToDatabase() {

        this.connectionUrl = process.env.APP_DB_URL;
        this.database =  process.env.APP_DB_NAME;

        console.log('=> connect to database - ' , this.connectionUrl);
        if (this.cachedDb && this.cachedDb) {
            console.log('=> using cached database instance');
            return Promise.resolve(this.cachedDb);
        }
        console.log('=>  created client proreass ');
        return MongoClient.connect(this.connectionUrl,{ useNewUrlParser: true, useUnifiedTopology: true } )
            .then(db => {
                this.cachedDb = db; 
                this.cachedDb = db.db(this.database); 
                console.log('=>  created client ');
                return this.cachedDb;
            });
    }

    get connection() {
        return this.connectToDatabase();
    }

    close() {
        if (null !== this.cachedDb) {
            this.cachedDb.close();
        }
    }

    save(_collectionName, payload) {
        console.log('=> query database');
        return this.connectToDatabase().then( db => db.collection(_collectionName).insertOne(payload));
    }

    findByName(_collectionName, value) {
        console.log('=> query database');
        return this.connectToDatabase().then( db => db.collection(_collectionName).findOne({'name': value}));
    }

    find(_collectionName) {
        console.log('=> find all database');
        return this.connectToDatabase().then( db => db.collection(_collectionName).find({}));
    }  


    update(_collectionName, criteria,value) {
        console.log('=> update database');
        return this.connectToDatabase().then( db => db.collection(_collectionName).updateOne(criteria, {$set: value}, (err, res) => {
            if (err) throw err;
            console.log('resonse ---- ', res);
            return Promise.resolve(res);
        }));
    }  
}
