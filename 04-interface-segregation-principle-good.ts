// ===== Good Code =====

interface Animal {
    eat(): void;

    sleep(): void;
}

interface Carnivore extends Animal {
    hunt(): void;
}

interface Herbivore extends Animal {
    graze(): void;
}

class Lion implements Carnivore {
    eat(): void {
        // code...
    }

    sleep(): void {
        // code...
    }

    hunt(): void {
        // code...
    }
}

class Cow implements Herbivore {
    eat(): void {
        // code...
    }

    sleep(): void {
        // code...
    }

    graze(): void {
        // code...
    }
}