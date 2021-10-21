class CreateSteps < ActiveRecord::Migration[5.2]
  def change
    create_table :steps do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.boolean :done, null: false, default: false

      t.timestamps
    end
    add_index :steps, :title

  end
end
