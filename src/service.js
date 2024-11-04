const PrimaryRepository = require('./repository');
const SecondaryRepository = require('./secondaryRepository');

class Service {
    constructor() {
        this.primaryRepository = new PrimaryRepository();
        this.secondaryRepository = new SecondaryRepository();
    }

    getAllItems() {
        return this.primaryRepository.getAllItems();
    }

    getItemById(id) {
        let item = this.primaryRepository.getItemById(id);
        if (!item) {
            item = this.secondaryRepository.getItemById(id);
        }
        if (!item) {
            throw new Error('Item not found in both repositories');
        }
        return item;
    }

    addItem(name) {
        const newItem = { id: this.primaryRepository.data.length + 1, name };
        return this.primaryRepository.addItem(newItem);
    }

    deleteItemById(id) {
        this.primaryRepository.deleteItemById(id);
    }
}

module.exports = Service;
