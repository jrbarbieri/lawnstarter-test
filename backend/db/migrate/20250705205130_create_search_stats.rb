class CreateSearchStats < ActiveRecord::Migration[8.0]
  def change
    create_table :search_stats do |t|
      t.string :kind
      t.string :query
      t.integer :count

      t.timestamps
    end

    add_index :search_stats, [ :kind, :query ], unique: true
  end
end
