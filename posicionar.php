<?php
header('Content-Type: application/json');

$pdo = new PDO('mysql:host=localhost; dbname=ajax;', 'root' , '');

$stmt = $pdo->prepare('SELECT matricula, nome FROM alunos');
$stmt->execute();

$data = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($data);
?>
