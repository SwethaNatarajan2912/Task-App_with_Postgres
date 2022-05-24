//(sequelize,Sequelize)(Model,DataTypes)
module.exports = (sequelize, Sequelize) => {  
  const Tutorial = sequelize.define("tutorial", {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
    //tableName:'tutorials' -> We can also define the tableName here
    //allowNull:false makes the field  required -> By default it is in true mode
    //timeStamps are automatically generated in Sequelize by using Datatypes.DATE it generating the createdAt and updatedAt, if we don't want that, we can set it as false by manually
  });
  return Tutorial;
};