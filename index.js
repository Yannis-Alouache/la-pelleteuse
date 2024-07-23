import Repository from './Repository.js';
import Machine from './Machine.js';
import Box from './Box.js';
import MachineType from './MachineType.js';


class App {
    constructor() {
        
    }

    main() {
        const repository = new Repository();
        
        let box = new Box(1);

        let machine = new Machine(1, MachineType.NACELLE);
        let machine2 = new Machine(2, MachineType.NACELLE)

        repository.addBox(box);
        repository.addMachine(machine);
        repository.addMachine(machine2);
        repository.assignMachineToBox(1, 1);
        repository.assignMachineToBox(1, 2);
        repository.printAllBoxes();
    }
}


const app = new App();
app.main()