import HttpStatusFamily from '../data/HttpStatusFamily';

export default class HttpStatusFamilyIdentifer {
  constructor() {
    this.statusFamilyMap = HttpStatusFamily.getStatusFamilyMap();
  }

  identify(familyName) {
    const family = HttpStatusFamily.enumValues
                                   .find(familyEnum => familyEnum.name === familyName.toUpperCase());
    return new Promise((resolve, reject) => {
      if (family) {
        resolve(family);
      } else {
        reject({
          reason: `Unable to identify family for family name: ${familyName}`,
        });
      }
    });
  }

  identifyFamilyFromStatus(status) {
    const family = this.statusFamilyMap.get(status.name);
    return new Promise((resolve, reject) => {
      if (family) {
        resolve(family);
      } else {
        reject({
          reason: `Unable to identify family for status: ${status}`,
        });
      }
    });
  }
}
