<?php
header('Content-Type: application/json');

$pdo = new PDO('mysql:host=localhost; dbname=ajax;', 'root' , '');

$id = $_POST['id']; // Use 'nome' aqui

$stmt = $pdo->prepare('DELETE FROM alunos WHERE matricula = :id'); // Corrigido a consulta DELETE
$stmt->bindValue(':id', $id); // Corrigido o nome do parâmetro
$stmt->execute();
?>
