class Repository {
    constructor() {
        this.boxes = [];
        this.machines = [];
    }

    addBox(box) {
        this.boxes.push(box);
    }

    getBox(id) {
        return this.boxes.find(box => box.id === id);
    }

    addMachine(machine) {
        this.machines.push(machine);
    }

    getMachine(id) {
        return this.machines.find(machine => machine.id === id)
    }

    assignMachineToBox(boxId, machineId) {
        const machine = this.getMachine(machineId);
        const box = this.getBox(boxId);

        if (machine && box) {
            box.addMachine(machine);
            return true;
        }
        return false;
    }

    getAllBoxes() {
        return this.boxes;
    }

    printAllBoxes() {
        this.boxes.forEach(box => {
            console.log(`Box ID: ${box.id}`);
            box.machines.forEach(machine => {
                console.log(`- Machine ID: ${machine.id}, Type: ${machine.type}`);
            });
            console.log("--------------------");
        });
    }
}

export default Repository;