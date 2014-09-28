class CreateProblems < ActiveRecord::Migration
  def change
    create_table :problems do |t|
      t.text :description
      t.integer :difficulty
      t.string :solution
      t.string :process
      t.string :book_isbn
      t.integer :page
      t.integer :exercise_number

      t.timestamps
    end
  end
end
