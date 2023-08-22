<?php
    header('Content-Type: application/json');

    $pdo = new PDO('mysql:host=localhost; dbname=ajax;', 'root' , '');

    $stmt = $pdo->prepare('DELETE FROM alunos WHERE matricula = '$matricula'');
    $stmt->execute();

?>