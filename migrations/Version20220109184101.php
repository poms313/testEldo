<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220109184101 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE artisan (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(50) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_review (id INT AUTO_INCREMENT NOT NULL, artisan_id_id INT NOT NULL, author VARCHAR(50) NOT NULL, grade INT NOT NULL, comment VARCHAR(255) DEFAULT NULL, review_date DATETIME NOT NULL, INDEX IDX_1C119AFB3D31EF1C (artisan_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE user_review ADD CONSTRAINT FK_1C119AFB3D31EF1C FOREIGN KEY (artisan_id_id) REFERENCES artisan (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user_review DROP FOREIGN KEY FK_1C119AFB3D31EF1C');
        $this->addSql('DROP TABLE artisan');
        $this->addSql('DROP TABLE user_review');
    }
}
