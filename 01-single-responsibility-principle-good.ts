// ===== Good Code =====

class Payroll {

    public calculatePay(): any {
        // Pay calculation logic
    }

    public savePay(): any {
        // Invoke DatabaseWriter.writeToDB()
    }

}

class DatabaseWriter {
    public writeToDB(): any {
        // Invoke DatabaseConnector.getConnection()
        // Save record to DB
        // Invoke DatabaseConnector.closeConnection()
    }
}

class DatabaseConnector {

    public getConnection(): any {
        // code...
    }

    public closeConnection(): any {
        // code...
    }
}


