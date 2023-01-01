// ===== Bad Code =====

class Payroll {
    constructor(private employees: any[]) {
    }

    public calculateTotalPay(): number { // ===> OCP violation!
        const payRecords = [];
        for (const employee of this.employees) {
            if (employee.type === 'Permanent') {
                payRecords.push(employee.monthlySalary);
            } else if (employee.type === 'Contract') {
                payRecords.push(employee.monthlyWorkHours * employee.hourlyRate);
            }
        }
        return payRecords.reduce((accumulator, current) => accumulator + current, 0);
    }
}