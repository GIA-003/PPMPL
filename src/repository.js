class Repository {
    constructor() {
        this.data = [
            { id: 1, name: 'item 1' },
            { id: 2, name: 'item 2' },
        ];
    }

    getAllItems() {
        return this.data;
    }

    getItemById(id) {
        return this.data.find(item => item.id === id);
    }

    addItem(item) {
        this.data.push(item);
    }

    deleteItemById(id) {
        this.data = this.data.filter(item => item.id !== id);
    }
}

module.exports = Repository;
