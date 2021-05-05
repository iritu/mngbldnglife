export default class BuildingModel {
    constructor(SingleBuilding) {
        this.buildingId = SingleBuilding.buildingId //PK. FK in all other entities
        this.userId  = SingleBuilding.userId ; //FK, (UserModel), is the admin of this building, can be only one
        this.buildingName = SingleBuilding.buildingName;
        this.city = SingleBuilding.city;
        this.street = SingleBuilding.street;
        this.stNumber = SingleBuilding.stNumber;
    }
}