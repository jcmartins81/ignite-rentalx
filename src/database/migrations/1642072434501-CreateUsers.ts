import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1642072434501 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: "uuid",
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "username",
                        type: "varchar"
                    },
                    {
                        name: "password",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "driver_license",
                        type: "varchar"
                    },
                    {
                        name: "isAdmin",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "createdAt",
                        type: "timestamp",
                        default: "now()"
                    }


                ]

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
