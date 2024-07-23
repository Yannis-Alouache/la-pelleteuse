import BoxGotAllTypeChecker from "./BoxObserver.js";

class Box {
    constructor(id) {
        this.id = id;
        this.machines = [];
        this.observers = [];

        this.addObserver(new BoxGotAllTypeChecker());
    }

    addMachine(machine) {
        if (this.machines.length < 1) {
            this.machines.push(machine);
            this.notifyObservers();
        } else {
            console.log(`Error: No more space in Box n°${this.id}`);
            console.log(`Machine n°${machine.id} was not added in the box`);
            console.log("--------------------");
        }
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notifyObservers() {
        this.observers.forEach(observer => {
            observer.update(this);
        });
    }
}

export default Box;