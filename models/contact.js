module.exports = function(sequelize,Data) {
    var Contact = sequelize.define("contact", {
        name: {
            type: Data.STRING,
            allowNull: false,
            len: [1]
        },
        email: {
            type: Data.STRING,
            allowNull: false,
            len: [1]
        },
        message: {
            type: Data.STRING,
            allowNull: false,
            len: [1]
        }
    });

    return Contact;
}