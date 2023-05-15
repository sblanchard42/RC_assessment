const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Employees extends Model { }
    Employees.init({
        personal_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        first_name: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'A first name is required.'
                },
                notEmpty: {
                    msg: 'Please provide a first name.'
                }
            }
        },
        last_name: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'A last name is required.'
                },
                notEmpty: {
                    msg: 'Please provide a last name.'
                }
            }
        },
        email_address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'An email address is required.'
                },
                notEmpty: {
                    msg: 'Please provide an email address.'
                }
            }
        },
        hire_date: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'A hire date is required.'
                },
                notEmpty: {
                    msg: 'Please provide a hire date.'
                }
            }
        },
        job_title: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'A job title is required.'
                },
                notEmpty: {
                    msg: 'Please provide a job title.'
                }
            }
        },
        agency_num: {
            type: DataTypes.INTEGER
        },
        registration_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    }, { sequelize });

    return Employees;
};