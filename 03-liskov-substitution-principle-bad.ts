// ===== Bad Code =====

class Bird {
    public fly() {
    }
}

class Duck extends Bird {
}

class Ostrich extends Bird { // ===> LSP violation!
}