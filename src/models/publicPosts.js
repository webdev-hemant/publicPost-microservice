const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const PublicPost = sequelize.define(
  "PublicPost",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      defaultValue: 999,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    img_url: {
      type: DataTypes.STRING(255),
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  {
    tableName: "public_posts", // Specify the table name
    timestamps: false, // Sequelize will not automatically manage createdAt and updatedAt fields
    underscored: true, // Use snake_case for column names in the database
  }
);

module.exports = PublicPost;
