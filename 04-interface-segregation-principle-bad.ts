// ===== Bad Code =====

interface Animal {
    eat(): void;

    sleep(): void;

    hunt(): void;

    graze(): void;
}

class Lion implements Animal {
    eat(): void {
        // code...
    }

    sleep(): void {
        // code...
    }

    hunt(): void {
        // code...
    }

    graze(): void { // ===> ISP violation!
        throw new Error("Lion doesn't graze");
    }
}

class Cow implements Animal {
    eat(): void {
        // code...
    }

    sleep(): void {
        // code...
    }

    graze(): void {
        // code...
    }

    hunt(): void { // ===> ISP violation!
        throw new Error("Cow doesn't hunt");
    }
}
