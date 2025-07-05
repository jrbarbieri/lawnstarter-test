class CreateSearchStats < ActiveRecord::Migration[8.0]
  def change
    create_table :search_stats do |t|
      t.string :query

      t.timestamps
    end
  end
end
