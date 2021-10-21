# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

td1 = Todo.create!(title: 'Eat with Mansoo', body: 'Sushi')
td2 = Todo.create!(title: 'Eat with Emmay', body: 'Ramen')
td3 = Todo.create!(title: 'Eat with Stella', body: 'Banana')
td4 = Todo.create!(title: 'Eat with Victor', body: 'a s s')

Step.create!(title: "Come to Florida", description: "avoid alligators", todo_id: td1.id)
Step.create!(title: "Go to Disney", description: "Magic kingdom", todo_id: td1.id)
Step.create!(title: "Pull up to BK", description: "don't forget daby", todo_id: td3.id)
