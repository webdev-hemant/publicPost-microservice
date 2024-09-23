const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const PublicPost = sequelize.define(
  "PublicPost",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    media: {
      type: DataTypes.JSONB, // Store images and videos as JSON
      allowNull: true,
    },
    timestamp: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW,
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    comments: {
      type: DataTypes.JSONB, // Store comments as JSON
      allowNull: true,
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING), // Array of strings for tags
      allowNull: true,
    },
    location: {
      type: DataTypes.JSONB, // Store latitude and longitude
      allowNull: true,
    },
    visibility: {
      type: DataTypes.ENUM("public", "friends", "private"),
      allowNull: false,
    },
  },
  {
    tableName: "public_posts",
    timestamps: false,
    underscored: true,
  }
);

module.exports = PublicPost;
