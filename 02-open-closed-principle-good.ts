// ===== Good Code =====

interface Employee {
    getPay(): number;
}

class PermanentEmployee implements Employee {
    constructor(private monthlySalary: number) {
    }

    public getPay(): number {
        return this.monthlySalary;
    }
}

class ContractEmployee implements Employee {
    constructor(private monthlyWorkHours: number, private hourlyRate: number) {
    }

    public getPay(): number {
        return this.monthlyWorkHours * this.hourlyRate;
    }
}

class Payroll {
    constructor(private employees: Employee[]) {
    }

    public calculateTotalPay(): number {
        return this.employees.reduce((accumulator, current) => accumulator + current.getPay(), 0);
    }
}
