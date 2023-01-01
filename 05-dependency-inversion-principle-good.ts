// ===== Good Code =====

interface DBClient {
    saveData(data: any): void;
}

class MongoDBClient implements DBClient {
    saveData(data: any): void {
        // code...
    }
}

class DynamoDBClient implements DBClient {
    saveData(data: any): void {
        // code...
    }
}

class DataService {
    constructor(private db: DBClient) {
    }

    save(data: any): void {
        this.db.saveData(data);
    }
}

const mongo = new MongoDBClient();
const dynamo = new DynamoDBClient();

const userService = new DataService(mongo);
userService.save({ /* user record */});

const configService = new DataService(dynamo);
configService.save({ /* config record */});