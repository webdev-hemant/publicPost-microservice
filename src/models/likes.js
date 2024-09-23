const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const PublicPost = require("./publicPosts");

const Likes = sequelize.define(
  "Likes",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    post_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: PublicPost,
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW,
    },
  },
  {
    indexes: [
      {
        unique: true,
        fields: ["post_id", "user_id"],
      },
    ],
  }
);

module.exports = Likes;
