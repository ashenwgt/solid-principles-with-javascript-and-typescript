// ===== Bad Code =====

class Payroll {
    public calculatePay(): any {
        // Pay calculation logic
    }

    public savePayToDB(): any { // ===> SRP violation!
        // Create DB connection
        // Save record to DB
        // Close DB connection
    }
}
