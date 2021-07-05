
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {title: '1 Make Better Styles.',
        body: 'body 1',
        priority: 'Medium',
        type: 'queue',
        by: 'Jon',
        to: 'Renee'},
        {title: '2 Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles.',
        body: 'body 2',
        priority: 'Medium',
        type: 'queue',
        by: 'Jon',
        to: 'Renee'},
        {title: '3 Make Better Styles.',
        body: 'body 3',
        priority: 'Medium',
        type: 'progress',
        by: 'Jon',
        to: 'Renee'},
        {title: '4 Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles.',
        body: 'body 4',
        priority: 'Medium',
        type: 'done',
        by: 'Jon',
        to: 'Renee'},
        {title: '5 Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles. Make Better Styles.',
        body: 'body 5',
        priority: 'Medium',
        type: 'done',
        by: 'Jon',
        to: 'Renee'},
      ]);
    });
};
