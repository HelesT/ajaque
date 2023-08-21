<?php
    header('Content-Type: application/json');

    $nome = $_POST['nome'];

    $pdo = new PDO('mysql:host=localhost; dbname=ajax;', 'root' , '');

    $stmt = $pdo->prepare('INSERT INTO alunos (nome) VALUES (:nome)');
    $stmt->bindValue(':nome', $nome);
    $stmt->execute();

    if ($stmt->rowCount() >= 1) {
        echo json_encode('Salvo com sucesso');
    }else {
        echo json_encode('Erro');
    }
?>