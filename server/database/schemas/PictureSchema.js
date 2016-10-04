module.exports = (db, Sequelize) => {
  const Picture = db.define('pictures', {
    userId: {
      type: Sequelize.INTEGER
    },
    fileName: {
      type: Sequelize.STRING
    },
    measurement: {
      type: Sequelize.INTEGER
    }
  });
  return {
    Picture: Picture
  };
};