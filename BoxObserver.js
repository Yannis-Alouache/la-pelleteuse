import MachineType from "./MachineType.js";

class BoxGotAllTypeChecker {
    update(box) {
        const uniqueTypes = [];
        for (const machine of box.machines) {
            if (!uniqueTypes.includes(machine.type)) {
                uniqueTypes.push(machine.type);
            }
        }
        if (uniqueTypes.length < Object.keys(MachineType).length) {
            console.log(`Warning: Box n°${box.id} does not have all machines types`);
            console.log("--------------------");
        }
    }
}

export default BoxGotAllTypeChecker;