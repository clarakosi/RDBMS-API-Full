
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 1, userId: 1, text: 'Camila wrote this awesome post amoung other things.'},
        {id: 2, userId: 2, text: 'Clara wrote this post while doing other awesome things.'},
        {id: 3, userId: 3, text: 'Hermoine should of wrote this post because without her Harry and Ron would have died.'}
      ]);
    });
};
