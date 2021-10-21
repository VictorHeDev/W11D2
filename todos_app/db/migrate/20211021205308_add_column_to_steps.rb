class AddColumnToSteps < ActiveRecord::Migration[5.2]
  def change
    add_column :steps, :todo_id, :integer, null: false
    add_index :steps, :todo_id
  end
end
