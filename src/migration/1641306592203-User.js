const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class User1641306592203 {

    async up(queryRunner) {
        await queryRunner.createTable(new Table({
            name: "user_test",
            columns: {
                id: {
                    primary: true,
                    type: "int",
                    generated: true
                },
                name: {
                    type: "varchar"
                },
                password: {
                    type: "varchar"
                },
                email: {
                    type: "varchar"
                }
            },
        }), true)
    }

    async down(queryRunner) {
        await queryRunner.dropTable("user_test");
    }
}
        