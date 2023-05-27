class CreateTweets < ActiveRecord::Migration[7.0]
  def change
    create_table :tweets do |t|
      t.text :descripcion
      t.string :usuario

      t.timestamps
    end
  end
end
