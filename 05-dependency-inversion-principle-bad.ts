// ===== Bad Code =====

class UserService {

    save(data: any): void { // ===> DIP violation!
        // Connect to MongoDB
        // Save data
    }
}

class ConfigService {

    save(data: any): void { // ===> DIP violation!
        // Connect to DynamoDB
        // Save data
    }
}
