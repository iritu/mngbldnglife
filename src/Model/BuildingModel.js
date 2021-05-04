export default class BuildingModel {
    constructor(SingleBuilding) {
        this.buildingId = SingleBuilding.buildingId //PK. FK in all other entities
        this.buildingName = SingleBuilding.buildingName;
        this.state = SingleBuilding.state;
        this.city = SingleBuilding.city;
        this.street = SingleBuilding.street;
        this.stNumber = SingleBuilding.stNumber;
    }
}