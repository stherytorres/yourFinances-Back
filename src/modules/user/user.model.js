import bcrypt from 'bcrypt';
import knex from '../../services/knex.js';

export const getAll = () => {
    return knex('users').select('id', 'name', 'email', 'created_at', 'updated_at');
};

export const get = (id) => {
    return knex('users')
        .where({ id })
        .select('id', 'name', 'email', 'created_at', 'updated_at')
        .first();
};

export const save = (params) => {
    params.password = bcrypt.hashSync(params.password, 10);
    return knex('users').insert(params);
};

export const remove = (id) => {
    return knex('users').delete().where({ id });
};

export const update = (id, params) => {
    return knex('users').where({ id }).update(params);
};