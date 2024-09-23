const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const PublicPost = require("./publicPosts");

const Comments = sequelize.define("Comments", {
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
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: sequelize.NOW,
  },
});

module.exports = Comments;
