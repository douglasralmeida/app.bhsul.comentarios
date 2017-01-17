CREATE DATABASE bhsul_gestaosite;

GRANT DELETE, SELECT, INSERT, UPDATE ON bhsul_gestaosite.* TO 'usuario_simples'@'%';

CREATE TABLE bhsul_gestaosite.feedback (
  feedbackid INT UNSIGNED NOT NULL AUTO_INCREMENT,
  tipo INT(1) UNSIGNED NOT NULL,
  descricao VARCHAR(128) NOT NULL,
  dataenvio DATETIME NOT NULL,
  PRIMARY KEY (feedbackid),
  UNIQUE INDEX feedbackid_UNIQUE (feedbackid ASC));

INSERT INTO bhsul_gestaosite.feedback (tipo, descricao, dataenvio) VALUES ('1', 'comentário teste', NOW());

INSERT INTO bhsul_gestaosite.feedback (tipo, descricao, dataenvio) VALUES ('1', 'outro comentário teste', NOW());
