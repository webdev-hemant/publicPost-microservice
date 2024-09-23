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
      type: DataTypes.JSONB,
      allowNull: true,
    },
    timestamp: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW,
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    location: {
      type: DataTypes.JSONB,
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
