const db = require('../database/db-config.js');

module.exports = {
    add, 
    find, 
    findBy, 
    findById
};

function find() {
    return db('users').select('id', 'username').orderBy('id');
};

function add(user) {
    return db('users')
            .insert(user)
            .then(ids => {
                const [id] = ids;
                return findById(id);
            });
};

function findBy(filter) {
    return db('users').where(filter);
};

function findById(id) {
    return db('users').where({ id }).first();
};


